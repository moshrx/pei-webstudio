"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How do I get a quote for my website?",
    answer: "Every project is different, so we start with a free call to understand what you need. After that, we send you a detailed quote with exactly what's included — no surprises or hidden fees."
  },
  {
    question: "When can we get started?",
    answer: "We can usually start right away! Once you approve the quote, we schedule a design call to map out exactly what you want. You'll see progress updates throughout so you always know what's happening."
  },
  {
    question: "Can I update the website myself?",
    answer: "Absolutely! That's our specialty. We build sites you can easily manage without touching code. We provide comprehensive training and written documentation. Plus, we're always available if you need help."
  },
  {
    question: "What if I don't like the design?",
    answer: "We work in iterations and your feedback guides every step. You'll see the design before we build anything, and we refine it until you're 100% satisfied. No surprises at launch — only a website you love."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes! All our sites come with 30 days of free support after launch. After that, we offer affordable maintenance packages, or you can manage it yourself. You're never locked into anything."
  },
  {
    question: "Will my website show up on Google?",
    answer: "Every site we build includes SEO fundamentals: fast loading, mobile-friendly design, proper meta tags, and semantic code. Many of our clients rank on the first page for their local keywords within weeks of launch."
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
      className={`rounded-2xl border transition-all ${
        isOpen
          ? "border-primary/30 bg-primary/5 shadow-lg shadow-primary/5"
          : "border-border/50 bg-background hover:border-primary/20"
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
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            FAQ
          </span>
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl md:text-4xl">
            Common Questions
          </h2>
          <p className="mt-3 text-muted-foreground">
            Everything you need to know before getting started
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
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-muted/50 px-6 py-3">
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
