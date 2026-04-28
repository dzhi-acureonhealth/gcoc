import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/content";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/85 backdrop-blur supports-[backdrop-filter]:bg-surface/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link
          href="#top"
          className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Image
            src="/logo.png"
            alt={`${site.shortName} logo`}
            width={40}
            height={40}
            priority
            className="h-9 w-9 object-contain"
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-bold tracking-tight text-foreground-strong">
              {site.shortName}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-muted">
              Global Clinical Outcomes
            </span>
          </span>
        </Link>
        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 md:flex"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-body transition-colors hover:text-primary focus-visible:outline-none focus-visible:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="#support"
            className="hidden h-10 items-center justify-center rounded-full bg-cta px-5 text-sm font-semibold text-cta-foreground shadow-sm transition-colors hover:bg-cta-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:inline-flex"
          >
            Support Our Mission
          </Link>
        </div>
      </div>
    </header>
  );
}
