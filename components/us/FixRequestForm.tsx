"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Loader2 } from "lucide-react";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Tell us your name."),
  email: z.string().email("We need a working email to reply to."),
  website: z.string().min(3, "Paste your website address."),
  platform: z.string().min(2, "Pick the platform your site runs on."),
  problem: z.string().min(10, "Describe the problem in a sentence or two."),
  company: z.string().optional()
});

type FormValues = z.infer<typeof formSchema>;

const fieldClass =
  "w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3.5 text-[16px] text-white placeholder:text-white/35 transition focus:border-[#c8ff2e]/60 focus:bg-white/[0.07] focus:outline-none";

const labelClass = "mb-2 block text-sm font-semibold text-white/85";

const platforms = [
  "Shopify",
  "Custom-coded site",
  "Not sure"
];

export function FixRequestForm() {
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
      website: "",
      platform: "",
      problem: "",
      company: ""
    }
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitError(null);

    let response: Response;
    try {
      response = await fetch("/api/fix-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
    } catch {
      setSubmitError("Could not send. Check your connection and try again.");
      return;
    }

    if (!response.ok) {
      const result = (await response.json().catch(() => null)) as { error?: string } | null;
      setSubmitError(result?.error ?? "Could not send. Please try again.");
      return;
    }

    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-[#c8ff2e]/30 bg-[#c8ff2e]/[0.06] p-8 text-center sm:p-10">
        <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-[#c8ff2e] text-black">
          <Check className="size-7" strokeWidth={3} />
        </div>
        <h3 className="text-2xl font-extrabold uppercase tracking-tight text-white">
          Got it.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-white/70">
          We read every request by hand. You&apos;ll hear back within a few hours with
          either a payment link for the $49 fix, or an honest note if the job is
          bigger than that.
        </p>
        <p className="mt-4 text-sm font-semibold text-[#c8ff2e]">
          You have not been charged anything yet.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Website fix request"
      className="rounded-3xl border border-white/12 bg-white/[0.03] p-6 sm:p-8"
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8ff2e]">
        Tell us what broke
      </p>
      <h3 className="mt-2 text-2xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-3xl">
        No card needed to ask
      </h3>

      {submitError ? (
        <div
          role="alert"
          className="mt-5 rounded-xl border border-red-400/40 bg-red-500/10 p-4 text-sm text-red-200"
        >
          <p className="font-semibold">Could not send your request</p>
          <p className="mt-0.5">{submitError}</p>
        </div>
      ) : null}

      <div className="mt-6 grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="fix-name" className={labelClass}>
              Your name
            </label>
            <input
              id="fix-name"
              autoComplete="name"
              placeholder="Jordan Reyes"
              className={fieldClass}
              {...register("name")}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "fix-name-error" : undefined}
            />
            {errors.name ? (
              <p id="fix-name-error" role="alert" className="mt-1.5 text-xs text-red-300">
                {errors.name.message}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="fix-email" className={labelClass}>
              Email
            </label>
            <input
              id="fix-email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="you@yourbusiness.com"
              className={fieldClass}
              {...register("email")}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "fix-email-error" : undefined}
            />
            {errors.email ? (
              <p id="fix-email-error" role="alert" className="mt-1.5 text-xs text-red-300">
                {errors.email.message}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <label htmlFor="fix-website" className={labelClass}>
            Your website address
          </label>
          <input
            id="fix-website"
            inputMode="url"
            autoComplete="url"
            placeholder="yourbusiness.com"
            className={fieldClass}
            {...register("website")}
            aria-invalid={errors.website ? "true" : "false"}
            aria-describedby={errors.website ? "fix-website-error" : undefined}
          />
          {errors.website ? (
            <p id="fix-website-error" role="alert" className="mt-1.5 text-xs text-red-300">
              {errors.website.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="fix-platform" className={labelClass}>
            What is it built on?
          </label>
          <select
            id="fix-platform"
            defaultValue=""
            className={`${fieldClass} appearance-none`}
            {...register("platform")}
            aria-invalid={errors.platform ? "true" : "false"}
            aria-describedby={errors.platform ? "fix-platform-error" : undefined}
          >
            <option value="" disabled>
              Choose one
            </option>
            {platforms.map((platform) => (
              <option key={platform} value={platform} className="bg-[#0b0b0d] text-white">
                {platform}
              </option>
            ))}
          </select>
          {errors.platform ? (
            <p id="fix-platform-error" role="alert" className="mt-1.5 text-xs text-red-300">
              {errors.platform.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="fix-problem" className={labelClass}>
            What is broken?
          </label>
          <textarea
            id="fix-problem"
            rows={4}
            placeholder="The contact form stopped sending emails, and the menu overlaps the logo on my phone."
            className={`${fieldClass} resize-none`}
            {...register("problem")}
            aria-invalid={errors.problem ? "true" : "false"}
            aria-describedby={errors.problem ? "fix-problem-error" : undefined}
          />
          {errors.problem ? (
            <p id="fix-problem-error" role="alert" className="mt-1.5 text-xs text-red-300">
              {errors.problem.message}
            </p>
          ) : null}
        </div>

        {/* Honeypot. Hidden from people, tempting to bots. */}
        <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="fix-company">Company</label>
          <input id="fix-company" tabIndex={-1} autoComplete="off" {...register("company")} />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#c8ff2e] px-8 py-4 text-base font-extrabold uppercase tracking-wide text-black transition active:scale-[0.98] disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-5 animate-spin" />
              Sending
            </>
          ) : (
            "Send my fix request"
          )}
        </button>

        <p className="text-center text-xs leading-relaxed text-white/45">
          We review it first and tell you if it is a $49 job before you pay a cent.
        </p>
      </div>
    </form>
  );
}
