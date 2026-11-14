import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pageSchema = z
	.object({
		title: z.string(),
		description: z.string().optional(),
		referenceType: z.string().optional(),
		adProfile: z.string().optional(),
		commercialIntent: z.enum(['low', 'medium', 'high']).optional(),
		reviewCadence: z.string().optional(),
		primaryKeyword: z.string().optional(),
		searchIntent: z.enum(['learn', 'compare', 'select', 'design', 'deploy']).optional(),
		decisionStage: z.string().optional(),
		targetRoles: z.array(z.string()).optional(),
		contentStatus: z.enum(['seed', 'growing', 'cornerstone']).optional(),
		contentCluster: z.string().optional(),
		canonicalCluster: z.string().optional(),
		pageType: z.string().optional(),
		lifecycle: z.string().optional(),
		refreshPriority: z.enum(['low', 'medium', 'high']).optional(),
		authorKey: z.string().optional(),
		editorKey: z.string().optional(),
		datePublished: z.coerce.date().optional(),
		lastReviewed: z.coerce.date().optional(),
		problemSolved: z.string().optional(),
		readerTakeaway: z.string().optional(),
		keyQuestions: z.array(z.string()).optional(),
		notFor: z.array(z.string()).optional(),
		updateTriggers: z.array(z.string()).optional(),
	})
	.passthrough();

const deviceSchema = z.object({
	slug: z.string(),
	brand: z.string(),
	model: z.string(),
	category: z.enum(['gateway', 'protocol-converter']),
	southbound: z.array(z.string()),
	northbound: z.array(z.string()),
	specs: z.record(z.string(), z.string()),
	mappingExport: z.enum(['yes', 'no', 'undeclared']),
	mappingSource: z.string().nullable().optional(),
	sources: z.array(z.object({ label: z.string(), url: z.string() })),
	checked: z.coerce.date(),
});

export const collections = {
	devices: defineCollection({
		loader: glob({ pattern: '**/*.yaml', base: './src/data/devices' }),
		schema: deviceSchema,
	}),
	docs: defineCollection({
		loader: glob({ pattern: '**/*.mdx', base: './src/content/docs' }),
		schema: pageSchema,
	}),
};
