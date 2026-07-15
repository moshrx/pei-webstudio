"use client";

import dynamic from "next/dynamic";

// Three.js only loads on the client, after hydration, so it never bloats
// the server render or the initial JS needed to paint content.
const Scene3D = dynamic(
  () => import("@/components/Scene3D").then((m) => m.Scene3D),
  { ssr: false }
);

export function Background() {
  return (
    <>
      <Scene3D />
      {/* Readability scrim over the 3D scene, heavier on small screens where
          text sits closer to the moving background. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-[9] bg-page/40 sm:bg-page/15"
      />
    </>
  );
}
