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
import { PostContentWithCta } from "@/components/posts/post-content-with-cta";
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

  const [author, featuredImage] = await Promise.all([
    post.author ? getAuthorById(post.author) : null,
    post.featured_media ? getFeaturedMediaById(post.featured_media) : null,
  ]);

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

            {/* Optimized Author Box */}
            <div className="not-prose overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white shadow-sm">
              <div className="p-6 sm:p-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  {/* Author Info */}
                  <div className="flex items-center gap-4 sm:flex-1">
                    {authorAvatar ? (
                      <Image
                        src={authorAvatar}
                        alt={author?.name ? `Photo of ${author.name}` : "Author avatar"}
                        width={64}
                        height={64}
                        className="h-14 w-14 rounded-full object-cover ring-2 ring-brand-green/20 sm:h-16 sm:w-16"
                      />
                    ) : (
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-green/10 text-lg font-bold text-brand-green ring-2 ring-brand-green/20 sm:h-16 sm:w-16">
                        {(author?.name || "GHI").charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div className="flex-1 space-y-1.5">
                      <p className="text-lg font-bold leading-tight text-gray-900">
                        {author?.name || "GoHigh Impact Team"}
                      </p>
                      {formattedDate && (
                        <p className="flex items-center gap-2 text-sm text-gray-600">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {formattedDate}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Share Buttons */}
                  <div className="flex items-center gap-3 sm:flex-shrink-0">
                    <span className="hidden text-sm font-semibold text-gray-600 sm:block">Share</span>
                    <div className="flex items-center gap-2">
                      {shareLinks.map(({ name, href, icon: Icon }) => (
                        <Link
                          key={name}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          prefetch={false}
                          aria-label={`Share on ${name}`}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-gray-600 transition-all hover:border-brand-blue hover:bg-brand-blue hover:text-white hover:shadow-md"
                        >
                          <Icon className="h-4 w-4" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Author Bio */}
                {authorBio && (
                  <div className="mt-5 border-t border-gray-200 pt-5">
                    <p className="text-sm leading-relaxed text-gray-700">{authorBio}</p>
                  </div>
                )}
              </div>
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
