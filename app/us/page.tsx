import type { Metadata } from "next";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  Clock,
  Globe,
  MessageSquare,
  ShieldCheck,
  X
} from "lucide-react";

import { BeforeAfter } from "@/components/us/BeforeAfter";
import { FixRequestForm } from "@/components/us/FixRequestForm";

export const metadata: Metadata = {
  title: "Broken Website? One Small Fix, $49 | PEI Web Studio",
  description:
    "Broken mobile layout, dead buttons, a contact form that eats messages? We fix one small thing on your website for $49, usually within 48 hours. Ask first, pay after we confirm it is a small fix.",
  alternates: { canonical: "https://peiwebstudio.ca/us" },
  openGraph: {
    type: "website",
    url: "https://peiwebstudio.ca/us",
    siteName: "PEI Web Studio",
    title: "Got a Broken Website? One Small Fix, $49",
    description:
      "Small fix, big difference. We fix broken layouts, dead buttons, and busted contact forms for $49, usually in 48 hours."
  },
  twitter: {
    card: "summary_large_image",
    title: "Got a Broken Website? One Small Fix, $49",
    description:
      "Small fix, big difference. Broken layouts, dead buttons, busted forms. Fixed in about 48 hours."
  },
  robots: { index: true, follow: true }
};

/* Pulled from the main site's portfolio, reframed for clients outside Canada. */
const proofProjects = [
  {
    name: "Lustrouz Aesthetics",
    where: "Toronto, CA",
    what: "Skincare clinic site rebuilt around one goal: booked appointments."
  },
  {
    name: "Lootbins Canada",
    where: "Online retail",
    what: "Shopify storefront cleaned up so browsing to checkout stopped losing people."
  },
  {
    name: "Listed PEI",
    where: "Directory platform",
    what: "Listings, search, and enquiries wired together with no manual updates."
  },
  {
    name: "Mos Tire",
    where: "Wholesale supplier",
    what: "Fast, plain site so shops and fleet buyers find stock without digging."
  }
];

const fixes = [
  "Broken mobile layouts",
  "Buttons that do nothing",
  "Weird spacing and alignment",
  "Contact forms that eat messages",
  "Text and image swaps",
  "Slow, heavy pages",
  "Broken links and 404s",
  "Images that stretch or crop wrong"
];

const notCovered = [
  "A brand new website",
  "A full redesign of every page",
  "Custom features built from scratch",
  "Ongoing monthly maintenance"
];

const steps = [
  {
    number: "01",
    title: "Send it over",
    body: "Paste your website address and tell us what is broken. Takes about a minute, and no card is needed."
  },
  {
    number: "02",
    title: "We confirm the price",
    body: "A real person looks at your site. If it is a small fix, we send a $49 payment link. If it is bigger, we say so and quote it honestly."
  },
  {
    number: "03",
    title: "Fixed and back to you",
    body: "You pay, we fix it, usually inside 48 hours. You get a note explaining exactly what changed."
  }
];

const faqs = [
  {
    q: "Is it really $49?",
    a: "Yes, for one small fix. We confirm the price before you pay anything. If your problem turns out to be bigger than a small fix, we tell you upfront and quote it separately. You are never charged for asking."
  },
  {
    q: "What counts as one small fix?",
    a: "Something a developer can sort out in well under an hour. A broken layout on phones, a button that does nothing, a contact form that stopped sending, spacing that looks off, swapping text or images. If you are unsure, just ask."
  },
  {
    q: "Which platforms do you work on?",
    a: "Shopify and custom-coded websites. Those are what we build and maintain every day, so those are the only ones we will take your money for. If your site is on something else, tell us anyway and we will be straight with you."
  },
  {
    q: "I am not in Canada. Does that matter?",
    a: "No. The work happens over email and your site is on the internet, same as ours. We work with clients across time zones and reply in plain English, not developer jargon."
  },
  {
    q: "Do you need my passwords?",
    a: "We need access to whatever holds your site, which usually means a collaborator invite rather than your personal password. We will tell you exactly what we need and nothing more."
  },
  {
    q: "What if the fix does not work?",
    a: "Then it is not finished, and we keep going until it is or refund you. We are not interested in taking $49 for a job left half done."
  }
];

const badges = [
  { icon: Clock, title: "About 48 hours", body: "Most small fixes, start to finish" },
  { icon: Globe, title: "Anywhere you are", body: "Time zones are not a problem" },
  { icon: ShieldCheck, title: "Nothing breaks", body: "We touch only what you asked for" }
];

export default function USFixPage() {
  return (
    <main
      id="main-content"
      role="main"
      className="relative min-h-screen overflow-x-hidden bg-[#0a0a0b] text-white"
    >
      {/* Poster-style glows. Purely decorative. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px] opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 78% 8%, rgba(255,45,120,0.30) 0%, rgba(255,45,120,0) 70%), radial-gradient(55% 45% at 10% 30%, rgba(200,255,46,0.16) 0%, rgba(200,255,46,0) 70%)"
        }}
      />

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative px-5 pb-14 pt-14 sm:px-6 sm:pt-20">
        <div className="mx-auto w-full max-w-5xl">
          <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:gap-12">
            <div className="w-full md:flex-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white/75">
                <span className="size-1.5 animate-pulse rounded-full bg-[#c8ff2e]" />
                One small fix
              </span>

              <h1 className="mt-5 text-[2.6rem] font-black uppercase leading-[0.92] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
                <span className="block text-white">Got a broken</span>
                <span className="mt-1.5 inline-block bg-[#c8ff2e] px-2.5 py-0.5 text-black">
                  website?
                </span>
              </h1>

              <p className="mt-4 text-2xl font-bold italic text-[#ff2d78] sm:text-3xl">
                We got you.
              </p>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                Something on your site is broken and it has been bugging you for
                weeks. Send it to us. We fix one small thing for $49, usually
                inside 48 hours, and you do not pay until we confirm it is
                actually a small fix.
              </p>

              <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
                <a
                  href="#fix-form"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c8ff2e] px-8 py-4 text-base font-extrabold uppercase tracking-wide text-black transition active:scale-[0.98]"
                >
                  <MessageSquare className="size-5" />
                  Tell us what broke
                </a>
                <a
                  href="#what-we-fix"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-bold text-white transition active:scale-[0.98]"
                >
                  See what we fix
                  <ArrowRight className="size-4" />
                </a>
              </div>

              <p className="mt-4 text-sm text-white/45">
                No card to ask. No subscription. No sales call.
              </p>
            </div>

            {/* $49 stamp */}
            <div className="mx-auto shrink-0 md:mx-0">
              <div className="flex size-36 flex-col items-center justify-center rounded-full bg-[#ff2d78] text-white shadow-[0_0_60px_rgba(255,45,120,0.35)] sm:size-44">
                <span className="text-5xl font-black leading-none sm:text-6xl">$49</span>
                <span className="mt-1 text-sm font-bold uppercase tracking-[0.16em]">
                  only
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Before / After ─────────────────────────────────────────────── */}
      <section className="relative border-t border-white/[0.07] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="text-center text-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-4xl">
            Small fix.{" "}
            <span className="italic text-[#ff2d78]">Big difference.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-base text-white/60">
            You do not always need a new website. Sometimes you just need the
            broken parts to stop being broken.
          </p>

          <div className="mt-10">
            <BeforeAfter />
          </div>
        </div>
      </section>

      {/* ── What we fix ────────────────────────────────────────────────── */}
      <section
        id="what-we-fix"
        className="relative scroll-mt-4 border-t border-white/[0.07] px-5 py-14 sm:px-6 sm:py-20"
      >
        <div className="mx-auto grid w-full max-w-5xl gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <span className="inline-block bg-[#ff2d78] px-3 py-1 text-sm font-extrabold uppercase tracking-wide text-white">
              We fix stuff like
            </span>
            <ul className="mt-6 space-y-3.5">
              {fixes.map((fix) => (
                <li key={fix} className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 size-5 shrink-0 text-[#c8ff2e]"
                    strokeWidth={3}
                    aria-hidden="true"
                  />
                  <span className="text-base text-white/85">{fix}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base text-white/55">
              Not on the list? Ask anyway. If it is small, it counts.
            </p>
          </div>

          <div className="rounded-3xl border border-white/12 bg-white/[0.03] p-6 sm:p-7">
            <div className="flex items-center gap-2.5">
              <AlertTriangle className="size-5 text-[#ff2d78]" aria-hidden="true" />
              <h3 className="text-lg font-extrabold uppercase tracking-wide text-white">
                What $49 does not cover
              </h3>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-white/60">
              We would rather say this upfront than take your money and
              disappoint you.
            </p>
            <ul className="mt-5 space-y-3">
              {notCovered.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X
                    className="mt-0.5 size-5 shrink-0 text-white/35"
                    strokeWidth={3}
                    aria-hidden="true"
                  />
                  <span className="text-[15px] text-white/70">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-white/10 pt-5 text-[15px] leading-relaxed text-white/70">
              Those are real projects with real quotes. Ask us and we will price
              it properly instead of pretending it fits in $49.
            </p>
          </div>
        </div>
      </section>

      {/* ── How it works ───────────────────────────────────────────────── */}
      <section className="relative border-t border-white/[0.07] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl">
            How it works
          </h2>
          <p className="mt-3 max-w-lg text-base text-white/60">
            Three steps, and you are only charged at step two.
          </p>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/12 bg-white/[0.03] p-6"
              >
                <span className="text-4xl font-black text-[#c8ff2e]">{step.number}</span>
                <h3 className="mt-3 text-lg font-extrabold uppercase tracking-wide text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/65">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {badges.map((badge) => (
              <div
                key={badge.title}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4"
              >
                <badge.icon className="size-6 shrink-0 text-[#c8ff2e]" aria-hidden="true" />
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-wide text-white">
                    {badge.title}
                  </p>
                  <p className="text-[13px] text-white/55">{badge.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proof ──────────────────────────────────────────────────────── */}
      <section className="relative border-t border-white/[0.07] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl">
            We build the real thing too
          </h2>
          <p className="mt-3 max-w-xl text-base text-white/60">
            The $49 fix is the small door. Behind it is a studio that ships full
            websites, stores, and automations for clients in several countries.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {proofProjects.map((project) => (
              <div
                key={project.name}
                className="rounded-2xl border border-white/12 bg-white/[0.03] p-5"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-extrabold text-white">{project.name}</h3>
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#c8ff2e]">
                    {project.where}
                  </span>
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-white/65">
                  {project.what}
                </p>
              </div>
            ))}
          </div>

          <a
            href="https://peiwebstudio.ca"
            className="mt-7 inline-flex min-h-[44px] items-center gap-2 text-base font-bold text-white underline decoration-[#c8ff2e] decoration-2 underline-offset-4"
          >
            See the full studio site
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>

      {/* ── Form ───────────────────────────────────────────────────────── */}
      <section
        id="fix-form"
        className="relative scroll-mt-4 border-t border-white/[0.07] px-5 py-14 sm:px-6 sm:py-20"
      >
        <div className="mx-auto w-full max-w-2xl">
          <h2 className="text-center text-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-4xl">
            Send it over
          </h2>
          <p className="mx-auto mt-3 max-w-md text-center text-base text-white/60">
            One minute to fill in. A real person reads it and replies.
          </p>
          <div className="mt-8">
            <FixRequestForm />
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="relative border-t border-white/[0.07] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto w-full max-w-3xl">
          <h2 className="text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl">
            Straight answers
          </h2>

          <div className="mt-8 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-white/12 bg-white/[0.03] px-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-bold text-white">
                  {faq.q}
                  <span
                    aria-hidden="true"
                    className="grid size-7 shrink-0 place-items-center rounded-full border border-white/20 text-lg leading-none text-[#c8ff2e] transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="pb-5 text-[15px] leading-relaxed text-white/65">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ────────────────────────────────────────────────── */}
      <section className="relative border-t border-white/[0.07] px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto w-full max-w-3xl text-center">
          <h2 className="text-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl">
            Stop staring at the
            <span className="mt-1.5 block italic text-[#ff2d78]">broken bit.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-white/60">
            It takes a minute to ask and costs nothing to find out.
          </p>
          <a
            href="#fix-form"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#c8ff2e] px-8 py-4 text-base font-extrabold uppercase tracking-wide text-black transition active:scale-[0.98] sm:w-auto"
          >
            <MessageSquare className="size-5" />
            Send my fix request
          </a>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.07] px-5 py-10 sm:px-6">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>PEI Web Studio. Websites, stores, and automation.</p>
          <div className="flex flex-wrap items-center gap-x-5">
            <a
              href="mailto:peiwebstudio@gmail.com"
              className="inline-flex min-h-[44px] items-center hover:text-white"
            >
              peiwebstudio@gmail.com
            </a>
            <a
              href="https://peiwebstudio.ca"
              className="inline-flex min-h-[44px] items-center hover:text-white"
            >
              peiwebstudio.ca
            </a>
            <a href="/legal" className="inline-flex min-h-[44px] items-center hover:text-white">
              Legal
            </a>
          </div>
        </div>
      </footer>

      {/* Sticky mobile CTA. Hidden on desktop where the page CTAs are always near. */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0a0a0b]/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-md md:hidden">
        <a
          href="#fix-form"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#c8ff2e] py-3.5 text-base font-extrabold uppercase tracking-wide text-black active:scale-[0.98]"
        >
          Fix my site for $49
        </a>
      </div>
      {/* Spacer so the sticky bar never covers the footer's last line. */}
      <div aria-hidden="true" className="h-20 md:hidden" />
    </main>
  );
}
