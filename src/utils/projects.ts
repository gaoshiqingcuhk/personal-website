import type { CollectionEntry } from "astro:content";

export function sortProjectsByDate(projects: CollectionEntry<"projects">[]) {
  return projects.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );
}

export function getAllTags(projects: CollectionEntry<"projects">[]) {
  return Array.from(new Set(projects.flatMap((project) => project.data.tags))).sort(
    (a, b) => a.localeCompare(b)
  );
}
