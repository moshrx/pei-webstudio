"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What does a technology upgrade include?",
    answer: "It can include a new website, SEO structure, AI-assisted workflows, lead capture, analytics, CRM handoff, and training. We choose the pieces that create the most useful business impact."
  },
  {
    question: "Do we need AI on day one?",
    answer: "No. We only add AI where it saves time or improves customer response. Some businesses need automation immediately; others start with a faster website and add AI after the workflow is clear."
  },
  {
    question: "Can my team update the site?",
    answer: "Yes. We build manageable systems and provide training, documentation, and practical handoff. You should not need a developer for routine content, service, or offer changes."
  },
  {
    question: "Will the site be fast and search-ready?",
    answer: "Yes. Performance, technical SEO, mobile experience, semantic structure, metadata, local signals, and analytics are part of the build rather than an afterthought."
  },
  {
    question: "Who owns the data and accounts?",
    answer: "You do. We help set up the right accounts, tracking, and integrations so your business keeps control of its site, analytics, automations, and marketing assets."
  },
  {
    question: "Do you provide ongoing optimization?",
    answer: "Yes. After launch, we can monitor performance, improve conversion paths, run landing page tests, update content, maintain automations, and support future feature work."
  }
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`rounded-lg border transition-all ${
        isOpen
          ? "border-primary/30 bg-primary/5 shadow-lg shadow-primary/5"
          : "border-border/50 bg-background/80 hover:border-primary/20"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-medium">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="size-5 text-muted-foreground" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 md:py-28">
      <div className="mx-auto w-[min(1100px,calc(100%-1rem))] sm:w-[min(1100px,calc(100%-2rem))]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="mb-3 inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            FAQ
          </span>
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl md:text-4xl">
            Questions before you upgrade
          </h2>
          <p className="mt-3 text-muted-foreground">
            Clear answers on stack, AI, ownership, and support.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-lg border border-border bg-muted/50 px-6 py-3">
            <HelpCircle className="size-5 text-primary" />
            <span className="text-sm">Still have questions?</span>
            <a
              href="#contact"
              className="text-sm font-semibold text-primary hover:underline"
            >
              Let&apos;s talk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
