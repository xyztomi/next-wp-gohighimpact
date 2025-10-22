"use client";

import Script from "next/script";
import { siteConfig } from "@/site.config";

export function StructuredData() {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GoHigh Impact",
    url: siteConfig.site_domain,
    logo: `${siteConfig.site_domain}/logo.png`,
    description: siteConfig.site_description,
    sameAs: [
      // Add your social media profiles here
      "https://www.linkedin.com/company/gohighimpact",
      "https://twitter.com/gohighimpact",
      "https://www.facebook.com/gohighimpact",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: ["English"],
    },
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "GoHigh Impact",
    url: siteConfig.site_domain,
    description: siteConfig.site_description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.site_domain}/posts?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // SoftwareApplication Schema for GoHighLevel CRM
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "GoHighLevel CRM",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "97",
      highPrice: "497",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "2500",
      bestRating: "5",
      worstRating: "1",
    },
    description:
      "All-in-one marketing automation platform and CRM for agencies, combining funnel builder, email/SMS marketing, pipeline management, and white-label capabilities.",
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
    </>
  );
}

// FAQ Schema Component
export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
    />
  );
}

// Article Schema Component
export function ArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  authorName = "GoHigh Impact Team",
  image,
}: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image || `${siteConfig.site_domain}/api/og`,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: authorName,
      url: `${siteConfig.site_domain}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "GoHigh Impact",
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.site_domain}/logo.png`,
      },
    },
  };

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleSchema),
      }}
    />
  );
}
