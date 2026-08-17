import { About } from "@/components/About";
import { Approach } from "@/components/Approach";
import { GetInvolved } from "@/components/GetInvolved";
import { Hero } from "@/components/Hero";
import { Leadership } from "@/components/Leadership";
import { Mission } from "@/components/Mission";
import { Network } from "@/components/Network";
import { Support } from "@/components/Support";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WhyItMatters } from "@/components/WhyItMatters";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Mission />
      <WhyItMatters />
      <WhatWeDo />
      <Approach />
      <Network />
      <Leadership />
      <Support />
      <GetInvolved />
      <About />
    </main>
  );
}
