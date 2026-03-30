# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing website for **Namer**, an LLM-powered tool that audits and auto-fixes Figma layer names against natural language naming standards. Owned by Halisonworks.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:4020
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
```

## Architecture

- **Framework:** Astro 5 (static output, zero JS by default)
- **CSS:** Tailwind CSS 4 via `@tailwindcss/vite`, tokens in `src/styles/global.css` using `@theme`
- **Content:** `@astrojs/mdx` + Astro Content Collections (articles, blog, services, products)
- **Integrations:** `@astrojs/sitemap` for SEO
- **Routing:** File-based, each `.astro` file in `src/pages/` becomes a route
- **Assets:** `src/assets/` for build-optimized images; `public/` for unprocessed static files
- **Layouts:** `BaseLayout` (HTML shell), `ArticleLayout` (long-form content)
- **Components:** `src/components/` (Header, Footer, Hero, FeatureGrid, PricingTable, FAQ, etc.)

## Content Collections

Schemas defined in `src/content.config.ts`:

- `src/content/articles/` -- Long-form articles (title, description, date, author, type, category, image, draft, featured, keywords)
- `src/content/blog/` -- Blog posts (title, description, date, tags, image, draft, featured)
- `src/content/services/` -- Service pages (title, description, icon, order, features, draft)
- `src/content/products/` -- Product pages (title, description, price, image, features, order, draft)

## Design System

- **Color tokens:** Defined in `src/styles/global.css` via Tailwind `@theme`
- **Primary palette:** Figma Black (#1E1E1E), neutral grays
- **Accent:** Signal Blue (#0D99FF)
- **Surface:** Light gray (#F5F5F5) background
- **Typography:** Inter (body and headings), JetBrains Mono (code)
- **No em-dashes.** Use commas, periods, or semicolons instead.

## Non-Code Directories

- `docs/` -- Internal documentation (not published)

## Writing Rules

- Never use em-dashes in any content or code.
- Use commas, periods, semicolons, or parentheses instead.
