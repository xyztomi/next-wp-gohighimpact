import Link from "next/link";

import { Section, Container, Prose } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/site.config";

import type { Metadata } from "next";

type ChecklistPhase = {
  phase: string;
  summary: string;
  items: string[];
};

export const metadata: Metadata = {
  title: "GoHighLevel Launch Checklist: 25 Steps for Agencies and SaaS",
  description:
    "Follow this 25-step GoHighLevel launch checklist covering offer strategy, platform setup, automations, QA, and post-launch scaling to keep your rollout on track.",
  alternates: {
    canonical: "/posts/launch-checklist",
  },
  openGraph: {
    title: "GoHighLevel Launch Checklist",
    description:
      "Use this 25-step GoHighLevel launch checklist to plan, build, and scale your next client deployment with confidence.",
    url: `${siteConfig.site_domain}/posts/launch-checklist`,
    type: "article",
    images: [
      {
        url: `${siteConfig.site_domain}/api/og?title=GoHighLevel+Launch+Checklist`,
        width: 1200,
        height: 630,
        alt: "GoHighLevel Launch Checklist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GoHighLevel Launch Checklist",
    description:
      "Run a smooth GoHighLevel rollout with this 25-step agency-tested launch checklist.",
    images: [`${siteConfig.site_domain}/api/og?title=GoHighLevel+Launch+Checklist`],
  },
  keywords: [
    "gohighlevel launch checklist",
    "gohighlevel implementation",
    "marketing automation rollout",
    "agency onboarding checklist",
  ],
};

const checklist: ChecklistPhase[] = [
  {
    phase: "Strategy & Offer Clarity",
    summary: "Lock the scope, outcomes, and success metrics before logging into GoHighLevel.",
    items: [
      "Document the core offer, value ladder, and irresistible guarantee.",
      "Define your hero customer profile and winning acquisition channels.",
      "Map the desired customer journey from opt-in to fulfillment.",
      "Write down success metrics (SQL volume, show-up rate, ROAS, churn).",
      "Assign owners for strategy, build, creative, and client communications.",
    ],
  },
  {
    phase: "Platform & Data Foundations",
    summary: "Set up GoHighLevel infrastructure so data flows cleanly from day one.",
    items: [
      "Create or import the GoHighLevel sub-account with the right industry snapshot.",
      "Configure domains, DNS records, and email/SMS sending profiles.",
      "Connect calendars, Stripe, Google, and key third-party integrations.",
      "Audit existing contacts and tags; plan the migration naming conventions.",
      "Load essential assets: logos, brand colors, legal footers, and custom fields.",
    ],
  },
  {
    phase: "Funnels, Automations, and Sales Pipeline",
    summary: "Build the revenue engine that captures, nurtures, and closes leads on autopilot.",
    items: [
      "Publish launch-ready funnels or websites with consistent branding and tracking.",
      "Stand up the pipeline with stages that match sales and fulfillment milestones.",
      "Draft automation workflows for lead routing, nurture, and missed-call follow-up.",
      "Create conversational AI or SMS sequences for hot-lead response coverage.",
      "Install campaign templates for retargeting, upsells, and client onboarding.",
    ],
  },
  {
    phase: "Testing & Compliance",
    summary: "Pressure-test every touchpoint before sending real traffic.",
    items: [
      "Run through the funnel five times on desktop and mobile using real offers.",
      "Verify tagging, pipeline moves, task creation, and notification logic.",
      "QA calendars, time zones, and round-robin rules with every account owner.",
      "Confirm SMS/MMS compliance messages, unsubscribe links, and opt-in logs.",
      "Create a rollback and escalation plan for live incidents during launch week.",
    ],
  },
  {
    phase: "Post-Launch Optimization",
    summary: "Keep momentum after day one with reporting, feedback, and iteration.",
    items: [
      "Launch a real-time dashboard highlighting pipeline velocity and ROI.",
      "Schedule daily huddles for the first seven days to capture frontline feedback.",
      "Document SOPs for sales, success, and fulfillment teams inside GoHighLevel.",
      "Set up weekly snapshots and automated executive summaries for stakeholders.",
      "Plan a round two of experiments (upsells, retargeting, referrals) by day 30.",
    ],
  },
];

export default function LaunchChecklistPage() {
  return (
    <Section>
      <Container>
        <Prose className="space-y-8">
          <p className="text-sm uppercase tracking-wide text-brand-blue">GoHighLevel Launch Checklist</p>
          <h1>Agency-Tested 25-Point GoHighLevel Launch Checklist</h1>
          <p>
            Use this checklist to guide your next GoHighLevel rollout from strategy to post-launch optimization.
            Share it with your team, duplicate it into your project tracker, and tick off each item as you move from
            planning to revenue.
          </p>

          {checklist.map((phase) => (
            <section key={phase.phase} className="space-y-3">
              <h2>{phase.phase}</h2>
              <p>{phase.summary}</p>
              <ol className="list-decimal space-y-2 pl-5">
                {phase.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </section>
          ))}

          <section className="space-y-3">
            <h2>How to Deploy This Checklist</h2>
            <p>
              We push this framework into every new client workspace. Clip it into a Notion board or Monday.com project,
              then layer in your team owners and due dates. If you are launching a SaaS offer, duplicate the workflows for
              onboardings and keep the QA cadence running beyond week one.
            </p>
            <p>
              Need our team to drive the build? Book a roadmap session and we will tailor the launch path to your
              vertical, compliance requirements, and tech stack.
            </p>
            <Button asChild className="rounded-full bg-brand-green text-white shadow-brand-green/30">
              <Link href="https://snip.ly/ghl-bootcamp" target="_blank" rel="noopener noreferrer">
                Request a GoHighLevel Launch Roadmap
              </Link>
            </Button>
          </section>
        </Prose>
      </Container>
    </Section>
  );
}
