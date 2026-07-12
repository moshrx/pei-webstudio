"use client";

import dynamic from "next/dynamic";

// Three.js only loads on the client, after hydration, so it never bloats
// the server render or the initial JS needed to paint content.
const Scene3D = dynamic(
  () => import("@/components/Scene3D").then((m) => m.Scene3D),
  { ssr: false }
);

export function Background() {
  return <Scene3D />;
}
