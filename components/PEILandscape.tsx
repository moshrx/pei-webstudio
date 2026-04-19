"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const STARS: [number, number, number][] = [
  [48, 28, 1.5], [118, 58, 1], [198, 18, 1.5], [318, 43, 1], [448, 22, 1.5],
  [548, 48, 1], [648, 28, 1.5], [728, 52, 1], [178, 78, 1], [378, 12, 1.5],
  [498, 68, 1], [698, 14, 1], [98, 98, 1.5], [278, 93, 1], [598, 83, 1],
  [748, 98, 1], [398, 78, 1], [80, 42, 1], [560, 14, 1.5], [350, 62, 1],
];

const WAVE_PATHS = [
  "M40,272 Q80,265 120,272",
  "M200,258 Q252,250 304,258",
  "M382,265 Q424,257 466,265",
  "M558,255 Q612,247 664,255",
  "M702,265 Q743,258 784,265",
];

export function PEILandscape() {
  // mounted guard: both server and client first render use light mode so the
  // HTML matches. After mount, next-themes resolves the real theme and we
  // re-render. The header fades in over ~0.5 s so the switch is invisible.
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const { resolvedTheme } = useTheme();
  const dark = mounted && resolvedTheme === "dark";

  const c = dark
    ? {
        skyTop: "#0A1628",
        skyMid: "#122040",
        skyBottom: "#1A3055",
        ocean: "#091524",
        oceanDark: "#050D18",
        farm: "#0E2010",
        farmDark: "#091508",
        soil: "#3E1410",
        soilDark: "#28090C",
        houseWall: "#D0D0D0",
        houseRoof: "#999",
        windowFill: "#1A3050",
        doorFill: "#2A2A2A",
        towerFill: "#D8D8D8",
        stripe: "#B02820",
        capFill: "#777",
        lightColor: "#FFF3CD",
        lanternFill: "#1A3050",
        waveOpacity: 0.09,
        labelOpacity: 0.3,
      }
    : {
        skyTop: "#C2E2F5",
        skyMid: "#9DD0EE",
        skyBottom: "#78BDE8",
        ocean: "#2471A3",
        oceanDark: "#1A5276",
        farm: "#239B56",
        farmDark: "#1A7A42",
        soil: "#C0392B",
        soilDark: "#8B2517",
        houseWall: "#F5F5F5",
        houseRoof: "#CCCCCC",
        windowFill: "#AED6F1",
        doorFill: "#AAAAAA",
        towerFill: "#F5F5F5",
        stripe: "#E74C3C",
        capFill: "#AAAAAA",
        lightColor: "#FDE68A",
        lanternFill: "#AED6F1",
        waveOpacity: 0.2,
        labelOpacity: 0.5,
      };

  return (
    <div
      className="h-[300px] w-full sm:h-[360px] md:h-[520px]"
      aria-hidden="true"
      suppressHydrationWarning
    >
      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="pei-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={c.skyTop} />
            <stop offset="55%"  stopColor={c.skyMid} />
            <stop offset="100%" stopColor={c.skyBottom} />
          </linearGradient>
          <linearGradient id="pei-ocean" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={c.ocean} />
            <stop offset="100%" stopColor={c.oceanDark} />
          </linearGradient>
          <linearGradient id="pei-farm" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={c.farm} />
            <stop offset="100%" stopColor={c.farmDark} />
          </linearGradient>
          <linearGradient id="pei-soil" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={c.soil} />
            <stop offset="100%" stopColor={c.soilDark} />
          </linearGradient>

          {dark && (
            <radialGradient id="pei-beam" cx="0%" cy="50%" r="100%">
              <stop offset="0%"   stopColor={c.lightColor} stopOpacity="0.14" />
              <stop offset="100%" stopColor={c.lightColor} stopOpacity="0" />
            </radialGradient>
          )}

          {!dark && (
            <radialGradient id="pei-sun-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#FDE68A" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#FDE68A" stopOpacity="0" />
            </radialGradient>
          )}

          <clipPath id="tower-clip">
            <polygon points="609,265 629,265 625,160 613,160" />
          </clipPath>
        </defs>

        {/* ── Sky ─────────────────────────────────────────────── */}
        <rect width="800" height="500" fill="url(#pei-sky)" />

        {/* ── Stars (dark) ────────────────────────────────────── */}
        {dark &&
          STARS.map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} fill="white" opacity={0.45 + (i % 3) * 0.18} />
          ))}

        {/* ── Sun + glow (light) ──────────────────────────────── */}
        {!dark && (
          <>
            <circle cx="668" cy="72" r="62" fill="url(#pei-sun-glow)" />
            <circle cx="668" cy="72" r="36" fill="#FDE68A" />
            <circle cx="668" cy="72" r="28" fill="#FCD34D" />
          </>
        )}

        {/* ── Clouds (light) ──────────────────────────────────── */}
        {!dark && (
          <g fill="white" opacity="0.88">
            <ellipse cx="195" cy="92"  rx="62" ry="22" />
            <ellipse cx="232" cy="80"  rx="46" ry="20" />
            <ellipse cx="160" cy="84"  rx="40" ry="18" />

            <ellipse cx="478" cy="62"  rx="52" ry="18" />
            <ellipse cx="510" cy="52"  rx="38" ry="17" />
            <ellipse cx="446" cy="56"  rx="34" ry="15" />
          </g>
        )}

        {/* ── Gulf of St. Lawrence ────────────────────────────── */}
        <path
          d="M0,242 Q200,222 400,238 Q600,254 800,230
             L800,348 Q600,364 400,348 Q200,332 0,350 Z"
          fill="url(#pei-ocean)"
        />

        {/* Wave lines */}
        <g stroke="white" strokeWidth="1.4" fill="none" opacity={c.waveOpacity}>
          {WAVE_PATHS.map((d, i) => <path key={i} d={d} />)}
        </g>

        {/* ── Rolling green farmland ──────────────────────────── */}
        <path
          d="M0,318 Q150,298 310,312 Q500,332 705,306 Q760,300 800,310
             L800,455 L0,455 Z"
          fill="url(#pei-farm)"
        />

        {/* ── Iconic red PEI soil (foreground) ────────────────── */}
        <path
          d="M0,404 Q150,388 305,398 Q500,414 705,393 Q762,386 800,395
             L800,500 L0,500 Z"
          fill="url(#pei-soil)"
        />

        {/* ── Lighthouse ──────────────────────────────────────── */}
        <g>
          {/* Keeper's house */}
          <rect x="590" y="267" width="52" height="44" rx="2" fill={c.houseWall} />
          <polygon points="586,267 646,267 618,245" fill={c.houseRoof} />
          {/* Windows */}
          <rect x="596" y="275" width="13" height="12" rx="1.5" fill={c.windowFill} />
          <rect x="617" y="275" width="13" height="12" rx="1.5" fill={c.windowFill} />
          {/* Door */}
          <rect x="607" y="286" width="10" height="25" rx="2" fill={c.doorFill} />

          {/* Tower (slightly tapered) */}
          <polygon points="609,265 629,265 625,160 613,160" fill={c.towerFill} />

          {/* Red stripes clipped to tower shape */}
          <g clipPath="url(#tower-clip)" fill={c.stripe}>
            <rect x="608" y="244" width="22" height="14" />
            <rect x="608" y="211" width="22" height="14" />
            <rect x="608" y="178" width="22" height="14" />
          </g>

          {/* Lantern platform */}
          <rect x="608" y="152" width="24" height="10" rx="1" fill={c.capFill} />
          {/* Lantern room */}
          <rect x="612" y="138" width="16" height="16" rx="2" fill={c.lanternFill} />
          {/* Conical cap */}
          <polygon points="608,138 632,138 620,124" fill={c.capFill} />

          {/* Light */}
          <circle cx="620" cy="146" r={dark ? 5 : 4} fill={c.lightColor} />

          {/* Dark-mode: light beam + soft halo */}
          {dark && (
            <>
              <path d="M620,146 L280,72 L280,220 Z" fill="url(#pei-beam)" />
              <circle cx="620" cy="146" r="14" fill={c.lightColor} opacity="0.13" />
            </>
          )}
        </g>

        {/* ── "Prince Edward Island" label ────────────────────── */}
        <text
          x="400"
          y="482"
          textAnchor="middle"
          fill="white"
          fillOpacity={c.labelOpacity}
          fontSize="10"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="5"
          fontWeight="500"
        >
          PRINCE EDWARD ISLAND
        </text>
      </svg>
    </div>
  );
}
