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
  title: {
    default: `${siteConfig.site_name} – GoHighLevel CRM 2025 Guide for Agencies & SaaS Founders`,
    template: `%s | ${siteConfig.site_name}`,
  },
  description:
    "Watch the GoHighLevel all-in-one platform tour, compare 2025 pricing, and grab automation frameworks that scale agencies and SaaS brands.",
  metadataBase: new URL(siteConfig.site_domain),
  applicationName: siteConfig.site_name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.site_name} – GoHighLevel CRM 2025 Guide for Agencies & SaaS Founders`,
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
    title: `${siteConfig.site_name} – GoHighLevel CRM 2025 Guide for Agencies & SaaS Founders`,
    description: "Watch the GoHighLevel all-in-one platform tour, compare 2025 pricing, and grab automation frameworks that scale agencies and SaaS brands.",
    images: [`${siteConfig.site_domain}/hero-video-thumbnail.svg`],
  },
  keywords: [
    "gohighlevel crm",
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
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/favicon.svg" color="#34d399" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '758973117142664');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className={cn("min-h-screen font-sans antialiased overflow-x-hidden overflow-y-scroll no-scrollbar", font.variable)}>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=758973117142664&ev=PageView&noscript=1"
            alt="facebook pixel"
          />
        </noscript>
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
