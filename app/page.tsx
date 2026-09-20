import { DisclaimerBanner } from "@/components/sections/disclaimer-banner";
import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { AiTools } from "@/components/sections/ai-tools";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Roles } from "@/components/sections/roles";
import { Pricing } from "@/components/sections/pricing";
import { PremiumService } from "@/components/sections/premium-service";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <DisclaimerBanner />
      <Nav />
      <Hero />
      <AiTools />
      <HowItWorks />
      <Roles />
      <Pricing />
      <PremiumService />
      <Faq />
      <Footer />
    </>
  );
}
