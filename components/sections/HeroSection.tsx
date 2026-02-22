"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StaggerText } from "@/components/StaggerText";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => (
      <div className="h-[360px] w-full animate-pulse rounded-3xl bg-muted/60 md:h-[520px]" />
    )
  }
);

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-36">
      <div className="mx-auto grid w-[min(1100px,calc(100%-2rem))] gap-10 md:grid-cols-[1fr_0.95fr] md:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-4 inline-flex rounded-full border border-border bg-background/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
          >
            Charlottetown Web Partner
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
          >
            Modern Websites Your Business Can Actually Manage.
          </motion.h1>
          <StaggerText
            text="Launch fast, look premium, and stay in control with self-managed tools built around your team."
            className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg"
          />
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild>
              <a href="#contact">
                Start Your Build <ArrowUpRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="#portfolio">See Cricket PEI</a>
            </Button>
          </motion.div>
        </div>
        <div className="relative rounded-3xl border border-border/70 bg-noise p-3">
          <div className="rounded-2xl border border-white/10 bg-black/[0.03] dark:bg-white/[0.02]">
            <HeroScene />
          </div>
        </div>
      </div>
    </section>
  );
}
