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

const primaryBlue = "#0EA5E9";

export function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white px-6 pb-20 pt-32">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <Badge className="mb-6 inline-flex items-center gap-2 rounded-full border" style={{ borderColor: `${primaryBlue}33`, backgroundColor: `${primaryBlue}1a`, color: primaryBlue }}>
            <Sparkles className="h-4 w-4" />
            GoHighLevel CRM Certified Expert Insights
          </Badge>

          <h1 className="mx-auto mb-6 max-w-5xl text-5xl leading-tight text-gray-900 md:text-6xl lg:text-7xl">
            GoHigh Impact: Your Trusted Guide to Dominating with <span className="text-[#0EA5E9]">GoHighLevel CRM</span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-xl text-gray-600">
            Discover proven playbooks, conversion-tested funnels, and automation frameworks that help agencies, consultants, and SaaS founders unlock predictable revenue with GoHighLevel CRM.
          </p>

          <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild className="rounded-full bg-[#0EA5E9] px-10 py-7 text-lg text-white shadow-lg shadow-[#0EA5E9]/20 hover:bg-[#0EA5E9]/90">
              <Link href="#pricing">Compare GoHighLevel CRM Plans</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-2 border-gray-300 px-10 py-7 text-lg text-gray-900 hover:border-gray-400 hover:bg-gray-50"
            >
              <Link href="#guide">Get the Implementation Guide</Link>
            </Button>
          </div>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-2xl shadow-gray-200">
            <div className="aspect-video">
              {!isVideoPlaying ? (
                <button
                  type="button"
                  className="group flex h-full w-full cursor-pointer flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#0EA5E9] shadow-lg shadow-[#0EA5E9]/30 transition-transform group-hover:scale-110">
                    <Play className="ml-1 h-8 w-8 text-white" fill="white" />
                  </div>
                  <p className="text-xl text-gray-900">Watch How GoHigh Impact Builds High-ROI Systems with GoHighLevel CRM</p>
                  <p className="mt-2 text-gray-600">3-minute walkthrough of our lead-to-sale automation blueprint</p>
                </button>
              ) : (
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
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
    <section id="overview" className="bg-white px-6 py-20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-6 text-center text-4xl font-semibold text-gray-900">What Is GoHighLevel CRM?</h2>
        <p className="mb-6 text-lg leading-8 text-gray-700">
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
        <div className="mt-8 flex justify-center">
          <Button asChild className="rounded-full bg-[#0EA5E9] px-8 py-4 text-white hover:bg-[#0EA5E9]/90">
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
    <section id="features" className="bg-gray-50 px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-semibold text-gray-900">Core GoHighLevel CRM Features We Deploy Daily</h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600">
          These features form the backbone of every seven-figure GoHighLevel CRM rollout we deliver. Each one reduces tech stack bloat while increasing campaign velocity.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {featureHighlights.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="h-full bg-white p-8 transition-shadow hover:shadow-lg">
                <div className="mb-6 inline-flex rounded-2xl border border-[#0EA5E9]/20 bg-[#0EA5E9]/10 p-4">
                  <Icon className="h-8 w-8 text-[#0EA5E9]" />
                </div>
                <h3 className="mb-3 text-2xl text-gray-900">{feature.title}</h3>
                <p className="text-base leading-7 text-gray-600">{feature.description}</p>
                <div className="mt-6 text-[#0EA5E9]">
                  <Link href="/posts/categories" className="inline-flex items-center gap-2 text-sm font-medium">
                    See feature tutorials
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
        <p className="mt-12 text-center text-sm text-gray-500">
          Ready to map these features to your agency? <Link href="#cta" className="text-[#0EA5E9]">Book a GoHighLevel CRM blueprint session</Link>.
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
    <section id="why" className="bg-white px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-semibold text-gray-900">Why Agencies Choose GoHigh Impact for GoHighLevel CRM</h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600">
          We are not just resellers. We are operators who deploy GoHighLevel CRM in our own ventures and coach agencies on how to productize it profitably.
        </p>
        <div className="grid gap-10 md:grid-cols-2">
          {benefitPoints.map((benefit) => (
            <div key={benefit.title} className="flex gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#0EA5E9]/10">
                <CheckCircle2 className="h-5 w-5 text-[#0EA5E9]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-base text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild className="rounded-full bg-[#0EA5E9] px-8 py-4 text-white hover:bg-[#0EA5E9]/90">
            <Link href="/posts/tags">Browse our GoHighLevel CRM tags</Link>
          </Button>
          <Link href="/pages" className="text-sm font-medium text-[#0EA5E9]">
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
    <section id="pricing" className="bg-gray-50 px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-semibold text-gray-900">GoHighLevel CRM Pricing Compared</h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600">
          Choose the plan that aligns with your growth goals. We layer in custom automations, onboarding, and client retention frameworks for every tier.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`flex h-full flex-col justify-between border-gray-200 p-8 ${tier.highlighted ? "border-[#0EA5E9] shadow-lg" : "bg-white"}`}
            >
              <div>
                <Badge className={`${tier.highlighted ? "bg-[#0EA5E9] text-white" : "bg-[#0EA5E9]/10 text-[#0EA5E9]"} mb-4 w-fit rounded-full px-4 py-2`}>{tier.name}</Badge>
                <p className="text-3xl font-semibold text-gray-900">{tier.cost}</p>
                <p className="mt-2 text-sm uppercase tracking-wide text-gray-500">{tier.bestFor}</p>
                <ul className="mt-6 space-y-3 text-base text-gray-600">
                  {tier.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 text-[#0EA5E9]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button asChild className="mt-8 rounded-full bg-[#0EA5E9] px-6 py-3 text-white hover:bg-[#0EA5E9]/90">
                <Link href="#cta">{tier.cta}</Link>
              </Button>
            </Card>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-gray-500">
          Not sure which plan to choose? <Link href="#faq" className="text-[#0EA5E9]">Jump to the GoHighLevel CRM FAQ</Link> or schedule a roadmap call.
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
    <section id="use-cases" className="bg-white px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-semibold text-gray-900">Where GoHighLevel CRM Delivers Category-Leading Impact</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            These are the exact industries we have helped achieve 3x–7x pipeline growth using GoHighLevel CRM automations.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {industries.map((item) => (
            <Card key={item.title} className="border-gray-200 bg-white p-8">
              <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-4 text-base text-gray-600">{item.description}</p>
              <Link href="/posts/categories" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#0EA5E9]">
                Explore case studies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center text-sm text-gray-500">
          Want a custom playbook? <Link href="#cta" className="text-[#0EA5E9]">Request a GoHighLevel CRM industry audit</Link>.
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
    <section id="guide" className="bg-gray-50 px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-semibold text-gray-900">Our Proven GoHighLevel CRM Implementation Guide</h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600">
          Follow the same four-phase framework we have used to onboard 150+ GoHighLevel CRM clients with minimal downtime.
        </p>
        <div className="grid gap-8 md:grid-cols-4">
          {implementationSteps.map((step) => (
            <Card key={step.step} className="border-gray-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0EA5E9]/10 text-sm font-semibold text-[#0EA5E9]">
                {step.step}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-3 text-sm text-gray-600">{step.description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="text-gray-600">Download our complete GoHighLevel CRM launch checklist to keep your migration on track.</p>
          <Button asChild className="rounded-full bg-[#0EA5E9] px-8 py-4 text-white hover:bg-[#0EA5E9]/90">
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
    <section id="success" className="bg-white px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-semibold text-gray-900">Real GoHighLevel CRM Wins from Our Community</h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600">
          Experience matters. We combine firsthand GoHighLevel CRM execution with verifiable results across diverse industries.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {stories.map((story) => (
            <Card key={story.name} className="flex h-full flex-col justify-between border-gray-200 bg-white p-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{story.name}</h3>
                <p className="mt-2 text-sm uppercase tracking-wide text-[#0EA5E9]">{story.metric}</p>
                <p className="mt-4 text-base text-gray-600">“{story.quote}”</p>
              </div>
              <p className="mt-6 text-sm text-gray-500">{story.role}</p>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center text-sm text-gray-500">
          Want your story featured? <Link href="/posts" className="text-[#0EA5E9]">Submit your GoHighLevel CRM case study</Link>.
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
    <section id="comparison" className="bg-gray-50 px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-semibold text-gray-900">GoHighLevel CRM vs. The Field</h2>
        <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-gray-600">
          Understand how GoHighLevel CRM stacks up so you can articulate the value to clients and stakeholders.
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 font-medium text-gray-500">Platform</th>
                <th className="px-6 py-4 font-medium text-gray-500">Primary Focus</th>
                <th className="px-6 py-4 font-medium text-gray-500">Why GoHighLevel CRM Wins</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {competitorRows.map((row) => (
                <tr key={row.competitor} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">{row.competitor}</td>
                  <td className="px-6 py-4 text-gray-600">{row.focus}</td>
                  <td className="px-6 py-4 text-gray-600">{row.differentiator}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-8 text-center text-sm text-gray-500">
          Need client-facing comparison decks? <Link href="/posts/comparisons" className="text-[#0EA5E9]">Download our slide templates</Link>.
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
    <section id="faq" className="bg-white px-6 py-20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-6 text-center text-4xl font-semibold text-gray-900">GoHighLevel CRM FAQ</h2>
        <p className="mb-12 text-center text-lg text-gray-600">
          Still researching? These answers are based on hundreds of real-world GoHighLevel CRM implementations and ongoing platform updates.
        </p>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <details key={item.question} className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <summary className="flex cursor-pointer items-center gap-3 text-lg font-semibold text-gray-900">
                <HelpCircle className="h-5 w-5 text-[#0EA5E9]" />
                {item.question}
              </summary>
              <p className="mt-4 text-base text-gray-600">{item.answer}</p>
              <p className="mt-3 text-sm text-[#0EA5E9]">Still unsure? <Link href="#cta">Talk to a strategist</Link>.</p>
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
    <section id="cta" className="border-t border-gray-200 bg-gradient-to-br from-white to-gray-50 px-6 py-20">
      <div className="container mx-auto max-w-4xl text-center">
        <Badge className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0EA5E9]/20 bg-[#0EA5E9]/10 px-4 py-2 text-[#0EA5E9]">
          <ShieldCheck className="h-4 w-4" />
          Trusted GoHighLevel CRM Partner
        </Badge>
        <h2 className="mb-4 text-4xl font-semibold text-gray-900">Scale Faster with GoHigh Impact</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
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
              className="flex-1 rounded-full border-gray-300 bg-white px-6 py-6 text-gray-900 placeholder:text-gray-500 focus:border-[#0EA5E9]"
            />
            <Button type="submit" className="rounded-full bg-[#0EA5E9] px-8 py-6 text-white shadow-lg shadow-[#0EA5E9]/20 hover:bg-[#0EA5E9]/90">
              Subscribe Now
            </Button>
          </div>
        </form>
        <div className="mt-6 flex flex-col items-center gap-2 text-sm text-gray-600">
          {valueProps.map((prop) => (
            <div key={prop} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#0EA5E9]" />
              <span>{prop}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Prefer a live conversation? <Link href="/pages/contact" className="text-[#0EA5E9]">Book a GoHighLevel CRM strategy session</Link>.
        </p>
      </div>
    </section>
  );
}
