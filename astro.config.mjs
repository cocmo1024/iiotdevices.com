// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { fileURLToPath } from 'node:url';
import { siteMeta } from './src/utils/site-meta.mjs';

const noindexSitemapPaths = new Set([
	'/advertising/',
	'/affiliate-disclosure/',
	'/disclaimer/',
	'/privacy/',
	'/terms-of-use/',
]);

/** @param {string} page */
function shouldIncludeInSitemap(page) {
	return !noindexSitemapPaths.has(new URL(page, siteMeta.siteUrl).pathname);
}

export default defineConfig({
	site: siteMeta.siteUrl,
	trailingSlash: 'always',
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'de', 'es', 'pt', 'zh', 'ja', 'fr'],
		routing: {
			prefixDefaultLocale: false,
			redirectToDefaultLocale: false,
			fallbackType: 'rewrite',
		},
	},
	integrations: [
		mdx(),
		sitemap({
			filter: shouldIncludeInSitemap,
		}),
	],
	vite: {
		resolve: {
			alias: [
				{
					find: '@astrojs/starlight/components',
					replacement: fileURLToPath(new URL('./src/components/mdx/index.ts', import.meta.url)),
				},
			],
		},
	},
});
