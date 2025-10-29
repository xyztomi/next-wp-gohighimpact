import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Calendar, Facebook, Linkedin, Share2, Twitter } from "lucide-react";

import {
  getPostBySlug,
  getAllPostSlugs,
  getFeaturedMediaById,
  getAuthorById,
} from "@/lib/wordpress";
import { Section, Container, Prose } from "@/components/craft";
import { PostContentWithCta } from "@/components/posts/post-content-with-cta";
import { siteConfig } from "@/site.config";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

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

            {/* Modern Author Box with shadcn */}
            <Card className="not-prose border-border/50 shadow-sm">
              <CardContent className="p-0">
                <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                  {/* Author Info */}
                  <div className="flex items-start gap-4 sm:flex-1">
                    <Avatar className="h-16 w-16 border-2 border-primary/10">
                      <AvatarImage
                        src={authorAvatar}
                        alt={author?.name || "Author"}
                      />
                      <AvatarFallback className="bg-primary/5 text-lg font-semibold text-primary">
                        {(author?.name || "GHI").charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div>
                        <p className="text-base font-semibold text-foreground">
                          {author?.name || "GoHigh Impact Team"}
                        </p>
                        {formattedDate && (
                          <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                            <Calendar className="h-3.5 w-3.5" />
                            <time dateTime={post.date}>{formattedDate}</time>
                          </div>
                        )}
                      </div>
                      {authorBio && (
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {authorBio}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Share Buttons */}
                  <div className="flex items-center gap-2 sm:flex-shrink-0">
                    <Separator orientation="vertical" className="hidden h-12 sm:block" />
                    <div className="flex flex-col gap-2 sm:pl-4">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                        <Share2 className="h-3.5 w-3.5" />
                        <span>Share</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {shareLinks.map(({ name, href, icon: Icon }) => (
                          <Button
                            key={name}
                            variant="outline"
                            size="icon"
                            className="h-9 w-9"
                            asChild
                          >
                            <Link
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              prefetch={false}
                              aria-label={`Share on ${name}`}
                            >
                              <Icon className="h-4 w-4" />
                            </Link>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
