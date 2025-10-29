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
  TestimonialsSection,
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
      <TestimonialsSection />
      <CompetitorComparison />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
