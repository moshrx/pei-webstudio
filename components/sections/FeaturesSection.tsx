import { BarChart3, Bot, Cpu, DatabaseZap, Gauge, Workflow } from "lucide-react";

import { Card } from "@/components/ui/card";
import { MagneticHeading } from "@/components/MagneticHeading";
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
    <section id="features" className="py-16 sm:py-20 md:py-28">
      <div className="mx-auto w-[min(1100px,calc(100%-1rem))] sm:w-[min(1100px,calc(100%-2rem))]">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <MagneticHeading
            title="Your website should bring in business."
            subtitle="We build websites and tools that save you time, bring in more customers, and keep working for you long after launch."
          />
          <div className="rounded-lg border border-border/70 bg-background/60 p-4 text-sm text-muted-foreground tech-panel">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">How we work</p>
            <p className="mt-3 leading-7">
              We handle the design, build, and setup end to end — so you get a complete system, not just a pretty page that sits there doing nothing.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <TiltCard key={feature.title} className="h-full" tiltAmount={6} scale={1.02}>
              <Card className="group h-full min-h-[210px] bg-card p-5 transition-colors hover:border-primary/35 sm:p-6">
                <div className="relative z-10">
                  <div className="flex size-11 items-center justify-center rounded-md border border-primary/25 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                    <feature.icon className="size-6" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold sm:mt-6 sm:text-xl">{feature.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground sm:mt-4">{feature.text}</p>
                </div>
              </Card>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
