import { about } from "@/lib/content";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-border bg-surface"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              {about.eyebrow}
            </p>
            <h2
              id="about-heading"
              className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground-strong sm:text-4xl"
            >
              {about.headline}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-body sm:text-lg">
              {about.body.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
          <dl className="grid gap-4 self-start rounded-2xl border border-border bg-mist/60 p-6 sm:p-8">
            {about.meta.map((item) => (
              <div key={item.label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-aqua">
                  {item.label}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-body">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
