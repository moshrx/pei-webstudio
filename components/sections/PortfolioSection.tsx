"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { MagneticHeading } from "@/components/MagneticHeading";

const projects = [
   {
    id: 0,
    title: "Cricket PEI",
    year: "2026",
    link: "https://cricketpei.ca",
    tag: "Sports Federation",
    description: "Official site for PEI Cricket. Built for speed and easy access to match data and federation updates.",
    tech: ["HTML5", "Tailwind CSS", "UI Design"],
    color: "#0071e3",
    image: "/assets/projects/cricket.jpg"
  },
  {
    id: 1,
    title: "Fat Cat Bakery",
    year: "2026",
    link: "https://fatcatbakery.netlify.app/",
    tag: "Local Business",
    description: "Polished bakery site with a focus on simple navigation and conversion-friendly layouts.",
    tech: ["NextJs", "Tailwind CSS", "UX/UI"],
    color: "#F2CC8F",
    image: "/assets/projects/fatcat.jpg"
  },
 
  {
    id: 2,
    title: "Red Soil",
    year: "2026",
    link: "https://redsoil.netlify.app/",
    tag: "Community Branding",
    description: "A clean, structured brand site inspired by PEI's identity. Focus on grid systems and solid spacing.",
    tech: ["HTML5", "Tailwind CSS", "Brand UI"],
    color: "#BC4749",
    image: "/assets/projects/redsoil.jpg"
  },
  {
    id: 3,
    title: "Lootbins Canada",
    year: "2026",
    link: "https://www.lootbinscanada.com/",
    tag: "E-commerce & Retail",
    description: "Inventory-focused retail site. Clean layout designed to handle high product volume and clear navigation.",
    tech: ["Shopify", "UI Design", "E-commerce"],
    color: "#E63946",
    image: "/assets/projects/lootbins.jpg"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

export function PortfolioSection({ showTitle = true }: { showTitle?: boolean }) {
  return (
    <section id="portfolio" className="relative overflow-hidden py-14 sm:py-20 md:py-28">
      <div className="mx-auto w-[min(1100px,calc(100%-1rem))] sm:w-[min(1100px,calc(100%-2rem))]">
        {showTitle && (
          <MagneticHeading
            title="Work that speaks for itself"
            subtitle="Real projects for real businesses — built to perform, easy to manage, and designed to grow."
          />
        )}

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <Card className="flex h-full flex-col overflow-hidden p-0 transition hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div
                      className="absolute inset-0 opacity-0 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-20"
                      style={{ backgroundColor: project.color }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className="inline-block rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider sm:text-xs"
                        style={{
                          backgroundColor: `${project.color}18`,
                          color: project.color
                        }}
                      >
                        {project.tag}
                      </span>
                      <span className="text-xs text-muted-foreground">{project.year}</span>
                    </div>

                    <h3 className="mt-3 flex items-center gap-2 font-heading text-lg font-semibold sm:text-xl">
                      {project.title}
                      <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5 pt-1">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-border bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground sm:text-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
