import { approach } from "@/lib/content";
import { QuoteIcon } from "@/components/icons";

export function Approach() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="relative overflow-hidden border-b border-border bg-navy text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 20%, color-mix(in srgb, var(--gcoc-aqua) 32%, transparent) 0%, transparent 45%), radial-gradient(circle at 90% 90%, color-mix(in srgb, var(--gcoc-teal) 38%, transparent) 0%, transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-aqua">
            {approach.eyebrow}
          </p>
          <h2
            id="approach-heading"
            className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl"
          >
            {approach.headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
            {approach.body}
          </p>
        </div>
        <dl className="mt-12 grid gap-6 sm:grid-cols-3">
          {approach.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <p className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  {stat.label}
                </p>
              </dd>
            </div>
          ))}
        </dl>
        <figure className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <blockquote className="relative rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur">
            <QuoteIcon className="absolute right-6 top-6 h-8 w-8 text-aqua/70" />
            <p className="text-lg leading-relaxed text-white sm:text-xl">
              “{approach.quote.text}”
            </p>
            <figcaption className="mt-5 text-sm font-medium uppercase tracking-[0.14em] text-aqua">
              {approach.quote.attribution}
            </figcaption>
          </blockquote>
          <p className="self-center text-sm leading-relaxed text-white/80 sm:text-base">
            {approach.closing}
          </p>
        </figure>
      </div>
    </section>
  );
}
