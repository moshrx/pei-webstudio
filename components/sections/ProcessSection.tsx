"use client";

import { motion } from "framer-motion";
import { MessageSquare, Palette, Code, Rocket, Check } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery Call",
    description: "We discuss your goals, target audience, and what makes your business unique. No obligations, just clarity."
  },
  {
    icon: Palette,
    step: "02",
    title: "Design & Plan",
    description: "You receive a custom design mockup. We refine it together until it perfectly represents your brand."
  },
  {
    icon: Code,
    step: "03",
    title: "Development",
    description: "We build your site with clean, fast code. You'll get progress updates throughout the process."
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Train",
    description: "Your site goes live! We provide hands-on training so you can manage it with confidence."
  }
];

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-muted/30">
      <div className="mx-auto w-[min(1100px,calc(100%-1rem))] sm:w-[min(1100px,calc(100%-2rem))]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Our Process
          </span>
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl md:text-4xl">
            Simple 4-Step Process
          </h2>
          <p className="mt-3 text-muted-foreground">
            A clear, simple path from idea to launch
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-6 md:gap-8"
              >
                {/* Step number & icon */}
                <div className="relative flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/25">
                    <item.icon className="size-7" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-background text-xs font-bold text-primary border-2 border-primary">
                    <Check className="size-3" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <span className="text-xs font-bold text-primary">
                    STEP {item.step}
                  </span>
                  <h3 className="text-xl font-semibold mb-2 mt-1">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-xl"
          >
            Start Your Project
            <Rocket className="size-4" />
          </a>
          <p className="mt-3 text-sm text-muted-foreground">
            Free consultation • No commitment required
          </p>
        </motion.div>
      </div>
    </section>
  );
}
