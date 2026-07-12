"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { z } from "zod";

import { SectionGlow } from "@/components/SectionGlow";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Enter a valid email."),
  company: z.string().min(2, "Company name is required."),
  message: z.string().min(10, "Share at least 10 characters.")
});

type FormValues = z.infer<typeof formSchema>;

const inputClass =
  "w-full border-b border-body/15 bg-transparent py-2.5 text-body placeholder:text-body/40 transition-colors focus:border-body/50 focus:outline-none";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif-display mb-4 text-3xl text-body sm:text-4xl md:text-5xl"
        >
          Send the upgrade brief.
        </motion.h2>
        <p className="mb-10 max-w-2xl text-body/60">
          Tell us what feels slow, manual, outdated, or invisible online. We will map the
          right website, AI, automation, and growth plan.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mx-auto max-w-2xl"
        >
          {submitted ? (
            <div className="liquid-glass flex flex-col items-center gap-4 rounded-3xl p-10 text-center">
              <div className="liquid-glass flex size-14 items-center justify-center rounded-full text-body">
                <Check className="size-7" />
              </div>
              <h3 className="font-serif-display text-2xl text-body">Brief received.</h3>
              <p className="max-w-md text-body/60">
                Thanks — we&apos;ll review what you sent and reach out shortly with a
                practical plan.
              </p>
            </div>
          ) : (
            <div className="liquid-glass rounded-3xl p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-body/50">
                Project Intake
              </p>

              {submitError && (
                <div
                  role="alert"
                  className="mt-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300"
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
                      Name <span className="text-red-400" aria-label="required">*</span>
                    </label>
                    <input
                      id="name"
                      placeholder="Your name"
                      className={inputClass}
                      {...register("name")}
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name ? (
                      <p id="name-error" className="mt-1.5 text-xs text-red-400" role="alert">
                        {errors.name.message}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-body/80">
                      Email <span className="text-red-400" aria-label="required">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      className={inputClass}
                      {...register("email")}
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email ? (
                      <p id="email-error" className="mt-1.5 text-xs text-red-400" role="alert">
                        {errors.email.message}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="text-sm font-medium text-body/80">
                    Company <span className="text-red-400" aria-label="required">*</span>
                  </label>
                  <input
                    id="company"
                    placeholder="Company or project"
                    className={inputClass}
                    {...register("company")}
                    aria-invalid={errors.company ? "true" : "false"}
                    aria-describedby={errors.company ? "company-error" : undefined}
                  />
                  {errors.company ? (
                    <p id="company-error" className="mt-1.5 text-xs text-red-400" role="alert">
                      {errors.company.message}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-body/80">
                    Message <span className="text-red-400" aria-label="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="What do you want to modernize? Website, AI support, lead flow, SEO, automation, analytics..."
                    className={`${inputClass} resize-none`}
                    {...register("message")}
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message ? (
                    <p id="message-error" className="mt-1.5 text-xs text-red-400" role="alert">
                      {errors.message.message}
                    </p>
                  ) : null}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-full bg-body px-8 py-3 font-medium text-page transition hover:bg-body/90 disabled:opacity-60 sm:w-auto sm:self-start"
                >
                  {isSubmitting ? "Sending..." : "Send Upgrade Brief"}
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
