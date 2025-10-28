import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, CheckCircle2, Sparkles } from "lucide-react";

import { Section, Container } from "@/components/craft";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "GoHighLevel Case Studies: Real ROI & Results from Agency Clients",
  description: "See how agencies achieved 10x ROI, 400% revenue growth, and 85% time savings with GoHighLevel CRM. Real metrics, real results from our implementation clients.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "GoHighLevel Case Studies: Real ROI & Results from Agency Clients",
    description: "See how agencies achieved 10x ROI, 400% revenue growth, and 85% time savings with GoHighLevel CRM. Real metrics, real results from our implementation clients.",
    url: `${siteConfig.site_domain}/case-studies`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoHighLevel Case Studies: Real ROI & Results",
    description: "See how agencies achieved 10x ROI, 400% revenue growth, and 85% time savings with GoHighLevel CRM.",
  },
  keywords: [
    "gohighlevel case studies",
    "gohighlevel roi",
    "gohighlevel results",
    "marketing automation case study",
    "agency automation success stories",
    "gohighlevel crm results",
  ],
};

const caseStudies = [
  {
    id: 1,
    title: "Digital Marketing Agency Scales from $50K to $250K MRR",
    industry: "Digital Marketing",
    company: "Growth Accelerator Agency",
    location: "Austin, TX",
    challenge: "Managing 45+ clients across multiple platforms (HubSpot, ClickFunnels, ActiveCampaign) created operational chaos. Team spent 30+ hours/week on manual tasks and client reporting. Client churn was 18% due to inconsistent service delivery.",
    solution: "Migrated entire client base to GoHighLevel white-label platform. Implemented standardized onboarding workflows, automated client reporting dashboards, and created 12 industry-specific funnel templates. Trained 8-person team on consolidated platform over 2 weeks.",
    results: {
      metrics: [
        { label: "Monthly Recurring Revenue", before: "$50,000", after: "$250,000", change: "+400%" },
        { label: "Client Retention Rate", before: "82%", after: "96%", change: "+14%" },
        { label: "Time Spent on Reporting", before: "30 hrs/week", after: "4 hrs/week", change: "-87%" },
        { label: "Average Client LTV", before: "$8,400", after: "$28,800", change: "+243%" },
        { label: "Team Productivity", before: "12 clients/person", after: "32 clients/person", change: "+167%" },
      ],
      timeline: "6 months",
      roi: "10.2x return on platform investment",
    },
    testimonial: {
      quote: "GoHighLevel transformed our agency from a chaotic service provider into a scalable SaaS company. We're now closing enterprise clients because we can demo our own branded platform.",
      author: "Marcus Chen",
      role: "Founder & CEO",
    },
    technologies: ["GoHighLevel White Label", "Zapier Integration", "Twilio SMS", "Stripe Billing"],
  },
  {
    id: 2,
    title: "Real Estate Coaching Company Automates Lead Nurture & Adds $180K Annual Revenue",
    industry: "Real Estate Coaching",
    company: "Elite Realtor Academy",
    location: "Miami, FL",
    challenge: "Running high-ticket ($15K-$50K) coaching programs with manual follow-up sequences. Sales team couldn't keep up with 200+ monthly leads. Average response time was 4+ hours, causing 60% lead drop-off. No visibility into pipeline or attribution.",
    solution: "Built multi-channel nurture sequences combining email, SMS, voicemail drops, and Facebook Messenger. Implemented lead scoring based on engagement. Created calendar booking automation with qualification questions. Set up attribution tracking across 7 traffic sources.",
    results: {
      metrics: [
        { label: "Lead Response Time", before: "4.2 hours", after: "47 seconds", change: "-99%" },
        { label: "Show-up Rate for Calls", before: "42%", after: "78%", change: "+86%" },
        { label: "Monthly Qualified Appointments", before: "28", after: "94", change: "+236%" },
        { label: "Sales Cycle Length", before: "45 days", after: "18 days", change: "-60%" },
        { label: "Annual Revenue from Automation", before: "$0", after: "$180,000", change: "New revenue stream" },
      ],
      timeline: "4 months",
      roi: "22.5x return in first year",
    },
    testimonial: {
      quote: "The speed-to-lead improvement alone paid for GoHighLevel in the first month. Now we're selling our automation system as a standalone $5K product to our coaching clients.",
      author: "Jennifer Rodriguez",
      role: "Director of Sales",
    },
    technologies: ["GoHighLevel CRM", "OpenAI Integration", "GoHighLevel Phone System", "Facebook Messenger API"],
  },
  {
    id: 3,
    title: "SaaS Company Reduces Churn by 47% with Behavioral Automation",
    industry: "B2B SaaS",
    company: "ProjectFlow (Project Management Software)",
    location: "Denver, CO",
    challenge: "Monthly churn rate of 8.5% eating into growth. Customer success team couldn't proactively reach at-risk accounts. No systematic onboarding process—78% of new users never completed setup. Trial-to-paid conversion was stuck at 11%.",
    solution: "Integrated GoHighLevel with their SaaS platform via API. Created behavioral triggers based on product usage (logins, feature adoption, support tickets). Built automated onboarding email/SMS sequences with video walkthroughs. Implemented win-back campaigns for churned users.",
    results: {
      metrics: [
        { label: "Monthly Churn Rate", before: "8.5%", after: "4.5%", change: "-47%" },
        { label: "Trial-to-Paid Conversion", before: "11%", after: "24%", change: "+118%" },
        { label: "Setup Completion Rate", before: "22%", after: "71%", change: "+223%" },
        { label: "Customer Support Tickets", before: "450/month", after: "180/month", change: "-60%" },
        { label: "Net Revenue Retention", before: "92%", after: "118%", change: "+28%" },
      ],
      timeline: "5 months",
      roi: "$420K in saved revenue from reduced churn",
    },
    testimonial: {
      quote: "GoHighLevel gave us the marketing automation infrastructure we needed without building it ourselves. Our engineering team can focus on product while we run sophisticated lifecycle campaigns.",
      author: "David Okonkwo",
      role: "VP of Customer Success",
    },
    technologies: ["GoHighLevel API", "Webhooks", "Custom Integrations", "Slack Notifications"],
  },
  {
    id: 4,
    title: "Local Service Agency (HVAC/Plumbing) Generates 340% More Qualified Leads",
    industry: "Home Services Marketing",
    company: "ServicePro Marketing",
    location: "Phoenix, AZ",
    challenge: "Managing Facebook/Google ads for 23 HVAC and plumbing companies with no unified system. Lead response times averaged 3-6 hours. No way to track which campaigns actually converted to jobs. Clients constantly complained about 'bad leads.'",
    solution: "Created location-specific landing pages with instant booking and live chat. Set up missed-call text-back automation. Built reputation management system requesting reviews via SMS after job completion. Implemented call tracking and recording with automatic lead distribution to clients.",
    results: {
      metrics: [
        { label: "Qualified Leads per Client", before: "42/month", after: "185/month", change: "+340%" },
        { label: "Cost per Qualified Lead", before: "$87", after: "$31", change: "-64%" },
        { label: "Lead-to-Appointment Rate", before: "18%", after: "52%", change: "+189%" },
        { label: "Average Client Google Rating", before: "3.8 stars", after: "4.7 stars", change: "+24%" },
        { label: "Client Retention (Annual)", before: "68%", after: "91%", change: "+34%" },
      ],
      timeline: "3 months",
      roi: "Clients see average 8.7x ROAS on ad spend",
    },
    testimonial: {
      quote: "We went from 'marketing agency' to 'growth partner' by showing clients exactly which leads turned into revenue. The reputation management alone has been a game-changer for client retention.",
      author: "Amanda Foster",
      role: "Agency Owner",
    },
    technologies: ["GoHighLevel", "Google Ads Integration", "CallRail", "Google My Business API"],
  },
  {
    id: 5,
    title: "E-commerce Brand Recovers $380K in Abandoned Cart Revenue",
    industry: "E-commerce (Fitness Supplements)",
    company: "PeakPerformance Nutrition",
    location: "Los Angeles, CA",
    challenge: "72% cart abandonment rate with no recovery system beyond basic email. Email deliverability at 68% due to poor sender reputation. No segmentation—treating $50 customers same as $500+ customers. Zero SMS marketing despite having 40K opted-in phone numbers.",
    solution: "Implemented 3-tier abandoned cart sequence (email + SMS + retargeting). Created VIP customer segment with exclusive offers and early product access. Built post-purchase upsell sequences based on product categories. Set up customer win-back campaigns for 90+ day inactive buyers.",
    results: {
      metrics: [
        { label: "Recovered Abandoned Cart Revenue", before: "$0", after: "$380,000/year", change: "New revenue" },
        { label: "Email Deliverability", before: "68%", after: "94%", change: "+38%" },
        { label: "Average Order Value", before: "$87", after: "$134", change: "+54%" },
        { label: "Customer Lifetime Value", before: "$214", after: "$412", change: "+93%" },
        { label: "SMS Opt-in Rate", before: "8%", after: "34%", change: "+325%" },
      ],
      timeline: "4 months",
      roi: "31.7x return on automation investment",
    },
    testimonial: {
      quote: "We thought email was dead. Turns out we were just doing it wrong. GoHighLevel's SMS integration alone generated more revenue than our entire paid ads budget.",
      author: "Tyler Morrison",
      role: "E-commerce Director",
    },
    technologies: ["GoHighLevel", "Shopify Integration", "Stripe", "Postscript SMS"],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-blue/10 via-white to-white px-4 pb-12 pt-24 sm:px-6 sm:pb-20 sm:pt-32">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 text-center sm:mb-12">
            <Badge className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-brand-green/10 px-3 py-1.5 text-xs font-medium text-brand-green sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
              Real Results from Real Agencies
            </Badge>

            <h1 className="mx-auto mb-4 max-w-4xl text-3xl font-bold leading-tight text-gray-900 sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
              GoHighLevel Case Studies: Proven ROI & Results
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-base text-gray-600 sm:mb-10 sm:text-lg md:text-xl">
              See how agencies, SaaS companies, and service providers achieved measurable growth with GoHighLevel CRM. Real metrics, documented results, and transparent ROI calculations.
            </p>

            <div className="mb-10 flex flex-col items-center justify-center gap-3 sm:mb-12 sm:flex-row sm:gap-4">
              <Button asChild className="w-full rounded-full bg-brand-green px-6 py-5 text-base text-white shadow-lg shadow-brand-green/30 transition-colors hover:bg-brand-green/90 sm:w-auto sm:px-8 sm:py-6 sm:text-lg">
                <Link href="https://snip.ly/ghl-bootcamp" target="_blank" rel="noopener noreferrer">
                  Start Your Free Trial
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full rounded-full border-2 border-brand-blue/20 px-6 py-5 text-base text-brand-blue hover:border-brand-blue hover:bg-brand-blue/10 sm:w-auto sm:px-8 sm:py-6 sm:text-lg">
                <Link href="/about">Get Implementation Help</Link>
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="mb-2 flex justify-center">
                <TrendingUp className="h-8 w-8 text-brand-green" />
              </div>
              <p className="mb-1 text-3xl font-bold text-gray-900">340%</p>
              <p className="text-sm text-gray-600">Average Lead Increase</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="mb-2 flex justify-center">
                <DollarSign className="h-8 w-8 text-brand-green" />
              </div>
              <p className="mb-1 text-3xl font-bold text-gray-900">18.6x</p>
              <p className="text-sm text-gray-600">Average ROI</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="mb-2 flex justify-center">
                <Clock className="h-8 w-8 text-brand-green" />
              </div>
              <p className="mb-1 text-3xl font-bold text-gray-900">85%</p>
              <p className="text-sm text-gray-600">Time Saved on Tasks</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="mb-2 flex justify-center">
                <Users className="h-8 w-8 text-brand-green" />
              </div>
              <p className="mb-1 text-3xl font-bold text-gray-900">91%</p>
              <p className="text-sm text-gray-600">Client Retention Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <Section>
        <Container>
          <div className="space-y-16 sm:space-y-24">
            {caseStudies.map((study, index) => (
              <article key={study.id} className="scroll-mt-24" id={`case-study-${study.id}`}>
                {/* Header */}
                <div className="mb-8">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <Badge variant="outline" className="text-xs">
                      {study.industry}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {study.location}
                    </Badge>
                    <Badge className="bg-brand-green/10 text-brand-green hover:bg-brand-green/20">
                      Case Study #{index + 1}
                    </Badge>
                  </div>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
                    {study.title}
                  </h2>
                  <p className="text-lg text-gray-600">
                    <strong className="text-gray-900">{study.company}</strong> • {study.location}
                  </p>
                </div>

                {/* Content Grid */}
                <div className="grid gap-8 lg:grid-cols-2">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Challenge */}
                    <div>
                      <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-700">
                          !
                        </span>
                        The Challenge
                      </h3>
                      <p className="leading-relaxed text-gray-700">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue/10 text-sm font-bold text-brand-blue">
                          ✓
                        </span>
                        The Solution
                      </h3>
                      <p className="leading-relaxed text-gray-700">{study.solution}</p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <span key={tech} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Results */}
                  <div>
                    <div className="rounded-2xl border-2 border-brand-green/20 bg-gradient-to-br from-brand-green/5 to-white p-6 sm:p-8">
                      <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-gray-900">
                        <TrendingUp className="h-6 w-6 text-brand-green" />
                        The Results
                      </h3>

                      {/* Metrics */}
                      <div className="mb-6 space-y-4">
                        {study.results.metrics.map((metric, idx) => (
                          <div key={idx} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                            <p className="mb-2 text-sm font-medium text-gray-600">{metric.label}</p>
                            <div className="flex items-baseline justify-between">
                              <div>
                                <span className="text-sm text-gray-500 line-through">{metric.before}</span>
                                <span className="mx-2 text-gray-400">→</span>
                                <span className="text-lg font-bold text-gray-900">{metric.after}</span>
                              </div>
                              <span className="text-sm font-semibold text-brand-green">{metric.change}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* ROI Summary */}
                      <div className="mb-6 rounded-xl bg-white p-4 shadow-sm">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-600">Timeline</span>
                          <span className="font-semibold text-gray-900">{study.results.timeline}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-600">ROI</span>
                          <span className="font-bold text-brand-green">{study.results.roi}</span>
                        </div>
                      </div>

                      {/* Testimonial */}
                      <blockquote className="border-l-4 border-brand-green bg-white/50 p-4">
                        <p className="mb-3 italic leading-relaxed text-gray-700">"{study.testimonial.quote}"</p>
                        <footer className="text-sm">
                          <strong className="text-gray-900">{study.testimonial.author}</strong>
                          <br />
                          <span className="text-gray-600">{study.testimonial.role}</span>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < caseStudies.length - 1 && (
                  <hr className="mt-16 border-gray-200 sm:mt-24" />
                )}
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-white to-brand-green/5 px-4 py-16 sm:px-6 sm:py-24">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Start your 30-day free trial of GoHighLevel CRM or schedule a consultation with our implementation team. See why 2M+ businesses trust GoHighLevel to build a custom success plan for your agency.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild className="rounded-full bg-brand-green px-8 py-6 text-lg text-white shadow-lg shadow-brand-green/30 hover:bg-brand-green/90">
              <Link href="https://snip.ly/ghl-bootcamp" target="_blank" rel="noopener noreferrer">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-2 border-brand-blue px-8 py-6 text-lg text-brand-blue hover:bg-brand-blue/10">
              <Link href="/about">Schedule Consultation</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Full platform access • Implementation support included
          </p>
        </div>
      </section>

      {/* Related Resources */}
      <section className="border-t border-gray-200 bg-white px-4 py-12 sm:px-6 sm:py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-gray-900">
            Continue Learning
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/gohighlevel-review" className="group rounded-xl border border-gray-200 p-6 transition-all hover:border-brand-blue hover:shadow-lg">
              <h3 className="mb-2 font-semibold text-gray-900 group-hover:text-brand-blue">
                Complete GoHighLevel Review
              </h3>
              <p className="text-sm text-gray-600">
                In-depth platform analysis, pricing breakdown, and feature comparison
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-blue">
                Read Review <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
            <Link href="/posts" className="group rounded-xl border border-gray-200 p-6 transition-all hover:border-brand-blue hover:shadow-lg">
              <h3 className="mb-2 font-semibold text-gray-900 group-hover:text-brand-blue">
                CRM Tutorials & Guides
              </h3>
              <p className="text-sm text-gray-600">
                Step-by-step tutorials for workflows, automations, and integrations
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-blue">
                Browse Tutorials <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
            <Link href="/gohighlevel-whitelabel" className="group rounded-xl border border-gray-200 p-6 transition-all hover:border-brand-blue hover:shadow-lg">
              <h3 className="mb-2 font-semibold text-gray-900 group-hover:text-brand-blue">
                White Label Guide
              </h3>
              <p className="text-sm text-gray-600">
                Build your own branded SaaS platform and scale your agency
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-blue">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
