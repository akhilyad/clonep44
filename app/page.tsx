import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { ValueProp } from "@/components/sections/ValueProp";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { UseCases } from "@/components/sections/UseCases";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <main className="bg-antova-dark">
      <Hero />
      <Stats />
      <ValueProp />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <CtaSection />
    </main>
  );
}
