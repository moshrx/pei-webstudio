import { Globe, Palette, Settings2 } from "lucide-react";

import { Card } from "@/components/ui/card";
import { MagneticHeading } from "@/components/MagneticHeading";

const features = [
  {
    icon: Globe,
    title: "Mobile-First Architecture",
    text: "Every layout is tuned for thumb-first UX, fast load times, and strong local SEO signals."
  },
  {
    icon: Palette,
    title: "Brand Value by Design",
    text: "Refined typography, motion design, and intentional visuals position your business above templated competitors."
  },
  {
    icon: Settings2,
    title: "Self-Management Ready",
    text: "Content workflows are built so your team can update pages, offers, and media without developer lock-in."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 sm:py-20 md:py-28">
      <div className="mx-auto w-[min(1100px,calc(100%-1rem))] sm:w-[min(1100px,calc(100%-2rem))]">
        <MagneticHeading
          title="Built for modern SMB teams, not just developers"
          subtitle="High-conversion websites with practical editing workflows and long-term maintainability."
        />
        <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="group min-h-[190px] p-5 transition hover:-translate-y-1 sm:min-h-[210px] sm:p-6">
              <feature.icon className="size-8 text-primary transition group-hover:scale-110 sm:size-9" />
              <h3 className="mt-5 font-heading text-lg font-semibold sm:mt-6 sm:text-xl">{feature.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground sm:mt-4">{feature.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
