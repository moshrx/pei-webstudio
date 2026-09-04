"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";

/**
 * The before/after browser mockups. Rendered as markup rather than images so
 * the section stays sharp on any screen and costs nothing to download, which
 * matters because this page is the landing target for paid social traffic.
 *
 * On mobile the two frames stack behind a toggle: showing both at phone width
 * shrinks each to the point where neither reads.
 */
type Pane = "before" | "after";

function BeforeFrame() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/15 bg-[#e9e9ea] shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-black/10 bg-[#dcdcde] px-3 py-2">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-1 border-b border-black/10 px-3 py-2 text-[9px] font-bold uppercase text-black/70 sm:text-[10px]">
        <span>Home</span>
        <span>About</span>
        <span>Services</span>
        <span>Gallery</span>
        <span>Contact</span>
      </div>
      <div className="p-3 sm:p-4">
        <p className="text-sm font-bold leading-tight text-[#1e46b4] sm:text-base">
          WELCOME TO
          <br />
          OUR WEBSITE
        </p>
        <p className="mt-2 text-[9px] font-bold uppercase text-black/70 sm:text-[10px]">
          We provide the best services for you
        </p>
        <div className="mt-2 space-y-1">
          {[100, 92, 78].map((width) => (
            <div key={width} className="h-1.5 rounded bg-black/15" style={{ width: `${width}%` }} />
          ))}
        </div>
        <div className="mt-3 inline-block rounded bg-[#1e46b4] px-3 py-1 text-[9px] font-bold text-white">
          LEARN MORE
        </div>
        <div className="mt-3 border-t border-black/10 pt-2">
          <p className="text-[10px] font-extrabold uppercase text-black/80">About Us</p>
          <div className="mt-1.5 space-y-1">
            {[100, 88].map((width) => (
              <div key={width} className="h-1.5 rounded bg-black/15" style={{ width: `${width}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AfterFrame() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/25 bg-white shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-black/[0.06] px-3 py-2">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="flex items-center justify-between border-b border-black/[0.06] px-3 py-2">
        <div className="flex gap-3 text-[9px] font-semibold text-black/60 sm:text-[10px]">
          <span className="text-black">Home</span>
          <span>Services</span>
          <span className="hidden xs:inline">Reviews</span>
        </div>
        <span className="rounded-full bg-[#1355ff] px-2.5 py-1 text-[8px] font-bold text-white sm:text-[9px]">
          Get a Quote
        </span>
      </div>
      <div className="p-3 sm:p-4">
        <p className="text-base font-extrabold leading-[1.15] tracking-tight text-black sm:text-lg">
          We Build Websites That{" "}
          <span className="text-[#1355ff]">Grow</span> Your Business.
        </p>
        <p className="mt-2 text-[10px] leading-snug text-black/55">
          Modern design. Better experience. Real results.
        </p>
        <div className="mt-3 flex items-center gap-2">
          <span className="rounded-full bg-[#1355ff] px-3 py-1.5 text-[9px] font-bold text-white">
            Get a Free Quote
          </span>
          <span className="text-[9px] font-semibold text-[#1355ff]">Our Services</span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-black/[0.06] pt-3">
          {[
            ["Fast", "48-hour"],
            ["Mobile", "Any screen"],
            ["Clean", "Converts"]
          ].map(([title, sub]) => (
            <div key={title}>
              <p className="text-[9px] font-bold text-black">{title}</p>
              <p className="text-[8px] text-black/50">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BeforeAfter() {
  const [pane, setPane] = useState<Pane>("after");

  return (
    <div>
      {/* Mobile: one frame at a time, toggled. */}
      <div className="md:hidden">
        <div
          role="tablist"
          aria-label="Compare before and after"
          className="mx-auto mb-5 flex w-full max-w-xs rounded-full border border-white/15 bg-white/5 p-1"
        >
          {(["before", "after"] as const).map((key) => (
            <button
              key={key}
              role="tab"
              aria-selected={pane === key}
              aria-controls={`pane-${key}`}
              onClick={() => setPane(key)}
              className={`flex min-h-[46px] flex-1 items-center justify-center gap-1.5 rounded-full py-2.5 text-sm font-extrabold uppercase tracking-wide transition ${
                pane === key
                  ? key === "before"
                    ? "bg-[#ff2d78] text-white"
                    : "bg-[#c8ff2e] text-black"
                  : "text-white/60"
              }`}
            >
              {key === "before" ? <X className="size-4" /> : <Check className="size-4" />}
              {key}
            </button>
          ))}
        </div>

        <div id={`pane-${pane}`} role="tabpanel">
          {pane === "before" ? <BeforeFrame /> : <AfterFrame />}
        </div>

        <p className="mt-4 text-center text-sm text-white/55">
          {pane === "before"
            ? "Cluttered, dated, and nobody calls."
            : "Clear, fast, and built to get you booked."}
        </p>
      </div>

      {/* Desktop: both frames side by side. */}
      <div className="hidden gap-6 md:grid md:grid-cols-2 lg:gap-8">
        <div>
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-md bg-white px-3 py-1 text-sm font-extrabold uppercase tracking-wide text-black">
            Before <X className="size-4 text-[#ff2d78]" strokeWidth={3} />
          </span>
          <BeforeFrame />
        </div>
        <div>
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-md bg-[#c8ff2e] px-3 py-1 text-sm font-extrabold uppercase tracking-wide text-black">
            After <Check className="size-4" strokeWidth={3} />
          </span>
          <AfterFrame />
        </div>
      </div>
    </div>
  );
}
