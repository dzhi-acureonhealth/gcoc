import type { SVGProps } from "react";
import type { ServiceIcon } from "@/lib/content";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 3 4.5 6v6c0 4.5 3.2 7.6 7.5 9 4.3-1.4 7.5-4.5 7.5-9V6L12 3Z" />
      <path d="m9.5 12.2 1.8 1.8 3.4-3.4" />
    </svg>
  );
}

export function DatabaseIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
      <path d="M5 5.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
      <path d="M5 11.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
    </svg>
  );
}

export function ChartIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 19h16" />
      <path d="M6 16V9" />
      <path d="M11 16V5" />
      <path d="M16 16v-7" />
      <path d="M21 16v-3" />
    </svg>
  );
}

export function ShareIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="6" cy="12" r="2.4" />
      <circle cx="18" cy="6" r="2.4" />
      <circle cx="18" cy="18" r="2.4" />
      <path d="M8 11 16 7" />
      <path d="M8 13l8 4" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <path d="m5.6 5.6 2.8 2.8" />
      <path d="m15.6 15.6 2.8 2.8" />
      <path d="m5.6 18.4 2.8-2.8" />
      <path d="m15.6 8.4 2.8-2.8" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M7.2 6c-2.8 0-5 2.3-5 5.2 0 2.8 2 5 4.6 5.2v.4c0 1.5-1.1 2.4-3.1 2.7v1.5c4-.2 6.6-2.6 6.6-6.5V11.2C10.3 8.3 8.4 6 7.2 6Zm10.4 0c-2.7 0-5 2.3-5 5.2 0 2.8 2 5 4.6 5.2v.4c0 1.5-1.1 2.4-3.1 2.7v1.5c4-.2 6.6-2.6 6.6-6.5V11.2C20.7 8.3 18.8 6 17.6 6Z" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m4.5 12.5 4.5 4.5L19.5 7" />
    </svg>
  );
}

export function ServiceGlyph({
  icon,
  className,
}: {
  icon: ServiceIcon;
  className?: string;
}) {
  switch (icon) {
    case "shield":
      return <ShieldIcon className={className} />;
    case "database":
      return <DatabaseIcon className={className} />;
    case "chart":
      return <ChartIcon className={className} />;
    case "share":
      return <ShareIcon className={className} />;
    case "spark":
      return <SparkIcon className={className} />;
  }
}
