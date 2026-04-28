import Link from "next/link";
import { getInvolved } from "@/lib/content";
import { ArrowRightIcon } from "@/components/icons";

export function GetInvolved() {
  return (
    <section
      id="get-involved"
      aria-labelledby="get-involved-heading"
      className="border-b border-border bg-mist"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            {getInvolved.eyebrow}
          </p>
          <h2
            id="get-involved-heading"
            className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground-strong sm:text-4xl"
          >
            {getInvolved.headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
            {getInvolved.intro}
          </p>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {getInvolved.audiences.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="text-lg font-bold text-foreground-strong">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Link
            href={getInvolved.cta.href}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-navy px-7 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {getInvolved.cta.label}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
