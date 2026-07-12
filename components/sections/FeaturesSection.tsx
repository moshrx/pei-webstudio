"use client";

import { motion } from "framer-motion";
import { BarChart3, Bot, Cpu, DatabaseZap, Gauge, Workflow } from "lucide-react";

import { SectionGlow } from "@/components/SectionGlow";
import { TiltCard } from "@/components/TiltCard";

const features = [
  {
    icon: Cpu,
    title: "A website that actually works",
    text: "Fast, good-looking, and easy to find on Google. Built so you can update it yourself without calling a developer every time."
  },
  {
    icon: Bot,
    title: "AI that handles the small stuff",
    text: "Answer common questions, qualify leads, and follow up with new inquiries automatically — so you spend time on real customers, not inbox management."
  },
  {
    icon: Workflow,
    title: "Everything connected",
    text: "Your website, booking system, email, and contact forms all talk to each other. New enquiries go straight to the right place without you lifting a finger."
  },
  {
    icon: Gauge,
    title: "Fast and reliable",
    text: "Pages load quickly on any device, the site stays online, and nothing breaks after launch. Your visitors won't wait — and they won't leave."
  },
  {
    icon: DatabaseZap,
    title: "Know what's working",
    text: "See where your customers are coming from, which pages they visit, and what's turning them into buyers — in plain language, not confusing graphs."
  },
  {
    icon: BarChart3,
    title: "More customers over time",
    text: "We test what brings people in and what gets them to act, then do more of what works. Your site gets better the longer we work together."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative overflow-hidden py-20 sm:py-28">
      <SectionGlow className="right-0 top-1/4" />

      <div className="relative mx-auto w-[min(1100px,calc(100%-2rem))]">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif-display text-3xl leading-tight text-body sm:text-4xl md:text-5xl"
          >
            Your website should bring in business.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="liquid-glass rounded-2xl p-6 text-sm text-body/70"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-body/50">How we work</p>
            <p className="mt-3 leading-7">
              We handle the design, build, and setup end to end — so you get a complete
              system, not just a pretty page that sits there doing nothing.
            </p>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
            >
              <TiltCard className="h-full" tiltAmount={6} scale={1.02}>
                <div className="liquid-glass h-full min-h-[210px] rounded-2xl p-6 transition-colors hover:bg-body/5">
                  <div className="liquid-glass flex size-11 items-center justify-center rounded-full text-body">
                    <feature.icon className="size-5" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-body sm:text-xl">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-body/70">{feature.text}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
