import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const slug = searchParams.get("slug") ?? "world";
	console.log("🚀 ~ slug:", slug);
	return Response.json({ message: `Hello, ${slug}!` });
}
