"use client";

import { motion } from "framer-motion";

interface StaggerTextProps {
  text: string;
  className?: string;
}

export function StaggerText({ text, className }: StaggerTextProps) {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
    >
      {text}
    </motion.p>
  );
}
