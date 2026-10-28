import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Asterisk } from "lucide-react";

export function HeroSection() {
  return <section id="hero" className="studio-hero"><div className="studio-container">
    <div className="studio-eyebrow flex items-center justify-between gap-4"><span className="flex items-center gap-2"><span className="size-2 rounded-full bg-[#e65432]" />Independent digital studio</span><span className="hidden sm:block">Charlottetown, PEI / Working everywhere</span></div>
    <div className="hero-heading-row"><h1>Small island.<br /><span className="font-serif-display italic">Big presence.</span></h1><Asterisk className="hero-asterisk" strokeWidth={1} aria-hidden="true" /></div>
    <div className="hero-bottom-row"><p>Thoughtful websites. Useful AI. A clearer path to your next customer. We help ambitious businesses show up and stand out.</p><div className="flex flex-wrap gap-3"><a href="#contact" className="studio-button">Let’s build something <ArrowUpRight size={18} /></a><a href="#portfolio" className="studio-button studio-button-outline">Explore our work <ArrowDown size={17} /></a></div></div>
    <div className="hero-projects">
      <Link prefetch={false} href="/showcase/pelagic" className="hero-project hero-project-main group"><Image src="/assets/showcase/pelagic-hero.jpg" alt="Pelagic marine technology design concept" fill priority fetchPriority="high" quality={65} sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) 62vw, 760px" className="object-cover transition duration-700 group-hover:scale-105" /><div className="hero-project-shade" /><span className="hero-project-label">01 / Interactive concept</span><div className="hero-project-title"><span>Pelagic<span className="block text-sm font-normal tracking-normal opacity-80">A new current in digital design.</span></span><ArrowUpRight /></div></Link>
      <a href="https://www.listedpei.ca/geo-audit" target="_blank" rel="noopener noreferrer" className="hero-audit-card"><div className="flex items-center justify-between"><span className="studio-eyebrow">Built here. For here.</span><ArrowUpRight size={22} /></div><div className="audit-orbit" aria-hidden="true"><Asterisk size={76} strokeWidth={1} /></div><div><p className="text-3xl font-medium tracking-tight">Get found in<br />the age of AI.</p><p className="mt-3 text-sm opacity-70">Meet the free ListedPEI visibility audit.</p></div></a>
    </div><div className="hero-caption"><span>Design with purpose. Built with care.</span><span>Web / AI / Local growth</span></div>
  </div></section>;
}
