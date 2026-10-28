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
      budget: z.string().optional(),
      date: z.coerce.date(),
      liveSite: z.object({ label: z.string(), url: z.string().url() }).optional(),
      github: z.string().url().optional(),
      video: z.string().url().optional(),
      techStack: z.array(z.string()).default([]),
      summary: z.string(),
      order: z.number().optional(),
    }),
});

export const collections = { projects };
