"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { MagneticHeading } from "@/components/MagneticHeading";

const projects = [
  {
    id: 10,
    title: "PickupAI",
    year: "2026",
    link: "https://www.listedpei.ca/pickupai",
    tag: "AI Automation",
    description: "Calls get answered 24/7 while you review bookings, missed intents, and transcripts in one dashboard.",
    tech: ["AI", "Automation", "24/7 Answering"],
  },
  {
    id: 11,
    title: "Lustrouz Aesthetics",
    year: "2026",
    link: "https://lustrouz-web.vercel.app/",
    tag: "Website Design",
    description: "A clean, fast website for a Toronto skincare clinic — built to turn visitors into booked appointments.",
    tech: ["Website", "Booking Flow", "Google-ready"],
  },
  {
    id: 4,
    title: "Listed PEI",
    year: "2026",
    link: "https://listedpei.ca",
    tag: "Connected Platform",
    description: "A full business directory where listings, search, and customer enquiries all connect automatically — no manual updates needed.",
    tech: ["Website", "Automation", "Analytics"],
  },
  {
    id: 1,
    title: "Fat Cat Bakery",
    year: "2026",
    link: "https://fatcatbakery.netlify.app/",
    tag: "Local Business",
    description: "A local bakery site set up to be found on Google, load fast on mobile, and turn browsers into walk-ins.",
    tech: ["Website", "Google-ready", "Fast Loading"],
  },
  {
    id: 3,
    title: "Lootbins Canada",
    year: "2026",
    link: "https://www.lootbinscanada.com/",
    tag: "Online Store",
    description: "A retail site built to sell — easy to browse on any device, with a clear path from product to checkout.",
    tech: ["E-commerce", "Website", "Shopify"],
  },
  {
    id: 2,
    title: "Red Soil",
    year: "2026",
    link: "https://redsoil.netlify.app/",
    tag: "Brand & Growth",
    description: "A brand site built around PEI's identity, designed to attract the right audience and grow over time with consistent messaging.",
    tech: ["Branding", "Website", "Growth"],
  },
  {
    id: 0,
    title: "Cricket PEI",
    year: "2026",
    link: "https://cricketpei.ca",
    tag: "Website Design",
    description: "A fast, easy-to-navigate site for PEI Cricket — members can find match updates without digging through a cluttered page.",
    tech: ["Website", "Fast Loading", "Easy to Update"],
  },
];

export function PortfolioSection({ showTitle = true }: { showTitle?: boolean }) {
  return (
    <section id="portfolio" className="relative overflow-hidden py-14 sm:py-20 md:py-28">
      <div className="mx-auto w-[min(1100px,calc(100%-1rem))] sm:w-[min(1100px,calc(100%-2rem))]">
        {showTitle && (
          <MagneticHeading
            title="Proof in production."
            subtitle="Live websites, AI tools, directories, e-commerce, and brand systems built for real businesses with real constraints."
          />
        )}

        <div className="mt-8 sm:mt-12 divide-y divide-border/60">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.42, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 py-5 sm:flex-row sm:items-start sm:gap-6 sm:py-6 hover:bg-primary/[0.03] transition-colors duration-200 -mx-3 px-3 rounded-lg"
              >
                {/* Index number */}
                <span className="hidden sm:block w-8 shrink-0 font-mono text-xs text-muted-foreground/50 pt-0.5 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Tag */}
                <span className="w-full sm:w-36 shrink-0 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {project.tag}
                </span>

                {/* Main content */}
                <div className="flex-1 min-w-0">
                  <h3 className="flex items-center gap-2 font-heading text-base font-semibold sm:text-lg leading-snug">
                    {project.title}
                    <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 shrink-0" />
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground max-w-xl">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded px-2 py-0.5 font-mono text-[10px] font-medium text-muted-foreground border border-border/70 bg-muted/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Year */}
                <span className="hidden sm:block shrink-0 text-xs text-muted-foreground/60 pt-0.5 font-mono">
                  {project.year}
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
