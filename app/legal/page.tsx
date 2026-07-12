"use client";

import { motion } from "framer-motion";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingDock } from "@/components/FloatingDock";
import { SectionGlow } from "@/components/SectionGlow";

const sections = [
  {
    title: "Terms of Service",
    id: "terms",
    content: `These Terms of Service ("Terms") govern your use of the PEI Web Studio website and services. By accessing or using our website, you agree to be bound by these Terms.

You agree to use our website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment. Prohibited behavior includes harassing or causing distress or offense to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.

All content provided on our website is owned by PEI Web Studio or our content suppliers. You may not copy, reproduce, distribute, or transmit any content without our prior written permission.

We reserve the right to modify these Terms at any time. Your continued use of the website constitutes acceptance of updated Terms. We recommend reviewing these Terms periodically for changes.`
  },
  {
    title: "Privacy Policy",
    id: "privacy",
    content: `At PEI Web Studio, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.

Information We Collect:
- Contact information (name, email, phone number, company)
- Information provided through contact forms
- Technical information (IP address, browser type, pages visited)
- Cookies and similar tracking technologies

How We Use Your Information:
- To respond to your inquiries
- To provide our services
- To send marketing communications (with your consent)
- To improve our website and services
- To comply with legal obligations

Data Security:
We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.

Your Rights:
You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us using the information provided.`
  },
  {
    title: "Cookie Policy",
    id: "cookies",
    content: `Our website uses cookies and similar technologies to enhance your browsing experience and understand how our website is used.

Types of Cookies:
- Essential Cookies: Required for the website to function properly
- Functional Cookies: Remember your preferences and choices
- Analytical Cookies: Help us understand how visitors interact with our site
- Marketing Cookies: Track your activity to deliver personalized content

Managing Cookies:
Most web browsers allow you to control cookies through their settings. You can choose to accept or reject cookies, though some features may not function properly if cookies are disabled.

Third-Party Cookies:
We may allow third-party service providers to place cookies on your device. These providers have their own privacy policies governing their use of cookies.`
  },
  {
    title: "Use of Artificial Intelligence",
    id: "ai-disclosure",
    content: `PEI Web Studio uses artificial intelligence (AI) tools as part of our design and development process. We believe in being upfront about this.

What we use AI for:
- Generating initial design concepts, copy drafts, and layout ideas
- Writing and reviewing code to speed up development
- Building AI-powered products and automations for clients
- Research, planning, and problem-solving during projects

What this means for you:
Everything we deliver is reviewed, refined, and tested by a real person before it reaches you. AI helps us work faster and explore more ideas — but the judgement, quality control, and final decisions are always human.

We do not use AI to replace the strategic thinking or communication that goes into your project. Any content, copy, or materials created with AI assistance will be clearly presented to you for review and approval before use.

If you have questions about how AI is used in your specific project, just ask — we're happy to explain.`
  },
  {
    title: "Disclaimer",
    id: "disclaimer",
    content: `The information provided on our website is for general informational purposes only. While we strive to ensure accuracy, we make no warranties or representations about the completeness, accuracy, reliability, or availability of the content.

PEI Web Studio shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of or inability to use the website or services.

External Links:
Our website may contain links to external websites. We are not responsible for the content, accuracy, or practices of these external sites. Your use of external links is at your own risk.

Changes to Content:
We reserve the right to modify, update, or remove any content on our website without notice.`
  },
  {
    title: "Acceptable Use",
    id: "acceptable-use",
    content: `You agree not to use our website for:
- Any unlawful purpose or in violation of any laws or regulations
- Harassment, abuse, or threats toward other users
- Transmission of viruses or malicious code
- Spam or unsolicited communications
- Intellectual property infringement
- Unauthorized access to systems or networks
- Commercial purposes without permission
- Any activity that disrupts the normal functioning of the website

Violations of these terms may result in immediate termination of access to our website.`
  },
  {
    title: "Contact Information",
    id: "contact",
    content: `If you have questions about these legal terms, privacy practices, or our website, please contact us:

Email: peiwebstudio@gmail.com
Phone: (647) 913-1487
Address: Charlottetown, Prince Edward Island, Canada

We'll do our best to respond to your inquiry within 5 business days.`
  }
];

function LegalContent({ content }: { content: string }) {
  return (
    <div className="mt-4 space-y-4 text-body/70">
      {content.split("\n\n").map((paragraph, idx) => (
        <div key={idx}>
          {paragraph.includes(":") && !paragraph.startsWith("- ") ? (
            paragraph.split("\n").map((line, i) =>
              line.includes(":") ? (
                <div key={i} className="mt-3 font-semibold text-body">
                  {line}
                </div>
              ) : (
                <p key={i} className="text-sm leading-relaxed">
                  {line}
                </p>
              )
            )
          ) : (
            paragraph.split("\n").map((line, i) =>
              line.startsWith("- ") ? (
                <div key={i} className="ml-4 text-sm leading-relaxed">
                  <span>• {line.substring(2)}</span>
                </div>
              ) : (
                <p key={i} className="text-sm leading-relaxed">
                  {line}
                </p>
              )
            )
          )}
        </div>
      ))}
    </div>
  );
}

export default function LegalPage() {
  return (
    <main id="main-content" className="relative min-h-screen" role="main">
      <Header />

      <section className="relative overflow-hidden py-24 sm:py-28 md:py-32">
        <SectionGlow className="left-1/4 top-10" />
        <div className="relative mx-auto w-[min(1100px,calc(100%-2rem))]">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="font-serif-display text-4xl text-body sm:text-5xl">Legal</h1>
            <p className="mt-4 max-w-2xl text-lg text-body/60">
              Our terms, privacy policy, and important disclosures.
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
            {/* Sticky TOC */}
            <aside className="hidden lg:block">
              <nav className="liquid-glass sticky top-28 rounded-2xl p-5">
                <p className="mb-3 text-xs uppercase tracking-[0.16em] text-body/40">
                  Contents
                </p>
                <ul className="space-y-2.5">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-sm text-body/60 transition-colors hover:text-body"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <div className="min-w-0">
              <div className="divide-y divide-body/10">
                {sections.map((section, index) => (
                  <motion.section
                    key={section.id}
                    id={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: index * 0.04 }}
                    className="scroll-mt-28 py-10 first:pt-0"
                  >
                    <h2 className="font-serif-display text-2xl text-body sm:text-3xl">
                      {section.title}
                    </h2>
                    <LegalContent content={section.content} />
                  </motion.section>
                ))}
              </div>

              <div className="liquid-glass mt-12 rounded-2xl p-6 sm:p-8">
                <p className="text-sm text-body/60">
                  <span className="font-semibold text-body">Last Updated:</span> February
                  2026
                </p>
                <p className="mt-3 text-sm text-body/60">
                  These legal terms are effective as of the date listed above. We may update
                  these terms periodically. Your continued use of our website constitutes
                  acceptance of any changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingDock />
    </main>
  );
}
