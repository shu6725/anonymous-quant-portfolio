# Anonymous Quant / Trading Portfolio

An anonymous, static-first professional portfolio for financial-markets research, trading and software work. It uses Astro, TypeScript, Astro Content Collections, Markdown, KaTeX and GitHub Pages. There is no analytics, tracking or contact-form backend.

## Local development

Use Node.js 22.12 or later.

```bash
npm install
npm run dev
```

## Production build and preview

```bash
npm run build
npm run preview
```

The static deployment build is written to `dist/`.

## Editing the portfolio

- Edit the identity, email, summary, expertise, experience and availability data in `src/data/profile.ts`.
- Edit the initial project scaffolds in `src/data/projects.ts`. A project page is generated for every entry.
- Add articles in `src/content/research/` as `.md` or `.mdx` files. Drafts (`draft: true`) are excluded from public listings and routes.
- Add reusable Astro components in `src/components/`; the project-page scaffold is designed to receive a small client-side interactive component when a concrete research demo is selected.
- Put images in `public/images/` and videos in `public/videos/`. Markdown images such as `![Description](/images/example.svg)` are base-path aware for GitHub Pages. Use MDX when an article needs reusable Astro components such as figures or an interactive widget.

Article frontmatter:

```yaml
---
title: "Understanding Inventory Risk in Market Making"
description: "A practical introduction to inventory risk."
date: 2026-09-09
category: "Market Microstructure"
tags:
  - Market Making
  - Market Microstructure
  - Trading
draft: false
---
```

KaTeX is configured globally. Use `$inline$` and `$$display$$` notation. Code fences receive Astro’s built-in syntax highlighting. MDX is enabled for figures and future interactive research components. The regulation-series articles provide working examples with `ResearchFigure.astro`.

## GitHub Pages deployment

The included GitHub Actions workflow builds and publishes the static `dist/` directory on every push to `main`. No deployment secret is required.

GitHub Pages from a private repository requires a GitHub plan that supports it. On GitHub Free, keep this source repository private and deploy a reviewed static build to a separate public Pages repository, or use another hosting provider with access control.

1. Create a GitHub repository with a neutral name, for example `anonymous-quant-portfolio`.
2. In **Settings → Pages**, select **GitHub Actions** as the publishing source.
3. Push the `main` branch. The workflow publishes the site at `https://<account>.github.io/<repository>/`.

The Astro configuration automatically adds the repository path when it builds in GitHub Actions, so internal links work on a project Pages URL. A standard GitHub Pages URL exposes the GitHub account and repository name; use an anonymous account and neutral repository name if that matters for the portfolio.

## Privacy and noindex

Every page emits `<meta name="robots" content="noindex, nofollow">`, and `public/robots.txt` disallows crawlers. GitHub Pages does not provide this project with custom response-header configuration, so the `X-Robots-Tag` header is intentionally not configured. These settings reduce discovery but are not access control; never place confidential content on the public site.

No sitemap, analytics, tracking script, user account, environment variable or third-party embed is configured.

Run the output check after replacing placeholders:

```bash
npm run build
npm run privacy:check
```

The checker intentionally fails while `contact@example.com` remains. You can check additional identifying terms with `PRIVACY_AUDIT_TERMS="name@example.com,employer name" npm run privacy:check`.

## Pre-deployment checklist

- [ ] Replace placeholder email in `src/data/profile.ts`.
- [ ] Verify no real name appears in the site, repository or generated output.
- [ ] Verify employer names are anonymized.
- [ ] Verify Git author identity, GitHub account name and repository visibility.
- [ ] Verify `noindex, nofollow` metadata on every page.
- [ ] Verify GitHub Pages is using the **GitHub Actions** source.
- [ ] Verify no analytics or tracking has been added.
- [ ] Check image metadata before adding images.
- [ ] Check PDFs and downloadable-file metadata before adding files.
- [ ] Run `npm run build`.
- [ ] Run `npm run privacy:check` with the real email and any known identifying terms.
- [ ] Test desktop and mobile layouts.
- [ ] Test all internal and external links.
- [ ] Review Markdown, project links and public repositories for confidential material.
