import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SectionGlow } from "@/components/SectionGlow";

const projects = [
  {
    id: 14,
    title: "Nocturne",
    link: "/showcase/nocturne",
    internal: true,
    art: "nocturne",
    preview: true,
    tag: "Motion Design Concept",
    description:
      "An immersive event experience shaped by cinematic type, orbital motion, and atmospheric transitions.",
    tech: ["Motion Design", "Art Direction", "Responsive"]
  },
  {
    id: 13,
    title: "Pelagic",
    link: "/showcase/pelagic",
    internal: true,
    art: "pelagic",
    preview: true,
    tag: "Interactive Concept",
    description:
      "A high-energy marine technology concept with animated data signals and a bold editorial layout.",
    tech: ["Creative Development", "Animation", "Product Story"]
  },
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
    preview: true,
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
    tag: "Local AI Platform",
    description:
      "A growing toolkit for PEI businesses, combining Google profile content, AI visibility auditing, and practical local discovery tools.",
    tech: ["GEO Audit", "Local SEO", "AI Tools"]
  },
  {
    id: 1,
    title: "Fat Cat Bakery",
    image: "/assets/projects/fatcat.jpg",
    preview: true,
    link: "https://fatcatbakery.netlify.app/",
    tag: "Local Business",
    description:
      "A bakery website with a menu, brand story, and clear ways to find and contact the business.",
    tech: ["Website", "Google-ready", "Fast Loading"]
  },
  {
    id: 3,
    title: "Lootbins Canada",
    image: "/assets/projects/lootbins.jpg",
    link: "https://www.lootbinscanada.com/",
    tag: "Online Store",
    description:
      "A Shopify retail site with product browsing and a clear path to checkout.",
    tech: ["E-commerce", "Website", "Shopify"]
  },
  {
    id: 2,
    title: "Red Soil",
    image: "/assets/projects/redsoil.jpg",
    preview: true,
    link: "https://redsoil.netlify.app/",
    tag: "Brand & Growth",
    description:
      "A brand site built around PEI's identity, designed to attract the right audience and grow over time with consistent messaging.",
    tech: ["Branding", "Website", "Growth"]
  },
  {
    id: 0,
    title: "Cricket PEI",
    image: "/assets/projects/cricket.jpg",
    link: "https://cricketpei.ca",
    tag: "Website Design",
    description:
      "A fast, easy-to-navigate site for PEI Cricket, so members can find match updates without digging through a cluttered page.",
    tech: ["Website", "Fast Loading", "Easy to Update"]
  }
];

export function PortfolioSection({ showTitle = true, featured = false }: { showTitle?: boolean; featured?: boolean }) {
  const visibleProjects = featured ? [projects.find(p => p.id === 14)!, projects.find(p => p.id === 13)!, projects.find(p => p.id === 0)!] : projects;
  return (
    <section id="portfolio" className="relative overflow-hidden py-20 sm:py-28">
      <SectionGlow className="left-0 top-1/3" />

      <div className="relative mx-auto w-[min(1100px,calc(100%-2rem))]">
        {showTitle && (
          <h2
            className="font-serif-display mb-12 text-3xl text-body sm:text-4xl md:text-5xl"
          >
            A closer look at our work.
          </h2>
        )}

        <div className={`grid gap-5 ${featured ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
          {visibleProjects.map((project) => (
            <div
              key={project.id}
            >
              <Link
                prefetch={false}
                href={project.link}
                target={project.internal ? undefined : "_blank"}
                rel={project.internal ? undefined : "noopener noreferrer"}
                className="liquid-glass group flex h-full flex-col gap-4 rounded-2xl p-5 transition-colors hover:bg-body/[0.04] sm:p-6"
              >
                {project.art === "nocturne" && <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-[#09080e]">
                  <Image src="/assets/showcase/nocturne-hero.jpg" alt="Nocturne motion website concept" fill sizes={featured ? "(min-width: 768px) 350px, 100vw" : "(min-width: 768px) 520px, 100vw"} className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="font-serif-display absolute inset-0 flex items-center justify-center text-5xl text-white sm:text-7xl">Nocturne</span>
                </div>}
                {project.art === "pelagic" && <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-[#daf8f1] text-[#063a3e]">
                  <Image src="/assets/showcase/pelagic-hero.jpg" alt="Pelagic marine technology website concept" fill sizes={featured ? "(min-width: 768px) 350px, 100vw" : "(min-width: 768px) 520px, 100vw"} className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#daf8f1] via-[#daf8f1]/25 to-transparent" />
                  <span className="absolute bottom-[14%] left-[8%] text-4xl font-black leading-[0.85] tracking-[-0.06em] sm:text-6xl">READ THE<br /><em className="font-serif-display font-normal">CURRENT.</em></span>
                </div>}
                {project.image && <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-body/10">
                  <Image src={project.image} alt={`${project.title} website screenshot`} fill sizes={featured ? "(min-width: 768px) 350px, 100vw" : "(min-width: 768px) 520px, 100vw"} className="object-cover object-top" />
                </div>}
                <span className="text-xs font-semibold uppercase tracking-widest text-body/70">{project.tag}{project.preview ? " · Preview" : ""}</span>

                {/* Main content */}
                <div className="min-w-0 flex-1">
                  <h3 className="flex items-center gap-2 text-xl font-semibold leading-snug text-body sm:text-2xl">
                    {project.title}
                    <ArrowUpRight className="size-5 shrink-0 -translate-x-1 text-body/40 opacity-100 transition-all group-hover:translate-x-0 group-hover:text-body group-hover:opacity-100" />
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
              </Link>
            </div>
          ))}
        </div>
        {featured && <Link prefetch={false} href="/portfolio" className="mt-8 inline-flex min-h-11 items-center gap-2 font-medium text-body underline underline-offset-4">See all projects <ArrowUpRight className="size-4" /></Link>}
      </div>
    </section>
  );
}
