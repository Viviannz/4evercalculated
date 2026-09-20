import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { AiTools } from "@/components/sections/ai-tools";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Roles } from "@/components/sections/roles";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <AiTools />
      <HowItWorks />
      <Roles />
      <Pricing />
      <Faq />
      <Footer />
    </>
  );
}
