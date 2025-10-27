import Link from "next/link";

import { Section, Container, Prose } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/site.config";

import type { Metadata } from "next";

type ChecklistItem = {
  title: string;
  description: string;
};

export const metadata: Metadata = {
  title: "GoHighLevel Onboarding Checklist: 25 Essential Steps",
  description:
    "Use this 25-point GoHighLevel onboarding checklist to configure settings, connect channels, launch automations, and start generating ROI from day one.",
  alternates: {
    canonical: "/posts/launch-checklist",
  },
  openGraph: {
    title: "GoHighLevel Onboarding Checklist: 25 Essential Steps",
    description:
      "Follow this expert-built 25-step GoHighLevel CRM checklist to move from signup to a revenue-ready workspace quickly and confidently.",
    url: `${siteConfig.site_domain}/posts/launch-checklist`,
    type: "article",
    images: [
      {
        url: `${siteConfig.site_domain}/api/og?title=GoHighLevel+Onboarding+Checklist`,
        width: 1200,
        height: 630,
        alt: "GoHighLevel Onboarding Checklist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GoHighLevel Onboarding Checklist: 25 Essential Steps",
    description:
      "Start faster with this world-class 25-point GoHighLevel onboarding checklist from certified experts.",
    images: [`${siteConfig.site_domain}/api/og?title=GoHighLevel+Onboarding+Checklist`],
  },
  keywords: [
    "gohighlevel onboarding",
    "gohighlevel setup checklist",
    "gohighlevel implementation steps",
    "gohighlevel crm launch",
  ],
};

const onboardingSteps: ChecklistItem[] = [
  {
    title: "Clarify the Offer You Are Launching",
    description: "Document the promise, pricing, and fulfillment workflow so every automation supports the same outcome.",
  },
  {
    title: "Create the Sub-Account with the Right Snapshot",
    description: "Start from an industry-appropriate snapshot or template to avoid rebuilding proven funnels and automations from scratch.",
  },
  {
    title: "Set Business Profile Details",
    description: "Update company name, logo, support email, phone, and physical address to keep compliance messages accurate.",
  },
  {
    title: "Lock Timezone, Locale, and Currency",
    description: "Verify global settings before any automation is active so appointment reminders and invoices reference the correct defaults.",
  },
  {
    title: "Invite Core Team Members",
    description: "Add sales, support, and marketing users with role-based permissions and activate 2FA for every login.",
  },
  {
    title: "Connect the Primary Domain",
    description: "Map your sending and funnel domains via DNS (A, CNAME, TXT) and confirm SSL provisioning inside GoHighLevel.",
  },
  {
    title: "Authenticate Email Sending",
    description: "Complete DKIM, SPF, and DMARC for LeadConnector or Mailgun, then run test sends to validate inbox placement.",
  },
  {
    title: "Configure SMS and Call Settings",
    description: "Purchase the dedicated number, assign call routing rules, and enable call recording with proper disclosures.",
  },
  {
    title: "Enable Missed Call Text-Back",
    description: "Turn on the native workflow so every unanswered inbound call instantly triggers a helpful SMS reply.",
  },
  {
    title: "Integrate Calendars and Availability",
    description: "Sync Google or Outlook calendars, establish round-robin logic, and apply buffer times per appointment type.",
  },
  {
    title: "Connect Payments and Automations",
    description: "Link Stripe or PayPal, create products, and test the order form to ensure transactions sync with invoices and workflows.",
  },
  {
    title: "Install Tracking Pixels",
    description: "Add Google Tag Manager, Meta Pixel, and any ad platform scripts to the site and funnels so attribution is airtight.",
  },
  {
    title: "Build the Sales Pipeline",
    description: "Create clear stages that mirror your real prospect lifecycle and assign default task reminders per stage.",
  },
  {
    title: "Import Historical Contacts",
    description: "Clean and segment legacy data, tag it on import, and preserve original lead sources for accurate reporting.",
  },
  {
    title: "Design Lead Capture Assets",
    description: "Publish forms, surveys, chat widgets, and funnels with unified branding and embedded compliance language.",
  },
  {
    title: "Wire Up Website Chat and Review Widget",
    description: "Place the chat bubble and reviews badge on every page and customize the welcome message for fast engagement.",
  },
  {
    title: "Map the Core Automation Workflows",
    description: "Document entry points, actions, and exit logic for lead nurture, pipeline updates, and fulfillment alerts.",
  },
  {
    title: "Launch the Conversation AI or SMS Sequences",
    description: "Deploy AI responders or multi-touch SMS/email campaigns that follow up within five minutes of every opt-in.",
  },
  {
    title: "Create Smart Lists and Segments",
    description: "Build saved audiences by lifecycle stage, offer, and intent so campaigns always reach the right cohort.",
  },
  {
    title: "Automate Reputation Management",
    description: "Configure review requests, response templates, and suppression rules to amplify positive feedback on autopilot.",
  },
  {
    title: "Set Up Membership or Course Areas (If Needed)",
    description: "Upload lessons, gate content with offers, and connect automations so purchases unlock the correct curriculum instantly.",
  },
  {
    title: "Build Executive Dashboards",
    description: "Customize reports for funnel conversion, pipeline velocity, and campaign ROI so leadership sees real-time performance.",
  },
  {
    title: "Run End-to-End Quality Assurance",
    description: "Test every path—opt-in, booking, purchase, workflows, and notifications—on desktop and mobile using live data.",
  },
  {
    title: "Document SOPs and Launch Team Training",
    description: "Capture loom walkthroughs, publish playbooks for sales, success, and marketing, and host go-live huddles to align KPIs.",
  },
  {
    title: "Set a Continuous Improvement Cadence",
    description: "Review dashboards weekly, ship one experiment per sprint, and log learnings to compound results over time.",
  },
];

export default function LaunchChecklistPage() {
  return (
    <Section>
      <Container>
        <Prose className="space-y-8">
          <p className="text-sm uppercase tracking-wide text-brand-blue">GoHighLevel CRM Checklist</p>
          <h1>World-Class 25-Point GoHighLevel Onboarding Checklist</h1>
          <p>
            Walk into your new GoHighLevel workspace like a certified pro. Use this step-by-step onboarding plan to move from
            signup to a launch-ready revenue engine without missing critical compliance, automation, or reporting details.
            Share it with your team, duplicate it into your project tracker, and check items off as you go.
          </p>

          <section className="space-y-3">
            <h2>25 Steps to a Revenue-Ready GoHighLevel Account</h2>
            <ol className="list-decimal space-y-3 pl-5">
              {onboardingSteps.map((step, index) => (
                <li key={step.title}>
                  <strong>{step.title}.</strong> {step.description}
                </li>
              ))}
            </ol>
          </section>

          <section className="space-y-3">
            <h2>How to Implement Faster</h2>
            <p>
              Push these 25 steps into your internal scrum board or client workspace. Assign an owner, deadline, and success
              metric to each action so momentum never stalls. Once live, revisit the checklist monthly to identify upgrades,
              new automations, or offers to deploy.
            </p>
            <p>
              Need a certified GoHighLevel team to build it with you? Book a roadmap session and we will tailor the setup to
              your industry, compliance posture, and growth targets.
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
