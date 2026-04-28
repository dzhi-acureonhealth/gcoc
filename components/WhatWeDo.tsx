import { whatWeDo } from "@/lib/content";
import { ServiceGlyph } from "@/components/icons";

export function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      aria-labelledby="what-we-do-heading"
      className="border-b border-border bg-surface"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            {whatWeDo.eyebrow}
          </p>
          <h2
            id="what-we-do-heading"
            className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground-strong sm:text-4xl"
          >
            {whatWeDo.headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
            {whatWeDo.body}
          </p>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeDo.services.map((service) => (
            <li
              key={service.title}
              className="group flex flex-col rounded-2xl border border-border bg-mist/60 p-6 transition-colors hover:border-aqua/60 hover:bg-mist"
            >
              <span
                aria-hidden
                className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface text-teal ring-1 ring-border-strong transition-colors group-hover:text-aqua"
              >
                <ServiceGlyph icon={service.icon} className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-bold tracking-tight text-foreground-strong">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
