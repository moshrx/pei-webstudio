"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function LegalPage() {
  const sections = [
    {
      title: "Terms of Service",
      content: `These Terms of Service ("Terms") govern your use of the PEI Web Studio website and services. By accessing or using our website, you agree to be bound by these Terms.

You agree to use our website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment. Prohibited behavior includes harassing or causing distress or offense to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.

All content provided on our website is owned by PEI Web Studio or our content suppliers. You may not copy, reproduce, distribute, or transmit any content without our prior written permission.

We reserve the right to modify these Terms at any time. Your continued use of the website constitutes acceptance of updated Terms. We recommend reviewing these Terms periodically for changes.`,
      id: "terms"
    },
    {
      title: "Privacy Policy",
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
You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us using the information provided.`,
      id: "privacy"
    },
    {
      title: "Cookie Policy",
      content: `Our website uses cookies and similar technologies to enhance your browsing experience and understand how our website is used.

Types of Cookies:
- Essential Cookies: Required for the website to function properly
- Functional Cookies: Remember your preferences and choices
- Analytical Cookies: Help us understand how visitors interact with our site
- Marketing Cookies: Track your activity to deliver personalized content

Managing Cookies:
Most web browsers allow you to control cookies through their settings. You can choose to accept or reject cookies, though some features may not function properly if cookies are disabled.

Third-Party Cookies:
We may allow third-party service providers to place cookies on your device. These providers have their own privacy policies governing their use of cookies.`,
      id: "cookies"
    },
    {
      title: "Disclaimer",
      content: `The information provided on our website is for general informational purposes only. While we strive to ensure accuracy, we make no warranties or representations about the completeness, accuracy, reliability, or availability of the content.

PEI Web Studio shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of or inability to use the website or services.

External Links:
Our website may contain links to external websites. We are not responsible for the content, accuracy, or practices of these external sites. Your use of external links is at your own risk.

Changes to Content:
We reserve the right to modify, update, or remove any content on our website without notice.`,
      id: "disclaimer"
    },
    {
      title: "Acceptable Use",
      content: `You agree not to use our website for:
- Any unlawful purpose or in violation of any laws or regulations
- Harassment, abuse, or threats toward other users
- Transmission of viruses or malicious code
- Spam or unsolicited communications
- Intellectual property infringement
- Unauthorized access to systems or networks
- Commercial purposes without permission
- Any activity that disrupts the normal functioning of the website

Violations of these terms may result in immediate termination of access to our website.`,
      id: "acceptable-use"
    },
    {
      title: "Contact Information",
      content: `If you have questions about these legal terms, privacy practices, or our website, please contact us:

Email: info@peiwebstudio.ca
Phone: (902) 123-4567
Address: Charlottetown, Prince Edward Island, Canada

We'll do our best to respond to your inquiry within 5 business days.`,
      id: "contact"
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-32 pb-28">
        <section className="py-16 sm:py-20 md:py-28">
          <div className="mx-auto w-[min(1100px,calc(100%-1rem))] sm:w-[min(1100px,calc(100%-2rem))]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h1 className="font-heading text-4xl font-semibold sm:text-5xl">Legal</h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Our terms, privacy policy, and important disclosures.
              </p>
            </motion.div>

            <div className="space-y-6">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                >
                  <Card id={section.id} className="p-6 sm:p-8">
                    <h2 className="text-2xl font-semibold sm:text-3xl">{section.title}</h2>
                    <div className="mt-4 space-y-4 text-muted-foreground">
                      {section.content.split('\n\n').map((paragraph, idx) => (
                        <div key={idx}>
                          {paragraph.includes(':') && !paragraph.startsWith('- ') ? (
                            <>
                              {paragraph.split('\n').map((line, i) => {
                                if (line.includes(':')) {
                                  return (
                                    <div key={i} className="font-semibold text-foreground mt-3">
                                      {line}
                                    </div>
                                  );
                                }
                                return (
                                  <p key={i} className="text-sm leading-relaxed">
                                    {line}
                                  </p>
                                );
                              })}
                            </>
                          ) : (
                            <>
                              {paragraph.split('\n').map((line, i) => (
                                line.startsWith('- ') ? (
                                  <div key={i} className="text-sm leading-relaxed ml-4">
                                    <span>• {line.substring(2)}</span>
                                  </div>
                                ) : (
                                  <p key={i} className="text-sm leading-relaxed">
                                    {line}
                                  </p>
                                )
                              ))}
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 rounded-lg border border-border/70 bg-muted/30 p-6 sm:p-8"
            >
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Last Updated:</span> February 2026
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                These legal terms are effective as of the date listed above. We may update these terms periodically. Your continued use of our website constitutes acceptance of any changes.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
