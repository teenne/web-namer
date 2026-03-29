import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    type: z.enum(['case-study', 'whitepaper', 'guide']).default('guide'),
    category: z.enum([
      'healthcare', 'backup', 'validation', 'strategy',
      'cost', 'process', 'analytics', 'tools', 'ai', 'team',
    ]).optional(),
    image: z.string().optional(),
    image_alt: z.string().optional(),
    draft: z.boolean().default(false),
    updated_at: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    keywords: z.array(z.string()).default([]),
    toc: z.boolean().default(true),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    image_alt: z.string().optional(),
    draft: z.boolean().default(false),
    updated_at: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    keywords: z.array(z.string()).default([]),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number().default(0),
    features: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.string().optional(),
    image: z.string().optional(),
    features: z.array(z.string()).default([]),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles, blog, services, products };
