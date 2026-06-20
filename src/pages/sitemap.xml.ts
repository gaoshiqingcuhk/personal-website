import { getCollection } from "astro:content";
import { site } from "../data/site";

export async function GET() {
  const projects = await getCollection("projects");
  const staticPaths = ["/", "/about", "/projects", "/writing", "/life", "/cv", "/contact"];
  const projectPaths = projects.map((project) => `/projects/${project.slug}`);
  const urls = [...staticPaths, ...projectPaths]
    .map((path) => `  <url><loc>${new URL(path, site.domain).href}</loc></url>`)
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } }
  );
}
