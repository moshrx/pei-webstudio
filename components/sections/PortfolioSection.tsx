import Image from "next/image";

import { Card } from "@/components/ui/card";
import { MagneticHeading } from "@/components/MagneticHeading";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="mx-auto w-[min(1100px,calc(100%-2rem))]">
        <MagneticHeading
          title="Portfolio Highlight: Cricket PEI"
          subtitle="A community-driven sports platform designed for schedules, events, and sponsorship visibility."
        />
        <Card className="mt-10 overflow-hidden p-0">
          <a
            href="https://cricketpei.ca"
            target="_blank"
            rel="noreferrer"
            className="group block"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=2000&q=80"
                alt="Cricket PEI project preview"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 1100px"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="font-heading text-2xl font-semibold">Cricket PEI</h3>
                <p className="mt-2 max-w-xl text-sm text-white/85">
                  Hover interaction, rich media storytelling, and clear navigation for players, families, and sponsors.
                </p>
              </div>
            </div>
          </a>
        </Card>
        
      </div>
    </section>
  );
}
