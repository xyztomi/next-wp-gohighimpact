"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TrialPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the popup in this session
    const isDismissed = sessionStorage.getItem("trial-popup-dismissed");
    if (isDismissed) return;

    // Show popup after 30 seconds
    const timer = setTimeout(() => {
      setShouldRender(true);
      // Small delay for animation
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("trial-popup-dismissed", "true");
    // Remove from DOM after animation
    setTimeout(() => setShouldRender(false), 300);
  };

  if (!shouldRender) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"
          }`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Popup */}
      <div
        className={`fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 transition-all duration-300 ${isVisible ? "-translate-y-1/2 opacity-100" : "-translate-y-1/2 scale-95 opacity-0"
          }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="trial-popup-title"
      >
        <div className="relative mx-4 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
          {/* Close button */}
          <button
            type="button"
            onClick={handleClose}
            className="absolute right-4 top-4 z-10 rounded-full p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
            aria-label="Close popup"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Content */}
          <div className="px-6 pb-6 pt-12 sm:px-8 sm:pb-8">
            {/* Illustration */}
            <div className="mb-6 flex justify-center">
              <div className="relative h-28 w-28 sm:h-32 sm:w-32">
                <Image
                  src="/popup.webp"
                  alt="GoHighLevel free trial preview"
                  fill
                  className="rounded-2xl object-cover shadow-lg shadow-brand-blue/20"
                  sizes="(min-width: 640px) 128px, 112px"
                />
              </div>
            </div>

            {/* Badge */}
            <div className="mb-4 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-brand-green/10 px-3 py-1.5 text-xs font-medium text-brand-green">
                <Sparkles className="h-3 w-3" />
                Limited Time Offer
              </span>
            </div>

            {/* Heading */}
            <h2
              id="trial-popup-title"
              className="mb-3 text-center text-2xl font-bold text-gray-900 sm:text-3xl"
            >
              Ready to Transform Your Business?
            </h2>

            {/* Description */}
            <p className="mb-6 text-center text-base text-gray-600">
              Get full access to GoHighLevel CRM and discover why 2M+ businesses trust GoHighLevel.
            </p>

            {/* Features */}
            <ul className="mb-6 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><span className="font-semibold">30-day free trial</span> with full platform access</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Unlimited funnels, contacts & automations</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Done-for-you implementation guidance</span>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              <Button asChild className="w-full rounded-full bg-brand-green px-6 py-6 text-base font-semibold text-white shadow-lg shadow-brand-green/30 transition-colors hover:bg-brand-green/90">
                <Link href="https://snip.ly/ghl-bootcamp" target="_blank" rel="noopener noreferrer">
                  Start Free Trial Now
                </Link>
              </Button>
              <button
                type="button"
                onClick={handleClose}
                className="text-sm text-gray-500 transition-colors hover:text-gray-700"
              >
                Maybe later
              </button>
            </div>
          </div>

          {/* Decorative gradient */}
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue" aria-hidden="true" />
        </div>
      </div>
    </>
  );
}
