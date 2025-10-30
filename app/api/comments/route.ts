import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { postId, content, authorName, authorEmail, parent = 0 } = body || {};

		if (!postId || !content || !authorName || !authorEmail) {
			return NextResponse.json(
				{ error: "Missing required fields" },
				{ status: 400 }
			);
		}

		const wpUrl = process.env.WORDPRESS_URL;
		if (!wpUrl) {
			return NextResponse.json(
				{ error: "Server not configured" },
				{ status: 500 }
			);
		}

		const authUser = process.env.WORDPRESS_COMMENTS_USER;
		const authPass = process.env.WORDPRESS_COMMENTS_PASSWORD;

		const headers: Record<string, string> = {
			"Content-Type": "application/json",
		};
		if (authUser && authPass) {
			const token = Buffer.from(`${authUser}:${authPass}`).toString("base64");
			headers["Authorization"] = `Basic ${token}`;
		}

		const res = await fetch(`${wpUrl}/wp-json/wp/v2/comments`, {
			method: "POST",
			headers,
			body: JSON.stringify({
				post: postId,
				content,
				author_name: authorName,
				author_email: authorEmail,
				parent,
			}),
		});

		const data = await res.json();
		if (!res.ok) {
			return NextResponse.json(
				{ error: data?.message || "Failed to post comment" },
				{ status: 400 }
			);
		}
		return NextResponse.json({ ok: true, comment: data });
	} catch (e) {
		return NextResponse.json({ error: "Invalid request" }, { status: 400 });
	}
}
