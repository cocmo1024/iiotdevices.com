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
				'Structured reference material for industrial connectivity hardware, protocol choices, and device selection by application.',
			tagline: 'Industrial connectivity hardware organized around application fit, protocol choices, and buying decisions.',
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
					items: ['applications', 'device-types', 'vendors', 'protocols', 'comparisons'],
				},
				{
					label: 'Site',
					collapsed: true,
					items: ['about', 'contact', 'privacy', 'disclaimer'],
				},
			],
			customCss: ['./src/styles/global.css'],
			pagefind: true,
			favicon: '/favicon.svg',
			credits: false,
		}),
		sitemap(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
