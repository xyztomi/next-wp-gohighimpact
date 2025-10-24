import "@/app/globals.css";

import { Analytics } from "@vercel/analytics/next";
import { Inter as FontSans } from "next/font/google";
import Script from "next/script";

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
  title: "GoHighLevel CRM 2025 Guide for Agencies & SaaS Founders",
  description:
    "Watch the GoHighLevel all-in-one platform tour, compare 2025 pricing, and grab automation frameworks that scale agencies and SaaS brands.",
  metadataBase: new URL(siteConfig.site_domain),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GoHighLevel CRM 2025 Guide for Agencies & SaaS Founders",
    description: "Watch the GoHighLevel all-in-one platform tour, compare 2025 pricing, and grab automation frameworks that scale agencies and SaaS brands.",
    url: siteConfig.site_domain,
    siteName: "GoHigh Impact",
    type: "website",
    images: [
      {
        url: `${siteConfig.site_domain}/hero-video-thumbnail.svg`,
        width: 1280,
        height: 720,
        alt: "GoHighLevel All-in-One Platform Tour Thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GoHighLevel CRM 2025 Guide for Agencies & SaaS Founders",
    description: "Watch the GoHighLevel all-in-one platform tour, compare 2025 pricing, and grab automation frameworks that scale agencies and SaaS brands.",
    images: [`${siteConfig.site_domain}/hero-video-thumbnail.svg`],
  },
  keywords: [
    "gohighlevel crm guide",
    "gohighlevel 2025",
    "marketing automation platform",
    "white label crm software",
    "agency automation",
    "gohighlevel pricing",
    "gohighlevel review",
    "saas agency",
  ],
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-23HWYQVF1Z" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-23HWYQVF1Z');
          `}
        </Script>
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
