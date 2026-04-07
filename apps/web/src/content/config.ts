import { defineCollection, z } from 'astro:content'

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    order: z.number().int(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    href: z.string().url().optional(),
  }),
})

export const collections = { projects }
