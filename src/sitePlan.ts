import { SITE_CONTACT_EMAIL, SITE_TITLE } from './consts';

export const SITE_EDITOR = {
	name: `${SITE_TITLE} Editorial Desk`,
	role: 'Industrial device research desk',
	email: SITE_CONTACT_EMAIL,
	bio: 'We focus on deployment-ready device guidance, vendor comparison, and technical buying content that can support serious industrial projects over time.',
};

export const SITE_POSITIONING =
	'Build an English-language device intelligence desk around brownfield deployment planning, device selection, and vendor comparison for industrial buyers and integrators.';

export const SITE_AUDIENCES = [
	{
		title: 'Plant and Field Engineers',
		summary: 'Readers trying to choose reliable gateways, sensors, RTUs, and accessories that fit real environments and signal needs.',
	},
	{
		title: 'System Integrators',
		summary: 'Teams shaping shortlists, architecture recommendations, and retrofit plans for customer projects.',
	},
	{
		title: 'Technical Buyers',
		summary: 'Procurement and operations stakeholders who need clearer device categories and vendor-fit guidance before budget is committed.',
	},
];

export const SITE_CONTENT_PILLARS = [
	{
		title: 'Deployment Planning',
		href: '/categories/deployment-planning/',
		summary: 'Brownfield constraints, environmental conditions, panel realities, power, and integration planning.',
	},
	{
		title: 'Device Selection',
		href: '/categories/device-selection/',
		summary: 'Device-category content for gateways, RTUs, sensors, controllers, signal conditioners, and edge hardware.',
	},
	{
		title: 'Vendor Comparison',
		href: '/categories/vendor-comparison/',
		summary: 'Shortlist pages and evaluation frameworks that align with real commercial research behavior.',
	},
];

export const SITE_VALUE_LANES = [
	{
		title: 'Specification Intent',
		summary: 'Queries about compatibility, environment fit, and signal requirements tend to come from readers close to real projects.',
	},
	{
		title: 'Shortlist Intent',
		summary: 'Vendor comparison and product category pages support manufacturer, distributor, and integrator demand later on.',
	},
	{
		title: 'Retrofit Intent',
		summary: 'Brownfield planning content creates durable traffic because it speaks to constraints that do not disappear quickly.',
	},
];

export const SITE_PRIORITY_CLUSTERS = [
	{
		title: 'Brownfield Remote Monitoring Stacks',
		summary: 'Practical device stacks for legacy equipment, retrofit monitoring, and minimal-change deployments.',
		whyItWins: 'Captures technical readers who are solving a real problem and often need multiple hardware categories at once.',
	},
	{
		title: 'Gateway vs RTU vs Edge Controller',
		summary: 'Clear decision pages that explain where each device class fits and where it fails.',
		whyItWins: 'Strong search value because buyers often know they need “something” but have not yet defined the correct category.',
	},
	{
		title: 'Sensor Selection by Environment',
		summary: 'Selector content based on media, range, ingress protection, temperature, mounting, and output type.',
		whyItWins: 'Useful for long-tail industrial searches where environmental fit matters more than generic feature lists.',
	},
	{
		title: 'Protocol and Gateway Shortlists',
		summary: 'Modbus, OPC UA, serial, Ethernet, and fieldbus conversion pages tied to integration reality.',
		whyItWins: 'High-value traffic from teams solving communication and migration problems instead of casually browsing products.',
	},
];

export const SITE_CONTENT_FORMATS = [
	{
		title: 'Selector Pages',
		summary: 'Decision pages that help readers narrow a category based on environment, protocol, and deployment context.',
	},
	{
		title: 'Retrofit Guides',
		summary: 'Brownfield planning content that explains how to upgrade equipment without rebuilding the whole system.',
	},
	{
		title: 'Vendor Shortlists',
		summary: 'Commercially useful pages that compare fit, lifecycle, support, and application alignment.',
	},
	{
		title: 'Implementation Checklists',
		summary: 'Practical guides for enclosure, power, wiring, data flow, and remote maintenance considerations.',
	},
];

export const SITE_METHOD_PRINCIPLES = [
	{
		title: 'Application context first',
		summary: 'Good industrial device content starts with environment, signal, protocol, and deployment reality rather than generic SKU lists.',
	},
	{
		title: 'Compare roles, not just products',
		summary: 'Readers often need help understanding what kind of device belongs in the architecture before they can compare brands.',
	},
	{
		title: 'Respect brownfield constraints',
		summary: 'The archive should account for legacy systems, enclosure limits, power availability, and support realities.',
	},
	{
		title: 'Refresh shortlist pages regularly',
		summary: 'Vendor and category pages should be revisited as product lines, protocols, and lifecycle status evolve.',
	},
];

export const SITE_AVOID_TOPICS = [
	'Generic industrial press-release rewrites',
	'Consumer IoT content that does not map to industrial buying behavior',
	'Thin spec dumps with no deployment or integration context',
	'Broad future-of-industry posts that do not help a buyer decide anything',
];

export const SITE_UPDATE_PLAYBOOK = [
	{
		title: 'Monthly category buildout',
		summary: 'Add one selector, one retrofit guide, and one supporting glossary-style page to an existing device cluster.',
	},
	{
		title: 'Quarterly shortlist refresh',
		summary: 'Revisit the most valuable vendor and category pages for lifecycle changes, protocol updates, and better fit guidance.',
	},
	{
		title: 'Quarterly brownfield expansion',
		summary: 'Publish scenario-specific articles for utilities, remote facilities, and equipment-monitoring deployments.',
	},
	{
		title: 'Annual architecture cleanup',
		summary: 'Tighten internal links, refresh outdated terminology, and consolidate overlapping selector content.',
	},
];

export const SITE_REVIEW_PROMISE =
	'Pages that influence device selection or vendor shortlists should be revisited on a recurring cycle so the highest-value traffic lands on current, trustworthy guidance.';
