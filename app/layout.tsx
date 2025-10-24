import "@/app/globals.css";

import { Inter as FontSans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { AnnouncementBar, Footer } from "@/components/marketing";
import { Header } from "@/components/nav/header";
import { StructuredData } from "@/components/structured-data";
import { siteConfig } from "@/site.config";
import { cn } from "@/lib/utils";
import { getNavigationLinks } from "@/lib/wordpress";

import type { Metadata } from "next";

const font = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "GoHighLevel CRM: Guide for Agencies & Marketing Automation",
  description:
    "Automate and grow your agency business with GoHighLevel CRM. Compare pricing, features, integrations, and get expert tips. Start your free trial today!",
  metadataBase: new URL(siteConfig.site_domain),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GoHighLevel CRM: Guide for Agencies & Marketing Automation",
    description: "Automate and grow your agency business with GoHighLevel CRM. Compare pricing, features, integrations, and get expert tips. Start your free trial today!",
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
    title: "GoHighLevel CRM: Guide for Agencies & Marketing Automation",
    description: "Automate and grow your agency business with GoHighLevel CRM. Compare pricing, features, integrations, and get expert tips. Start your free trial today!",
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
      <head>
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={cn("min-h-screen font-sans antialiased overflow-x-hidden overflow-y-scroll no-scrollbar", font.variable)}>
        <StructuredData />
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
