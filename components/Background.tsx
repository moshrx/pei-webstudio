"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Scene3D = dynamic(() => import("@/components/Scene3D").then(m => m.Scene3D), { ssr: false });

export function Background() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    const update = () => setAnimated(media.matches);
    update(); media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return <>
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10" style={{ background: "radial-gradient(ellipse at 50% 15%, rgb(var(--scene-1) / 0.10), transparent 65%)" }} />
    {animated && <Scene3D />}
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-[9] bg-page/40 sm:bg-page/15" />
  </>;
}
