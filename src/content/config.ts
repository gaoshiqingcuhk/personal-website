import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    summary: z.string(),
    role: z.string(),
    tools: z.array(z.string()),
    repoUrl: z.string().url().optional().or(z.literal("")),
    demoUrl: z.string().url().optional().or(z.literal("")),
    featured: z.boolean().default(false)
  })
});

export const collections = { projects };
