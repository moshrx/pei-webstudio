import type { Metadata } from "next";
import Link from "next/link";

import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FloatingDock } from "@/components/FloatingDock";
import { SectionGlow } from "@/components/SectionGlow";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "See how PEI Web Studio builds modern websites, AI tools, automation, and growth systems for real businesses."
};

export default function PortfolioPage() {
  return (
    <main id="main-content" className="relative min-h-screen" role="main">
      <Header />

      <section className="relative overflow-hidden pb-4 pt-36 sm:pt-44">
        <SectionGlow className="left-1/2 top-10 -translate-x-1/2" />
        <div className="relative mx-auto w-[min(900px,calc(100%-2rem))] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-body/50">
            Production Work
          </p>
          <h1 className="font-serif-display mt-4 text-4xl tracking-tight text-body sm:text-5xl md:text-6xl">
            Modern systems already in the wild.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-body/60 sm:text-lg">
            Websites, AI tools, e-commerce, directories, and conversion-focused brand
            experiences built for real organizations.
          </p>
        </div>
      </section>

      <PortfolioSection showTitle={false} />

      <section className="relative py-16 sm:py-24">
        <div className="mx-auto w-[min(900px,calc(100%-2rem))]">
          <div className="liquid-glass rounded-3xl p-10 text-center sm:p-14">
            <h2 className="font-serif-display text-3xl tracking-tight text-body sm:text-4xl">
              Want a system like this?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-body/60">
              We can modernize the website, automation, and growth stack around how your
              business actually works.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-block rounded-full bg-body px-8 py-3 font-medium text-page transition hover:bg-body/90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingDock />
    </main>
  );
}
