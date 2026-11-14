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

export const collections = {
	docs: defineCollection({
		loader: glob({ pattern: '**/*.mdx', base: './src/content/docs' }),
		schema: pageSchema,
	}),
};
