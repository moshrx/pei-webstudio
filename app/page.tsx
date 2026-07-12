import { FloatingDock } from "@/components/FloatingDock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { ContactSection } from "@/components/sections/ContactSection";
import { AboutSection } from "@/components/sections/AboutSection";

export default function HomePage() {
  return (
    <main id="main-content" className="relative" role="main">
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
