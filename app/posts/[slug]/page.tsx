import { getPostBySlug, getAllPostSlugs, getFeaturedMediaById } from "@/lib/wordpress";
import { Section, Container, Prose } from "@/components/craft";
import { siteConfig } from "@/site.config";

import type { Metadata } from "next";

// Revalidate posts every 10 minutes
export const revalidate = 600;

export async function generateStaticParams() {
  const posts = await getAllPostSlugs();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  // Get featured image if available
  const featuredImage = post.featured_media
    ? await getFeaturedMediaById(post.featured_media)
    : null;

  const ogUrl = new URL(`${siteConfig.site_domain}/api/og`);
  ogUrl.searchParams.append("title", post.title.rendered);
  // Strip HTML tags for description and limit length
  const description = post.excerpt?.rendered
    ? post.excerpt.rendered.replace(/<[^>]*>/g, "").trim()
    : post.content.rendered
      .replace(/<[^>]*>/g, "")
      .trim()
      .slice(0, 200) + "...";
  ogUrl.searchParams.append("description", description);

  const imageUrl = featuredImage?.source_url || ogUrl.toString();

  return {
    title: post.title.rendered,
    description: description,
    alternates: {
      canonical: `/posts/${post.slug}`,
    },
    openGraph: {
      title: post.title.rendered,
      description: description,
      type: "article",
      url: `${siteConfig.site_domain}/posts/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.modified,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title.rendered,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title.rendered,
      description: description,
      images: [imageUrl],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <Section>
      <Container>
        <Prose>
          <h1>{post.title.rendered}</h1>
          {post.date && (
            <p className="text-sm text-muted-foreground">
              Published on {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </Prose>
      </Container>
    </Section>
  );
}
