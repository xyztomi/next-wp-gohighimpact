import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Target, Zap, Users, Award } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About GoHigh Impact - GoHighLevel CRM Experts & Consultants",
  description:
    "Learn how GoHigh Impact helps agencies and SaaS companies scale with GoHighLevel CRM. Expert implementation, automation, and growth strategies.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-green/10 via-white to-white px-4 py-16 sm:px-6 sm:py-24">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:mb-6 sm:text-4xl lg:text-5xl">
            About GoHigh Impact
          </h1>
          <p className="mx-auto max-w-3xl text-base text-gray-600 sm:text-lg lg:text-xl">
            We&apos;re not just consultants—we&apos;re operators who use GoHighLevel CRM daily to scale our own ventures
            and help agencies turn complex tech stacks into predictable revenue engines.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 sm:text-3xl">Our Mission</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-700 sm:text-base">
                GoHigh Impact was founded to bridge the gap between GoHighLevel&apos;s powerful capabilities and the
                real-world challenges agencies face when implementing automation at scale.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                We&apos;ve seen too many businesses struggle with disconnected tools, bloated tech stacks, and automations
                that break more than they help. Our mission is to change that by delivering battle-tested GoHighLevel
                CRM implementations that actually drive growth.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 sm:text-3xl">What Makes Us Different</h2>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-green" />
                  <p className="text-sm text-gray-700 sm:text-base">
                    <strong>Operators First:</strong> We run GoHighLevel CRM in our own businesses before recommending
                    strategies to clients.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-green" />
                  <p className="text-sm text-gray-700 sm:text-base">
                    <strong>ROI-Focused:</strong> Every automation we build is tied to measurable business outcomes,
                    not vanity metrics.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-green" />
                  <p className="text-sm text-gray-700 sm:text-base">
                    <strong>Education-Driven:</strong> We don&apos;t just build systems—we teach your team to own and
                    optimize them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-gray-900 sm:mb-12 sm:text-3xl lg:text-4xl">
            Our Core Values
          </h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Target,
                title: "Results-Driven",
                description:
                  "We measure success by your growth metrics, not hours logged or features shipped.",
              },
              {
                icon: Zap,
                title: "Speed to Value",
                description:
                  "Fast implementations that deliver quick wins while building toward long-term scalability.",
              },
              {
                icon: Users,
                title: "Client Partnership",
                description:
                  "We work alongside your team as strategic partners, not distant vendors.",
              },
              {
                icon: Award,
                title: "Excellence",
                description:
                  "Every workflow, every automation, every dashboard is built to the highest standard.",
              },
            ].map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="border-gray-200 bg-white p-6 text-center sm:p-8">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10">
                    <Icon className="h-6 w-6 text-brand-green" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-gray-900 sm:text-lg">{value.title}</h3>
                  <p className="text-xs text-gray-600 sm:text-sm">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-semibold text-gray-900 sm:mb-8 sm:text-3xl lg:text-4xl">
            Our Expertise
          </h2>
          <div className="space-y-6">
            <Card className="border-gray-200 bg-white p-6 sm:p-8">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:text-xl">
                GoHighLevel CRM Implementation
              </h3>
              <p className="text-sm text-gray-700 sm:text-base">
                From initial audit to full deployment, we handle every aspect of GoHighLevel CRM setup. Our proven
                framework reduces migration risk, maintains campaign continuity, and accelerates time to value.
              </p>
            </Card>
            <Card className="border-gray-200 bg-white p-6 sm:p-8">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:text-xl">
                Marketing Automation Architecture
              </h3>
              <p className="text-sm text-gray-700 sm:text-base">
                We design multi-channel automation workflows that nurture leads, accelerate deal velocity, and maximize
                lifetime value—all while staying compliant with the latest carrier restrictions and privacy regulations.
              </p>
            </Card>
            <Card className="border-gray-200 bg-white p-6 sm:p-8">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:text-xl">
                Agency Growth Consulting
              </h3>
              <p className="text-sm text-gray-700 sm:text-base">
                Beyond technology, we help agencies package GoHighLevel CRM as a premium offering, train teams on best
                practices, and build scalable processes that support high-growth client portfolios.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-brand-green/10 to-brand-blue/10 px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 sm:text-3xl lg:text-4xl">
            Ready to Scale with GoHighLevel CRM?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-sm text-gray-700 sm:mb-8 sm:text-base lg:text-lg">
            Whether you&apos;re exploring GoHighLevel for the first time or need expert help optimizing your current
            setup, we&apos;re here to help you unlock its full potential.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              asChild
              className="w-full rounded-full bg-brand-green px-6 py-5 text-base text-white transition-colors hover:bg-brand-green/90 sm:w-auto sm:px-8 sm:py-6"
            >
              <Link href="/#cta">Get Started Today</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full rounded-full border-2 border-brand-blue/20 px-6 py-5 text-base text-brand-blue hover:border-brand-blue hover:bg-brand-blue/10 sm:w-auto sm:px-8 sm:py-6"
            >
              <Link href="/posts">Browse Our Guides</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
