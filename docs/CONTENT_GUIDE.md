# Content Guide

## Site and profile

- Edit navigation, domain, metadata, and footer in `src/data/site.ts`.
- Edit the public biography and interests in `src/data/profile.ts`.
- Missing contact fields should stay absent until there is a real public URL or address.

## Projects

Add a Markdown file to `src/content/projects/`. Use an existing project as a template and keep every claim verifiable.

Required frontmatter fields:

```yaml
title: "Project title"
status: "Ongoing"
category: "Academic / Technical"
tags: ["Tag"]
summary: "Short English summary."
role: "Independent project"
tools: ["Python"]
featured: false
```

Optional fields include `titleZh`, `summaryZh`, `date`, `repoUrl`, `demoUrl`, `reportUrl`, and `image`. Leave an optional field out when there is no real value.

## Writing and life

- Edit the honest empty state in `src/pages/writing.astro` until a real writing collection is needed.
- Edit the lightweight public interest descriptions in `src/pages/life.astro`.
- Do not create dated articles or achievements before the content exists.

## CV

- Edit CV content in `src/data/cv.ts`.
- Set `showGpa` to `false` to hide GPA from both the web and PDF versions.
- Empty arrays and missing optional links are hidden from public pages.

To regenerate the PDF, keep the dev server running at `http://localhost:4321`, then run:

```powershell
npm.cmd run generate:cv
```

The output is `public/Shiqing_Gao_CV.pdf`.

## Build and deploy

```powershell
npm.cmd run build
```

The static output is written to `dist/` and can be deployed to Vercel.
