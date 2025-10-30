"use client";

import { getCommentsByPost } from "@/lib/wordpress";
import type { Comment } from "@/lib/wordpress.d";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React from "react";

export async function CommentsList({ postId }: { postId: number }) {
  let comments: Comment[] = [];
  try {
    comments = await getCommentsByPost(postId);
  } catch (e) {
    comments = [];
  }

  if (!comments.length) {
    return (
      <div className="rounded-lg border bg-accent/20 p-4 text-sm text-muted-foreground">
        No comments yet. Be the first to share your thoughts.
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      {comments.map((c) => (
        <li key={c.id}>
          <Card className="border-border/50 p-4 sm:p-5">
            <div className="mb-2 flex items-center gap-3">
              {c.author_avatar_urls?.["48"] ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={c.author_avatar_urls["48"]}
                  alt={c.author_name}
                  width={48}
                  height={48}
                  className="h-10 w-10 rounded-full"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-xs font-semibold">
                  {c.author_name?.charAt(0).toUpperCase() || "?"}
                </div>
              )}
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-foreground">{c.author_name || "Anonymous"}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(c.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div className="prose prose-sm max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: c.content?.rendered || "" }} />
          </Card>
        </li>
      ))}
    </ul>
  );
}

export function CommentForm({ postId, enabled }: { postId: number; enabled: boolean }) {
  const [submitting, setSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState<{ type: "success" | "error"; message: string } | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!enabled) return;
    setSubmitting(true);
    setStatus(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      postId,
      authorName: String(formData.get("name") || ""),
      authorEmail: String(formData.get("email") || ""),
      content: String(formData.get("comment") || ""),
    };
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (res.ok && json?.ok) {
        setStatus({ type: "success", message: "Thanks! Your comment is awaiting moderation." });
        form.reset();
      } else {
        setStatus({ type: "error", message: json?.error || "Failed to submit comment." });
      }
    } catch {
      setStatus({ type: "error", message: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mt-6">
      <h3 className="mb-3 text-base font-semibold text-foreground">Leave a comment</h3>
      {!enabled ? (
        <div className="rounded-lg border bg-accent/20 p-4 text-sm text-muted-foreground">Comments are closed for this post.</div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground" htmlFor="name">Name</label>
              <Input id="name" name="name" required disabled={submitting} />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground" htmlFor="email">Email</label>
              <Input id="email" name="email" type="email" required disabled={submitting} />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-muted-foreground" htmlFor="comment">Comment</label>
            <textarea
              id="comment"
              name="comment"
              required
              disabled={submitting}
              rows={4}
              className={cn(
                "w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              )}
            />
          </div>
          <Button type="submit" disabled={submitting}>{submitting ? "Submitting…" : "Post Comment"}</Button>
          {status && (
            <div
              className={cn(
                "mt-2 rounded-md border px-3 py-2 text-sm",
                status.type === "success" ? "border-green-200 bg-green-50 text-green-800" : "border-red-200 bg-red-50 text-red-800"
              )}
            >
              {status.message}
            </div>
          )}
        </form>
      )}
    </div>
  );
}
