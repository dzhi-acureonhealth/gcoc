import Link from "next/link";
import { support } from "@/lib/content";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

export function Support() {
  return (
    <section
      id="support"
      aria-labelledby="support-heading"
      className="border-b border-border bg-surface"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              {support.eyebrow}
            </p>
            <h2
              id="support-heading"
              className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground-strong sm:text-4xl"
            >
              {support.headline}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">
              {support.intro}
            </p>
            <div className="mt-8 rounded-2xl border border-border bg-mist/70 p-6">
              <h3 className="text-base font-bold text-foreground-strong">
                {support.whyHeadline}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body">
                {support.why}
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={support.primaryCta.href}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cta px-7 text-sm font-semibold text-cta-foreground shadow-sm transition-colors hover:bg-cta-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {support.primaryCta.label}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href={support.secondaryCta.href}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border-strong bg-surface px-7 text-sm font-semibold text-foreground-strong transition-colors hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {support.secondaryCta.label}
              </Link>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="rounded-2xl border border-border bg-mist/70 p-6">
              <h3 className="text-base font-bold text-foreground-strong">
                {support.enablesHeadline}
              </h3>
              <ul className="mt-4 space-y-3">
                {support.enables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-body"
                  >
                    <span
                      aria-hidden
                      className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-green/15 text-green"
                    >
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-base font-bold text-foreground-strong">
                {support.waysHeadline}
              </h3>
              <ul className="mt-4 grid gap-3">
                {support.ways.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-border bg-mist/60 p-4 text-sm leading-relaxed text-body"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
