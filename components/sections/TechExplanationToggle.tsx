"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";

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

export function TechExplanationToggle() {
  const [showTechSpeak, setShowTechSpeak] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-center gap-4">
        <span className={`text-sm font-medium transition-colors ${!showTechSpeak ? "text-foreground" : "text-foreground/60"}`}>
          Plain English
        </span>
        <Switch
          checked={showTechSpeak}
          onCheckedChange={setShowTechSpeak}
          aria-label="Toggle tech speak"
        />
        <span className={`text-sm font-medium transition-colors ${showTechSpeak ? "text-foreground" : "text-foreground/60"}`}>
          Tech Speak
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {techExplanations.map((item, index) => (
          <motion.div
            key={item.phase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full p-3 sm:p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-xs font-semibold sm:text-sm">{item.phase}</h3>
              </div>
              <div className="relative min-h-[60px] sm:min-h-[70px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${item.phase}-${showTechSpeak}`}
                    initial={{ opacity: 0, y: showTechSpeak ? 10 : -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: showTechSpeak ? -10 : 10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <p className="text-xs text-foreground/70 sm:text-sm leading-relaxed">
                      {showTechSpeak ? item.techSpeak : item.plainEnglish}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
