"use client";

import { motion } from "framer-motion";
import { Bot, Code2, Radar, Rocket, Check } from "lucide-react";

const steps = [
  {
    icon: Radar,
    step: "01",
    title: "Audit the Opportunity",
    description: "We map your current site, offers, lead flow, tools, and growth bottlenecks so the build has a clear business target."
  },
  {
    icon: Code2,
    step: "02",
    title: "Architect the System",
    description: "We design the interface, content model, SEO structure, analytics events, and integration plan before code starts."
  },
  {
    icon: Bot,
    step: "03",
    title: "Build and Automate",
    description: "We ship the website, connect the tools, wire automation, and add the AI-assisted pieces that fit your workflow."
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch and Optimize",
    description: "We launch, train your team, monitor the signals, and tune the next moves with real performance data."
  }
];

export function ProcessSection() {
  return (
    <section className="border-y border-border/70 bg-muted/30 py-16 sm:py-20 md:py-28">
      <div className="mx-auto w-[min(1100px,calc(100%-1rem))] sm:w-[min(1100px,calc(100%-2rem))]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="mb-3 inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Our Process
          </span>
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl md:text-4xl">
            From idea to intelligent system
          </h2>
          <p className="mt-3 text-muted-foreground">
            A focused sprint that turns messy digital needs into a clean launch plan.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute bottom-0 left-8 top-0 hidden w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent md:block" />

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
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary shadow-lg shadow-primary/10">
                    <item.icon className="size-7" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 flex h-6 w-6 items-center justify-center rounded-md border-2 border-primary bg-background text-xs font-bold text-primary">
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
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] hover:bg-primary/90 hover:shadow-xl"
          >
            Plan the Upgrade
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
