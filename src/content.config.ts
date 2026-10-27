import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      headline: z.string(),
      tag: z.string(),
      cover: image(),
      client: z.string(),
      category: z.string(),
      budget: z.string(),
      date: z.coerce.date(),
      liveSite: z.object({ label: z.string(), url: z.string().url() }),
      summary: z.string(),
      order: z.number(),
    }),
});

export const collections = { projects };
