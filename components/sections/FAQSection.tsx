"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

import { SectionGlow } from "@/components/SectionGlow";

const faqs = [
  {
    question: "What does a technology upgrade include?",
    answer:
      "It can include a new website, SEO structure, AI-assisted workflows, lead capture, analytics, CRM handoff, and training. We choose the pieces that create the most useful business impact."
  },
  {
    question: "Do we need AI on day one?",
    answer:
      "No. We only add AI where it saves time or improves customer response. Some businesses need automation immediately; others start with a faster website and add AI after the workflow is clear."
  },
  {
    question: "Can my team update the site?",
    answer:
      "Yes. We build manageable systems and provide training, documentation, and practical handoff. You should not need a developer for routine content, service, or offer changes."
  },
  {
    question: "Will the site be fast and search-ready?",
    answer:
      "Yes. Performance, technical SEO, mobile experience, semantic structure, metadata, local signals, and analytics are part of the build rather than an afterthought."
  },
  {
    question: "Who owns the data and accounts?",
    answer:
      "You do. We help set up the right accounts, tracking, and integrations so your business keeps control of its site, analytics, automations, and marketing assets."
  },
  {
    question: "Do you provide ongoing optimization?",
    answer:
      "Yes. After launch, we can monitor performance, improve conversion paths, run landing page tests, update content, maintain automations, and support future feature work."
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
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="liquid-glass rounded-2xl"
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-medium text-body">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <Plus className="size-5 text-body/60" />
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
            <p className="px-5 pb-5 leading-relaxed text-body/60">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <SectionGlow className="right-1/4 top-1/4" />

      <div className="relative mx-auto w-[min(1100px,calc(100%-2rem))]">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif-display mb-12 text-3xl text-body sm:text-4xl md:text-5xl"
        >
          Questions before you upgrade
        </motion.h2>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex items-center justify-center gap-2 text-sm"
        >
          <span className="text-body/60">Still have questions?</span>
          <a href="#contact" className="font-medium text-body underline underline-offset-4">
            Let&apos;s talk
          </a>
        </motion.div>
      </div>
    </section>
  );
}
