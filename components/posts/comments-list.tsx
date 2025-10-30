import { getCommentsByPost } from "@/lib/wordpress";
import type { Comment } from "@/lib/wordpress.d";
import { Card } from "@/components/ui/card";

export default async function CommentsList({ postId }: { postId: number }) {
  let comments: Comment[] = [];
  try {
    comments = await getCommentsByPost(postId);
  } catch {
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
