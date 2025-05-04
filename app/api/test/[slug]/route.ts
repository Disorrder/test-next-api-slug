export async function GET(
	request: Request,
	{ params }: { params: { slug: string } },
) {
	const { slug } = params;
	console.log("🚀 ~ slug:", slug);
	return Response.json({ message: `Hello, test with slug: ${slug}!` });
}
