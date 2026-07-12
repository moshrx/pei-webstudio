"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Code2, Radar, Rocket } from "lucide-react";

import { SectionGlow } from "@/components/SectionGlow";

const steps = [
  {
    icon: Radar,
    step: "01",
    title: "Audit the Opportunity",
    description:
      "We map your current site, offers, lead flow, tools, and growth bottlenecks so the build has a clear business target."
  },
  {
    icon: Code2,
    step: "02",
    title: "Architect the System",
    description:
      "We design the interface, content model, SEO structure, analytics events, and integration plan before code starts."
  },
  {
    icon: Bot,
    step: "03",
    title: "Build and Automate",
    description:
      "We ship the website, connect the tools, wire automation, and add the AI-assisted pieces that fit your workflow."
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch and Optimize",
    description:
      "We launch, train your team, monitor the signals, and tune the next moves with real performance data."
  }
];

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <SectionGlow className="left-1/2 top-0 -translate-x-1/2" />

      <div className="relative mx-auto w-[min(1100px,calc(100%-2rem))]">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-body/50">
            Our Process
          </span>
          <h2 className="font-serif-display mt-3 text-3xl text-body sm:text-4xl md:text-5xl">
            From idea to intelligent system
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line that draws on scroll */}
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            className="absolute left-0 right-0 top-8 hidden h-px origin-left bg-body/10 lg:block"
          />

          <div className="grid gap-4 lg:grid-cols-4">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                className="liquid-glass relative rounded-2xl p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif-display text-4xl italic text-body/30">
                    {item.step}
                  </span>
                  <div className="liquid-glass flex size-10 items-center justify-center rounded-full text-body">
                    <item.icon className="size-5" />
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-body">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body/60">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 flex flex-col items-center gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-body px-8 py-3 font-medium text-page transition hover:bg-body/90"
          >
            Plan the Upgrade
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <p className="text-sm text-body/50">Free consultation • No commitment required</p>
        </motion.div>
      </div>
    </section>
  );
}
