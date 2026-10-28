"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { SectionGlow } from "@/components/SectionGlow";

const faqs = [
  { question: "Do I need a new website or just a few fixes?", answer: "We review what you have first. If targeted changes will solve the problem, we will explain those. A full rebuild is an option when the structure or platform no longer fits your needs." },
  { question: "How much will it cost?", answer: "New builds and larger improvements receive a written quote based on pages, content, and features. Hosting, domains, subscriptions, and ongoing support are explained separately before you commit." },
  { question: "How long does a project take?", answer: "We agree on a timeline after reviewing the scope. Content, access to your existing site, and feedback affect delivery. You will know what we need from you before work starts." },
  { question: "Which platforms do you work with?", answer: "We build custom websites and work with Shopify. Send your website if you are unsure of its platform; we will confirm whether we can help before quoting." },
  { question: "Can I update the site, and who owns it?", answer: "You keep control of your domain, hosting, and accounts. We agree on an editing workflow for your project and include a walkthrough at handoff." },
  { question: "Can you help after launch?", answer: "Yes. Updates, maintenance, and additional features can be scoped separately. We explain any recurring costs before you choose ongoing support." }
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
    <div
      className="liquid-glass rounded-2xl"
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-medium text-body">{faq.question}</span>
        <div
          className="flex-shrink-0"
        >
          <Plus className="size-5 text-body/60" />
        </div>
      </button>
      <div id={`faq-answer-${index}`} hidden={!isOpen}>
        <p className="px-5 pb-5 leading-relaxed text-body/70">{faq.answer}</p>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <SectionGlow className="right-1/4 top-1/4" />

      <div className="relative mx-auto w-[min(1100px,calc(100%-2rem))]">
        <h2
          className="font-serif-display mb-12 text-3xl text-body sm:text-4xl md:text-5xl"
        >
          Questions before we start
        </h2>

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

        <div
          className="mt-12 flex items-center justify-center gap-2 text-sm"
        >
          <span className="text-body/60">Still have questions?</span>
          <a href="#contact" className="font-medium text-body underline underline-offset-4">
            Let&apos;s talk
          </a>
        </div>
      </div>
    </section>
  );
}
