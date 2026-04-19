import type { Metadata } from "next";

import { FloatingDock } from "@/components/FloatingDock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell PEI Web Studio about your project and get a practical recommendation on timeline, scope, and launch approach."
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
