import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TrialCtaCard() {
  return (
    <div className="not-prose my-8 overflow-hidden rounded-2xl border-2 border-brand-green/20 bg-gradient-to-br from-brand-green/5 via-white to-brand-blue/5 shadow-lg">
      <div className="p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-brand-green" />
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-green">
            Limited Time Offer
          </span>
        </div>


        <h3 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
          Ready to Transform Your Business?
        </h3>

        <p className="mb-5 text-base text-gray-600">
          Start your 30-day free trial of GoHighLevel CRM today. No credit card required. Get full access to all features and see why 2M+ businesses trust GoHighLevel.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            asChild
            className="group w-full rounded-full bg-brand-green px-6 py-6 text-base font-semibold text-white shadow-lg shadow-brand-green/30 transition-all hover:bg-brand-green/90 hover:shadow-xl sm:w-auto"
          >
            <Link href="https://snip.ly/ghl-bootcamp" target="_blank" rel="noopener noreferrer">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

          <span className="text-center text-sm text-gray-500 sm:text-left">
            Join 2M+ businesses already scaling with GoHighLevel
          </span>
        </div>
      </div>

      {/* Decorative gradient bar */}
      <div className="h-1.5 bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue" aria-hidden="true" />
    </div>
  );
}
