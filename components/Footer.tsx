import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-10">
      <div className="mx-auto w-[min(1100px,calc(100%-2rem))]">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">PEI Web Studio, Charlottetown, Prince Edward Island</p>
            <p className="text-sm text-muted-foreground">Modern websites, AI workflows, automation, and growth systems.</p>
          </div>
          <div className="flex gap-6 sm:gap-8">
            <Link
              href="/legal"
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              Legal
            </Link>
            <a
              href="mailto:peiwebstudio@gmail.com"
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-6 flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground/70">
            © 2026 PEI Web Studio. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/50">
            AI-assisted design & development.{" "}
            <Link href="/legal#ai-disclosure" className="underline underline-offset-2 hover:text-muted-foreground transition">
              Learn more
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
