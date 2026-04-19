"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BriefcaseBusiness, Layers, Mail, Sparkles } from "lucide-react";
import { useRef, useState } from "react";

const items = [
  { href: "#hero", label: "Home", icon: Sparkles },
  { href: "#features", label: "Features", icon: Layers },
  { href: "#portfolio", label: "Portfolio", icon: BriefcaseBusiness },
  { href: "#contact", label: "Contact", icon: Mail }
];

function DockItem({
  item,
  index,
  hoveredIndex
}: {
  item: (typeof items)[0];
  index: number;
  hoveredIndex: number | null;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const distance = useMotionValue(0);
  const springDistance = useSpring(distance, {
    stiffness: 300,
    damping: 30,
    mass: 0.8
  });

  const iconScale = useTransform(springDistance, [-80, 0, 80], [1, 1.4, 1]);
  const labelOpacity = useTransform(springDistance, [-60, 0, 60], [0, 1, 0]);
  const labelY = useTransform(springDistance, [-60, 0, 60], [8, -32, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    distance.set(e.clientX - centerX);
  };

  const handleMouseLeave = () => {
    distance.set(0);
  };

  const isAnyHovered = hoveredIndex !== null;
  const isThisHovered = hoveredIndex === index;
  const dimOpacity = isAnyHovered && !isThisHovered ? 0.5 : 1;

  return (
    <motion.div className="relative flex items-center justify-center">
      {/* Floating label */}
      <motion.span
        style={{ opacity: labelOpacity, y: labelY }}
        className="pointer-events-none absolute -top-1 whitespace-nowrap rounded-lg bg-primary px-2 py-1 text-[10px] font-medium text-primary-foreground shadow-lg"
      >
        {item.label}
      </motion.span>

      <Link
        ref={ref}
        href={item.href}
        aria-label={item.label}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => {}}
        onMouseLeave={handleMouseLeave}
        className="group relative flex items-center justify-center rounded-2xl p-2.5 transition-colors hover:bg-muted sm:p-3"
      >
        <motion.div
          style={{ scale: iconScale, opacity: dimOpacity }}
          className="flex items-center justify-center"
        >
          <item.icon
            className={`size-5 sm:size-6 transition-colors duration-200 ${
              isThisHovered ? "text-primary" : "text-muted-foreground"
            }`}
          />
        </motion.div>

        {/* Glow effect on hover */}
        {isThisHovered && (
          <motion.div
            layoutId="dockGlow"
            className="absolute inset-0 rounded-2xl bg-primary/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </Link>
    </motion.div>
  );
}

export function FloatingDock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.nav
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.45, duration: 0.5 }}
      className="fixed bottom-4 left-1/2 z-50 flex w-[calc(100%-1rem)] max-w-fit -translate-x-1/2 items-center justify-center gap-0.5 rounded-full border border-border/70 bg-background/90 p-1.5 shadow-2xl shadow-primary/5 backdrop-blur-xl sm:bottom-6 sm:gap-1 sm:p-2"
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {items.map((item, index) => (
        <div
          key={item.label}
          onMouseEnter={() => setHoveredIndex(index)}
        >
          <DockItem item={item} index={index} hoveredIndex={hoveredIndex} />
        </div>
      ))}
    </motion.nav>
  );
}
