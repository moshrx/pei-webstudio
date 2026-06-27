import type { Metadata } from "next";
import Link from "next/link";

import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FloatingDock } from "@/components/FloatingDock";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "See how PEI Web Studio builds modern websites, AI tools, automation, and growth systems for real businesses."
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pb-0 pt-28 sm:pt-36">
        <div className="mx-auto w-[min(900px,calc(100%-2rem))] text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">Production Work</p>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Modern systems already in the wild.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground sm:text-lg">
            Websites, AI tools, e-commerce, directories, and conversion-focused brand experiences built for real organizations.
          </p>
        </div>
      </section>

      <PortfolioSection showTitle={false} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-[min(900px,calc(100%-2rem))] text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">Want a system like this?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            We can modernize the website, automation, and growth stack around how your business actually works.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition hover:brightness-110"
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
