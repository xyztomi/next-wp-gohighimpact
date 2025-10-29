import Link from "next/link";
import { Section, Container } from "@/components/craft";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Home, BookOpen, Mail, Search } from "lucide-react";

export default function NotFound() {
  return (
    <Section>
      <Container>
        <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center text-center">
          <div className="space-y-3">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-muted-foreground">
              404 — Not found
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Page not found</h1>
            <p className="text-muted-foreground">
              We couldn’t find the page you’re looking for. Try a quick search or explore the links below.
            </p>
          </div>

          <Card className="mt-6 w-full border-border/50">
            <CardContent className="p-4 sm:p-6">
              <form action="/posts" method="get" className="flex items-center gap-2">
                <div className="relative w-full">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    name="search"
                    placeholder="Search articles, guides, and tutorials..."
                    className="h-11 pl-9"
                    aria-label="Search posts"
                  />
                </div>
                <Button type="submit" className="h-11">Search</Button>
              </form>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm">
                <Link href="/posts" prefetch={false} className="rounded-full border px-3 py-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                  Explore the blog
                </Link>
                <Link href="/case-studies" prefetch={false} className="rounded-full border px-3 py-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                  Case studies
                </Link>
                <Link href="/about" prefetch={false} className="rounded-full border px-3 py-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                  About
                </Link>
                <Link href="/contact" prefetch={false} className="rounded-full border px-3 py-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                  Contact
                </Link>
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap items-center justify-center gap-3 p-4 sm:p-6">
              <Button asChild>
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" /> Go home
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/posts">
                  <BookOpen className="mr-2 h-4 w-4" /> View posts
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" /> Contact us
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
