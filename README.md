# kidchenko.dev

Personal website of **Jose Barbosa** — Engineering Director, founder, and writer on engineering leadership, AI, and SaaS. Live at [kidchenko.dev](https://kidchenko.dev/).

Built on top of [Astro Cactus](https://github.com/chrismwilliams/astro-theme-cactus) and redesigned in 2026.

## Table of contents

1. [Highlights](#highlights)
2. [Pages](#pages)
3. [Stack](#stack)
4. [Quick start](#quick-start)
5. [Commands](#commands)
6. [Project structure](#project-structure)
7. [Configuration](#configuration)
8. [Content](#content)
9. [Internationalization](#internationalization)
10. [Search](#search)
11. [Deploy](#deploy)
12. [Acknowledgements](#acknowledgements)
13. [License](#license)

## Highlights

- 2026 redesign with a compass animation on the homepage
- Bilingual: **English** and **Português (pt-BR)** via Astro routing under `[...lang]`
- Light and dark themes with a toggle
- Posts and notes via Astro Content Collections (MD/MDX) with type-checked frontmatter
- Static, client-side search with [Pagefind](https://pagefind.app/)
- Auto-generated OG images via [Satori](https://github.com/vercel/satori)
- RSS feed, sitemap, robots.txt, and web app manifest
- Print-friendly CV page (Save as PDF)
- Accessible, semantic markup with skip links and visible focus

## Pages

| Path                       | Description                                                                  |
| :------------------------- | :--------------------------------------------------------------------------- |
| `/`                        | Hero, selected outcomes, and featured writing                                |
| `/about/`                  | Long-form intro, current focus, beyond engineering, reading list, contacts  |
| `/portfolio/`              | Active SaaS products (Vera, .NET SaaS), past ventures, open source           |
| `/posts/`                  | Writing index with tag filters and pagination                                |
| `/cv/`                     | Print-ready CV with summary, work history, education, skills, languages     |
| `/contact/`                | Contact form with honeypot and other ways to reach me                        |
| `/pt/...`                  | Portuguese versions of every page                                            |
| `/og-image/[slug].png`     | Generated OG images per post                                                  |
| `/rss.xml`                 | RSS feed                                                                      |

## Stack

- [Astro](https://astro.build) v6 with MDX
- [Tailwind CSS](https://tailwindcss.com) v4
- [Expressive Code](https://expressive-code.com/) (Dracula + GitHub Light) for code blocks
- [Pagefind](https://pagefind.app/) for static search
- [Satori](https://github.com/vercel/satori) + Sharp for OG images
- [Astro Icon](https://github.com/natemoo-re/astro-icon) (MDI)
- TypeScript, Biome, Prettier
- Deployed on the host configured by `CNAME`

## Quick start

Requires Node 20+ and pnpm.

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

## Commands

| Command          | Action                                                            |
| :--------------- | :---------------------------------------------------------------- |
| `pnpm install`   | Install dependencies                                              |
| `pnpm dev`       | Start dev server at `localhost:3000`                              |
| `pnpm build`     | Build the production site to `./dist/`                            |
| `pnpm postbuild` | Run Pagefind to generate the static search index                  |
| `pnpm preview`   | Preview the production build locally                              |
| `pnpm check`     | Run `astro check` and Biome                                       |
| `pnpm lint`      | Apply Biome auto-fixes                                            |
| `pnpm format`    | Format with Prettier                                              |

## Project structure

```
src/
├─ assets/              # Local images and static assets
├─ components/          # Astro components (Header, Footer, Search, ThemeToggle, ...)
├─ content/             # Posts, notes, and tag overrides (MD/MDX)
├─ data/                # Static data (e.g. CV-related content)
├─ i18n/                # Languages, UI strings (en, pt), helpers
├─ layouts/             # Base, BlogPost, and page layouts
├─ pages/
│  ├─ [...lang]/        # Localized pages: index, about, portfolio, cv, contact, posts
│  ├─ og-image/         # Satori-generated OG images
│  ├─ posts/            # Post pagination and per-post pages
│  ├─ tags/             # Tag index and tag pages
│  ├─ rss.xml.ts        # RSS feed
│  └─ 404.astro
├─ plugins/             # Remark/rehype plugins (admonitions, etc.)
├─ styles/              # Global styles and Tailwind config
└─ site.config.ts       # Site URL, author, locale, menu links, code-block themes
```

## Configuration

- **Site metadata, locale, and menu** — `src/site.config.ts`
- **Astro integrations and webmanifest** — `astro.config.ts`
- **UI strings (en / pt-BR)** — `src/i18n/ui.ts`
- **Public assets** — `public/` (favicon, social card, CNAME)
- **Global styles** — `src/styles/global.css`

## Content

Posts and notes are managed as [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) under `src/content/`. The schema lives in `src/content.config.ts` and validates frontmatter at build time.

Add a post by dropping a `.md` or `.mdx` file in `src/content/post/`. The filename becomes the slug.

Minimum frontmatter:

```yaml
---
title: "Post title (≤ 60 chars)"
description: "SEO description (50–160 chars)"
publishDate: "2026-05-02"
tags: ["leadership", "ai"]
---
```

Optional: `updatedDate`, `coverImage`, `ogImage`, `draft`. Drafts are excluded from production builds, RSS, and OG generation.

## Internationalization

Two languages are supported: **English** (default) and **Portuguese (pt-BR)**.

- Routes are generated by `src/pages/[...lang]/...` with `lang` resolving to `""` (English) or `"pt"`
- All UI copy lives in `src/i18n/ui.ts` under `en` / `pt`
- The `LanguageToggle` component switches between the two
- To add another language: add it to `languages` in `src/i18n/ui.ts`, add a translated `ui` block, and add `getStaticPaths` entries where needed

## Search

Pagefind builds a static search index from posts and notes during `pnpm postbuild`. To rebuild locally:

```bash
pnpm build && pnpm postbuild && pnpm preview
```

Filtering by tag is enabled via `data-pagefind-filter="tag"` on tag links.

## Deploy

The site is statically rendered. Any static host works (Netlify, Vercel, Cloudflare Pages, GitHub Pages). The custom domain is set in `public/CNAME`.

```bash
pnpm build && pnpm postbuild
# upload ./dist/
```

## Acknowledgements

- Theme base: [Astro Cactus](https://github.com/chrismwilliams/astro-theme-cactus) by [Chris Williams](https://github.com/chrismwilliams), itself inspired by [Hexo Theme Cactus](https://github.com/probberechts/hexo-theme-cactus)
- Built with [Astro](https://astro.build), [Tailwind](https://tailwindcss.com), [Pagefind](https://pagefind.app/), [Satori](https://github.com/vercel/satori), and [Expressive Code](https://expressive-code.com)

## License

MIT
