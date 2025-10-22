import { getAllCategories } from "@/lib/wordpress";
import { Section, Container, Prose } from "@/components/craft";
import { Metadata } from "next";
import BackButton from "@/components/back";
import Link from "next/link";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "All Categories | GoHighLevel Topics & Guides",
  description: "Browse posts by category. Find tutorials, guides, and resources organized by topics including automation, integrations, workflows, and more.",
  alternates: {
    canonical: "/posts/categories",
  },
  openGraph: {
    title: "All Categories | GoHighLevel Topics & Guides",
    description: "Browse posts by category. Find tutorials, guides, and resources organized by topics including automation, integrations, workflows, and more.",
    url: `${siteConfig.site_domain}/posts/categories`,
    type: "website",
  },
};

export default async function Page() {
  const categories = await getAllCategories();

  return (
    <Section>
      <Container className="space-y-6">
        <Prose className="mb-8">
          <h2>All Categories</h2>
          <ul className="grid">
            {categories.map((category: any) => (
              <li key={category.id}>
                <Link href={`/posts/?category=${category.id}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </Prose>
        <BackButton />
      </Container>
    </Section>
  );
}
