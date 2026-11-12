import { getCollection } from 'astro:content';
import { siteMeta } from '../utils/site-meta.mjs';

export const prerender = true;

function toPublicUrl(id: string) {
	if (id === 'index') return `${siteMeta.siteUrl}/`;
	const normalized = id.endsWith('/index') ? id.slice(0, -'/index'.length) : id;
	return `${siteMeta.siteUrl}/${normalized}/`;
}

function cleanBody(body: string) {
	// Drop MDX import lines; keep the full editorial text (including link cards,
	// which carry the site's internal and cluster cross-link structure).
	return body
		.split('\n')
		.filter((line) => !line.trimStart().startsWith('import '))
		.join('\n')
		.trim();
}

export async function GET() {
	const docs = await getCollection('docs');
	const entries = [...docs].sort((left, right) => left.id.localeCompare(right.id));

	const sections = entries.map((entry) => {
		const title = entry.data.title ?? entry.id;
		return [`## ${title}`, `Source: ${toPublicUrl(entry.id)}`, '', cleanBody(entry.body ?? '')].join('\n');
	});

	const text = [
		`# ${siteMeta.name} — full text`,
		'',
		siteMeta.description,
		'',
		'This file is generated at build time from every page on the site, so it always matches the live content. For a short curated index, see https://iiotdevices.com/llms.txt',
		'',
		...sections,
		'',
	].join('\n\n');

	return new Response(text, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
}
