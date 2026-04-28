import { About } from "@/components/About";
import { Approach } from "@/components/Approach";
import { Footer } from "@/components/Footer";
import { GetInvolved } from "@/components/GetInvolved";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Leadership } from "@/components/Leadership";
import { Mission } from "@/components/Mission";
import { Network } from "@/components/Network";
import { Support } from "@/components/Support";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WhyItMatters } from "@/components/WhyItMatters";

export default function Home() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}
