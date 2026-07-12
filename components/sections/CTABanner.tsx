"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="relative mx-6">
        {/* Soft white radial glow behind the panel */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[500px] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%)"
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="liquid-glass relative rounded-3xl p-8 sm:p-12"
        >
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="space-y-3">
              <div className="liquid-glass flex items-center gap-2 rounded-lg px-4 py-3 font-mono text-sm text-body">
                <span>upgrade --stack --automation --growth</span>
                <span className="animate-cursor inline-block h-4 w-2 bg-body/80" />
              </div>
              {["No commitment required", "Local PEI strategy", "Modern stack + training"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-body/70"
                  >
                    <Check className="size-4 shrink-0 text-body/50" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>

            <div>
              <h2 className="font-serif-display text-4xl text-body md:text-5xl">
                Your competitors are upgrading. Make the smarter move first.
              </h2>
              <p className="mt-4 max-w-2xl text-body/70">
                We will identify the fastest path to a modern website, AI-assisted
                operations, and measurable acquisition without bloating your business with
                tools you do not need.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-body px-8 py-3 font-medium text-page transition hover:bg-body/90"
                >
                  Request the Upgrade Plan
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <span className="text-sm text-body/60">Response within 24 hours</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
