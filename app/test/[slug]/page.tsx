export default async function TestSlugPage({
	params,
}: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;

	// Fetch data from the API route
	const origin =
		process.env.VERCEL_ORIGIN ?? `https://${process.env.VERCEL_URL}`;
	const response = await fetch(`${origin}/api/test/${slug}`);
	const data = await response.json();

	return (
		<div>
			<h1>Test Slug Page</h1>
			<p>Slug: {slug}</p>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
}
