"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import { SectionGlow } from "@/components/SectionGlow";

const stats = [
  {
    value: 15,
    suffix: "+",
    label: "Digital Systems Shipped",
    description: "Web, AI, SEO, and automation"
  },
  {
    value: 100,
    suffix: "%",
    label: "Owner Handoff",
    description: "Training and launch support"
  },
  {
    value: 7,
    suffix: " Days",
    label: "Sprint Launches",
    description: "Focused builds for fast movers"
  }
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 1200;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-serif-display text-5xl italic text-body">
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <SectionGlow className="left-1/2 top-0 -translate-x-1/2" />

      <div className="relative mx-auto w-[min(1100px,calc(100%-2rem))]">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif-display mb-12 max-w-3xl text-3xl text-body md:text-4xl"
        >
          Built for businesses moving faster than templates
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="liquid-glass rounded-2xl p-8"
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <div className="mt-4 font-medium text-body">{stat.label}</div>
              <div className="mt-1 text-sm text-body/60">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
