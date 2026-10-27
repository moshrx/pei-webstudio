"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
                <motion.span
                  layoutId="techTogglePill"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
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
        {techExplanations.map((item, index) => (
          <motion.div
            key={item.phase}
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="liquid-glass rounded-2xl p-4"
          >
            <h3 className="text-xs font-semibold text-body sm:text-sm">{item.phase}</h3>
            <div className="relative mt-2 min-h-[70px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`${item.phase}-${showTechSpeak}`}
                  initial={{ opacity: 0, y: showTechSpeak ? 8 : -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: showTechSpeak ? -8 : 8 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="text-xs leading-relaxed text-body/60 sm:text-sm"
                >
                  {showTechSpeak ? item.techSpeak : item.plainEnglish}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
