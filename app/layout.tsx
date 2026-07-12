import type { Metadata, Viewport } from "next";

import { Background } from "@/components/Background";
import { FilmGrain } from "@/components/FilmGrain";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ThemeProvider } from "@/components/providers";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export const metadata: Metadata = {
  title: "PEI Web Studio | Modern Websites, AI & Automation",
  description:
    "Modern websites, AI workflows, automation, analytics, and growth systems for businesses in Charlottetown, PEI, and beyond.",
  keywords: ["web design", "AI automation", "web development", "Next.js", "Charlottetown", "PEI", "digital systems"],
  authors: [{ name: "PEI Web Studio" }],
  creator: "PEI Web Studio",
  metadataBase: new URL("https://peiwebstudio.ca"),
  icons: {
    icon: "/favicon-32.png",
    shortcut: "/favicon-32.png",
    apple: "/icon-180.png",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://peiwebstudio.ca",
    siteName: "PEI Web Studio",
    title: "PEI Web Studio | Modern Websites, AI & Automation",
    description:
      "Modern websites, AI workflows, automation, analytics, and growth systems for PEI businesses."
  },
  twitter: {
    card: "summary_large_image",
    title: "PEI Web Studio | Modern Websites, AI & Automation",
    description:
      "Modern websites, AI workflows, automation, analytics, and growth systems for PEI businesses."
  },
  robots: {
    index: true,
    follow: true,
    nocache: false
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen text-body antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Background />
          <ScrollProgress />
          {children}
          <FilmGrain />
        </ThemeProvider>
      </body>
    </html>
  );
}
