"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StickyTrialCta() {
  const [dismissed, setDismissed] = useState<boolean | null>(null);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem("trial-cta-dismissed");
    setDismissed(!!isDismissed);
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem("trial-cta-dismissed", "true");
    setDismissed(true);
  };

  if (dismissed) return null;
  if (dismissed === null) return null; // wait for client hydration before rendering

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-5">
      <div className="border-t border-white/20 bg-gradient-to-r from-brand-green via-brand-blue to-brand-blue shadow-2xl">
        <div className="container mx-auto px-3 py-3 sm:px-6 sm:py-4">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <div className="flex flex-1 items-center gap-2 sm:gap-3">
              <span className="hidden h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-white sm:flex">
                <Sparkles className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-white sm:text-sm">
                  30-Day Free Trial
                </p>
                <p className="text-[10px] leading-tight text-white/90 sm:text-sm sm:leading-snug">
                  Join 2M+ businesses already growing with GoHighLevel
                </p>
              </div>
            </div>
            <div className="flex flex-shrink-0 items-center gap-1.5 sm:gap-2">
              <Button
                asChild
                size="sm"
                className="h-9 rounded-full bg-white px-4 text-xs font-semibold text-brand-green shadow-md transition hover:bg-white/90 sm:h-10 sm:px-6 sm:text-sm"
              >
                <Link href="https://snip.ly/ghl-bootcamp" target="_blank" rel="noopener noreferrer">
                  Start now
                </Link>
              </Button>
              <button
                type="button"
                onClick={handleDismiss}
                className="flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white sm:h-10 sm:w-10"
                aria-label="Dismiss"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
