import Image from "next/image";
import Link from "next/link";
import { footer, site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  const copyright = footer.copyright.replace("{year}", String(year));

  return (
    <footer
      id="contact"
      role="contentinfo"
      className="bg-navy py-16 text-white"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt={`${site.shortName} logo`}
                width={48}
                height={48}
                className="h-11 w-11 rounded-md bg-white/95 object-contain p-1"
              />
              <div>
                <p className="text-base font-bold tracking-tight text-white">
                  {site.shortName}
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-aqua">
                  Global Clinical Outcomes
                </p>
              </div>
            </div>
            <p className="mt-5 text-base font-semibold text-white">
              {footer.brandLine}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              {footer.description}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-aqua">
              Explore
            </p>
            <ul className="mt-4 space-y-3">
              {footer.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/85 transition-colors hover:text-white focus-visible:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-aqua">
              {footer.contactHeadline}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              {footer.contactLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>{copyright}</p>
          <ul className="flex flex-wrap gap-5">
            {footer.legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-white focus-visible:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
