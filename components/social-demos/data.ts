import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Bath,
  Clock,
  Droplets,
  Home,
  ShieldCheck,
  ShowerHead,
  Wrench
} from "lucide-react";

export type DemoService = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type DemoBusiness = {
  slug: string;
  businessType: string;
  name: string;
  tagline: string;
  targetCustomer: string;
  demoNotice: string;
  colors: {
    accent: string;
    accentDark: string;
    ink: string;
    soft: string;
    badPrimary: string;
    badSecondary: string;
  };
  bad: {
    headline: string;
    intro: string;
    notice: string;
    nav: string[];
    buttons: string[];
    sidebar: string[];
  };
  redesign: {
    eyebrow: string;
    headline: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    statLine: string;
    proof: string[];
    services: DemoService[];
    benefits: string[];
    testimonials: { quote: string; name: string; context: string }[];
    faqs: { question: string; answer: string }[];
  };
};

export const demoBusinesses: DemoBusiness[] = [
  {
    slug: "plumber",
    businessType: "plumber",
    name: "Harbour & Hearth Plumbing",
    tagline: "Residential plumbing for busy coastal homeowners.",
    targetCustomer:
      "Homeowners, landlords, and small property managers who need dependable repairs without chasing callbacks.",
    demoNotice: "Demo / Fictional Business",
    colors: {
      accent: "20 116 108",
      accentDark: "14 82 78",
      ink: "17 24 39",
      soft: "239 247 245",
      badPrimary: "20 72 168",
      badSecondary: "248 221 47"
    },
    bad: {
      headline: "WELCOME TO HARBOUR & HEARTH PLUMBING SERVICES LTD.",
      intro:
        "We do plumbing and have been helping with plumbing for many years so call us for pipes, toilets, taps, water heaters, sinks, basements, leaks and other things. Please read all the information below before contacting.",
      notice:
        "This demo business is fictional. No real phone, address, review, or company branding is used.",
      nav: [
        "HOME",
        "ABOUT US",
        "SERVICES",
        "OUR SERVICES",
        "GALLERY",
        "REVIEWS",
        "LINKS",
        "COUPONS",
        "CONTACT",
        "EMERGENCY INFO"
      ],
      buttons: ["Click Here", "More Info", "Read Services", "Contact Page"],
      sidebar: [
        "OPEN MOST DAYS",
        "FAST SOMETIMES",
        "LOW PRICES",
        "QUALITY WORK",
        "ASK ABOUT DEALS"
      ]
    },
    redesign: {
      eyebrow: "Charlottetown-area residential plumbing",
      headline: "Fast, reliable plumbing when your home needs it.",
      intro:
        "From leaking fixtures to water heater issues, Harbour & Hearth gives homeowners a clear next step, tidy work, and a straightforward quote before repairs begin.",
      primaryCta: "Get a Free Quote",
      secondaryCta: "View Services",
      statLine: "Same-week appointments for common household repairs",
      proof: ["Licensed demo crew", "Clear arrival windows", "Upfront repair options"],
      services: [
        {
          icon: Droplets,
          title: "Leak Repairs",
          description:
            "Track down dripping pipes, fixture leaks, and small water issues before they become expensive damage."
        },
        {
          icon: ShowerHead,
          title: "Fixture Installs",
          description:
            "Replace faucets, sinks, toilets, showers, and valves with clean workmanship and simple pricing."
        },
        {
          icon: Bath,
          title: "Bathroom Plumbing",
          description:
            "Practical help for clogged drains, running toilets, low pressure, and bathroom updates."
        },
        {
          icon: Wrench,
          title: "Water Heaters",
          description:
            "Diagnose inconsistent hot water and plan repair or replacement options that fit the home."
        }
      ],
      benefits: [
        "Clear quote before work starts",
        "Photos of the issue and completed repair",
        "Tidy work area before leaving",
        "Simple scheduling by form or call"
      ],
      testimonials: [
        {
          quote:
            "They explained the leak, fixed it the same afternoon, and left the cabinet cleaner than they found it.",
          name: "Mara L.",
          context: "Fictional homeowner"
        },
        {
          quote:
            "The new layout makes it obvious what to do. I would trust this company before I even scroll.",
          name: "PEI Web Studio",
          context: "Redesign note"
        }
      ],
      faqs: [
        {
          question: "Do you handle emergency plumbing?",
          answer:
            "This fictional demo site positions emergency support clearly, but keeps the primary conversion path focused on quote requests."
        },
        {
          question: "Why does this redesign work better?",
          answer:
            "The CTA is visible immediately, services are scannable, trust signals sit near the top, and the mobile layout no longer hides the next step."
        },
        {
          question: "Can this system be reused?",
          answer:
            "Yes. Add another entry to the demo data and the same route structure can render a bad and redesigned version for that business type."
        }
      ]
    }
  }
];

export function getDemoBusiness(slug: string) {
  return demoBusinesses.find((business) => business.slug === slug);
}

export const redesignIcons = {
  BadgeCheck,
  Clock,
  Home,
  ShieldCheck
};
