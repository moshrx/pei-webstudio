"use client";

import { motion } from "framer-motion";

interface StaggerTextProps {
  text: string;
  className?: string;
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1
    }
  }
};

const child = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" }
  }
};

export function StaggerText({ text, className }: StaggerTextProps) {
  return (
    <motion.p
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.45 }}
    >
      {text.split(" ").map((word, index) => (
        <motion.span key={`${word}-${index}`} variants={child} className="mr-2 inline-block">
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}
