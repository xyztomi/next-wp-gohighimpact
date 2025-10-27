import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Facebook, Linkedin, Twitter } from "lucide-react";

import {
  getPostBySlug,
  getAllPostSlugs,
  getFeaturedMediaById,
  getAuthorById,
} from "@/lib/wordpress";
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
  if (!post) {
    notFound();
  }
  const author = post.author ? await getAuthorById(post.author) : null;

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

  const shareLinks = [
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`,
      icon: Linkedin,
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      icon: Facebook,
    },
    {
      name: "Twitter",
      href: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
      icon: Twitter,
    },
  ];

  const authorAvatar = author?.avatar_urls?.["96"] || author?.avatar_urls?.["48"] || author?.avatar_urls?.["24"];
  const authorBio = author?.description ? author.description.replace(/<[^>]*>/g, "").trim() : "";

  return (
    <Section>
      <Container>
        <Prose className="space-y-8">
          <header className="space-y-6">
            <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <div className="not-prose rounded-3xl border border-border bg-muted/30 p-6">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  {authorAvatar ? (
                    <Image
                      src={authorAvatar}
                      alt={author?.name ? `Photo of ${author.name}` : "Author avatar"}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-base font-semibold text-primary">
                      {(author?.name || "GHI").charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div className="space-y-1">
                    <p className="text-base font-semibold leading-tight">
                      {author?.name || "GoHigh Impact Team"}
                    </p>
                    {formattedDate ? (
                      <p className="text-sm text-muted-foreground">
                        Published on {formattedDate}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-muted-foreground">Share</span>
                  {shareLinks.map(({ name, href, icon: Icon }) => (
                    <Link
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      prefetch={false}
                      aria-label={`Share on ${name}`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background transition hover:border-primary hover:text-primary"
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
              {authorBio ? (
                <p className="mt-4 text-sm text-muted-foreground">{authorBio}</p>
              ) : null}
            </div>
          </header>

          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </Prose>
      </Container>
    </Section>
  );
}
