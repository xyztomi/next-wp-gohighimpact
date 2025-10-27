"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Sparkles,
  BookOpen,
  TrendingUp,
  Gift,
  ArrowRight,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function AnnouncementBar() {
  return (
    <div className="fixed left-0 right-0 top-0 z-50 overflow-hidden bg-brand-green py-2 text-white">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(10)].map((_, index) => (
          <a
            key={index}
            href="https://snip.ly/ghl-bootcamp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 transition-opacity hover:opacity-80"
          >
            <Sparkles className="h-4 w-4" />
            <span>
              30 Days GoHighLevel Bootcamp – Get Your Agency Automated & Scalable
            </span>
            <span className="text-white/50">•</span>
          </a>
        ))}
      </motion.div>
    </div>
  );
}

type HeaderLink = {
  title: string;
  href: string;
};

const fallbackLinks: HeaderLink[] = [
  { title: "Home", href: "/" },
  { title: "GoHighLevel Review", href: "/gohighlevel-review" },
  { title: "About", href: "/about" },
  { title: "Blog", href: "/posts" },
];

const benefits = [
  {
    id: 1,
    icon: BookOpen,
    title: "Expert Insights",
    description:
      "In-depth guides written by successful agency owners and marketers who've mastered the platform.",
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "Real Results",
    description:
      "Case studies and proven tactics that have generated real growth and sustainable business revenue.",
  },
  {
    id: 3,
    icon: Gift,
    title: "Free Resources",
    description:
      "Access templates, checklists, and tools to accelerate your GoHighLevel implementation.",
  },
] as const;

export function Benefits() {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-gray-900">Why GoHigh Impact?</h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-gray-600">
          Everything you need to master GoHighLevel and grow your business
        </p>

        <div className="grid gap-12 md:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.id} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-blue/20 bg-brand-blue/10">
                  <Icon className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const guides = [
  {
    id: 1,
    title: "Mastering GoHighLevel Analytics",
    description:
      "Learn how to track and optimize your business performance with advanced analytics and reporting features.",
    image:
      "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYwNzI1MjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    title: "Automation Workflows That Convert",
    description:
      "Build high-converting automation sequences that nurture leads and close more deals on autopilot.",
    image:
      "https://images.unsplash.com/photo-1563884705074-7c8b15f16295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwd29ya2Zsb3d8ZW58MXx8fHwxNzYwNjYyODM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    title: "Scaling Your Agency Business",
    description:
      "Proven strategies to grow from solo operator to a thriving agency with predictable monthly revenue.",
    image:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc2MDcwMzAxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
] as const;

const comparisonLinks = [
  { label: "GoHighLevel vs Salesforce", href: "https://gohighimpact.co/posts/gohighlevel-vs-salesforce" },
  { label: "GoHighLevel vs HubSpot", href: "https://gohighimpact.co/posts/gohighlevel-vs-hubspot" },
  { label: "GoHighLevel vs Pipedrive", href: "https://gohighimpact.co/posts/gohighlevel-vs-pipedrive" },
  { label: "GoHighLevel vs Kartra", href: "https://gohighimpact.co/posts/gohighlevel-vs-kartra" },
] as const;

const companyLinks = [
  { label: "About GoHigh Impact", href: "/about" },
  { label: "Case Studies & ROI", href: "/case-studies" },
  { label: "Implementation Guide", href: "/#guide" },
  { label: "Client Success Stories", href: "/#success" },
  { label: "Request a Roadmap Call", href: "https://snip.ly/ghl-bootcamp" },
] as const;

const resourceLinks = [
  { label: "Pricing Breakdown", href: "/#pricing" },
  { label: "Templates & SOP Library", href: "/gohighlevel-review" },
  { label: "Automation Tutorials", href: "/posts" },
  { label: "Newsletter Signup", href: "/#cta" },
] as const;

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/gohighimpact", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/gohighimpact", icon: Instagram },
  { label: "X", href: "https://twitter.com/gohighimpact", icon: Twitter },
  { label: "YouTube", href: "https://www.youtube.com/@gohighimpact", icon: Youtube },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/gohighimpact", icon: Linkedin },
] as const;

export function FeaturedGuides() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-gray-900">Featured Guides</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {guides.map((guide) => (
            <Card
              key={guide.id}
              className="group cursor-pointer overflow-hidden border-gray-200 bg-white transition-all duration-300 hover:border-brand-blue/50 hover:shadow-lg"
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="flex h-full w-full items-center justify-center bg-gray-100 text-sm text-gray-500">
                  Image coming soon
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-gray-900 transition-colors group-hover:text-brand-blue">
                  {guide.title}
                </h3>
                <p className="mb-4 text-gray-600">{guide.description}</p>
                <div className="flex items-center gap-2 text-brand-blue">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#0b1f3a] bg-[#05142a] text-slate-100">
      <div className="container mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_repeat(4,minmax(0,1fr))]">
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3 text-slate-100">
              <Image
                src="/logo.svg"
                alt="GoHigh Impact logo"
                width={52}
                height={52}
                className="h-12 w-auto"
                priority={false}
              />
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue/80">
                  GoHigh Impact
                </p>
                <p className="text-xs text-slate-300">The #1 Resource Hub for Business Owners Growing Smarter with GoHighLevel.</p>
              </div>
            </Link>
            <p className="max-w-sm text-sm text-slate-300">
              We help agencies and SaaS founders automate acquisition, fulfillment, and retention inside GoHighLevel.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition-colors hover:border-brand-blue/60 hover:bg-brand-blue/20"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-300">
              Platform Comparisons
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              {comparisonLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowRight className="h-3 w-3 text-brand-blue opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-300">
              GoHigh Impact
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-300">
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 text-sm text-slate-300">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 text-brand-blue" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">Email Support</p>
                  <a href="mailto:support@gohighimpact.co" className="transition-colors hover:text-white">
                    support@gohighimpact.co
                  </a>
                  <p className="mt-1 text-xs text-slate-400">Response within one business day</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Instagram className="mt-1 h-4 w-4 text-brand-blue" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">Instagram DM</p>
                  <Link
                    href="https://instagram.com/gohighimpact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    @gohighimpact
                  </Link>
                  <p className="mt-1 text-xs text-slate-400">Quick questions & live event updates</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 GoHigh Impact. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/tos" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
            <Link href="/posts" className="transition-colors hover:text-white">
              Resource Library
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Newsletter() {
  const [status, setStatus] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <section className="border-t border-gray-200 bg-gradient-to-br from-white to-gray-50 px-6 py-20">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-blue/20 bg-brand-blue/10">
          <Mail className="h-8 w-8 text-brand-blue" />
        </div>

        <h2 className="mb-4 text-gray-900">Join the Newsletter</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
          Get weekly marketing insights, GoHighLevel tutorials, and exclusive strategies delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto max-w-md">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              aria-label="Email address"
              disabled={isSubmitting}
              className="flex-1 rounded-full border-gray-300 bg-white px-6 py-6 text-gray-900 placeholder:text-gray-500 focus:border-brand-blue disabled:opacity-50"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-brand-green px-8 py-6 text-white shadow-lg shadow-brand-green/20 transition-colors hover:bg-brand-green/90 disabled:opacity-50"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
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

        <p className="mt-4 text-sm text-gray-500">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
