"use client";

import { MagneticHeading } from "@/components/MagneticHeading";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TechExplanationToggle } from "./TechExplanationToggle";

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-28">
      <div className="mx-auto w-[min(1100px,calc(100%-1rem))] sm:w-[min(1100px,calc(100%-2rem))]">
        <MagneticHeading
          title="About PEI Web Studio"
          subtitle="Crafting modern, manageable websites for growing businesses in Atlantic Canada"
        />
        
        <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
              <p className="text-foreground/70">
                We believe every business deserves a website that works as hard as they do. Our mission is to build revenue-ready websites that SMBs can actually manage themselves, without the technical headaches or ongoing dependencies on developers.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-semibold">Our Approach</h2>
              <p className="text-foreground/70">
                We combine modern design with practical functionality. Every website we build is optimized for conversions, built on the right tech stack for your needs, and comes with comprehensive training so you&apos;re confident managing it.
              </p>
            </Card>
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
                <h3 className="mb-2 font-semibold">Local Expertise</h3>
                <p className="text-sm text-foreground/70">
                  Based in Charlottetown, we understand Atlantic Canadian businesses and their unique needs.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Results-Driven</h3>
                <p className="text-sm text-foreground/70">
                  We focus on conversions and growth, not just pretty designs that don&apos;t convert.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Comprehensive Training</h3>
                <p className="text-sm text-foreground/70">
                  You&apos;ll receive full training to manage and update your site independently.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Modern Stack</h3>
                <p className="text-sm text-foreground/70">
                  Built with Next.js, React, and other cutting-edge technologies for performance.
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
            <h2 className="text-2xl font-semibold sm:text-3xl">Our Technology Stack</h2>
            <p className="mt-2 text-sm text-foreground/70 sm:text-base">
              We&apos;re transparent about how we build. Here&apos;s what we use—and why it matters to your bottom line.
            </p>
          </div>
          <TechExplanationToggle />
        </motion.div>
      </div>
    </section>
  );
}
