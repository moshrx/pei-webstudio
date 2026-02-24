"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { z } from "zod";

import { MagneticHeading } from "@/components/MagneticHeading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Enter a valid email."),
  company: z.string().min(2, "Company name is required."),
  message: z.string().min(10, "Share at least 10 characters.")
});

type FormValues = z.infer<typeof formSchema>;

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

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    });

    if (!response.ok) {
      const result = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;
      setSubmitError(result?.error ?? "Could not send inquiry. Please try again.");
      return;
    }

    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28">
      <div className="mx-auto w-[min(1100px,calc(100%-1rem))] sm:w-[min(1100px,calc(100%-2rem))]">
        <MagneticHeading
          title="Let’s build your next revenue-ready website"
          subtitle="Tell us about your business goals and we will map the right stack, timeline, and training handoff."
        />
        <Card className="mt-8 p-4 sm:mt-10 sm:p-6 md:p-8">
          {submitError && (
            <div
              role="alert"
              className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-200"
            >
              <p className="font-semibold">Error sending inquiry</p>
              <p>{submitError}</p>
            </div>
          )}
          <form className="grid gap-4 sm:gap-5" onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Contact inquiry form">
            <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name <span className="text-red-500" aria-label="required">*</span>
                </label>
                <Input
                  id="name"
                  placeholder="John Smith"
                  {...register("name")}
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name ? (
                  <p id="name-error" className="text-xs text-red-500" role="alert">
                    {errors.name.message}
                  </p>
                ) : null}
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email <span className="text-red-500" aria-label="required">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  {...register("email")}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email ? (
                  <p id="email-error" className="text-xs text-red-500" role="alert">
                    {errors.email.message}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium">
                Company <span className="text-red-500" aria-label="required">*</span>
              </label>
              <Input
                id="company"
                placeholder="Your Company"
                {...register("company")}
                aria-invalid={errors.company ? "true" : "false"}
                aria-describedby={errors.company ? "company-error" : undefined}
              />
              {errors.company ? (
                <p id="company-error" className="text-xs text-red-500" role="alert">
                  {errors.company.message}
                </p>
              ) : null}
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message <span className="text-red-500" aria-label="required">*</span>
              </label>
              <Textarea
                id="message"
                placeholder="Tell us about your project goals and vision..."
                {...register("message")}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message ? (
                <p id="message-error" className="text-xs text-red-500" role="alert">
                  {errors.message.message}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </Button>
              {submitted ? (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-emerald-500"
                >
                  Thanks, we’ll reach out shortly.
                </motion.p>
              ) : null}
              {submitError ? (
                <p className="text-sm text-red-500 sm:max-w-[420px]">{submitError}</p>
              ) : null}
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
