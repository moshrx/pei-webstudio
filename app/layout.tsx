import type { Metadata, Viewport } from "next";

import { ThemeProvider } from "@/components/providers";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export const metadata: Metadata = {
  title: "PEI Web Studio | Revenue-Ready Websites for SMBs",
  description:
    "Modern websites your business can actually manage. Built for SMBs in Charlottetown and beyond. Fast, secure, and designed to convert.",
  keywords: ["web design", "web development", "Next.js", "Charlottetown", "PEI", "SMB websites"],
  authors: [{ name: "PEI Web Studio" }],
  creator: "PEI Web Studio",
  metadataBase: new URL("https://peiwebstudio.ca"),
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png"
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://peiwebstudio.ca",
    siteName: "PEI Web Studio",
    title: "PEI Web Studio | Revenue-Ready Websites for SMBs",
    description:
      "Modern websites your business can actually manage. Built for SMBs in Charlottetown and beyond."
  },
  twitter: {
    card: "summary_large_image",
    title: "PEI Web Studio | Revenue-Ready Websites for SMBs",
    description:
      "Modern websites your business can actually manage. Built for SMBs in Charlottetown and beyond."
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
      <body className="min-h-screen bg-background font-body text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
