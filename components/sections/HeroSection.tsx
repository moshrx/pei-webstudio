"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StaggerText } from "@/components/StaggerText";

const InteractiveBlocksScene = dynamic(
  () => import("@/components/three/InteractiveBlocksScene").then((mod) => mod.InteractiveBlocksScene),
  {
    ssr: false,
    loading: () => (
      <div className="h-[300px] w-full animate-pulse rounded-2xl bg-muted/60 sm:h-[360px] md:h-[520px]" />
    )
  }
);

const heroTitle = "Modern Websites Your Business Can Actually Manage.";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pb-14 pt-24 sm:pt-28 md:pb-24 md:pt-36">
      <div className="mx-auto grid w-[min(1100px,calc(100%-1rem))] gap-6 sm:w-[min(1100px,calc(100%-2rem))] sm:gap-8 md:grid-cols-[1fr_0.95fr] md:items-center md:gap-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-4 inline-flex rounded-full border border-border bg-background/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.18em]"
          >
            Charlottetown Web Partner
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-heading text-[2rem] font-semibold tracking-tight sm:text-5xl md:text-6xl"
          >
            <span>{heroTitle}</span>
          </motion.h1>
          <StaggerText
            text="Update your site whenever you want. No waiting for developers. No expensive updates. Just simple, fast changes you control."
            className="mt-5 max-w-xl text-sm text-muted-foreground sm:text-base md:text-lg"
          />
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-7 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3"
          >
            <Button asChild className="w-full sm:w-auto">
              <a href="#contact">
                Start Your Build <ArrowUpRight className="ml-2 size-4" />
              </a>
            </Button>
          </motion.div>
        </div>
        <div className="relative rounded-3xl border border-border/70 bg-noise p-2.5 sm:p-3">
          <div className="glass overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-100/45 via-sky-50/25 to-emerald-100/35 dark:from-cyan-500/10 dark:via-slate-900/20 dark:to-emerald-500/10">
            <InteractiveBlocksScene />
          </div>
        </div>
      </div>
    </section>
  );
}
