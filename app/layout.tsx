import "./globals.css";

import { Inter as FontSans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { AnnouncementBar, Footer, Header } from "@/components/marketing";
import { siteConfig } from "@/site.config";
import { cn } from "@/lib/utils";
import { getNavigationLinks } from "@/lib/wordpress";

import type { Metadata } from "next";

const font = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "WordPress & Next.js Starter by 9d8",
  description:
    "A starter template for Next.js with WordPress as a headless CMS.",
  metadataBase: new URL(siteConfig.site_domain),
  alternates: {
    canonical: "/",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigationLinks = await getNavigationLinks();

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen font-sans antialiased", font.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col bg-[#0A0F1E]">
            <AnnouncementBar />
            <Header links={navigationLinks} />
            <main className="flex-1 pt-40">{children}</main>
            {/* <Footer /> */}
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
