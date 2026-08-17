import type { Metadata } from "next";
import { Governance } from "@/components/Governance";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Governance & Transparency",
  description: `Board, related-party safeguards, and public documents for ${site.name}.`,
};

export default function GovernancePage() {
  return (
    <main className="flex-1">
      <Governance />
    </main>
  );
}
