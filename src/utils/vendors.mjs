export function brandSlug(brand) {
	return brand
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

export function groupByBrand(devices) {
	const map = new Map();
	for (const d of devices) {
		if (!map.has(d.brand)) map.set(d.brand, []);
		map.get(d.brand).push(d);
	}
	return [...map.entries()]
		.map(([brand, records]) => ({
			brand,
			slug: brandSlug(brand),
			records: records.sort((a, b) => a.model.localeCompare(b.model)),
			protocols: [...new Set(records.flatMap((r) => [...r.southbound, ...r.northbound]))].sort(),
			categories: [...new Set(records.map((r) => r.category))],
		}))
		.sort((a, b) => a.brand.localeCompare(b.brand));
}
