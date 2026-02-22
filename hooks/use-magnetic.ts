"use client";

import { useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export function useMagnetic(strength = 20) {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 160, damping: 20, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 160, damping: 20, mass: 0.3 });

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);

    x.set((offsetX / rect.width) * strength);
    y.set((offsetY / rect.height) * strength);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    ref,
    x: springX,
    y: springY,
    onMouseMove,
    onMouseLeave
  };
}
