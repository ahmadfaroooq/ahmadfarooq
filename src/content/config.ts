import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    excerpt: z.string(),
    category: z.enum([
      'growth-frameworks',
      'content-systems',
      'philosophy',
      'macroeconomics',
      'productivity-systems',
      'brand-strategy',
    ]),
    date: z.coerce.date(),
    readTime: z.string().optional(),
    imageUrl: z.string().optional(),
    status: z.enum(['draft', 'published']).default('draft'),
  }),
});

const playbook = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    excerpt: z.string(),
    category: z.enum(['growth', 'strategy', 'content-system', 'linkedin', 'branding']),
    date: z.coerce.date(),
    readTime: z.string().optional(),
    imageUrl: z.string().optional(),
    status: z.enum(['draft', 'published']).default('draft'),
  }),
});

export const collections = { blog, playbook };
