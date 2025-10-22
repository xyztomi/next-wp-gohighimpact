import { getAllTags } from "@/lib/wordpress";
import { Section, Container, Prose } from "@/components/craft";
import { Metadata } from "next";
import BackButton from "@/components/back";
import Link from "next/link";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "All Tags | Explore GoHighLevel Content",
  description: "Browse posts by tag. Discover specific topics and find exactly what you're looking for with our comprehensive tag system.",
  alternates: {
    canonical: "/posts/tags",
  },
  openGraph: {
    title: "All Tags | Explore GoHighLevel Content",
    description: "Browse posts by tag. Discover specific topics and find exactly what you're looking for with our comprehensive tag system.",
    url: `${siteConfig.site_domain}/posts/tags`,
    type: "website",
  },
};

export default async function Page() {
  const tags = await getAllTags();

  return (
    <Section>
      <Container className="space-y-6">
        <Prose className="mb-8">
          <h2>All Tags</h2>
          <ul className="grid">
            {tags.map((tag: any) => (
              <li key={tag.id}>
                <Link href={`/posts/?tag=${tag.id}`}>{tag.name}</Link>
              </li>
            ))}
          </ul>
        </Prose>
        <BackButton />
      </Container>
    </Section>
  );
}
