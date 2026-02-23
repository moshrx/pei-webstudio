"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Layers, Mail, Sparkles } from "lucide-react";

const items = [
  { href: "#hero", label: "Home", icon: Sparkles },
  { href: "#features", label: "Features", icon: Layers },
  { href: "#portfolio", label: "Portfolio", icon: BriefcaseBusiness },
  { href: "#contact", label: "Contact", icon: Mail }
];

export function FloatingDock() {
  return (
    <motion.nav
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.45, duration: 0.5 }}
      className="fixed bottom-4 left-1/2 z-50 flex w-[calc(100%-1rem)] max-w-fit -translate-x-1/2 items-center justify-center gap-1 rounded-full border border-border/70 bg-background/90 p-1.5 shadow-glass backdrop-blur-xl sm:bottom-6 sm:w-auto sm:p-2"
    >
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="group flex min-h-10 items-center gap-1.5 rounded-full px-2.5 py-2 text-[11px] font-medium text-muted-foreground transition hover:bg-primary hover:text-primary-foreground sm:gap-2 sm:px-3 sm:text-xs"
        >
          <item.icon className="size-3.5 sm:size-4" />
          <span className="hidden sm:inline">{item.label}</span>
        </Link>
      ))}
    </motion.nav>
  );
}
