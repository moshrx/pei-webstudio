import {
  ArrowUpRight,
  BadgeCheck,
  Bot,
  Braces,
  MapPinned,
  MessageSquareText,
  Search
} from "lucide-react";

import { SectionGlow } from "@/components/SectionGlow";

const signals = [
  { icon: Search, label: "AI discoverability", detail: "Can crawlers find you?" },
  { icon: MapPinned, label: "Business identity", detail: "Is who and where clear?" },
  { icon: MessageSquareText, label: "Answer readiness", detail: "Do pages answer real questions?" },
  { icon: BadgeCheck, label: "Trust & evidence", detail: "Can your claims be verified?" },
  { icon: Braces, label: "Technical clarity", detail: "Can machines read the structure?" }
];

export function GeoAuditSection() {
  return (
    <section id="geo-audit" className="relative overflow-hidden py-20 sm:py-28">
      <SectionGlow className="left-0 top-1/4" />

      <div className="relative mx-auto w-[min(1100px,calc(100%-2rem))]">
        <div
          className="liquid-glass overflow-hidden rounded-[2rem]"
        >
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-body/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-body/65">
                  A ListedPEI tool
                </span>
                <span className="flex items-center gap-1.5 text-xs font-medium text-body/55">
                  <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                  Free for PEI businesses
                </span>
              </div>

              <h2 className="font-serif-display mt-7 max-w-xl text-4xl leading-[1.02] text-body sm:text-5xl md:text-6xl">
                Will AI recommend your business?
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-body/65 sm:text-lg">
                Run your website through our free AI visibility audit. You&apos;ll get a
                transparent 100-point readiness score, the issues holding you back,
                and a practical list of what to improve next.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="https://www.listedpei.ca/geo-audit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-body px-6 py-3 text-sm font-semibold text-page transition-transform hover:-translate-y-0.5"
                >
                  Check my AI visibility
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
                <span className="text-center text-xs text-body/50 sm:text-left">
                  No credit card · Actionable results
                </span>
              </div>

              <p className="mt-7 max-w-lg border-l border-body/15 pl-4 text-sm leading-6 text-body/55">
                This is a readiness audit, not a ranking promise. AI answers change;
                the fundamentals of clear, useful, trustworthy content do not.
              </p>
            </div>

            <div className="border-t border-body/10 bg-body/[0.035] p-5 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div className="rounded-2xl border border-body/10 bg-page/55 p-5 shadow-2xl shadow-black/5 sm:p-6">
                <div className="flex items-center justify-between border-b border-body/10 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="grid size-10 place-items-center rounded-full bg-body text-page">
                      <Bot className="size-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-body">AI visibility readiness</p>
                      <p className="text-xs text-body/45">Five signals · 100 points</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Live
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {signals.map((signal) => (
                    <div
                      key={signal.label}
                      className="flex items-center gap-3 rounded-xl border border-body/[0.08] bg-body/[0.025] p-3.5"
                    >
                      <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-body/[0.07] text-body/75">
                        <signal.icon className="size-4" aria-hidden="true" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-body">{signal.label}</p>
                        <p className="mt-0.5 text-xs text-body/45">{signal.detail}</p>
                      </div>
                      <span className="text-xs font-semibold tabular-nums text-body/45">/20</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between rounded-xl bg-body px-4 py-3 text-page">
                  <span className="text-xs font-medium text-page/65">Your next best move</span>
                  <span className="text-xs font-semibold">Priority action plan →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
