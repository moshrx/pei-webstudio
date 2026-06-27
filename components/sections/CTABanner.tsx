"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Sparkles, Terminal } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden border-y border-border/70 py-16 sm:py-20">
      <div className="absolute inset-0 bg-[hsl(16,40%,8%)] dark:bg-[hsl(16,30%,11%)]" />
      <div className="absolute inset-0 opacity-30 tech-panel" />

      <div className="relative mx-auto w-[min(1100px,calc(100%-1rem))] sm:w-[min(1100px,calc(100%-2rem))]">
        <div className="grid gap-8 text-white md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-white backdrop-blur-sm"
            >
              <Terminal className="size-4 text-primary" />
              <span>upgrade --stack --automation --growth</span>
            </motion.div>
            {["No commitment required", "Local PEI strategy", "Modern stack and training"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/75">
                <Sparkles className="size-4 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl"
            >
              Your competitors are upgrading. Make the smarter move first.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 max-w-2xl text-lg text-white/80"
            >
              We will identify the fastest path to a modern website, AI-assisted operations, and measurable acquisition without bloating your business with tools you do not need.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-black/10 transition-all hover:scale-[1.02]"
              >
                Request the Upgrade Plan
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Clock className="size-4" />
                <span>Response within 24 hours</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
