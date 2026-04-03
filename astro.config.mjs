// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	site: 'https://iiotdevices.com',
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'IIoT Devices',
			description:
				'Structured reference system for industrial connectivity hardware, protocol fit, device categories, and comparison workflows.',
			tagline: 'Industrial connectivity hardware organized around application fit, device classes, protocol choices, and buying decisions.',
			lastUpdated: true,
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/cocmo1024/iiotdevices.com',
				},
			],
			sidebar: [
				{
					label: 'Reference Areas',
					items: [
						{
							label: 'Applications',
							autogenerate: { directory: 'applications' },
						},
						{
							label: 'Device Types',
							autogenerate: { directory: 'device-types' },
						},
						{
							label: 'Product Families',
							autogenerate: { directory: 'product-families' },
						},
						{
							label: 'Vendors',
							autogenerate: { directory: 'vendors' },
						},
						{
							label: 'Protocols',
							autogenerate: { directory: 'protocols' },
						},
						{
							label: 'Comparisons',
							autogenerate: { directory: 'comparisons' },
						},
					],
				},
				{
					label: 'Site',
					collapsed: true,
					items: [
						'about',
						'contact',
						'privacy',
						'terms-of-use',
						'disclaimer',
						'editorial-policy',
						'advertising',
						'affiliate-disclosure',
					],
				},
			],
			customCss: ['./src/styles/global.css'],
			pagefind: true,
			favicon: '/favicon.svg',
			credits: false,
			components: {
				PageSidebar: './src/components/PageSidebar.astro',
				Footer: './src/components/Footer.astro',
			},
		}),
		sitemap(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
