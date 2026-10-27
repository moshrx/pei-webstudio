"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { z } from "zod";

import { SectionGlow } from "@/components/SectionGlow";

import { contactSchema as formSchema } from "@/lib/inquiry-schema";

type FormValues = z.infer<typeof formSchema>;

const inputClass =
  "w-full rounded-lg border border-body/20 bg-page px-4 py-3 text-body placeholder:text-body/50 transition-colors focus:border-body/70 focus:outline-none";

export function ContactSection({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? motion.h1 : motion.h2;
  const confirmation = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => { if (submitted) confirmation.current?.focus(); }, [submitted]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      website: "",
      service: "Not sure yet",
      honeypot: "",
      message: ""
    }
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitError(null);
    setSubmitted(false);

    let response: Response;

    try {
      response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });
    } catch {
      setSubmitError("Could not send inquiry. Please check your connection and try again.");
      return;
    }

    if (!response.ok) {
      const result = (await response.json().catch(() => null)) as { error?: string } | null;
      setSubmitError(result?.error ?? "Could not send inquiry. Please try again.");
      return;
    }

    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <SectionGlow className="left-1/3 top-0" />

      <div className="relative mx-auto w-[min(1100px,calc(100%-2rem))]">
        <Heading
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif-display mb-4 text-3xl text-body sm:text-4xl md:text-5xl"
        >
          Tell us about your website.
        </Heading>
        <p className="mb-10 max-w-2xl text-body/60">
          Need a new site or a few improvements? Tell us what you have in mind.
          We will review your request and explain the next step. No payment needed to enquire.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="studio-contact-form mx-auto max-w-2xl"
        >
          {submitted ? (
            <div ref={confirmation} tabIndex={-1} role="status" className="liquid-glass flex flex-col items-center gap-4 rounded-3xl p-10 text-center">
              <div className="liquid-glass flex size-14 items-center justify-center rounded-full text-body">
                <Check className="size-7" />
              </div>
              <h3 className="font-serif-display text-2xl text-body">Request received.</h3>
              <p className="max-w-md text-body/60">
                Thanks for reaching out. We&apos;ll review what you sent and get back to you shortly with a
                practical plan.
              </p>
            </div>
          ) : (
            <div className="liquid-glass rounded-3xl p-5 sm:p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-body/50">
                Website enquiry
              </p>

              {submitError && (
                <div
                  role="alert"
                  className="mt-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-700 dark:text-red-300"
                >
                  <p className="font-semibold">Error sending inquiry</p>
                  <p>{submitError}</p>
                </div>
              )}

              <form
                className="mt-6 grid gap-6"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                aria-label="Contact inquiry form"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-body/80">
                      Name <span className="text-red-700 dark:text-red-400" aria-label="required">*</span>
                    </label>
                    <input
                      id="name"
                      autoComplete="name" maxLength={100}
                      placeholder="Your name"
                      className={inputClass}
                      {...register("name")}
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name ? (
                      <p id="name-error" className="mt-1.5 text-xs text-red-700 dark:text-red-400" role="alert">
                        {errors.name.message}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-body/80">
                      Email <span className="text-red-700 dark:text-red-400" aria-label="required">*</span>
                    </label>
                    <input
                      id="email"
                      autoComplete="email" maxLength={254}
                      type="email"
                      placeholder="you@company.com"
                      className={inputClass}
                      {...register("email")}
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email ? (
                      <p id="email-error" className="mt-1.5 text-xs text-red-700 dark:text-red-400" role="alert">
                        {errors.email.message}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="text-sm font-medium text-body/80">
                    Company (optional)
                  </label>
                  <input
                    id="company"
                    autoComplete="organization" maxLength={100}
                    placeholder="Company or project"
                    className={inputClass}
                    {...register("company")}
                    aria-invalid={errors.company ? "true" : "false"}
                    aria-describedby={errors.company ? "company-error" : undefined}
                  />
                  {errors.company ? (
                    <p id="company-error" className="mt-1.5 text-xs text-red-700 dark:text-red-400" role="alert">
                      {errors.company.message}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="website" className="text-sm font-medium text-body/80">Website (optional)</label>
                  <input id="website" autoComplete="url" inputMode="url" maxLength={300} placeholder="yourbusiness.ca" className={inputClass} {...register("website")} aria-invalid={!!errors.website} aria-describedby={errors.website ? "website-error" : undefined} />
                  {errors.website && <p id="website-error" role="alert" className="mt-1.5 text-xs text-red-700 dark:text-red-400">{errors.website.message}</p>}
                </div>
                <div>
                  <label htmlFor="service" className="text-sm font-medium text-body/80">How can we help?</label>
                  <select id="service" className={`${inputClass} bg-page`} {...register("service")} aria-invalid={!!errors.service} aria-describedby={errors.service ? "service-error" : undefined}>
                    <option>Improve my website</option><option>Build a new website</option><option>Not sure yet</option>
                  </select>
                  {errors.service && <p id="service-error" role="alert" className="mt-1.5 text-xs text-red-700 dark:text-red-400">{errors.service.message}</p>}
                </div>
                <div hidden aria-hidden="true">
                  <label htmlFor="contact-honeypot">Leave this empty</label>
                  <input id="contact-honeypot" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-body/80">
                    Message <span className="text-red-700 dark:text-red-400" aria-label="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    maxLength={2000}
                    rows={4}
                    placeholder="What does your business do, and what would you like your website to help with?"
                    className={`${inputClass} resize-y`}
                    {...register("message")}
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message ? (
                    <p id="message-error" className="mt-1.5 text-xs text-red-700 dark:text-red-400" role="alert">
                      {errors.message.message}
                    </p>
                  ) : null}
                </div>

                <p className="text-sm leading-relaxed text-body/70">
                  We use these details to respond to your enquiry. <a href="/legal#privacy" className="underline underline-offset-4">Privacy policy</a>.
                  Prefer email? <a href="mailto:peiwebstudio@gmail.com" className="break-all underline underline-offset-4">peiwebstudio@gmail.com</a>
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-full bg-body px-8 py-3 font-medium text-page transition hover:bg-body/90 disabled:opacity-60 sm:w-auto sm:self-start"
                >
                  {isSubmitting ? "Sending..." : "Request a Website Review"}
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
