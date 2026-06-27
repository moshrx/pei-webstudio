import type { Metadata } from "next";

import { FloatingDock } from "@/components/FloatingDock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell PEI Web Studio what you want to modernize and get a practical website, AI, automation, and growth recommendation."
};

export default function ContactPage() {
  return (
    <main id="main-content" className="pb-28 pt-24 sm:pt-28" role="main">
      <Header />
      <ContactSection />
      <Footer />
      <FloatingDock />
    </main>
  );
}
