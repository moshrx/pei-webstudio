"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Menu, Radio, Sparkles, Waves } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

function ConceptBadge({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/portfolio"
      className={`fixed right-4 top-4 z-50 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur-xl ${dark ? "border-white/20 bg-black/35 text-white" : "border-black/10 bg-white/65 text-black"}`}
    >
      Concept · Back to portfolio
    </Link>
  );
}

export function NocturneShowcase() {
  const { scrollYProgress } = useScroll();
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const titleY = useTransform(scrollYProgress, [0, 0.55], [0, 100]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#09080e] text-[#f5f1ff]">
      <ConceptBadge dark />
      <section className="relative flex min-h-screen flex-col px-5 pb-8 pt-5 sm:px-10 sm:pb-10">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.12, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.82 }}
            transition={{ duration: 1.6, ease }}
            className="absolute inset-0"
          >
            <Image src="/assets/showcase/nocturne-hero.jpg" alt="Abstract violet glass sculpture surrounded by waves of light" fill priority sizes="100vw" className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,8,14,.24),rgba(9,8,14,.3)_45%,#09080e_100%)]" />
          <motion.div
            style={{ y: orbY }}
            className="absolute left-[48%] top-[16%] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#8f5cff] opacity-20 blur-[90px] sm:h-[42rem] sm:w-[42rem]"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
            className="absolute left-1/2 top-1/2 h-[68vw] max-h-[780px] w-[68vw] max-w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-[42%] border border-white/15"
          />
          <motion.div
            animate={{ rotate: -360, scale: [0.92, 1.04, 0.92] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            className="absolute left-1/2 top-1/2 h-[48vw] max-h-[560px] w-[48vw] max-w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-[45%] border border-fuchsia-200/25"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(9,8,14,.86)_88%)]" />
        </div>

        <nav className="relative z-10 flex items-center justify-between border-b border-white/15 pb-5 text-sm uppercase tracking-[0.18em]">
          <span className="font-semibold">Nocturne / 26</span>
          <div className="hidden items-center gap-8 text-white/60 sm:flex">
            <span>Montréal</span><span>12—14 June</span>
          </div>
          <Menu className="size-5" />
        </nav>

        <div className="relative z-10 flex flex-1 items-center justify-center py-20 text-center">
          <motion.div style={{ y: titleY }}>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-5 text-xs uppercase tracking-[0.34em] text-white/55">
              An audiovisual gathering
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, scale: 0.88, filter: "blur(18px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease }}
              className="font-serif-display text-[clamp(5rem,17vw,14rem)] leading-[0.72] tracking-[-0.06em]"
            >
              Nocturne
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }} className="mx-auto mt-9 max-w-md text-base leading-relaxed text-white/75">
              Three nights where sound, light, and digital art reshape the city after dark.
            </motion.p>
          </motion.div>
        </div>

        <div className="relative z-10 flex items-end justify-between border-t border-white/15 pt-5">
          <div className="flex items-center gap-3 text-sm text-white/60"><Radio className="size-4 text-fuchsia-300" /> Live transmission</div>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="flex items-center gap-2 text-sm">Explore <ArrowDown className="size-4" /></motion.div>
        </div>
      </section>

      <section className="relative px-5 py-24 sm:px-10 sm:py-40">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-300">The programme</p>
            <h2 className="font-serif-display mt-6 text-5xl leading-none sm:text-7xl">A frequency for every hour.</h2>
          </div>
          <div className="space-y-3">
            {[['01','Lumen Field','Light installation'],['02','Mira Vale','Spatial sound'],['03','Soft Circuit','Live performance']].map((item, index) => (
              <motion.div key={item[0]} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.12 }} className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-white/15 py-6">
                <span className="text-sm text-white/35">{item[0]}</span><div><h3 className="text-xl sm:text-2xl">{item[1]}</h3><p className="mt-1 text-sm text-white/45">{item[2]}</p></div><ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function PelagicShowcase() {
  const { scrollYProgress } = useScroll();
  const waveX = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#daf8f1] text-[#063a3e]">
      <ConceptBadge />
      <section className="relative min-h-screen px-5 pb-8 pt-5 sm:px-10 sm:pb-10">
        <nav className="relative z-20 flex items-center justify-between text-sm font-semibold uppercase tracking-[0.18em]">
          <div className="flex items-center gap-2"><Waves className="size-5" /> Pelagic</div>
          <div className="hidden gap-8 md:flex"><span>System</span><span>Research</span><span>Contact</span></div>
          <span className="rounded-full border border-[#063a3e]/20 px-4 py-2">Request data</span>
        </nav>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 top-20 overflow-hidden sm:left-[42%]">
          <motion.div initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.3, ease }} className="absolute inset-0">
            <Image src="/assets/showcase/pelagic-hero.jpg" alt="Ocean sensing buoy transmitting circular sonar signals" fill priority sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#daf8f1_0%,rgba(218,248,241,.86)_16%,rgba(218,248,241,0)_55%)] sm:bg-[linear-gradient(90deg,#daf8f1_0%,rgba(218,248,241,.25)_20%,rgba(218,248,241,0)_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,#daf8f1_0%,transparent_35%)] sm:hidden" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center py-24">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.26em]"><Sparkles className="size-4" /> Ocean intelligence</motion.div>
              <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease }} className="text-[clamp(4rem,10vw,9rem)] font-black leading-[0.82] tracking-[-0.075em]">
                Read the<br /><span className="font-serif-display font-normal italic">current.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }} className="mt-8 max-w-lg text-lg leading-relaxed text-[#063a3e]/65">
                Live marine sensing that turns complex coastal conditions into clear, usable decisions.
              </motion.p>
              <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#system" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#ff5d3a] px-6 py-3 font-semibold text-white">See the system <ArrowDown className="size-4" /></motion.a>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.8, rotate: -8 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.1, ease }} className="relative mx-auto hidden aspect-square w-full max-w-[560px] lg:block">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} className="absolute inset-[8%] rounded-full border border-[#063a3e]/25 border-dashed" />
              {[0, 1, 2].map((i) => <motion.span key={i} animate={{ scale: [1, 1.7], opacity: [0.45, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i }} className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff5d3a]/45" />)}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="system" className="relative bg-[#063a3e] px-5 py-28 text-[#daf8f1] sm:px-10 sm:py-40">
        <motion.div style={{ x: waveX }} className="pointer-events-none absolute left-0 top-5 whitespace-nowrap text-[12rem] font-black leading-none text-white/[0.025] sm:text-[20rem]">PELAGIC PELAGIC PELAGIC</motion.div>
        <div className="relative mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.28em] text-[#76dbc9]">One connected view</p>
          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.05em] sm:text-7xl">From water to insight in real time.</h2>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/15">
              {[['24/7','Live sensing'],['18','Coastal stations'],['90 sec','Data refresh'],['Open','API access']].map(([value,label]) => <div key={label} className="bg-[#063a3e] p-6 sm:p-8"><p className="text-3xl text-[#76dbc9] sm:text-4xl">{value}</p><p className="mt-2 text-sm text-white/50">{label}</p></div>)}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
