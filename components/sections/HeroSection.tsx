"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Database } from "lucide-react";

const pipelines = [
  { label: "Lead capture", value: "98%" },
  { label: "AI routing", value: "24/7" },
  { label: "SEO telemetry", value: "Live" }
];

const marqueeItems = [
  "Websites",
  "AI Workflows",
  "Automation",
  "SEO",
  "Analytics",
  "Charlottetown PEI"
];

function LiveStack() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="liquid-glass hidden w-80 rounded-2xl p-6 lg:absolute lg:bottom-10 lg:right-8 lg:block"
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.16em] text-body/50">
          Conversion System
        </span>
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
      </div>
      <div className="space-y-3">
        {pipelines.map((item) => (
          <div key={item.label} className="flex items-center justify-between text-sm">
            <span className="text-body/60">{item.label}</span>
            <span className="font-medium text-body">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-body/10 pt-5">
        <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-body/50">
          <Bot className="size-3.5" /> Automation queue
        </div>
        <div className="space-y-2 text-sm">
          {["Qualify leads", "Draft replies", "Update CRM"].map((item) => (
            <div key={item} className="flex items-center justify-between">
              <span className="text-body/70">{item}</span>
              <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                online
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 border-t border-body/10 pt-5">
        <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-body/50">
          <Database className="size-3.5" /> Data Layer
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          {["SEO", "Ads", "CRM"].map((item) => (
            <span
              key={item}
              className="liquid-glass rounded-lg px-2 py-2 text-xs font-medium text-body/80"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Bottom gradient melt into the page — lets the fixed 3D scene show through above. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-2/3 bg-gradient-to-t from-page via-page/40 to-transparent" />

      <div className="relative z-10 flex flex-1 -translate-y-[10%] flex-col items-center justify-center px-6 py-12 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="liquid-glass rounded-full px-4 py-1.5 text-xs uppercase tracking-wide text-body/80"
        >
          Modern Web Systems for 2026
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif-display mb-8 mt-6 max-w-4xl text-5xl tracking-tight text-body md:text-6xl lg:text-7xl"
        >
          Build the <em className="italic">digital engine</em> your business deserves.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl text-base leading-relaxed text-body/70 md:text-lg"
        >
          PEI Web Studio designs fast websites, AI workflows, marketing funnels, and
          analytics systems that feel current today and stay useful as the next wave
          arrives.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          {["Next.js", "AI Ops", "Growth"].map((chip) => (
            <span
              key={chip}
              className="liquid-glass rounded-full px-4 py-1.5 text-xs text-body/70"
            >
              {chip}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-body px-8 py-3 font-medium text-page transition hover:bg-body/90"
          >
            Start a Tech Upgrade
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#portfolio"
            className="liquid-glass rounded-full px-8 py-3 text-body transition-colors hover:bg-body/5"
          >
            See Our Work
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 text-sm text-body/50"
        >
          Local PEI partner. Enterprise-grade stack.
        </motion.p>
      </div>

      <LiveStack />

      {/* Marquee ticker */}
      <div className="relative z-10 overflow-hidden border-t border-body/5 py-3">
        <div className="flex w-max animate-marquee">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map(
            (item, i) => (
              <span
                key={i}
                className="mx-6 text-xs uppercase tracking-widest text-body/30"
              >
                {item} ·
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
