"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Calendar, Cpu, Database, Gauge, Sparkles, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StaggerText } from "@/components/StaggerText";
import { AnimatedGradient } from "@/components/AnimatedGradient";

const pipelines = [
  { label: "Lead capture", value: "98%", width: "98%" },
  { label: "AI routing", value: "24/7", width: "88%" },
  { label: "SEO telemetry", value: "Live", width: "76%" }
];

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pb-14 pt-24 sm:pt-28 md:pb-20 md:pt-36">
      <AnimatedGradient />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="relative mx-auto grid w-[min(1180px,calc(100%-1rem))] gap-8 sm:w-[min(1180px,calc(100%-2rem))] md:grid-cols-[0.92fr_1.08fr] md:items-center md:gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-5 inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary sm:px-4 sm:py-2 sm:text-xs"
          >
            <Sparkles className="size-3.5" />
            Modern Web Systems for 2026
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-heading text-[2.45rem] font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl"
          >
            Build the digital engine your business deserves.
          </motion.h1>

          <StaggerText
            text="PEI Web Studio designs fast websites, AI workflows, marketing funnels, and analytics systems that feel current today and stay useful as the next wave arrives."
            className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base md:text-lg"
          />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 grid max-w-xl grid-cols-3 gap-2 text-xs text-muted-foreground"
          >
            <span className="flex items-center gap-2 rounded-lg border border-border/70 bg-background/45 px-3 py-2">
              <Cpu className="size-3.5 text-primary" />
              Next.js
            </span>
            <span className="flex items-center gap-2 rounded-lg border border-border/70 bg-background/45 px-3 py-2">
              <Bot className="size-3.5 text-primary" />
              AI Ops
            </span>
            <span className="flex items-center gap-2 rounded-lg border border-border/70 bg-background/45 px-3 py-2">
              <Gauge className="size-3.5 text-primary" />
              Growth
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3"
          >
            <Button asChild size="lg" className="w-full border border-primary/20 shadow-lg shadow-primary/20 sm:w-auto">
              <a href="#contact">
                Start a Tech Upgrade <ArrowUpRight className="ml-2 size-4" />
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
          className="relative"
        >
          <div className="tech-panel overflow-hidden rounded-lg border border-primary/20 bg-background/75 p-3 shadow-2xl shadow-primary/10 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-border/70 pb-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              </div>
              <span className="rounded-md border border-primary/25 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                Live Stack
              </span>
            </div>

            <div className="grid gap-3 pt-3 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-lg border border-border/70 bg-card/75 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Conversion System</p>
                    <h2 className="mt-2 font-heading text-2xl font-semibold">AI-ready launch hub</h2>
                  </div>
                  <Zap className="size-8 text-primary" />
                </div>
                <div className="mt-7 space-y-5">
                  {pipelines.map((item) => (
                    <div key={item.label}>
                      <div className="mb-2 flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-semibold text-foreground">{item.value}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-muted">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: item.width }}
                          transition={{ duration: 1.1, delay: 0.5 }}
                          className="h-full rounded-full bg-gradient-to-r from-primary via-blue-400 to-rose-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3">
                <div className="rounded-lg border border-border/70 bg-card/75 p-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Automation queue</span>
                    <Bot className="size-4 text-primary" />
                  </div>
                  <div className="mt-4 space-y-2 text-sm">
                    {["Qualify leads", "Draft replies", "Update CRM"].map((item) => (
                      <div key={item} className="flex items-center justify-between rounded-md bg-muted/60 px-3 py-2">
                        <span>{item}</span>
                        <span className="text-primary">online</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border border-border/70 bg-card/75 p-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    <Database className="size-4 text-primary" />
                    Data Layer
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                    {["SEO", "Ads", "CRM"].map((item) => (
                      <span key={item} className="rounded-md border border-border/60 bg-background/70 px-2 py-3 text-xs font-semibold">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute -bottom-5 left-5 right-5 rounded-lg border border-primary/30 bg-background/90 px-4 py-3 text-xs font-medium text-foreground shadow-lg backdrop-blur-sm sm:left-auto sm:right-6 sm:w-72"
          >
            <span className="mr-2 inline-block size-2 animate-pulse rounded-full bg-primary" />
            Local PEI partner. Enterprise-grade stack.
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
