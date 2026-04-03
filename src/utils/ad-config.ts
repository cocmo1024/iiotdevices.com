type Frontmatter = Record<string, unknown> | undefined;

type AdSlotPlan = {
	zone: string;
	headline: string;
	sizes: string[];
	audience?: string;
	note?: string;
};

type AdPlan = {
	summary: string;
	rail: AdSlotPlan[];
	footer: AdSlotPlan;
};

type AdProfile =
	| 'foundation'
	| 'policy'
	| 'application'
	| 'vendor'
	| 'product-family'
	| 'protocol'
	| 'comparison';

function inferProfile(routeId: string, frontmatter: Frontmatter): AdProfile {
	const explicit = frontmatter?.adProfile;
	if (typeof explicit === 'string') return explicit as AdProfile;
	if (routeId.startsWith('applications/')) return 'application';
	if (routeId.startsWith('vendors/')) return 'vendor';
	if (routeId.startsWith('product-families/') || routeId.startsWith('device-types/'))
		return 'product-family';
	if (routeId.startsWith('protocols/')) return 'protocol';
	if (routeId.startsWith('comparisons/')) return 'comparison';
	if (routeId === 'about' || routeId === 'contact' || routeId === 'index') return 'foundation';
	return 'policy';
}

const plans: Record<AdProfile, AdPlan> = {
	foundation: {
		summary:
			'Foundation pages keep inventory conservative while still reserving layout space for future industry sponsors and directory-safe placements.',
		rail: [
			{
				zone: 'Right Rail A',
				headline: 'Industrial category sponsor',
				sizes: ['300x250', '300x300'],
				audience: 'Fit for connectivity, software, or instrumentation brands.',
			},
			{
				zone: 'Right Rail B',
				headline: 'Report, directory, or newsletter placement',
				sizes: ['300x600', 'native card'],
				audience: 'Lower-intensity awareness inventory for technical readers.',
			},
		],
		footer: {
			zone: 'Footer Band',
			headline: 'Cross-category industrial placement',
			sizes: ['728x90', '970x90', 'native strip'],
			audience: 'Useful for broad industrial awareness across research traffic.',
		},
	},
	policy: {
		summary:
			'Disclosure and policy pages should remain easy to trust, so the reserved commercial layout is intentionally restrained.',
		rail: [
			{
				zone: 'Right Rail A',
				headline: 'Disclosure-safe brand placement',
				sizes: ['300x250', 'native card'],
				audience: 'Reserved for conservative trust-page inventory only.',
			},
		],
		footer: {
			zone: 'Footer Band',
			headline: 'Low-pressure network placement',
			sizes: ['728x90', 'native strip'],
			audience: 'Appropriate only when disclosure remains explicit.',
		},
	},
	application: {
		summary:
			'Application pages are strong monetization territory because readers are usually scoping a real deployment and narrowing their hardware approach.',
		rail: [
			{
				zone: 'Right Rail A',
				headline: 'Application-fit sponsor slot',
				sizes: ['300x250', '300x300'],
				audience: 'High fit for hardware brands, integrators, and industrial software tied to deployment work.',
			},
			{
				zone: 'Right Rail B',
				headline: 'Field architecture or integration partner',
				sizes: ['300x600', 'native card'],
				audience: 'Useful for readers moving toward specification or shortlist work.',
			},
		],
		footer: {
			zone: 'Footer Band',
			headline: 'Application-stage partner slot',
			sizes: ['728x90', '970x90'],
			audience: 'Reserved for higher-intent engineering and buying traffic.',
		},
	},
	vendor: {
		summary:
			'Vendor pages are best treated as shortlist-supporting inventory, with clear separation between editorial analysis and any future paid placements.',
		rail: [
			{
				zone: 'Right Rail A',
				headline: 'Portfolio-adjacent sponsor slot',
				sizes: ['300x250', '300x300'],
				audience: 'Fit for adjacent ecosystem brands, not silent editorial influence.',
			},
			{
				zone: 'Right Rail B',
				headline: 'Industrial directory or partner placement',
				sizes: ['300x600', 'native card'],
				audience: 'Useful for readers comparing support ecosystems and integration options.',
			},
		],
		footer: {
			zone: 'Footer Band',
			headline: 'Vendor research placement',
			sizes: ['728x90', '970x90'],
			audience: 'Reserved for vendor-adjacent but clearly disclosed commercial inventory.',
		},
	},
	'product-family': {
		summary:
			'Product family pages combine durable SEO with strong commercial relevance, making them ideal for structured sponsor inventory once traffic scales.',
		rail: [
			{
				zone: 'Right Rail A',
				headline: 'Primary product-family sponsor',
				sizes: ['300x250', '300x300'],
				audience: 'Strong fit for hardware categories under active evaluation.',
			},
			{
				zone: 'Right Rail B',
				headline: 'Shortlist or catalog extension slot',
				sizes: ['300x600', 'native card'],
				audience: 'Best for buyers moving from category education to product research.',
			},
		],
		footer: {
			zone: 'Footer Band',
			headline: 'Category-bottom placement',
			sizes: ['728x90', '970x90', 'native strip'],
			audience: 'Designed for research traffic close to shortlist formation.',
		},
	},
	protocol: {
		summary:
			'Protocol pages support thoughtful commercial positioning for integration, interoperability, and software products without overwhelming the educational content.',
		rail: [
			{
				zone: 'Right Rail A',
				headline: 'Interoperability or gateway sponsor',
				sizes: ['300x250', '300x300'],
				audience: 'Fit for gateway, connectivity, or integration software vendors.',
			},
			{
				zone: 'Right Rail B',
				headline: 'Protocol ecosystem placement',
				sizes: ['300x600', 'native card'],
				audience: 'Useful for readers validating protocol and architecture fit.',
			},
		],
		footer: {
			zone: 'Footer Band',
			headline: 'Protocol comparison strip',
			sizes: ['728x90', '970x90'],
			audience: 'Reserved for technically literate research traffic.',
		},
	},
	comparison: {
		summary:
			'Comparison pages usually attract the highest-value traffic, so the placeholder layout assumes premium inventory with strict disclosure separation.',
		rail: [
			{
				zone: 'Right Rail A',
				headline: 'Primary shortlist sponsor',
				sizes: ['300x250', '300x300'],
				audience: 'Reserved for active evaluation traffic with strong buying intent.',
			},
			{
				zone: 'Right Rail B',
				headline: 'Secondary evaluation placement',
				sizes: ['300x600', 'native card'],
				audience: 'Suitable for industrial buyers comparing options before vendor contact.',
			},
		],
		footer: {
			zone: 'Footer Band',
			headline: 'Bottom-of-comparison partner slot',
			sizes: ['728x90', '970x90', 'native strip'],
			audience: 'Structured for bottom-of-funnel engineering and buying traffic.',
		},
	},
};

export function getAdPlan(routeId: string, frontmatter: Frontmatter): AdPlan {
	const profile = inferProfile(routeId, frontmatter);
	return plans[profile];
}
