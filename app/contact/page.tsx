import type { Metadata } from "next";
import Link from "next/link";
import { Instagram, Mail } from "lucide-react";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "Contact GoHigh Impact - Support & Partnerships",
  description:
    "Get in touch with the GoHigh Impact team. Reach us via email or Instagram for GoHighLevel CRM support, partnerships, and collaboration opportunities.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact GoHigh Impact - Support & Partnerships",
    description: "Get in touch with the GoHigh Impact team for GoHighLevel CRM support, partnerships, and collaboration opportunities.",
    url: `${siteConfig.site_domain}/contact`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact GoHigh Impact - Support & Partnerships",
    description: "Get in touch with the GoHigh Impact team for GoHighLevel CRM support and partnerships.",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-brand-blue">Contact</p>
        <h1 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-4xl">Let&apos;s build something great</h1>
        <p className="mt-4 text-sm text-gray-600 sm:text-base">
          Have a question about GoHighLevel CRM, need implementation support, or ready to collaborate? Reach out using the channels below and our team will respond within one business day.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
            <Mail className="h-6 w-6 text-brand-blue" />
            <h2 className="mt-4 text-lg font-semibold text-gray-900">Email Support</h2>
            <p className="mt-2 text-sm text-gray-600">
              For client support, media requests, and partnerships.
            </p>
            <Link
              href="mailto:support@gohighimpact.co"
              className="mt-4 inline-flex items-center text-sm font-medium text-brand-blue hover:underline"
            >
              support@gohighimpact.co
            </Link>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
            <Instagram className="h-6 w-6 text-brand-blue" />
            <h2 className="mt-4 text-lg font-semibold text-gray-900">Instagram DM</h2>
            <p className="mt-2 text-sm text-gray-600">
              Send a direct message for quick questions or live event updates.
            </p>
            <Link
              href="https://instagram.com/gohighimpact"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center text-sm font-medium text-brand-blue hover:underline"
            >
              @gohighimpact
            </Link>
          </div>
        </div>

        <section className="mt-12 space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">How we can help</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>• GoHighLevel CRM onboarding and workflow build-outs</li>
              <li>• Technical troubleshooting and platform best practices</li>
              <li>• Podcast, webinar, and guest training invitations</li>
              <li>• Agency partnerships and white-label collaborations</li>
            </ul>
          </div>

          <div className="rounded-xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-gray-900">Office Hours</h2>
            <p className="mt-2 text-sm text-gray-600">
              Monday to Friday · 9:00 AM – 5:00 PM PT
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Response time: within 24 hours during business days.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
