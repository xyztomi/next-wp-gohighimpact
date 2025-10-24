"use client";

import {
  HeroSection,
  WhatIsGoHighLevel,
  KeyFeatures,
  WhyChooseGoHighLevel,
  ComparisonSnapshot,
  PricingComparison,
  UseCasesIndustries,
  ImplementationGuide,
  SuccessStories,
  CompetitorComparison,
  FAQSection,
  FinalCTA,
} from "@/components/seo-sections";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatIsGoHighLevel />
      <KeyFeatures />
      <WhyChooseGoHighLevel />
      <ComparisonSnapshot />
      <PricingComparison />
      <UseCasesIndustries />
      <ImplementationGuide />
      <SuccessStories />
      <CompetitorComparison />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
