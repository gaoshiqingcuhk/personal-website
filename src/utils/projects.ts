import type { CollectionEntry } from "astro:content";

export function sortProjectsByDate(projects: CollectionEntry<"projects">[]) {
  return projects.sort(
    (a, b) =>
      Number(b.data.featured) - Number(a.data.featured) ||
      (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0) ||
      a.data.title.localeCompare(b.data.title)
  );
}

export function getAllTags(projects: CollectionEntry<"projects">[]) {
  return Array.from(new Set(projects.flatMap((project) => project.data.tags))).sort(
    (a, b) => a.localeCompare(b)
  );
}
