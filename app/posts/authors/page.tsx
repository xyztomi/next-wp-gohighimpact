import { getAllAuthors } from "@/lib/wordpress";
import { Section, Container, Prose } from "@/components/craft";
import { Metadata } from "next";
import BackButton from "@/components/back";
import Link from "next/link";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "All Authors | GoHighLevel Experts & Contributors",
  description: "Discover our team of GoHighLevel experts and contributors. Browse posts by author and learn from industry professionals sharing their knowledge and experience.",
  alternates: {
    canonical: "/posts/authors",
  },
  openGraph: {
    title: "All Authors | GoHighLevel Experts & Contributors",
    description: "Discover our team of GoHighLevel experts and contributors. Browse posts by author and learn from industry professionals.",
    url: `${siteConfig.site_domain}/posts/authors`,
    type: "website",
  },
};

export default async function Page() {
  const authors = await getAllAuthors();

  return (
    <Section>
      <Container className="space-y-6">
        <Prose className="mb-8">
          <h2>All Authors</h2>
          <ul className="grid">
            {authors.map((author: any) => (
              <li key={author.id}>
                <Link href={`/posts/?author=${author.id}`}>{author.name}</Link>
              </li>
            ))}
          </ul>
        </Prose>
        <BackButton />
      </Container>
    </Section>
  );
}
