import { FloatingDock } from "@/components/FloatingDock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContactSection } from "@/components/sections/ContactSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <main id="main-content" className="pb-28" role="main">
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <PortfolioSection />
      <ProcessSection />
      <FAQSection />
      <CTABanner />
      <ContactSection />
      <AboutSection />
      <Footer />
      <FloatingDock />
    </main>
  );
}
