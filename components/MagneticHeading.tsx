"use client";

import { motion } from "framer-motion";

import { useMagnetic } from "@/hooks/use-magnetic";

interface MagneticHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function MagneticHeading({ title, subtitle, className }: MagneticHeadingProps) {
  const { ref, x, y, onMouseMove, onMouseLeave } = useMagnetic(24);

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
    >
      <motion.h2
        style={{ x, y }}
        className="font-heading text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:mt-4 sm:text-base md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
