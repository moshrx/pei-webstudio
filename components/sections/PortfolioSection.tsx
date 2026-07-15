"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { SectionGlow } from "@/components/SectionGlow";

const projects = [
  {
    id: 12,
    title: "Mos Tire",
    link: "https://mostire.ca",
    tag: "Local Business",
    description:
      "A wholesale tire site for a Charlottetown, PEI supplier. Clean, fast, and easy for shops and fleet buyers to find what they need.",
    tech: ["Website", "Local Business", "Fast Loading"]
  },
  {
    id: 10,
    title: "PickupAI",
    link: "https://www.listedpei.ca/pickupai",
    tag: "AI Automation",
    description:
      "Calls get answered 24/7 while you review bookings, missed intents, and transcripts in one dashboard.",
    tech: ["AI", "Automation", "24/7 Answering"]
  },
  {
    id: 11,
    title: "Lustrouz Aesthetics",
    link: "https://lustrouz-web.vercel.app/",
    tag: "Website Design",
    description:
      "A clean, fast website for a Toronto skincare clinic, built to turn visitors into booked appointments.",
    tech: ["Website", "Booking Flow", "Google-ready"]
  },
  {
    id: 4,
    title: "Listed PEI",
    link: "https://listedpei.ca",
    tag: "Connected Platform",
    description:
      "A full business directory where listings, search, and customer enquiries all connect automatically, with no manual updates needed.",
    tech: ["Website", "Automation", "Analytics"]
  },
  {
    id: 1,
    title: "Fat Cat Bakery",
    link: "https://fatcatbakery.netlify.app/",
    tag: "Local Business",
    description:
      "A local bakery site set up to be found on Google, load fast on mobile, and turn browsers into walk-ins.",
    tech: ["Website", "Google-ready", "Fast Loading"]
  },
  {
    id: 3,
    title: "Lootbins Canada",
    link: "https://www.lootbinscanada.com/",
    tag: "Online Store",
    description:
      "A retail site built to sell. Easy to browse on any device, with a clear path from product to checkout.",
    tech: ["E-commerce", "Website", "Shopify"]
  },
  {
    id: 2,
    title: "Red Soil",
    link: "https://redsoil.netlify.app/",
    tag: "Brand & Growth",
    description:
      "A brand site built around PEI's identity, designed to attract the right audience and grow over time with consistent messaging.",
    tech: ["Branding", "Website", "Growth"]
  },
  {
    id: 0,
    title: "Cricket PEI",
    link: "https://cricketpei.ca",
    tag: "Website Design",
    description:
      "A fast, easy-to-navigate site for PEI Cricket, so members can find match updates without digging through a cluttered page.",
    tech: ["Website", "Fast Loading", "Easy to Update"]
  }
];

export function PortfolioSection({ showTitle = true }: { showTitle?: boolean }) {
  return (
    <section id="portfolio" className="relative overflow-hidden py-20 sm:py-28">
      <SectionGlow className="left-0 top-1/3" />

      <div className="relative mx-auto w-[min(1100px,calc(100%-2rem))]">
        {showTitle && (
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif-display mb-12 text-3xl text-body sm:text-4xl md:text-5xl"
          >
            Proof in production.
          </motion.h2>
        )}

        <div className="space-y-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass group flex flex-col gap-4 rounded-2xl p-6 transition-colors hover:bg-body/[0.04] sm:flex-row sm:items-start sm:gap-8 sm:p-8"
              >
                {/* Row number */}
                <span className="font-serif-display hidden w-12 shrink-0 select-none pt-1 text-3xl italic text-body/20 transition-colors group-hover:text-body/60 sm:block">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Tag */}
                <span className="w-full shrink-0 pt-1.5 text-xs font-semibold uppercase tracking-widest text-body/60 sm:w-40">
                  {project.tag}
                </span>

                {/* Main content */}
                <div className="min-w-0 flex-1">
                  <h3 className="flex items-center gap-2 text-xl font-semibold leading-snug text-body sm:text-2xl">
                    {project.title}
                    <ArrowUpRight className="size-5 shrink-0 -translate-x-1 text-body/40 opacity-0 transition-all group-hover:translate-x-0 group-hover:text-body group-hover:opacity-100" />
                  </h3>
                  <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-body/60 sm:text-base">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-body/10 px-2.5 py-1 text-[11px] font-medium text-body/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
