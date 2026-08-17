import { governance } from "@/lib/content";

export function Governance() {
  return (
    <section
      aria-labelledby="governance-heading"
      className="border-b border-border bg-surface"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            {governance.eyebrow}
          </p>
          <h1
            id="governance-heading"
            className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground-strong sm:text-4xl"
          >
            {governance.headline}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">
            {governance.intro}
          </p>
        </div>
        <div className="mt-12 grid gap-6">
          {governance.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-2xl border border-border bg-mist/60 p-6 sm:p-8"
            >
              <h2 className="text-lg font-bold tracking-tight text-foreground-strong">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-body sm:text-base">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
