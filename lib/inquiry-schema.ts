import { z } from "zod";

const name = z.string().trim().min(2, "Please enter your name.").max(100);
const email = z.string().trim().email("Enter a valid email address.").max(254);
const website = z.string().trim().max(300).refine((value) => {
  if (!value) return true;
  try {
    const url = new URL(/^https?:\/\//i.test(value) ? value : `https://${value}`);
    return ["http:", "https:"].includes(url.protocol) && url.hostname.includes(".") && !url.username && !url.password;
  } catch { return false; }
}, "Enter a website address such as yourbusiness.ca.");

export const contactSchema = z.object({
  name, email,
  company: z.string().trim().max(100).default(""),
  website: website.default(""),
  service: z.enum(["Improve my website", "Build a new website", "Not sure yet"]),
  message: z.string().trim().min(10, "Tell us a little more (at least 10 characters).").max(2000),
  honeypot: z.string().max(100).optional()
});

export const fixSchema = z.object({
  name, email,
  website: website.refine(value => value.length > 0, "Enter your website address."),
  platform: z.enum(["Shopify", "Custom-coded site", "Not sure"]),
  problem: z.string().trim().min(10, "Describe the problem in a sentence or two.").max(2000),
  company: z.string().max(100).optional()
});
