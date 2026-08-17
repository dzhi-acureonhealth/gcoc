import Link from "next/link";
import { leadership } from "@/lib/content";
import { ArrowRightIcon } from "@/components/icons";

function initialsOf(name: string): string {
  const parts = name
    .replace(/,.*$/, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  return parts
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

type Person = {
  name: string;
  role: string;
  description: string;
};

function PersonCard({ member }: { member: Person }) {
  return (
    <li className="rounded-2xl border border-border bg-surface p-6">
      <div className="flex items-center gap-4">
        <span
          aria-hidden
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy text-base font-bold text-white"
        >
          {initialsOf(member.name)}
        </span>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal">
            {member.role}
          </p>
          <p className="text-base font-bold text-foreground-strong">
            {member.name}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-body">
        {member.description}
      </p>
    </li>
  );
}

export function Leadership() {
  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="border-b border-border bg-mist"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            {leadership.eyebrow}
          </p>
          <h2
            id="leadership-heading"
            className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground-strong sm:text-4xl"
          >
            {leadership.headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
            {leadership.body}
          </p>
        </div>
        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-aqua">
            {leadership.boardLabel}
          </p>
          <ul className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.board.map((member) => (
              <PersonCard key={member.name} member={member} />
            ))}
          </ul>
        </div>
        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-aqua">
            {leadership.operationsLabel}
          </p>
          <ul className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.operations.map((member) => (
              <PersonCard key={member.name} member={member} />
            ))}
          </ul>
        </div>
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted">
          {leadership.closing}
        </p>
        <div className="mt-6">
          <Link
            href={leadership.governanceCta.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal transition-colors hover:text-primary focus-visible:outline-none focus-visible:underline"
          >
            {leadership.governanceCta.label}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
