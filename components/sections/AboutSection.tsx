"use client";

import { MagneticHeading } from "@/components/MagneticHeading";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TechExplanationToggle } from "./TechExplanationToggle";
import { TiltCard } from "@/components/TiltCard";

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-28">
      <div className="mx-auto w-[min(1100px,calc(100%-1rem))] sm:w-[min(1100px,calc(100%-2rem))]">
        <MagneticHeading
          title="A studio for modern operators."
          subtitle="PEI Web Studio helps Atlantic Canadian businesses adopt current web, AI, automation, and analytics tools without losing the human judgment that makes a local business work."
        />
        
        <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: 5 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ perspective: 1000 }}
          >
            <TiltCard className="h-full" tiltAmount={5} scale={1.01}>
              <Card className="h-full p-6 sm:p-8 bg-card">
                <div className="relative z-10">
                  <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
                  <p className="text-foreground/70">
                    We build digital systems that make small and mid-sized businesses feel much more capable: faster sites, cleaner customer journeys, smarter follow-up, and better visibility into what is actually working.
                  </p>
                </div>
              </Card>
            </TiltCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: 5 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ perspective: 1000 }}
          >
            <TiltCard className="h-full" tiltAmount={5} scale={1.01}>
              <Card className="h-full p-6 sm:p-8 bg-card">
                <div className="relative z-10">
                  <h2 className="mb-4 text-2xl font-semibold">Our Approach</h2>
                  <p className="text-foreground/70">
                    We pair modern design and engineering with practical operating sense. Every recommendation has to earn its place: if a tool, AI workflow, or integration does not reduce friction or improve growth, it does not go in.
                  </p>
                </div>
              </Card>
            </TiltCard>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <Card className="p-5 sm:p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Why Choose Us?</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 font-semibold">Local Context</h3>
                <p className="text-sm text-foreground/70">
                  Based in Charlottetown, we understand Atlantic Canadian buying patterns, service businesses, and local search realities.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Systems Thinking</h3>
                <p className="text-sm text-foreground/70">
                  We connect site design, SEO, content, forms, automations, and reporting so the whole customer path works together.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Practical AI</h3>
                <p className="text-sm text-foreground/70">
                  We add AI where it helps with intake, response, content, research, or operations, and avoid it where it creates noise.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Owner Control</h3>
                <p className="text-sm text-foreground/70">
                  You keep control of your accounts, analytics, content, and workflows, with training built into the handoff.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 sm:mt-12"
        >
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl font-semibold sm:text-3xl">The Technology Stack</h2>
            <p className="mt-2 text-sm text-foreground/70 sm:text-base">
              We&apos;re transparent about how we build. Here&apos;s what we use and why it matters to your bottom line.
            </p>
          </div>
          <TechExplanationToggle />
        </motion.div>
      </div>
    </section>
  );
}
