# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog by MuYi086 built with [VitePress](https://vitepress.dev/) using the [@sugarat/theme](https://theme.sugarat.top/) theme. It's a static site generator based on Vue 3.

## Build Commands

This project uses **yarn** as the package manager with npmmirror registry (configured in `.npmrc`).

```bash
# Install dependencies
yarn install

# Start development server
npm run dev
# or: vitepress dev Docs

# Build for production (includes gzip compression)
npm run build

# Build without compression
npm run buildStart
# or: vitepress build Docs

# Preview production build
npm run serve
# or: vitepress serve Docs

# Compress static files with gzip (runs automatically after build)
bash ./compress_gz.sh
```

## Project Structure

```
Docs/
├── .vitepress/
│   ├── config.mts          # Main VitePress configuration
│   ├── blog-theme.ts       # @sugarat/theme configuration (author, footer, comments, etc.)
│   ├── cache/              # Build cache (gitignored)
│   └── theme/
│       ├── index.ts        # Theme entry, imports @sugarat/theme with custom SCSS
│       ├── style.scss      # Custom styles overriding theme (home background image)
│       ├── user-theme.css  # Optional theme color overrides
│       └── assets/         # Theme assets (bg.webp)
├── Articles/               # Blog posts organized by category
│   ├── AI/
│   ├── CSS/
│   ├── Deepin/
│   ├── Docker/
│   ├── Essay/
│   ├── Git/
│   ├── JS/
│   ├── Network/
│   ├── Node/
│   ├── Python/
│   ├── Shell/
│   ├── Standards/
│   ├── Wall/
│   └── Windows/
├── Images/                 # Image assets for articles
├── Snippets/               # Code snippets
├── public/                 # Static assets (favicon, logo, etc.)
└── index.md                # Homepage with blog frontmatter
```

## Content Format

Articles use markdown with YAML frontmatter. The @sugarat/theme automatically indexes articles based on file location:

```markdown
---
tags:
  - JS
  - Vue
date: 2024-01-01  # Optional, extracted from git history if not provided
---

# Article Title

Content here...
```

## Key Configuration Files

- **Docs/.vitepress/config.mts**: VitePress core config (title, description, nav, analytics)
- **Docs/.vitepress/blog-theme.ts**: Theme-specific config (author, footer, friend links, comments, Live2D)
- **Docs/.vitepress/theme/style.scss**: Custom CSS/SCSS overrides (home page background)

## Theme Features

The @sugarat/theme provides:
- Automatic article indexing from file structure
- Tag-based categorization
- Pagination (6 articles per page, configured in index.md)
- Giscus comments integration
- Live2D model support (oml2d)
- Mermaid diagram support
- Pagefind full-text search
- RSS feed generation
- PWA support

## Deployment

- **GitHub Actions**: `.github/workflows/ci.yml` - builds and deploys to VPS via SCP on push to master
- **Output directory**: `Docs/.vitepress/dist/`
- **Gzip compression**: Enabled via `compress_gz.sh` script for all HTML/JS assets
- **Node version**: 20 (in CI)

## Common Tasks

When adding a new article:
1. Create markdown file in appropriate `Docs/Articles/{category}/` folder
2. Add frontmatter with tags
3. Run `npm run dev` to preview
4. Commit and push to deploy automatically

When modifying theme:
- Edit `Docs/.vitepress/theme/style.scss` for CSS overrides
- Edit `Docs/.vitepress/blog-theme.ts` for theme configuration
- Custom components can be added by extending the theme in `Docs/.vitepress/theme/index.ts`
