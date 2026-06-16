# Academic Portfolio

A clean Astro + TypeScript personal academic website for projects, notes, CV, and contact information.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Add a Project

Create a Markdown file in `src/content/projects/` with frontmatter matching the existing examples:

```md
---
title: "New Project Title"
date: "2026-06-16"
tags: ["Applied Math", "Data Analysis"]
summary: "A short project description."
role: "Student researcher"
tools: ["Python", "NumPy"]
repoUrl: "https://github.com/yourname/repo"
demoUrl: ""
featured: false
---

## Background

Write the project story here.
```

The project will automatically appear on `/projects`, and its detail page will use the file name as the URL slug. For example, `new-project-title.md` becomes `/projects/new-project-title`.
