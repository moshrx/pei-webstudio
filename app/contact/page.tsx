import { pageMetadata } from "@/lib/site";

import { FloatingDock } from "@/components/FloatingDock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata = pageMetadata('Contact PEI Web Studio | Website Reviews & Quotes', 'Tell us about your website or new project. Get practical advice on website improvements and new builds in PEI.', '/contact');

export default function ContactPage() {
  return (
    <>
      <Header />
    <main tabIndex={-1} id="main-content" className="relative min-h-screen pt-24 sm:pt-28" role="main">
      <ContactSection standalone />
    </main>
      <Footer />
      <FloatingDock />
    </>
  );
}
