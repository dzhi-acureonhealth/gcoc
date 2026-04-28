import { whyItMatters } from "@/lib/content";

export function WhyItMatters() {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="border-b border-border bg-mist"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            {whyItMatters.eyebrow}
          </p>
          <h2
            id="why-heading"
            className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground-strong sm:text-4xl"
          >
            {whyItMatters.headline}
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {whyItMatters.body.map((paragraph, idx) => (
            <p
              key={idx}
              className="rounded-2xl border border-border bg-surface p-6 text-base leading-relaxed text-body"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
