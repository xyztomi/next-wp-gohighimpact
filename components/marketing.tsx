"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
        <h2 className="mb-4 text-center text-gray-900">Why GoHighImpact?</h2>
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
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-green">
              <span className="text-white">GH</span>
            </div>
            <span className="text-gray-900">GoHighImpact</span>
          </div>

          <div className="flex gap-8">
            <Link
              href="#"
              className="text-gray-600 transition-colors hover:text-brand-blue"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-600 transition-colors hover:text-brand-blue"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-gray-600 transition-colors hover:text-brand-blue"
            >
              Contact
            </Link>
          </div>

          <p className="text-sm text-gray-500">© 2025 GoHighImpact. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export function Header({ links }: { links?: HeaderLink[] }) {
  const pathname = usePathname();
  const navigation = links && links.length ? [...links] : [...fallbackLinks];

  if (!navigation.find((link) => link.href === "/gohighlevel-review")) {
    navigation.splice(1, 0, {
      title: "GoHighLevel Review",
      href: "/gohighlevel-review",
    });
  }

  return (
    <header className="fixed left-0 right-0 top-[32px] z-40 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-green">
            <span className="text-sm font-bold text-white">GH</span>
          </div>
          <span className="text-lg font-semibold text-gray-900">GoHighImpact</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${isActive
                    ? "text-brand-green"
                    : "text-gray-600 hover:text-brand-green"
                  }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.title}
              </Link>
            );
          })}
        </nav>

        <Button className="rounded-full bg-brand-green px-6 text-white transition-colors hover:bg-brand-green/90">
          Get Started
        </Button>
      </div>
    </header>
  );
}

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Newsletter signup:", email);
    alert(`Thanks for subscribing with ${email}!`);
    setEmail("");
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
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="flex-1 rounded-full border-gray-300 bg-white px-6 py-6 text-gray-900 placeholder:text-gray-500 focus:border-brand-blue"
            />
            <Button
              type="submit"
              className="rounded-full bg-brand-green px-8 py-6 text-white shadow-lg shadow-brand-green/20 transition-colors hover:bg-brand-green/90"
            >
              Subscribe
            </Button>
          </div>
        </form>

        <p className="mt-4 text-sm text-gray-500">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
