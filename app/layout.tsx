import "@/app/globals.css";

import { Inter as FontSans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { AnnouncementBar, Footer } from "@/components/marketing";
import { Header } from "@/components/nav/header";
import { siteConfig } from "@/site.config";
import { cn } from "@/lib/utils";
import { getNavigationLinks } from "@/lib/wordpress";

import type { Metadata } from "next";

const font = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "GoHighLevel CRM Review 2025: Complete Guide for Agencies & Marketing Automation",
  description:
    "GoHighLevel CRM helps agencies automate, scale, and grow MRR. Compare pricing, plans, integrations & workflows. Expert tutorials for marketing agencies, coaches, and consultants.",
  metadataBase: new URL(siteConfig.site_domain),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GoHighLevel CRM Review 2025: Complete Guide for Agencies & Marketing Automation",
    description: "GoHighLevel CRM helps agencies automate, scale, and grow MRR. Compare pricing, plans, integrations & workflows.",
    url: siteConfig.site_domain,
    siteName: "GoHigh Impact",
    type: "website",
    images: [
      {
        url: `${siteConfig.site_domain}/api/og`,
        width: 1200,
        height: 630,
        alt: "GoHighLevel CRM Complete Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GoHighLevel CRM Review 2025: Complete Guide for Agencies",
    description: "GoHighLevel CRM helps agencies automate, scale, and grow MRR. Compare pricing, plans, integrations & workflows.",
    images: [`${siteConfig.site_domain}/api/og`],
  },
  keywords: ["gohighlevel crm", "marketing automation platform", "crm software", "all-in-one crm", "white label crm", "agency software", "gohighlevel review", "gohighlevel pricing"],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigationLinks = await getNavigationLinks();

  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head />
      <body className={cn("min-h-screen font-sans antialiased overflow-x-hidden overflow-y-scroll no-scrollbar", font.variable)}>
        <div className="flex min-h-screen flex-col">
          <AnnouncementBar />
          <Header links={navigationLinks} />
          <main className="pt-[100px]">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
