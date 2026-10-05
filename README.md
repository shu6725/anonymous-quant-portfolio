# Anonymous Quant / Trading Portfolio

An anonymous, static-first professional portfolio for financial-markets research, trading and software work. It uses Astro, TypeScript, Astro Content Collections, Markdown, KaTeX and GitHub Pages. There is no analytics, tracking or custom contact-form backend.

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

- Edit the identity, summary, expertise, experience and availability data in `src/data/profile.ts`.
- Edit the initial project scaffolds in `src/data/projects.ts`. A project page is generated for every entry.
- Add articles in `src/content/research/` as `.md` or `.mdx` files. Every public article has an `en` and a `ja` entry with the same `route` value. Drafts (`draft: true`) are excluded from public listings and routes.
- Add reusable Astro components in `src/components/`; the project-page scaffold is designed to receive a small client-side interactive component when a concrete research demo is selected.
- Put images in `public/images/` and videos in `public/videos/`. Markdown images such as `![Description](/images/example.svg)` are base-path aware for GitHub Pages. Use MDX when an article needs reusable Astro components such as figures or an interactive widget.

Article frontmatter:

```yaml
---
title: "Understanding Inventory Risk in Market Making"
description: "A practical introduction to inventory risk."
locale: en
route: inventory-risk
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

## Languages

English is available at the root URL. Japanese lives under `/jp/`. The `EN / JP` control in the header preserves the matching page path, including article and project routes.

- Shared UI text and locale-aware links are in `src/i18n.ts`.
- Japanese profile and project copy is alongside the English data in `src/data/profile.ts` and `src/data/projects.ts`.
- Research translations live in language-specific content files and share the same `route` frontmatter value.

## GitHub Pages deployment

The included GitHub Actions workflow builds and publishes the static `dist/` directory on every push to `main`. No deployment secret is required.

GitHub Pages from a private repository requires a GitHub plan that supports it. On GitHub Free, keep this source repository private and deploy a reviewed static build to a separate public Pages repository, or use another hosting provider with access control.

1. Create a GitHub repository with a neutral name, for example `anonymous-quant-portfolio`.
2. In **Settings → Pages**, select **GitHub Actions** as the publishing source.
3. Push the `main` branch. The workflow publishes the site at `https://<account>.github.io/<repository>/`.

The Astro configuration automatically adds the repository path when it builds in GitHub Actions, so internal links work on a project Pages URL. A standard GitHub Pages URL exposes the GitHub account and repository name; use an anonymous account and neutral repository name if that matters for the portfolio.

## Contact form

The contact page is a static form that posts directly to Formspree. The recipient email is configured in Formspree and is never written into the site source or generated HTML. Formspree requires an account and a verified recipient email; its form endpoint is public by design, but it is not an API secret. The current endpoint is set in `src/components/ContactForm.astro` and can be overridden during a deployment with `PUBLIC_CONTACT_FORM_ENDPOINT`.

1. Create a form in the [Formspree dashboard](https://formspree.io/) and copy the endpoint shown in its Integration section, for example `https://formspree.io/f/abcde123`.
2. To change the endpoint without editing source, open **Settings → Secrets and variables → Actions → Variables** in GitHub and add `PUBLIC_CONTACT_FORM_ENDPOINT` with the new endpoint as its value.
3. Push a commit to `main`, or rerun the Pages workflow. The workflow passes the optional variable into the static Astro build.
4. In Formspree, restrict accepted domains to the production site and enable its available spam protection before sharing the link widely.

Do not place private Formspree API keys or recipient addresses in repository variables, source files, or client-side code.

## Privacy and noindex

Every page emits `<meta name="robots" content="noindex, nofollow">`, and `public/robots.txt` disallows crawlers. GitHub Pages does not provide this project with custom response-header configuration, so the `X-Robots-Tag` header is intentionally not configured. These settings reduce discovery but are not access control; never place confidential content on the public site.

No sitemap, analytics or tracking script is configured. The Contact page uses Formspree only after `PUBLIC_CONTACT_FORM_ENDPOINT` has been configured.

Run the output check with the identifying terms you want to guard against:

```bash
npm run build
PRIVACY_AUDIT_TERMS="your name,personal email,employer name" npm run privacy:check
```

The privacy check always detects source maps. When `PRIVACY_AUDIT_TERMS` is set, it also scans the generated site for each comma-separated term.

## Pre-deployment checklist

- [ ] Verify that the configured Formspree endpoint belongs to the intended form; optionally set `PUBLIC_CONTACT_FORM_ENDPOINT` as a GitHub Actions variable to override it without source edits.
- [ ] Verify that the recipient email and private Formspree API keys do not appear in source or generated output.
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
