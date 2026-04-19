"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StaggerText } from "@/components/StaggerText";
import { AnimatedGradient } from "@/components/AnimatedGradient";
import { PEILandscape } from "@/components/PEILandscape";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pb-14 pt-24 sm:pt-28 md:pb-24 md:pt-36">
      <AnimatedGradient />
      <div className="relative mx-auto grid w-[min(1100px,calc(100%-1rem))] gap-6 sm:w-[min(1100px,calc(100%-2rem))] sm:gap-8 md:grid-cols-[1fr_0.95fr] md:items-center md:gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.18em]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Now Accepting 3 New Clients
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-heading text-[2rem] font-semibold tracking-tight sm:text-5xl md:text-6xl"
          >
            Get a Website That Actually Brings You Customers
          </motion.h1>
          
          <StaggerText
            text="Stop losing business to competitors with better websites. We build fast, beautiful sites for PEI businesses — and you can update them yourself without touching code."
            className="mt-5 max-w-xl text-sm text-muted-foreground sm:text-base md:text-lg"
          />
          
          {/* Quick trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground"
          >
            <span className="flex items-center gap-1">
              <Check className="size-3.5 text-emerald-500" />
              No monthly fees
            </span>
            <span className="flex items-center gap-1">
              <Check className="size-3.5 text-emerald-500" />
              Fast turnaround
            </span>
            <span className="flex items-center gap-1">
              <Check className="size-3.5 text-emerald-500" />
              You own everything
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3"
          >
            <Button asChild size="lg" className="w-full sm:w-auto shadow-lg shadow-primary/25">
              <a href="#contact">
                Get Your Free Quote <ArrowUpRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href="#portfolio">
                <Calendar className="mr-2 size-4" />
                See Our Work
              </a>
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative rounded-3xl border border-border/70 bg-noise p-2.5 sm:p-3"
        >
          <div className="overflow-hidden rounded-2xl">
            <PEILandscape />
          </div>
          
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-6 left-6 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-xs font-medium text-foreground backdrop-blur-sm shadow-lg"
          >
            <span className="mr-2 inline-block size-2 animate-pulse rounded-full bg-emerald-500" />
            Built for PEI Businesses
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
