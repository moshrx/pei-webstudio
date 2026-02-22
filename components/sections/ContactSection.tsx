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
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto w-[min(1100px,calc(100%-2rem))]">
        <MagneticHeading
          title="Let’s build your next revenue-ready website"
          subtitle="Tell us about your business goals and we will map the right stack, timeline, and training handoff."
        />
        <Card className="mt-10 p-6 md:p-8">
          <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Input placeholder="Your name" {...register("name")} />
                {errors.name ? (
                  <p className="text-xs text-red-500">{errors.name.message}</p>
                ) : null}
              </div>
              <div className="space-y-2">
                <Input type="email" placeholder="Email address" {...register("email")} />
                {errors.email ? (
                  <p className="text-xs text-red-500">{errors.email.message}</p>
                ) : null}
              </div>
            </div>
            <div className="space-y-2">
              <Input placeholder="Company name" {...register("company")} />
              {errors.company ? (
                <p className="text-xs text-red-500">{errors.company.message}</p>
              ) : null}
            </div>
            <div className="space-y-2">
              <Textarea placeholder="What does success look like for this site?" {...register("message")} />
              {errors.message ? (
                <p className="text-xs text-red-500">{errors.message.message}</p>
              ) : null}
            </div>
            <div className="flex items-center gap-3">
              <Button type="submit" disabled={isSubmitting}>
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
              {submitError ? <p className="text-sm text-red-500">{submitError}</p> : null}
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
