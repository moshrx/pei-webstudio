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
      className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-border/70 bg-background/85 p-2 shadow-glass backdrop-blur-xl"
    >
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="group flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium text-muted-foreground transition hover:bg-primary hover:text-primary-foreground"
        >
          <item.icon className="size-3.5" />
          <span className="hidden sm:inline">{item.label}</span>
        </Link>
      ))}
    </motion.nav>
  );
}
