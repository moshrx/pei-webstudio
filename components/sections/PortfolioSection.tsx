"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { MagneticHeading } from "@/components/MagneticHeading";

const projects = [
  {
    id: 12,
    title: "Mos Tire",
    year: "2026",
    link: "https://mostire.ca",
    tag: "Local Business",
    description: "A wholesale tire site for a Charlottetown, PEI supplier — clean, fast, and easy for shops and fleet buyers to find what they need.",
    tech: ["Website", "Local Business", "Fast Loading"],
  },
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

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5">
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
                className="group flex flex-col gap-4 rounded-2xl border border-border/60 bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card hover:shadow-lg hover:shadow-primary/5 sm:flex-row sm:items-start sm:gap-8 sm:p-8"
              >
                {/* Index number */}
                <span className="hidden sm:block w-10 shrink-0 font-mono text-sm text-muted-foreground/40 transition-colors group-hover:text-primary/70 pt-1 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Tag */}
                <span className="w-full sm:w-40 shrink-0 pt-1 text-xs font-semibold uppercase tracking-widest text-primary">
                  {project.tag}
                </span>

                {/* Main content */}
                <div className="flex-1 min-w-0">
                  <h3 className="flex items-center gap-2 font-heading text-xl font-semibold sm:text-2xl leading-snug">
                    {project.title}
                    <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary shrink-0" />
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground max-w-xl sm:text-base">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md px-2.5 py-1 font-mono text-[11px] font-medium text-muted-foreground border border-border/70 bg-muted/50 transition-colors group-hover:border-primary/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Year */}
                <span className="hidden sm:block shrink-0 pt-1 text-sm text-muted-foreground/50 font-mono">
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
