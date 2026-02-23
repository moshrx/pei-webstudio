import { FloatingDock } from "@/components/FloatingDock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContactSection } from "@/components/sections/ContactSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";

export default function HomePage() {
  return (
    <main className="pb-28">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
      <FloatingDock />
    </main>
  );
}
