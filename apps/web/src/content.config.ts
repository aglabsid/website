import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: z.object({
    order: z.number().int(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    href: z.url().optional(),
  }),
})

export const collections = { projects }
