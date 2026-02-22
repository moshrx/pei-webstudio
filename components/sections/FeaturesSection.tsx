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
    <section id="features" className="py-20 md:py-28">
      <div className="mx-auto w-[min(1100px,calc(100%-2rem))]">
        <MagneticHeading
          title="Built for modern SMB teams, not just developers"
          subtitle="High-conversion websites with practical editing workflows and long-term maintainability."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="group min-h-[210px] transition hover:-translate-y-1">
              <feature.icon className="size-9 text-primary transition group-hover:scale-110" />
              <h3 className="mt-6 font-heading text-xl font-semibold">{feature.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground">{feature.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
