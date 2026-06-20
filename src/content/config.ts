import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    titleZh: z.string().optional(),
    date: z.coerce.date().optional(),
    status: z.string(),
    category: z.enum(["Academic / Technical", "Creative / Personal", "Meta"]),
    tags: z.array(z.string()),
    summary: z.string(),
    summaryZh: z.string().optional(),
    role: z.string(),
    tools: z.array(z.string()),
    repoUrl: z.string().url().optional().or(z.literal("")),
    demoUrl: z.string().url().optional().or(z.literal("")),
    reportUrl: z.string().url().optional().or(z.literal("")),
    image: z.string().optional(),
    featured: z.boolean().default(false)
  })
});

export const collections = { projects };
