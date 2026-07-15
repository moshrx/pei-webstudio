"use client";

import { motion } from "framer-motion";

import { SectionGlow } from "@/components/SectionGlow";
import { TiltCard } from "@/components/TiltCard";
import { TechExplanationToggle } from "./TechExplanationToggle";

const whyChoose = [
  {
    title: "Local Context",
    text: "Based in Charlottetown, we understand Atlantic Canadian buying patterns, service businesses, and local search realities."
  },
  {
    title: "Systems Thinking",
    text: "We connect site design, SEO, content, forms, automations, and reporting so the whole customer path works together."
  },
  {
    title: "Practical AI",
    text: "We add AI where it helps with intake, response, content, research, or operations, and avoid it where it creates noise."
  },
  {
    title: "Owner Control",
    text: "You keep control of your accounts, analytics, content, and workflows, with training built into the handoff."
  }
];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28">
      <SectionGlow className="right-0 top-0" />

      <div className="relative mx-auto w-[min(1100px,calc(100%-2rem))]">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif-display mb-4 text-3xl text-body sm:text-4xl md:text-5xl"
        >
          A studio for modern operators.
        </motion.h2>
        <p className="mb-12 max-w-2xl text-body/60">
          We help Atlantic Canadian businesses put modern web, AI, automation, and
          analytics tools to work, without losing the human judgment that makes a local
          business tick.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <TiltCard className="h-full" tiltAmount={5} scale={1.01}>
              <div className="liquid-glass h-full rounded-2xl p-8">
                <h3 className="mb-4 text-2xl font-semibold text-body">Our Mission</h3>
                <p className="text-body/70">
                  We build digital systems that make small and mid-sized businesses feel
                  much more capable: faster sites, cleaner customer journeys, smarter
                  follow-up, and better visibility into what is actually working.
                </p>
              </div>
            </TiltCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <TiltCard className="h-full" tiltAmount={5} scale={1.01}>
              <div className="liquid-glass h-full rounded-2xl p-8">
                <h3 className="mb-4 text-2xl font-semibold text-body">Our Approach</h3>
                <p className="text-body/70">
                  We pair modern design and engineering with practical operating sense.
                  Every recommendation has to earn its place: if a tool, AI workflow, or
                  integration does not reduce friction or improve growth, it does not go in.
                </p>
              </div>
            </TiltCard>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <h3 className="mb-6 text-2xl font-semibold text-body">Why Choose Us?</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item) => (
              <div key={item.title} className="liquid-glass rounded-2xl p-5">
                <h4 className="mb-2 font-semibold text-body">{item.title}</h4>
                <p className="text-sm text-body/60">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-body sm:text-3xl">
            The Technology Stack
          </h3>
          <p className="mb-8 mt-2 max-w-2xl text-sm text-body/60 sm:text-base">
            We&apos;re transparent about how we build. Here&apos;s what we use and why it
            matters to your bottom line.
          </p>
          <TechExplanationToggle />
        </motion.div>
      </div>
    </section>
  );
}
