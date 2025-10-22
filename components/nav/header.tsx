"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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

export function Header({ links }: { links?: HeaderLink[] }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navigation = links && links.length ? [...links] : [...fallbackLinks];

  if (!navigation.find((link) => link.href === "/gohighlevel-review")) {
    navigation.splice(1, 0, {
      title: "GoHighLevel Review",
      href: "/gohighlevel-review",
    });
  }

  return (
    <header className="fixed left-0 right-0 top-[32px] z-40 border-b border-gray-200 bg-white">
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

        <div className="flex items-center gap-4">
          <Button className="hidden rounded-full bg-brand-green px-6 text-white transition-colors hover:bg-brand-green/90 sm:inline-flex">
            Get Started
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-green">
                      <span className="text-sm font-bold text-white">GH</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">GoHighImpact</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4">
                {navigation.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href));

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${isActive
                        ? "bg-brand-green/10 text-brand-green"
                        : "text-gray-600 hover:bg-gray-100 hover:text-brand-green"
                        }`}
                    >
                      {link.title}
                    </Link>
                  );
                })}
                <Button className="mt-4 w-full rounded-full bg-brand-green px-6 py-6 text-white transition-colors hover:bg-brand-green/90">
                  Get Started
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
