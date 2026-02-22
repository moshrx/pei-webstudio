import type { Metadata } from "next";

import { ThemeProvider } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "PEI Web Studio",
  description:
    "Modern websites your business can actually manage. Built for SMBs in Charlottetown and beyond."
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
