"use client";

import { useState } from "react";

const techExplanations = [
  { phase: "1. Page loading", techSpeak: "Server-rendered pages and optimized assets where appropriate.", plainEnglish: "We keep pages focused and check loading performance before launch." },
  { phase: "2. Mobile layout", techSpeak: "Responsive layouts tested at common viewport sizes.", plainEnglish: "Your pages adapt to phones, tablets, and desktop screens." },
  { phase: "3. Content updates", techSpeak: "An editing workflow selected to match your project scope.", plainEnglish: "We agree on how you will update your content and show you how it works." },
  { phase: "4. Search basics", techSpeak: "Page metadata, semantic HTML, and a sitemap for discoverability.", plainEnglish: "We help search engines understand your pages. Rankings are not guaranteed." },
  { phase: "5. Reliability", techSpeak: "TypeScript, server-side validation, and launch checks.", plainEnglish: "We test the important paths and agree on support for future changes." }
];

const options = [
  { key: false, label: "Plain English" },
  { key: true, label: "Tech Speak" }
];

export function TechExplanationToggle() {
  const [showTechSpeak, setShowTechSpeak] = useState(false);

  return (
    <div className="space-y-8">
      {/* Segmented switch */}
      <div className="liquid-glass mx-auto flex w-fit rounded-full p-1">
        {options.map((option) => {
          const active = option.key === showTechSpeak;
          return (
            <button
              key={option.label}
              onClick={() => setShowTechSpeak(option.key)}
              aria-pressed={active}
              className="relative rounded-full px-5 py-2 text-sm font-medium transition-colors"
            >
              {active && (
                <span
                  className="absolute inset-0 rounded-full bg-body"
                />
              )}
              <span className={`relative z-10 ${active ? "text-page" : "text-body/70"}`}>
                {option.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {techExplanations.map((item) => (
          <div
            key={item.phase}
            className="liquid-glass rounded-2xl p-4"
          >
            <h3 className="text-xs font-semibold text-body sm:text-sm">{item.phase}</h3>
            <div className="relative mt-2 min-h-[70px]">
              <>
                <p
                  key={`${item.phase}-${showTechSpeak}`}
                  className="text-xs leading-relaxed text-body/60 sm:text-sm"
                >
                  {showTechSpeak ? item.techSpeak : item.plainEnglish}
                </p>
              </>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
