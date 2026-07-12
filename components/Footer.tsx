import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-body/10 py-16">
      {/* Giant faded watermark */}
      <span
        aria-hidden="true"
        className="font-serif-display pointer-events-none absolute inset-x-0 bottom-[-2vw] select-none text-center text-[12vw] leading-none text-body/[0.03]"
      >
        PEI Web Studio
      </span>

      <div className="relative mx-auto w-[min(1100px,calc(100%-2rem))]">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <p className="text-sm text-body/60">
              PEI Web Studio, Charlottetown, Prince Edward Island
            </p>
            <p className="text-sm text-body/60">
              Modern websites, AI workflows, automation, and growth systems.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 sm:gap-8">
            <Link href="/legal" className="text-sm text-body/60 transition hover:text-body">
              Legal
            </Link>
            <a
              href="mailto:peiwebstudio@gmail.com"
              className="text-sm text-body/60 transition hover:text-body"
            >
              Contact
            </a>
            <a
              href="tel:+16479131487"
              className="text-sm text-body/60 transition hover:text-body"
            >
              (647) 913-1487
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-1.5 border-t border-body/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-body/50">
            © 2026 PEI Web Studio. All rights reserved.{" "}
            <span className="text-body/40">
              Developer —{" "}
              <a
                href="https://moshr.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition hover:text-body"
              >
                moshr.ca
              </a>
            </span>
          </p>
          <p className="text-xs text-body/40">
            AI-assisted design &amp; development.{" "}
            <Link
              href="/legal#ai-disclosure"
              className="underline underline-offset-2 transition hover:text-body/70"
            >
              Learn more
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
