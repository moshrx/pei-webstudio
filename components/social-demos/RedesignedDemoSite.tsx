import { ArrowRight, Check, PhoneCall, Quote } from "lucide-react";

import type { DemoBusiness } from "./data";
import { redesignIcons } from "./data";

export function RedesignedDemoSite({ business }: { business: DemoBusiness }) {
  const accent = `rgb(${business.colors.accent})`;
  const accentDark = `rgb(${business.colors.accentDark})`;
  const soft = `rgb(${business.colors.soft})`;

  return (
    <main className="min-h-screen bg-[#fbfaf7] pb-28 text-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-900/10 bg-[#fbfaf7]/92 backdrop-blur">
        <div className="mx-auto flex w-[min(1160px,calc(100%-2rem))] items-center justify-between py-4">
          <a href="#top" className="flex items-center gap-3" aria-label={`${business.name} home`}>
            <span className="flex size-10 items-center justify-center rounded-xl text-sm font-black text-white" style={{ backgroundColor: accent }}>
              HH
            </span>
            <span>
              <span className="block text-sm font-bold tracking-tight">{business.name}</span>
              <span className="block text-xs text-slate-500">{business.demoNotice}</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            {["Services", "Reviews", "FAQ", "Quote"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-slate-950">
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#quote"
            className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_30px_rgb(20_116_108/0.25)]"
            style={{ backgroundColor: accent }}
          >
            Get a Free Quote
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto grid w-[min(1160px,calc(100%-2rem))] items-center gap-12 py-14 md:grid-cols-[1.02fr_0.98fr] md:py-20">
          <div>
            <p className="inline-flex rounded-full border border-slate-900/10 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-slate-600">
              {business.redesign.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-slate-950 md:text-7xl">
              {business.redesign.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {business.redesign.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-bold text-white"
                style={{ backgroundColor: accent }}
              >
                {business.redesign.primaryCta}
                <ArrowRight className="size-5" aria-hidden="true" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-slate-900/12 bg-white px-7 py-4 text-base font-bold text-slate-900"
              >
                {business.redesign.secondaryCta}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {business.redesign.proof.map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm">
                  <Check className="size-4" style={{ color: accent }} aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem]" style={{ backgroundColor: soft }} />
            <div className="overflow-hidden rounded-2xl border border-slate-900/10 bg-white shadow-[0_24px_80px_rgb(15_23_42/0.12)]">
              <div className="aspect-[4/3] bg-[linear-gradient(135deg,#e7f3f1,#ffffff_42%,#d8ece8)] p-5">
                <div className="flex h-full flex-col justify-between rounded-xl border border-white/80 bg-white/70 p-5 shadow-inner">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-bold text-slate-500">Quote request</p>
                      <h2 className="mt-2 max-w-xs text-3xl font-semibold leading-tight text-slate-950">
                        Leak under kitchen sink
                      </h2>
                    </div>
                    <span className="rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: accentDark }}>
                      Today
                    </span>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {[
                      ["Arrival", "2-4 PM"],
                      ["Quote", "Before repair"],
                      ["Status", "Booked"]
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-xl bg-white p-3 shadow-sm">
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{label}</p>
                        <p className="mt-1 text-lg font-semibold">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-sm font-medium text-slate-500">
              {business.redesign.statLine}
            </p>
          </div>
        </div>
      </section>

      <section aria-label="Trust signals" className="border-y border-slate-900/10 bg-white">
        <div className="mx-auto grid w-[min(1160px,calc(100%-2rem))] gap-px md:grid-cols-4">
          {[
            [redesignIcons.Clock, "Clear windows", "Know when help is coming"],
            [redesignIcons.ShieldCheck, "Upfront options", "Approve work before repair"],
            [redesignIcons.BadgeCheck, "Tidy finish", "Clean work area, clear notes"],
            [redesignIcons.Home, "Home focused", "Built for residential repairs"]
          ].map(([Icon, title, text]) => (
            <div key={title as string} className="px-2 py-7">
              <Icon className="size-5" style={{ color: accent }} aria-hidden="true" />
              <h2 className="mt-3 text-lg font-semibold tracking-tight">{title as string}</h2>
              <p className="mt-1 text-sm leading-6 text-slate-500">{text as string}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto w-[min(1160px,calc(100%-2rem))] py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em]" style={{ color: accent }}>Services</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Practical help for the repairs homeowners actually search for.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {business.redesign.services.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-2xl border border-slate-900/10 bg-white p-5 shadow-sm">
              <Icon className="size-6" style={{ color: accent }} aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white md:py-20">
        <div className="mx-auto grid w-[min(1160px,calc(100%-2rem))] gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-white/55">Why it converts</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              Cleaner message, fewer dead ends, faster decisions.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {business.redesign.benefits.map((benefit) => (
              <div key={benefit} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <Check className="size-5" style={{ color: accent }} aria-hidden="true" />
                <p className="mt-3 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto w-[min(1160px,calc(100%-2rem))] py-16 md:py-24">
        <div className="grid gap-4 md:grid-cols-2">
          {business.redesign.testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-2xl border border-slate-900/10 bg-white p-6 shadow-sm">
              <Quote className="size-7" style={{ color: accent }} aria-hidden="true" />
              <blockquote className="mt-5 text-2xl font-semibold leading-snug tracking-tight">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-slate-500">
                <span className="font-bold text-slate-950">{testimonial.name}</span> / {testimonial.context}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto w-[min(900px,calc(100%-2rem))] py-6 md:py-12">
        <h2 className="text-4xl font-semibold tracking-tight">Common questions</h2>
        <div className="mt-8 divide-y divide-slate-900/10 rounded-2xl border border-slate-900/10 bg-white">
          {business.redesign.faqs.map((faq) => (
            <details key={faq.question} className="group p-5">
              <summary className="cursor-pointer list-none text-lg font-semibold tracking-tight">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="quote" className="mx-auto w-[min(1160px,calc(100%-2rem))] py-16 md:py-24">
        <div className="grid gap-8 rounded-3xl bg-white p-6 shadow-[0_24px_80px_rgb(15_23_42/0.10)] md:grid-cols-[0.85fr_1.15fr] md:p-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em]" style={{ color: accent }}>Get a quote</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">Tell us what is leaking, clogged, or ready to replace.</h2>
            <p className="mt-4 leading-7 text-slate-600">
              This form is intentionally functional-looking for recording. Replace it with the real business form when making a live site.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-700">
              <PhoneCall className="size-4" style={{ color: accent }} aria-hidden="true" />
              Fictional demo contact only
            </p>
          </div>
          <form className="grid gap-4" aria-label="Redesigned demo quote form">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold">
                Name
                <input className="rounded-xl border border-slate-900/12 px-4 py-3 font-normal outline-none focus:ring-2" placeholder="Alex Morgan" />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Email
                <input type="email" className="rounded-xl border border-slate-900/12 px-4 py-3 font-normal outline-none focus:ring-2" placeholder="alex@example.com" />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-semibold">
              What do you need help with?
              <select className="rounded-xl border border-slate-900/12 px-4 py-3 font-normal outline-none focus:ring-2">
                <option>Leak repair</option>
                <option>Fixture replacement</option>
                <option>Water heater issue</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Message
              <textarea className="min-h-28 rounded-xl border border-slate-900/12 px-4 py-3 font-normal outline-none focus:ring-2" placeholder="A short description is enough." />
            </label>
            <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 font-bold text-white" style={{ backgroundColor: accent }}>
              Request Quote
              <ArrowRight className="size-5" aria-hidden="true" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
