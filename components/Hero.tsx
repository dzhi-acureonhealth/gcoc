import Image from "next/image";
import Link from "next/link";
import { hero, site } from "@/lib/content";
import { ArrowRightIcon } from "@/components/icons";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border bg-gradient-to-b from-mist via-surface to-surface"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 18%, color-mix(in srgb, var(--gcoc-aqua) 28%, transparent) 0%, transparent 45%), radial-gradient(circle at 82% 8%, color-mix(in srgb, var(--gcoc-teal) 22%, transparent) 0%, transparent 45%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-teal">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-green"
            />
            501(c)(3) Nonprofit · Bellevue, WA
          </p>
          <h1
            id="hero-heading"
            className="mt-5 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-foreground-strong sm:text-5xl lg:text-[3.5rem]"
          >
            {hero.headline}
          </h1>
          <p className="mt-4 text-lg font-semibold text-teal">
            {hero.eyebrow}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
            {hero.subcopy}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cta px-7 text-sm font-semibold text-cta-foreground shadow-sm transition-colors hover:bg-cta-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {hero.primaryCta.label}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border-strong bg-surface px-7 text-sm font-semibold text-foreground-strong transition-colors hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.12em] text-muted">
            {site.translationalLine}
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-square">
            <div
              aria-hidden
              className="absolute inset-[6%] rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 50% 45%, color-mix(in srgb, var(--gcoc-aqua) 28%, transparent) 0%, color-mix(in srgb, var(--gcoc-teal) 14%, transparent) 45%, transparent 72%)",
                filter: "blur(8px)",
              }}
            />
            <svg
              aria-hidden
              viewBox="0 0 200 200"
              className="absolute inset-0 h-full w-full"
            >
              <defs>
                <linearGradient id="ring-stroke" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="var(--gcoc-aqua)" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="var(--gcoc-teal)" stopOpacity="0.15" />
                </linearGradient>
              </defs>
              <circle
                cx="100"
                cy="100"
                r="92"
                fill="none"
                stroke="url(#ring-stroke)"
                strokeWidth="0.6"
                strokeDasharray="2 4"
              />
              <circle
                cx="100"
                cy="100"
                r="74"
                fill="none"
                stroke="var(--gcoc-teal)"
                strokeOpacity="0.18"
                strokeWidth="0.5"
              />
              <ellipse
                cx="100"
                cy="100"
                rx="92"
                ry="34"
                fill="none"
                stroke="var(--gcoc-aqua)"
                strokeOpacity="0.22"
                strokeWidth="0.5"
              />
              <ellipse
                cx="100"
                cy="100"
                rx="92"
                ry="34"
                fill="none"
                stroke="var(--gcoc-teal)"
                strokeOpacity="0.18"
                strokeWidth="0.5"
                transform="rotate(60 100 100)"
              />
              <ellipse
                cx="100"
                cy="100"
                rx="92"
                ry="34"
                fill="none"
                stroke="var(--gcoc-teal)"
                strokeOpacity="0.18"
                strokeWidth="0.5"
                transform="rotate(120 100 100)"
              />
              <g>
                <circle cx="8" cy="100" r="2" fill="var(--gcoc-aqua)" />
                <circle cx="192" cy="100" r="2" fill="var(--gcoc-green)" />
                <circle cx="100" cy="8" r="1.6" fill="var(--gcoc-teal)" />
                <circle cx="155" cy="170" r="1.6" fill="var(--gcoc-green)" />
                <circle cx="40" cy="170" r="1.6" fill="var(--gcoc-aqua)" />
              </g>
            </svg>
            <div className="absolute inset-[14%] flex items-center justify-center">
              <Image
                src="/logo-sphere.png"
                alt={`${site.name} sphere mark`}
                width={562}
                height={550}
                priority
                className="h-full w-full object-contain drop-shadow-[0_22px_32px_rgba(14,42,90,0.22)]"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-2 left-1/2 hidden -translate-x-1/2 rounded-full border border-border bg-surface/90 px-5 py-2 shadow-lg shadow-navy/10 backdrop-blur sm:block">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal">
              Trust · Rigor · Together
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
