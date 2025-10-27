"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Play,
  ArrowRight,
  BarChart3,
  Workflow,
  Users,
  Gauge,
  ShieldCheck,
  Sparkles,
  HelpCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FAQSchema } from "@/components/structured-data";
import Hls from "hls.js";

export function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoSource = "https://content.apisystem.tech/hls/medias/knES3eSWYIsc5YSZ3YLl/media/transcoded_videos/63efcac51e60ae84979f3a4b_,32,16,00k.mp4.urlset/master.m3u8";
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!isVideoPlaying) return;

    const videoElement = videoRef.current;
    if (!videoElement) return;

    let hls: Hls | null = null;

    if (videoElement.canPlayType("application/vnd.apple.mpegurl")) {
      videoElement.src = videoSource;
      videoElement
        .play()
        .catch(() => {
          /* playback must be triggered by user interaction */
        });
    } else if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(videoSource);
      hls.attachMedia(videoElement);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoElement
          .play()
          .catch(() => {
            /* playback must be triggered by user interaction */
          });
      });
    } else {
      videoElement.src = videoSource;
    }

    return () => {
      videoElement.pause();
      hls?.destroy();
    };
  }, [isVideoPlaying, videoSource]);

  return (
    <section className="bg-gradient-to-b from-brand-blue/10 via-white to-white px-4 pb-12 pt-24 sm:px-6 sm:pb-20 sm:pt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 text-center sm:mb-12">
          <Badge className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-brand-green/10 px-3 py-1.5 text-xs font-medium text-brand-green sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
            GoHighLevel CRM Certified Expert Insights
          </Badge>

          <h1 className="mx-auto mb-4 max-w-5xl text-3xl font-bold leading-tight text-gray-900 sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            GoHighLevel CRM: The Ultimate 2025 Guide for Agencies and SaaS Founders
          </h1>

          <p className="mx-auto mb-6 max-w-3xl text-base text-gray-600 sm:mb-10 sm:text-lg md:text-xl">
            Discover how GoHighLevel CRM can automate your marketing, close more deals, and create predictable monthly revenue.
          </p>

          <div className="mx-auto mb-8 flex max-w-2xl flex-col items-center gap-3 rounded-2xl border border-yellow-200 bg-yellow-50/60 px-5 py-4 text-sm font-medium text-yellow-800 shadow-sm sm:mb-12 sm:flex-row sm:justify-center sm:gap-4 sm:rounded-full sm:py-3 sm:text-base">
            <span className="flex flex-col items-center gap-1 text-center sm:flex-row sm:items-center sm:gap-2 sm:text-left">
              <span aria-hidden="true" className="flex items-center text-lg text-yellow-500 sm:text-xl">★★★★½</span>
              <span>
                <strong className="text-gray-900">4.7/5</strong> from 2,500+ agency reviews
              </span>
            </span>
            <span className="hidden h-4 w-px bg-yellow-300 sm:block" aria-hidden="true" />
            <span className="text-center sm:text-left">
              Plans start at <strong className="text-gray-900">$97/mo</strong> with SaaS upgrades available
            </span>
          </div>

          <div className="mb-10 flex flex-col items-center justify-center gap-3 sm:mb-16 sm:flex-row sm:gap-4">
            <Button asChild className="w-full rounded-full bg-brand-green px-6 py-5 text-base text-white shadow-lg shadow-brand-green/30 transition-colors hover:bg-brand-green/90 sm:w-auto sm:px-8 sm:py-6 sm:text-lg">
              <Link href="https://snip.ly/ghl-bootcamp" target="_blank" rel="noopener noreferrer">Start Free Trial</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full rounded-full border-2 border-brand-blue/20 px-6 py-5 text-base text-brand-blue hover:border-brand-blue hover:bg-brand-blue/10 sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
            >
              <Link href="#guide">Get the Implementation Guide</Link>
            </Button>
          </div>
        </div>

        <div className="mx-auto max-w-4xl" id="ghl-all-in-one-video">
          <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-xl shadow-gray-200 sm:rounded-2xl sm:shadow-2xl">
            <div className="aspect-video">
              {!isVideoPlaying ? (
                <button
                  type="button"
                  className="group relative flex h-full w-full cursor-pointer flex-col items-center justify-center overflow-hidden px-4"
                  onClick={() => setIsVideoPlaying(true)}
                  style={{
                    backgroundImage: 'url(/hero-video-thumbnail.svg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  aria-label="Play GoHighLevel All-in-One Platform video"
                >
                  {/* Dark overlay for better text contrast */}
                  <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" aria-hidden="true" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue shadow-lg shadow-brand-blue/30 transition-transform group-hover:scale-110 sm:mb-6 sm:h-20 sm:w-20">
                      <Play className="ml-1 h-6 w-6 text-white sm:h-8 sm:w-8" fill="white" />
                    </div>
                    <p className="text-center text-sm font-medium text-white drop-shadow-lg sm:text-base md:text-lg lg:text-xl">GoHighLevel All-in-One Platform Tour (2025)</p>
                  </div>
                </button>
              ) : (
                <video
                  ref={videoRef}
                  className="h-full w-full"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/hero-video-thumbnail.svg"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhatIsGoHighLevel() {
  return (
    <section id="overview" className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-2xl font-semibold text-gray-900 sm:mb-6 sm:text-3xl lg:text-4xl">What Is GoHighLevel CRM?</h2>
        <p className="mb-4 text-base leading-7 text-gray-700 sm:mb-6 sm:text-lg sm:leading-8">
          GoHighLevel CRM is an all-in-one marketing, sales, and service platform engineered to simplify how agencies and growth-focused businesses acquire leads, nurture relationships, and close deals. Instead of duct-taping multiple point solutions together, <Link href="/posts" className="text-brand-blue hover:underline">GoHighLevel brings funnel builder, marketing automation, pipeline tracking, and client reporting</Link> into a unified dashboard. The result: faster execution, cleaner data, and higher lifetime value per customer.
        </p>
        <p className="mb-6 text-lg leading-8 text-gray-700">
          At GoHigh Impact, we specialize in deploying GoHighLevel CRM for agencies that demand measurable ROI. Our team has implemented the platform across coaching firms, local service companies, SaaS products, and high-ticket masterminds. We know what shortcuts to avoid, which <Link href="/posts" className="text-brand-blue hover:underline">automations actually drive conversions</Link>, and how to keep client portals stickier than the competition.
        </p>
        <p className="text-lg leading-8 text-gray-700">
          Whether you are migrating from HubSpot, upgrading from ClickFunnels, or leveling up from spreadsheets, this guide shows you how to extract the full value from GoHighLevel CRM—and stay compliant with the latest data privacy, deliverability, and <Link href="/gohighlevel-review" className="text-brand-blue hover:underline">platform updates in 2025</Link>.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
          <Link href="/posts" className="rounded-full border border-gray-200 px-4 py-1 transition-colors hover:border-brand-blue hover:text-brand-blue">GoHighLevel CRM Tutorials</Link>
          <Link href="/gohighlevel-whitelabel" className="rounded-full border border-gray-200 px-4 py-1 transition-colors hover:border-brand-blue hover:text-brand-blue">GoHighLevel SaaS</Link>
          <Link href="/posts" className="rounded-full border border-gray-200 px-4 py-1 transition-colors hover:border-brand-blue hover:text-brand-blue">Automation Frameworks</Link>
          <Link href="/about" className="rounded-full border border-gray-200 px-4 py-1 transition-colors hover:border-brand-blue hover:text-brand-blue">Agency Playbooks</Link>
        </div>
        <div className="mt-6 flex justify-center sm:mt-8">
          <Button asChild className="w-full rounded-full bg-brand-blue px-6 py-4 text-sm text-white transition-colors hover:bg-brand-blue/90 sm:w-auto sm:px-8 sm:text-base">
            <Link href="/gohighlevel-review">Read the Full GoHighLevel CRM Review</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

const featureHighlights = [
  {
    icon: BarChart3,
    title: "360° Reporting Dashboards",
    description:
      "Visualize pipelines, marketing ROI, and client retention in real time with GoHighLevel's attribution-ready reporting suite.",
  },
  {
    icon: Workflow,
    title: "Automation Workflows",
    description:
      "Deploy drag-and-drop workflows that trigger SMS, email, voicemail drops, and task assignments without writing code.",
  },
  {
    icon: Users,
    title: "Client Portals & Memberships",
    description:
      "Give clients branded access to their campaigns, deliverables, and on-demand courses inside GoHighLevel CRM.",
  },
  {
    icon: Gauge,
    title: "Pipeline & Stage Tracking",
    description:
      "Monitor deal velocity, identify bottlenecks, and forecast revenue with customizable pipelines and stage-level automation.",
  },
];

export function KeyFeatures() {
  return (
    <section id="features" className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-3 text-center text-2xl font-semibold text-gray-900 sm:mb-4 sm:text-3xl lg:text-4xl">Core GoHighLevel CRM Features We Deploy Daily</h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-sm text-gray-600 sm:mb-12 sm:text-base lg:text-lg">
          These features form the backbone of every seven-figure GoHighLevel CRM rollout we deliver. Each one reduces tech stack bloat while increasing campaign velocity.
        </p>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {featureHighlights.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="h-full bg-white p-6 transition-shadow hover:shadow-lg sm:p-8">
                <div className="mb-4 inline-flex rounded-xl border border-brand-blue/20 bg-brand-blue/10 p-3 sm:mb-6 sm:rounded-2xl sm:p-4">
                  <Icon className="h-6 w-6 text-brand-blue sm:h-8 sm:w-8" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:mb-3 sm:text-xl lg:text-2xl">{feature.title}</h3>
                <p className="text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">{feature.description}</p>
                <div className="mt-4 text-brand-blue sm:mt-6">
                  <Link href="/posts/categories" className="inline-flex items-center gap-2 text-xs font-medium sm:text-sm">
                    See feature tutorials
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
        <p className="mt-6 text-center text-sm text-gray-600 sm:mt-8 sm:text-base">
          Ready to map these features to your agency? <Link href="https://snip.ly/ghl-bootcamp" target="_blank" rel="noopener noreferrer" className="text-brand-blue">Start your free trial</Link> or <Link href="/about" className="text-brand-blue hover:underline">learn about our implementation services</Link>.
        </p>
      </div>
    </section>
  );
}

const benefitPoints = [
  {
    title: "Conversion-Ready Templates",
    description:
      "Swipe landing pages, sales pipelines, and nurture sequences that have already produced six-figure launches in GoHighLevel.",
  },
  {
    title: "Proven Compliance Workflows",
    description:
      "Stay ahead of 2025 SMS/MMS regulations with workflows we update as carrier restrictions evolve.",
  },
  {
    title: "Data Hygiene + CRM Governance",
    description:
      "Implement naming conventions, tagging taxonomies, and lifecycle metrics that keep multi-client dashboards clean.",
  },
  {
    title: "Agency Enablement",
    description:
      "Get SOPs, client onboarding scripts, and upsell frameworks that help you package GoHighLevel CRM as a premium retainer.",
  },
];

export function WhyChooseGoHighLevel() {
  return (
    <section id="why" className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-3 text-center text-2xl font-semibold text-gray-900 sm:mb-4 sm:text-3xl lg:text-4xl">Why Agencies Choose GoHigh Impact for GoHighLevel CRM</h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-sm text-gray-600 sm:mb-12 sm:text-base lg:text-lg">
          We are not just resellers. We are operators who deploy GoHighLevel CRM in our own ventures and coach agencies on how to productize it profitably.
        </p>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:gap-10">
          {benefitPoints.map((benefit) => (
            <div key={benefit.title} className="flex gap-3 sm:gap-4">
              <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue/10 sm:h-10 sm:w-10">
                <CheckCircle2 className="h-4 w-4 text-brand-blue sm:h-5 sm:w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 sm:text-lg lg:text-xl">{benefit.title}</h3>
                <p className="mt-1 text-sm text-gray-600 sm:mt-2 sm:text-base">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center gap-3 sm:mt-12 sm:flex-row sm:justify-center sm:gap-4">
          <Button asChild className="w-full rounded-full bg-brand-green px-6 py-4 text-sm text-white transition-colors hover:bg-brand-green/90 sm:w-auto sm:px-8 sm:text-base">
            <Link href="/posts/tags">Browse our GoHighLevel CRM tags</Link>
          </Button>
          <Link href="/pages" className="text-xs font-medium text-brand-blue sm:text-sm">
            View SOP library →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ComparisonSnapshot() {
  return (
    <section id="comparison-visual" className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-6 text-center sm:mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl lg:text-4xl">See GoHighLevel Side-by-Side</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-gray-600 sm:mt-4 sm:text-base lg:text-lg">
            Quickly compare GoHighLevel&apos;s bundled feature set and monthly pricing against leading point solutions before diving into the full pricing breakdown below.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
          <Image
            src="/comparison.png"
            alt="Comparison chart showing GoHighLevel versus other marketing tools with monthly pricing and included features"
            width={1600}
            height={900}
            className="h-auto w-full"
            priority
          />
        </div>
        <p className="mt-4 text-center text-xs text-gray-500 sm:mt-6 sm:text-sm">
          Need the editable version for client decks? <Link href="/posts" className="text-brand-blue hover:underline">Download the comparison slide</Link>.
        </p>
      </div>
    </section>
  );
}

const pricingTiers = [
  {
    name: "Starter",
    cost: "$97/mo",
    bestFor: "Solo founders and boutique agencies",
    bullets: [
      "Unlimited sub-accounts",
      "Pipeline, email, SMS, calendar",
      "Workflow builder + automations",
    ],
    cta: "START FREE TRIAL",
  },
  {
    name: "Unlimited",
    cost: "$297/mo",
    bestFor: "Growing teams and white-label resellers",
    bullets: [
      "Advanced reporting dashboards",
      "Reputation management suite",
      "Priority support & API access",
    ],
    cta: "START FREE TRIAL",
    highlighted: true,
  },
  {
    name: "SaaS Mode",
    cost: "$497/mo",
    bestFor: "Agencies turning GoHighLevel into software",
    bullets: [
      "Custom billing + Stripe integration",
      "Feature toggles for end users",
      "Partner-level success coaching",
    ],
    cta: "START FREE TRIAL",
  },
];

export function PricingComparison() {
  return (
    <section id="pricing" className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-3 text-center text-2xl font-semibold text-gray-900 sm:mb-4 sm:text-3xl lg:text-4xl">GoHighLevel CRM Pricing Compared</h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-sm text-gray-600 sm:mb-12 sm:text-base lg:text-lg">
          Choose the plan that aligns with your growth goals. We layer in custom automations, onboarding, and client retention frameworks for every tier.
        </p>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`flex h-full flex-col justify-between border-gray-200 p-6 sm:p-8 ${tier.highlighted ? "border-brand-green shadow-lg" : "bg-white"}`}
            >
              <div>
                <Badge className={`${tier.highlighted ? "bg-brand-green text-white" : "bg-brand-blue/10 text-brand-blue"} mb-3 w-fit rounded-full px-3 py-1.5 text-xs sm:mb-4 sm:px-4 sm:py-2 sm:text-sm`}>{tier.name}</Badge>
                <p className="text-2xl font-semibold text-gray-900 sm:text-3xl">{tier.cost}</p>
                <p className="mt-2 text-xs uppercase tracking-wide text-gray-500 sm:text-sm">{tier.bestFor}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600 sm:mt-6 sm:space-y-3 sm:text-base">
                  {tier.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-blue" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button asChild className="mt-6 rounded-full bg-brand-blue px-5 py-2.5 text-sm text-white transition-colors hover:bg-brand-blue/90 sm:mt-8 sm:px-6 sm:py-3 sm:text-base">
                <Link href="https://snip.ly/ghl-pricing" target="_blank" rel="noopener noreferrer">{tier.cta}</Link>
              </Button>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-gray-500 sm:mt-10 sm:text-sm">
          Not sure which plan to choose? <Link href="https://snip.ly/ghl-pricing" target="_blank" rel="noopener noreferrer" className="text-brand-blue">Start your free trial</Link> or schedule a roadmap call.
        </p>
      </div>
    </section>
  );
}

const industries = [
  {
    title: "Local Service Businesses",
    description:
      "From dental clinics to home services, GoHighLevel CRM keeps inbound leads warm with automated follow-up sequences and appointment reminders.",
  },
  {
    title: "Coaches & Consultants",
    description:
      "Deliver signature frameworks, host paid communities, and nurture prospects into premium programs with branded member areas.",
  },
  {
    title: "Digital Marketing Agencies",
    description:
      "Sell retention-first retainers by giving clients live dashboards, call tracking, and performance snapshots they actually open.",
  },
  {
    title: "B2B SaaS Companies",
    description:
      "Pair GoHighLevel CRM with your product-led growth motion to keep demos flowing, trials activated, and customer success synchronized.",
  },
];

export function UseCasesIndustries() {
  return (
    <section id="use-cases" className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 sm:mb-4 sm:text-3xl lg:text-4xl">Where GoHighLevel CRM Delivers Category-Leading Impact</h2>
          <p className="mx-auto max-w-3xl text-sm text-gray-600 sm:text-base lg:text-lg">
            These are the exact industries we have helped achieve 3x–7x pipeline growth using GoHighLevel CRM automations.
          </p>
        </div>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {industries.map((item) => (
            <Card key={item.title} className="border-gray-200 bg-white p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-gray-900 sm:text-xl lg:text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm text-gray-600 sm:mt-4 sm:text-base">{item.description}</p>
              <Link href="/posts/categories" className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-brand-blue sm:mt-6 sm:text-sm">
                Explore case studies
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-gray-600 sm:mt-8 sm:text-base">
          Want a custom playbook? <Link href="https://snip.ly/ghl-bootcamp" target="_blank" rel="noopener noreferrer" className="text-brand-blue">Start your free trial</Link> or <Link href="/posts" className="text-brand-blue hover:underline">browse our industry-specific tutorials</Link>.
        </p>
      </div>
    </section>
  );
}

const implementationSteps = [
  {
    step: "Audit",
    title: "Audit Your Current Funnel Stack",
    description:
      "We map every tool, automation, and data touchpoint before recommending a GoHighLevel CRM architecture.",
  },
  {
    step: "Blueprint",
    title: "Design the Revenue Blueprint",
    description:
      "Together we sketch journeys, triggers, and KPIs inside our collaborative GoHigh Impact strategy workspace.",
  },
  {
    step: "Build",
    title: "Implement & Automate",
    description:
      "Our team builds workflows, pipelines, and dashboards while your team focuses on offers and fulfillment.",
  },
  {
    step: "Scale",
    title: "Optimize & Scale",
    description:
      "We document SOPs, train your team, and launch growth experiments backed by GoHighLevel CRM attribution data.",
  },
];

export function ImplementationGuide() {
  return (
    <section id="guide" className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-3 text-center text-2xl font-semibold text-gray-900 sm:mb-4 sm:text-3xl lg:text-4xl">Our Proven GoHighLevel CRM Implementation Guide</h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-sm text-gray-600 sm:mb-12 sm:text-base lg:text-lg">
          Follow the same four-phase framework we have used to onboard 150+ GoHighLevel CRM clients with minimal downtime.
        </p>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {implementationSteps.map((step) => (
            <Card key={step.step} className="border-gray-200 bg-white p-6 sm:p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-xs font-semibold text-brand-blue sm:h-12 sm:w-12 sm:text-sm">
                {step.step}
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900 sm:mt-6 sm:text-lg lg:text-xl">{step.title}</h3>
              <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm">{step.description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center gap-3 text-center sm:mt-10 sm:gap-4">
          <p className="text-sm text-gray-600 sm:text-base">Download our complete GoHighLevel CRM launch checklist to keep your migration on track.</p>
          <Button asChild className="w-full rounded-full bg-brand-green px-6 py-4 text-sm text-white transition-colors hover:bg-brand-green/90 sm:w-auto sm:px-8 sm:text-base">
            <Link href="/posts/launch-checklist">Get the 25-point checklist</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

const stories = [
  {
    name: "Agency Velocity",
    metric: "212% pipeline growth in 90 days",
    quote:
      "The GoHigh Impact team rebuilt our fragmented tech stack inside GoHighLevel CRM and automated onboarding, saving us 25 hours a week while increasing booked calls.",
    role: "Owner, Performance Marketing Agency",
  },
  {
    name: "RevOps Collective",
    metric: "43% lift in client retention",
    quote:
      "Their E-E-A-T-driven content strategy and GoHighLevel CRM deal health dashboards give us the data to prove ROI in every client review.",
    role: "Head of Client Success",
  },
  {
    name: "Launch Lab",
    metric: "6-figure course launch in 21 days",
    quote:
      "We used GoHigh Impact's funnel templates and GoHighLevel CRM nurture automations to sell out our beta without extra ad spend.",
    role: "Founder, Education Startup",
  },
];

export function SuccessStories() {
  return (
    <section id="success" className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-3 text-center text-2xl font-semibold text-gray-900 sm:mb-4 sm:text-3xl lg:text-4xl">Real GoHighLevel CRM Wins from Our Community</h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-sm text-gray-600 sm:mb-12 sm:text-base lg:text-lg">
          Experience matters. We combine firsthand GoHighLevel CRM execution with verifiable results across diverse industries.
        </p>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {stories.map((story) => (
            <Card key={story.name} className="flex h-full flex-col justify-between border-gray-200 bg-white p-6 sm:p-8">
              <div>
                <h3 className="text-base font-semibold text-gray-900 sm:text-lg lg:text-xl">{story.name}</h3>
                <p className="mt-2 text-xs uppercase tracking-wide text-brand-blue sm:text-sm">{story.metric}</p>
                <p className="mt-3 text-sm text-gray-600 sm:mt-4 sm:text-base">&ldquo;{story.quote}&rdquo;</p>
              </div>
              <p className="mt-4 text-xs text-gray-500 sm:mt-6 sm:text-sm">{story.role}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center text-xs text-gray-500 sm:mt-12 sm:text-sm">
          Want your story featured? <Link href="/contact" className="text-brand-blue">Submit your GoHighLevel CRM case study</Link>.
        </div>
      </div>
    </section>
  );
}

const competitorRows = [
  {
    competitor: "HubSpot Marketing Hub",
    focus: "Enterprise inbound",
    differentiator: "GoHighLevel CRM offers unlimited sub-accounts and white-label capability at a fraction of the cost.",
  },
  {
    competitor: "ClickFunnels",
    focus: "Funnel builder",
    differentiator: "GoHighLevel CRM includes full CRM, automation, and client portals so you do not need Zapier to stitch insights together.",
  },
  {
    competitor: "ActiveCampaign",
    focus: "Email automation",
    differentiator: "GoHighLevel CRM adds two-way SMS, pipeline tracking, and SaaS mode to productize your agency services.",
  },
  {
    competitor: "Keap (Infusionsoft)",
    focus: "Legacy small business CRM",
    differentiator: "GoHighLevel CRM delivers modern UI, faster automation building, and integrated payments without extra fees.",
  },
];

export function CompetitorComparison() {
  return (
    <section id="comparison" className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-3 text-center text-2xl font-semibold text-gray-900 sm:mb-4 sm:text-3xl lg:text-4xl">GoHighLevel CRM vs. The Field</h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-sm text-gray-600 sm:mb-10 sm:text-base lg:text-lg">
          Understand how GoHighLevel CRM stacks up so you can articulate the value to clients and stakeholders.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white sm:rounded-2xl">
          <table className="min-w-full divide-y divide-gray-200 text-left text-xs sm:text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-3 font-medium text-gray-500 sm:px-6 sm:py-4">Platform</th>
                <th className="px-3 py-3 font-medium text-gray-500 sm:px-6 sm:py-4">Primary Focus</th>
                <th className="px-3 py-3 font-medium text-gray-500 sm:px-6 sm:py-4">Why GoHighLevel CRM Wins</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {competitorRows.map((row) => (
                <tr key={row.competitor} className="hover:bg-gray-50">
                  <td className="px-3 py-3 text-gray-900 sm:px-6 sm:py-4">{row.competitor}</td>
                  <td className="px-3 py-3 text-gray-600 sm:px-6 sm:py-4">{row.focus}</td>
                  <td className="px-3 py-3 text-gray-600 sm:px-6 sm:py-4">{row.differentiator}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-center text-xs text-gray-500 sm:mt-8 sm:text-sm">
          Need client-facing comparison decks? <Link href="/posts" className="text-brand-blue hover:underline">Download our comparison templates</Link> or <Link href="/gohighlevel-review" className="text-brand-blue hover:underline">read our detailed review</Link>.
        </p>
      </div>
    </section>
  );
}

const faqItems = [
  {
    question: "Is GoHighLevel CRM a good fit for small agencies in 2025?",
    answer:
      "Absolutely. GoHighLevel is built for lean teams that want to automate lead generation, follow-up, and client management without hiring a full tech squad. It replaces multiple tools and saves agencies thousands monthly.",
  },
  {
    question: "What exactly does GoHighLevel CRM do?",
    answer:
      "GoHighLevel is an all-in-one platform that combines CRM, marketing automation, funnels, appointment booking, pipeline tracking, email and SMS campaigns, reputation management, and more, all under one dashboard.",
  },
  {
    question: "Can GoHighLevel replace tools like ClickFunnels, Mailchimp, and Calendly?",
    answer:
      "Yes. It is designed to consolidate your tech stack so you can build funnels, send email and SMS campaigns, automate follow-ups, and manage appointments without juggling multiple subscriptions.",
  },
  {
    question: "How long does it take to migrate to GoHighLevel CRM?",
    answer:
      "Most agencies fully migrate in 7-14 days depending on the number of existing tools. Templates, snapshots, and cloning options make the process surprisingly fast.",
  },
  {
    question: "Is GoHighLevel beginner-friendly?",
    answer:
      "Yes. Even if you are not tech-savvy, the platform offers prebuilt automations, drag-and-drop editors, and 24/7 support. Many users launch campaigns within their first 48 hours.",
  },
  {
    question: "Can I white-label GoHighLevel under my own brand?",
    answer:
      "Yes. With the SaaS Pro plan, you can fully white-label the platform with a custom domain, branding, and your own pricing so you can sell it like proprietary software.",
  },
  {
    question: "Does GoHighLevel support HIPAA or financial compliance?",
    answer:
      "Yes. HIPAA compliance is available as an add-on, making it a strong fit for healthcare, legal, and financial businesses with strict data regulations.",
  },
  {
    question: "Can I integrate GoHighLevel with my existing tools?",
    answer:
      "Yes. GoHighLevel integrates with Zapier, webhooks, API, and thousands of third-party apps, making it easy to connect your favorite tools.",
  },
  {
    question: "How much does GoHighLevel CRM cost?",
    answer:
      "Pricing starts around $97 per month for the basic plan. Agencies typically choose the $297 plan or the SaaS Pro plan at $497 per month to unlock full automation and white-labeling.",
  },
  {
    question: "Does GoHighLevel offer a free trial?",
    answer:
      "Yes. GoHighLevel offers a 14-day free trial so you can test everything, including funnels, automation, CRM, and more, before committing.",
  },
  {
    question: "What industries use GoHighLevel CRM?",
    answer:
      "Agencies, real estate professionals, coaches, gyms, med spas, roofers, and e-commerce brands all use GoHighLevel to automate marketing and sales.",
  },
  {
    question: "Can GoHighLevel manage multiple client accounts?",
    answer:
      "Yes. You can create unlimited sub-accounts, manage every client in a single dashboard, and keep campaigns organized without tool sprawl.",
  },
  {
    question: "Does GoHighLevel include AI tools?",
    answer:
      "Yes. The platform has built-in AI features like AI chatbots, AI follow-up messaging, and integrations with AI calling systems to boost conversions 24/7.",
  },
  {
    question: "Can I build websites and funnels inside GoHighLevel?",
    answer:
      "Yes. It includes a powerful drag-and-drop funnel and website builder, landing page templates, and full customization options.",
  },
  {
    question: "Is GoHighLevel good for real estate agents?",
    answer:
      "Definitely. Realtors use GoHighLevel to capture leads, follow up with AI, automate showings, and book appointments without manual chasing.",
  },
  {
    question: "How secure is my data inside GoHighLevel?",
    answer:
      "GoHighLevel uses secure, encrypted connections and complies with modern security standards. HIPAA options are available for sensitive industries.",
  },
  {
    question: "Can GoHighLevel help me get more leads?",
    answer:
      "Yes. With lead capture forms, funnels, AI follow-ups, and automated nurturing sequences, GoHighLevel helps agencies generate and convert leads 24/7.",
  },
  {
    question: "Does GoHighLevel have a mobile app?",
    answer:
      "Yes. The mobile app lets you manage leads, reply to messages, and track pipelines on the go, which is perfect for busy agency owners.",
  },
  {
    question: "Can I cancel GoHighLevel anytime?",
    answer:
      "Yes. There are no long-term contracts. You can cancel or upgrade anytime directly from your account dashboard.",
  },
  {
    question: "Is GoHighLevel CRM worth it in 2025?",
    answer:
      "For most agencies, yes. It reduces tool costs, increases revenue through automation, and turns agencies into scalable SaaS businesses. The ROI usually pays for itself in the first 30-60 days.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <FAQSchema faqs={faqItems} />
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-2xl font-semibold text-gray-900 sm:mb-6 sm:text-3xl lg:text-4xl">GoHighLevel CRM FAQ</h2>
        <p className="mb-8 text-center text-sm text-gray-600 sm:mb-12 sm:text-base lg:text-lg">
          Still researching? These answers are based on hundreds of real-world GoHighLevel CRM implementations and ongoing platform updates.
        </p>
        <div className="space-y-3 sm:space-y-4">
          {faqItems.map((item) => (
            <details key={item.question} className="rounded-xl border border-gray-200 bg-gray-50 p-4 sm:rounded-2xl sm:p-6">
              <summary className="flex cursor-pointer items-center gap-2 text-base font-semibold text-gray-900 sm:gap-3 sm:text-lg">
                <HelpCircle className="h-4 w-4 flex-shrink-0 text-brand-blue sm:h-5 sm:w-5" />
                {item.question}
              </summary>
              <p className="mt-3 text-sm text-gray-600 sm:mt-4 sm:text-base">{item.answer}</p>
              <p className="mt-2 text-xs text-brand-blue sm:mt-3 sm:text-sm">Still unsure? <Link href="https://snip.ly/ghl-bootcamp" target="_blank" rel="noopener noreferrer">Start your free trial</Link>.</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  const [status, setStatus] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const valueProps = useMemo(
    () => [
      "Weekly GoHighLevel CRM growth reports",
      "Workflow templates and automation scripts",
      "Client retention and upsell frameworks",
    ],
    []
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xrbywplv", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus({ message: "Thanks! Please check your inbox. ✅", type: "success" });
        form.reset();
        // Auto-hide success message after 5 seconds
        setTimeout(() => setStatus(null), 5000);
      } else {
        let errorMsg = "Oops, something went wrong. Please try again.";
        try {
          const json = await response.json();
          if (json?.errors?.length) {
            errorMsg = json.errors.map((e: { message: string }) => e.message).join(", ");
          }
        } catch { }
        setStatus({ message: errorMsg, type: "error" });
      }
    } catch {
      setStatus({ message: "Network error. Please try again.", type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cta" className="border-t border-gray-200 bg-gradient-to-br from-white to-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-4xl text-center">
        <Badge className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-3 py-1.5 text-xs text-brand-blue sm:mb-4 sm:px-4 sm:py-2 sm:text-sm">
          <ShieldCheck className="h-3 w-3 sm:h-4 sm:w-4" />
          Trusted GoHighLevel CRM Partner
        </Badge>
        <h2 className="mb-3 text-2xl font-semibold text-gray-900 sm:mb-4 sm:text-3xl lg:text-4xl">Scale Faster with GoHigh Impact</h2>
        <p className="mx-auto mb-6 max-w-2xl text-sm text-gray-600 sm:mb-8 sm:text-base lg:text-lg">
          Join 5,000+ marketers who rely on our GoHighLevel CRM insights for automation best practices, compliance updates, and funnel frameworks that convert cold traffic into superfans.
        </p>
        <form onSubmit={handleSubmit} className="mx-auto max-w-xl">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              aria-label="Email address"
              disabled={isSubmitting}
              className="flex-1 rounded-full border-gray-300 bg-white px-4 py-4 text-sm text-gray-900 placeholder:text-gray-500 focus:border-brand-blue disabled:opacity-50 sm:px-6 sm:py-6 sm:text-base"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-brand-green px-6 py-4 text-sm text-white shadow-lg shadow-brand-green/20 transition-colors hover:bg-brand-green/90 disabled:opacity-50 sm:px-8 sm:py-6 sm:text-base"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe Now"}
            </Button>
          </div>

          {/* Hidden fields */}
          <input type="hidden" name="_subject" value="New subscriber from your site" />
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

          {/* Status message popup */}
          {status && (
            <div
              className={`mt-4 animate-in fade-in slide-in-from-top-2 rounded-lg border px-4 py-3 text-sm ${status.type === "success"
                ? "border-green-200 bg-green-50 text-green-800"
                : "border-red-200 bg-red-50 text-red-800"
                }`}
            >
              {status.message}
            </div>
          )}
        </form>
        <div className="mt-4 flex flex-col items-center gap-2 text-xs text-gray-600 sm:mt-6 sm:text-sm">
          {valueProps.map((prop) => (
            <div key={prop} className="flex items-center gap-2">
              <CheckCircle2 className="h-3 w-3 text-brand-blue sm:h-4 sm:w-4" />
              <span>{prop}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Prefer a live conversation? <Link href="/contact" className="text-brand-blue">Book a GoHighLevel CRM strategy session</Link>.
        </p>
      </div>
    </section>
  );
}
