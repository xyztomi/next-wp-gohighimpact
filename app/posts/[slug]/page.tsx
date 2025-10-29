import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// icons no longer needed for minimal byline

import {
  getPostBySlug,
  getAllPostSlugs,
  getFeaturedMediaById,
  getAuthorById,
  getCategoryById,
} from "@/lib/wordpress";
import { Section, Container, Prose } from "@/components/craft";
import { PostContentWithCta } from "@/components/posts/post-content-with-cta";
import { siteConfig } from "@/site.config";
import { Badge } from "@/components/ui/badge";

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
  if (!post) {
    notFound();
  }

  const [author, featuredImage] = await Promise.all([
    post.author ? getAuthorById(post.author) : null,
    post.featured_media ? getFeaturedMediaById(post.featured_media) : null,
  ]);

  // Fetch primary category for minimal byline badge (first category only)
  const primaryCategory = post.categories?.length
    ? await getCategoryById(post.categories[0])
    : null;

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    : null;

  const plainTitle = post.title.rendered.replace(/<[^>]*>/g, "").trim() || "GoHigh Impact";
  const shareHref = `${siteConfig.site_domain}/posts/${post.slug}`;
  const shareUrl = encodeURIComponent(shareHref);
  const shareTitle = encodeURIComponent(plainTitle);

  // Minimal header doesn't render share buttons or avatar/bio

  return (
    <Section>
      <Container>
        <Prose className="space-y-8">
          <header className="space-y-3">
            <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

            {/* Minimal byline row */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {formattedDate && (
                  <>
                    Published <time dateTime={post.date}>{formattedDate}</time>
                  </>
                )}
                {author?.name && (
                  <>
                    {formattedDate ? " by " : "By "}
                    <Link
                      href={`/posts?author=${encodeURIComponent(author.slug)}`}
                      prefetch={false}
                      className="underline underline-offset-4 hover:text-foreground"
                    >
                      {author.name}
                    </Link>
                  </>
                )}
              </p>
              {primaryCategory?.name && (
                <Badge variant="outline" className="whitespace-nowrap">
                  {primaryCategory.name}
                </Badge>
              )}
            </div>
          </header>

          {featuredImage?.source_url && (
            <div className="not-prose my-8">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-lg">
                <Image
                  src={featuredImage.source_url}
                  alt={featuredImage.alt_text || post.title.rendered.replace(/<[^>]*>/g, "").trim()}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              {featuredImage.caption?.rendered && (
                <p
                  className="mt-3 text-center text-sm text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: featuredImage.caption.rendered }}
                />
              )}
            </div>
          )}

          <PostContentWithCta content={post.content.rendered} />
        </Prose>
      </Container>
    </Section>
  );
}
