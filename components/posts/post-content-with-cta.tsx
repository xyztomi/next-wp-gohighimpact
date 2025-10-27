"use client";

import { TrialCtaCard } from "./trial-cta-card";

interface PostContentWithCtaProps {
  content: string;
}

export function PostContentWithCta({ content }: PostContentWithCtaProps) {
  // Split content by H2 tags and inject CTA cards
  const parts = content.split(/(<h2[^>]*>.*?<\/h2>)/gi);

  return (
    <>
      {parts.map((part, index) => {
        const isHeading = part.match(/^<h2[^>]*>.*?<\/h2>$/i);

        return (
          <div key={index}>
            <div dangerouslySetInnerHTML={{ __html: part }} />
            {isHeading && index < parts.length - 1 && <TrialCtaCard />}
          </div>
        );
      })}
    </>
  );
}
