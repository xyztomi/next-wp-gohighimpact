"use client";

import { useMemo, useState } from "react";
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

export function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="bg-gradient-to-b from-brand-blue/10 via-white to-white px-4 pb-12 pt-24 sm:px-6 sm:pb-20 sm:pt-32">
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

          <div className="mb-10 flex flex-col items-center justify-center gap-3 sm:mb-16 sm:flex-row sm:gap-4">
            <Button asChild className="w-full rounded-full bg-brand-green px-6 py-5 text-base text-white shadow-lg shadow-brand-green/30 transition-colors hover:bg-brand-green/90 sm:w-auto sm:px-8 sm:py-6 sm:text-lg">
              <Link href="#pricing">Compare GoHighLevel CRM Plans</Link>
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

        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-xl shadow-gray-200 sm:rounded-2xl sm:shadow-2xl">
            <div className="aspect-video">
              {!isVideoPlaying ? (
                <button
                  type="button"
                  className="group flex h-full w-full cursor-pointer flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50 px-4"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue shadow-lg shadow-brand-blue/30 transition-transform group-hover:scale-110 sm:mb-6 sm:h-20 sm:w-20">
                    <Play className="ml-1 h-6 w-6 text-white sm:h-8 sm:w-8" fill="white" />
                  </div>
                  <p className="text-center text-sm font-medium text-gray-900 sm:text-base md:text-lg lg:text-xl">Watch How GoHigh Impact Builds High-ROI Systems with GoHighLevel CRM</p>
                  <p className="mt-2 text-center text-xs text-gray-600 sm:text-sm">3-minute walkthrough of our lead-to-sale automation blueprint</p>
                </button>
              ) : (
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/JSltX3xCCbM"
                  title="GoHighLevel CRM Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">Replace the demo video with your latest GoHighLevel CRM walkthrough when available.</p>
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
          GoHighLevel CRM is an all-in-one marketing, sales, and service platform engineered to simplify how agencies and growth-focused businesses acquire leads, nurture relationships, and close deals. Instead of duct-taping multiple point solutions together, GoHighLevel brings funnel builder, marketing automation, pipeline tracking, and client reporting into a unified dashboard. The result: faster execution, cleaner data, and higher lifetime value per customer.
        </p>
        <p className="mb-6 text-lg leading-8 text-gray-700">
          At GoHigh Impact, we specialize in deploying GoHighLevel CRM for agencies that demand measurable ROI. Our team has implemented the platform across coaching firms, local service companies, SaaS products, and high-ticket masterminds. We know what shortcuts to avoid, which automations actually drive conversions, and how to keep client portals stickier than the competition.
        </p>
        <p className="text-lg leading-8 text-gray-700">
          Whether you are migrating from HubSpot, upgrading from ClickFunnels, or leveling up from spreadsheets, this guide shows you how to extract the full value from GoHighLevel CRM—and stay compliant with the latest data privacy, deliverability, and platform updates in 2025.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
          <span className="rounded-full border border-gray-200 px-4 py-1">Entity-based SEO</span>
          <span className="rounded-full border border-gray-200 px-4 py-1">GoHighLevel SaaS</span>
          <span className="rounded-full border border-gray-200 px-4 py-1">Automation Frameworks</span>
          <span className="rounded-full border border-gray-200 px-4 py-1">Agency Playbooks</span>
        </div>
        <div className="mt-6 flex justify-center sm:mt-8">
          <Button asChild className="w-full rounded-full bg-brand-blue px-6 py-4 text-sm text-white transition-colors hover:bg-brand-blue/90 sm:w-auto sm:px-8 sm:text-base">
            <Link href="/posts">Explore Our GoHighLevel CRM Guides</Link>
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
        <p className="mt-8 text-center text-xs text-gray-500 sm:mt-12 sm:text-sm">
          Ready to map these features to your agency? <Link href="#cta" className="text-brand-blue">Book a GoHighLevel CRM blueprint session</Link>.
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

const pricingTiers = [
  {
    name: "Starter SaaS",
    cost: "$97/mo",
    bestFor: "Solo founders and boutique agencies",
    bullets: [
      "Unlimited sub-accounts",
      "Pipeline, email, SMS, calendar",
      "Workflow builder + automations",
    ],
    cta: "Launch with our QuickStart SOP",
  },
  {
    name: "Pro Agency",
    cost: "$297/mo",
    bestFor: "Growing teams and white-label resellers",
    bullets: [
      "Advanced reporting dashboards",
      "Reputation management suite",
      "Priority support & API access",
    ],
    cta: "Get the 30-day migration plan",
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
    cta: "Access our SaaS pricing calculator",
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
                <Link href="#cta">{tier.cta}</Link>
              </Button>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-gray-500 sm:mt-10 sm:text-sm">
          Not sure which plan to choose? <Link href="#faq" className="text-brand-blue">Jump to the GoHighLevel CRM FAQ</Link> or schedule a roadmap call.
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
        <div className="mt-8 text-center text-xs text-gray-500 sm:mt-12 sm:text-sm">
          Want a custom playbook? <Link href="#cta" className="text-brand-blue">Request a GoHighLevel CRM industry audit</Link>.
        </div>
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
          Want your story featured? <Link href="/posts" className="text-brand-blue">Submit your GoHighLevel CRM case study</Link>.
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
          Need client-facing comparison decks? <Link href="/posts/comparisons" className="text-brand-blue">Download our slide templates</Link>.
        </p>
      </div>
    </section>
  );
}

const faqItems = [
  {
    question: "Is GoHighLevel CRM a good fit for small agencies in 2025?",
    answer:
      "Absolutely. The latest GoHighLevel CRM updates make it easier to spin up sub-accounts, templatize workflows, and white-label your services. Even if you are a team of one, you can sell higher-retainer offers with the right systems.",
  },
  {
    question: "How long does it take to migrate to GoHighLevel CRM?",
    answer:
      "Most migrations take 21–30 days depending on how many funnels, pipelines, and contact lists you have. Our implementation guide keeps your marketing live while the new automations are built in parallel.",
  },
  {
    question: "Can GoHighLevel CRM replace my current email, SMS, and calendar tools?",
    answer:
      "Yes. GoHighLevel CRM consolidates marketing automation, calendar scheduling, pipeline tracking, reputation management, and membership delivery. We map necessary exceptions during the audit phase.",
  },
  {
    question: "Does GoHighLevel CRM support HIPAA or financial compliance?",
    answer:
      "Compliance requirements vary by industry. We work with legal counsel to ensure your GoHighLevel CRM instance aligns with HIPAA, FINRA, or GDPR where applicable.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
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
              <p className="mt-2 text-xs text-brand-blue sm:mt-3 sm:text-sm">Still unsure? <Link href="#cta">Talk to a strategist</Link>.</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  const [email, setEmail] = useState("");

  const valueProps = useMemo(
    () => [
      "Weekly GoHighLevel CRM growth reports",
      "Workflow templates and automation scripts",
      "Client retention and upsell frameworks",
    ],
    []
  );

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
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log("Newsletter signup:", email);
            alert(`Thanks for subscribing with ${email}!`);
            setEmail("");
          }}
          className="mx-auto max-w-xl"
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="flex-1 rounded-full border-gray-300 bg-white px-4 py-4 text-sm text-gray-900 placeholder:text-gray-500 focus:border-brand-blue sm:px-6 sm:py-6 sm:text-base"
            />
            <Button type="submit" className="rounded-full bg-brand-green px-6 py-4 text-sm text-white shadow-lg shadow-brand-green/20 transition-colors hover:bg-brand-green/90 sm:px-8 sm:py-6 sm:text-base">
              Subscribe Now
            </Button>
          </div>
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
          Prefer a live conversation? <Link href="/pages/contact" className="text-brand-blue">Book a GoHighLevel CRM strategy session</Link>.
        </p>
      </div>
    </section>
  );
}
