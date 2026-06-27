"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Clock, Gauge, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Gauge,
    value: 15,
    suffix: "+",
    label: "Digital Systems Shipped",
    description: "Web, AI, SEO, and automation"
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: "%",
    label: "Owner Handoff",
    description: "Training and launch support"
  },
  {
    icon: Clock,
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
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-heading text-4xl font-bold sm:text-5xl">
      {count}{suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="relative overflow-hidden border-y border-border/70 py-12 sm:py-16">
      <div className="absolute inset-0 bg-muted/35" />
      
      <div className="relative mx-auto w-[min(1100px,calc(100%-1rem))] sm:w-[min(1100px,calc(100%-2rem))]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
            Built for businesses moving faster than templates
          </h2>
          <p className="mt-2 text-muted-foreground">
            Clean launches, measurable systems, and practical AI adoption.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-lg border border-border/70 bg-background/70 p-5 text-center backdrop-blur-sm transition-all hover:border-primary/35 hover:bg-background/90"
            >
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-primary/25 bg-primary/10 text-primary transition-transform group-hover:scale-105">
                <stat.icon className="size-6" />
              </div>
              <div className="text-primary">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 font-medium">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
