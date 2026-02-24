import { FloatingDock } from "@/components/FloatingDock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContactSection } from "@/components/sections/ContactSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { AboutSection } from "@/components/sections/AboutSection";

export default function HomePage() {
  return (
    <main id="main-content" className="pb-28" role="main">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
      <FloatingDock />
    </main>
  );
}
