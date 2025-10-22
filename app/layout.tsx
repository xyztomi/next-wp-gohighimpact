import "@/app/globals.css";

import { Inter as FontSans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

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
  title: "GoHighLevel CRM: All-in-One Platform for Agencies & SaaS Growth",
  description:
    "GoHighLevel CRM helps agencies automate, scale, and grow MRR. Learn how to use its powerful tools to boost sales, marketing, and client retention.",
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
      <body className={cn("min-h-screen font-sans antialiased overflow-y-scroll no-scrollbar", font.variable)}>
        <div className="flex min-h-screen flex-col">
          <AnnouncementBar />
          <Header links={navigationLinks} />
          <main className="">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
