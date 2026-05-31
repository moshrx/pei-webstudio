import { Globe, Palette, Settings2, TrendingUp, Bot, BarChart3 } from "lucide-react";

import { Card } from "@/components/ui/card";
import { MagneticHeading } from "@/components/MagneticHeading";
import { TiltCard } from "@/components/TiltCard";

const features = [
  {
    icon: Globe,
    title: "Works Perfectly on Phones",
    text: "Most customers browse on their phones. Your site loads instantly and looks beautiful—whether they're using weak WiFi at the coffee shop or checking you out from their car."
  },
  {
    icon: Palette,
    title: "Your Brand Stands Out",
    text: "We design sites that make your business look professional and trustworthy. No cookie-cutter templates. Just clean, beautiful design that customers remember."
  },
  {
    icon: Settings2,
    title: "You Own It, You Run It",
    text: "No developer needed for changes. Update prices, add photos, write blog posts—as easily as sending an email. Your team stays in control."
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing That Converts",
    text: "SEO, Google Ads, and social campaigns built around your business goals—not vanity metrics. We drive traffic that actually turns into paying customers."
  },
  {
    icon: Bot,
    title: "AI Automation for Your Business",
    text: "From AI chatbots that answer customer questions 24/7 to automated workflows that save your team hours every week. We build smart tools tailored to how you work."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Growth",
    text: "Analytics dashboards, conversion tracking, and clear reporting so you always know what's working. Every decision backed by real numbers—not guesswork."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 sm:py-20 md:py-28">
      <div className="mx-auto w-[min(1100px,calc(100%-1rem))] sm:w-[min(1100px,calc(100%-2rem))]">
        <MagneticHeading
          title="More Than a Website"
          subtitle="We build the full digital engine your business needs — websites, marketing, and AI automation — all under one roof."
        />
        <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <TiltCard key={feature.title} className="h-full" tiltAmount={6} scale={1.02}>
              <Card className="group h-full min-h-[190px] p-5 transition-colors sm:min-h-[210px] sm:p-6 bg-card">
                <div className="relative z-10">
                  <feature.icon className="size-8 text-primary transition-transform duration-300 group-hover:scale-110 sm:size-9" />
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
