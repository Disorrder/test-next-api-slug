export default async function TestSlugPage({
	params,
}: { params: { slug: string } }) {
	const { slug } = await params;

	// Fetch data from the API route
	const response = await fetch(`http://localhost:3001/api/test/${slug}`);
	const data = await response.json();

	return (
		<div>
			<h1>Test Slug Page</h1>
			<p>Slug: {slug}</p>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
}
