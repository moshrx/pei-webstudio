import type { Metadata } from "next";
import Link from "next/link";

import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FloatingDock } from "@/components/FloatingDock";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "See how PEI Web Studio helps local organizations with clean, mobile-friendly, easy-to-manage websites."
};

export default function PortfolioPage() {
  return (
    <div className="page-shell">
      <Header />

      <section className="section pb-0">
        <div className="container-narrow text-center">
          <p className="section-kicker">Our Work</p>
          <h1 className="section-title">Local Projects with Real Impact</h1>
          <p className="section-body mx-auto max-w-2xl">
            We focus on websites that are easy to manage, fast to load, and
            clear for customers to use.
          </p>
        </div>
      </section>

      <PortfolioSection showTitle={false} />

      <section className="section">
        <div className="container-narrow text-center">
          <h2 className="section-title">Want a Site Like This?</h2>
          <p className="section-body mx-auto max-w-xl">
            We can build a modern, manageable website tailored to your business.
          </p>
          <Link
            href="/contact"
            className="btn-primary mt-8 inline-block rounded-full px-8 py-3.5 text-base font-semibold text-white"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
      <FloatingDock />
    </div>
  );
}
