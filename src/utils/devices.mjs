export const CATEGORIES = {
	gateways: {
		slug: 'gateways',
		recordCategory: 'gateway',
		label: 'Industrial gateways',
		blurb:
			'Protocol translation and data concentration between PLCs, machines and northbound systems such as OPC UA servers and MQTT brokers.',
	},
	'protocol-converters': {
		slug: 'protocol-converters',
		recordCategory: 'protocol-converter',
		label: 'Protocol converters',
		blurb:
			'Focused conversion between two protocol worlds — serial fieldbus to Ethernet, or one Ethernet protocol to another — without a general edge-compute layer.',
	},
};

export function deviceTitle(d) {
	return `${d.brand} ${d.model}`;
}

export function mappingLabel(value) {
	if (value === 'yes') return 'Exportable and documented';
	if (value === 'no') return 'Not exportable (per manufacturer docs)';
	return 'Manufacturer has not stated';
}
