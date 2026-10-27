"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeftRight, MonitorSmartphone } from "lucide-react";

export function DemoSwitcher({ slug }: { slug: string }) {
  const searchParams = useSearchParams();
  const version = searchParams.get("version") === "redesign" ? "redesign" : "bad";

  const base = `/social-demos/${slug}`;

  return (
    <div className="fixed bottom-4 left-1/2 z-50 flex w-[min(92vw,560px)] -translate-x-1/2 items-center justify-between gap-2 rounded-full border border-black/10 bg-white/95 p-2 text-slate-950 shadow-[0_18px_60px_rgb(15_23_42/0.18)] backdrop-blur">
      <div className="hidden items-center gap-2 px-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 sm:flex">
        <MonitorSmartphone className="size-4" aria-hidden="true" />
        Recording Mode
      </div>
      <nav aria-label="Demo version switcher" className="grid flex-1 grid-cols-2 gap-1">
        <Link
          href={`${base}?version=bad`}
          className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-bold transition ${
            version === "bad"
              ? "bg-red-600 text-white"
              : "text-slate-700 hover:bg-slate-100"
          }`}
        >
          Bad Website
        </Link>
        <Link
          href={`${base}?version=redesign`}
          className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition ${
            version === "redesign"
              ? "bg-slate-950 text-white"
              : "text-slate-700 hover:bg-slate-100"
          }`}
        >
          <ArrowLeftRight className="size-4" aria-hidden="true" />
          Redesign
        </Link>
      </nav>
    </div>
  );
}
