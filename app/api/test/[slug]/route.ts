import type { NextRequest } from "next/server";

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ slug: string }> },
) {
	const { slug } = await params;
	console.log("🚀 ~ slug:", slug);
	return Response.json({ message: `Hello, ${slug}!` });
}
