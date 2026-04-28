import { network } from "@/lib/content";

export function Network() {
  return (
    <section
      id="network"
      aria-labelledby="network-heading"
      className="border-b border-border bg-surface"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              {network.eyebrow}
            </p>
            <h2
              id="network-heading"
              className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground-strong sm:text-4xl"
            >
              {network.headline}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
              {network.body}
            </p>
            <p className="mt-6 text-xs leading-relaxed text-muted">
              {network.footnote}
            </p>
          </div>
          <div>
            <div className="rounded-2xl border border-border bg-mist/60 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-aqua">
                Founding partner network
              </p>
              <p className="mt-2 text-lg font-bold tracking-tight text-foreground-strong">
                Endoscopic Spine Research Group (ESRG)
              </p>
              <p className="mt-2 text-sm leading-relaxed text-body">
                Multi-center consortium of spine surgeons at leading academic
                medical centers conducting IRB-approved outcomes research on
                full-endoscopic spine surgery.
              </p>
              <ul className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {network.institutions.map((institution) => (
                  <li
                    key={institution}
                    className="flex items-start gap-2 text-sm text-body"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-green"
                    />
                    {institution}
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
