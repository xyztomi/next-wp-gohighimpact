"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function CommentForm({ postId, enabled }: { postId: number; enabled: boolean }) {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!enabled || submitting) return;
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

  if (!enabled) {
    return <div className="rounded-lg border bg-accent/20 p-4 text-sm text-muted-foreground">Comments are closed for this post.</div>;
  }

  return (
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
  );
}
