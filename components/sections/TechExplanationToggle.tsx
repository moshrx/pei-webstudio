"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const techExplanations = [
  {
    phase: "1. Initial Load",
    techSpeak: "Deploying Next.js 15 Partial Prerendering (PPR) for a sub-200ms TTFB.",
    plainEnglish: "Your site pops up instantly, so customers don't get bored and click away."
  },
  {
    phase: "2. Mobile Performance",
    techSpeak: "Eliminating JS bundle bloat via React Server Components (RSC).",
    plainEnglish: "Everything works perfectly on a phone, even with a weak 5G signal in Cornwall."
  },
  {
    phase: "3. Content Updates",
    techSpeak: "Utilizing Type-safe Server Actions for secure, non-interactive state mutation.",
    plainEnglish: "Changing your prices or photos is as easy as sending an email. No code needed."
  },
  {
    phase: "4. Google Search",
    techSpeak: "Dynamic Metadata API integration for automated SEO & Rich Snippet generation.",
    plainEnglish: "We make sure Google knows exactly what you sell so you show up at the top."
  },
  {
    phase: "5. Stability",
    techSpeak: "Strict TypeScript architecture ensuring 99.9% runtime type-safety.",
    plainEnglish: "Your website won't break. It's built on a rock-solid foundation that lasts years."
  }
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
                  className="absolute inset-0 text-xs leading-relaxed text-body/60 sm:text-sm"
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
