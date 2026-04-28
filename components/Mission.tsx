import { mission } from "@/lib/content";

export function Mission() {
  return (
    <section
      id="mission"
      aria-labelledby="mission-heading"
      className="border-b border-border bg-surface"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              {mission.eyebrow}
            </p>
            <h2
              id="mission-heading"
              className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground-strong sm:text-4xl"
            >
              {mission.headline}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">
              {mission.body}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              {mission.legal}
            </p>
          </div>
          <ul className="grid gap-4 self-start sm:grid-cols-3 lg:grid-cols-1">
            {mission.values.map((value, index) => (
              <li
                key={value.title}
                className="rounded-2xl border border-border bg-mist/70 p-6"
              >
                <div className="flex items-baseline justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-aqua">
                    Core Value
                  </p>
                  <span
                    aria-hidden
                    className="text-xs font-semibold tabular-nums text-muted"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-3 text-2xl font-bold tracking-tight text-foreground-strong">
                  {value.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {value.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
