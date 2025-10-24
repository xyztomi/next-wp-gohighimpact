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
  { title: "About", href: "/pages/about" },
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
    <footer className="border-t border-gray-200 bg-white px-6 py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="GoHigh Impact logo"
              width={48}
              height={48}
              className="h-12 w-auto"
              priority={false}
            />
            <span className="text-gray-900">GoHigh Impact</span>
          </Link>

          <div className="flex gap-8">
            <Link
              href="/privacy-policy"
              className="text-gray-600 transition-colors hover:text-brand-blue"
            >
              Privacy Policy
            </Link>
            <Link
              href="/tos"
              className="text-gray-600 transition-colors hover:text-brand-blue"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 transition-colors hover:text-brand-blue"
            >
              Contact
            </Link>
          </div>

          <p className="text-sm text-gray-500">© 2025 GoHigh Impact. All rights reserved.</p>
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
