# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
pnpm dev           # Run all apps (web on :3000, bot on :3001)

# Build & validation
pnpm build         # Build all apps and packages
pnpm lint          # ESLint across monorepo
pnpm check-types   # Type-check via `astro check`
pnpm format        # Prettier formatting

# Run a single app
pnpm --filter web dev
pnpm --filter bot dev
```

## Architecture

**Turborepo monorepo** with pnpm workspaces. Build pipeline: packages build before apps (`"dependsOn": ["^build"]`). Astro outputs to `dist/`.

**Apps:**

- `apps/web` — Main Aglabs website ([aglabs.id](https://www.aglabs.id/)), static Astro site with email button
- `apps/bot` — Bot landing page ([bot.aglabs.id](https://bot.aglabs.id/)), `/chat` redirects to `https://t.me/aglabs_bot` via `astro.config.mjs` `redirects`

Both apps are **fully static** (Astro default output). Deployed to Netlify via `netlify.toml`.

**Packages:**

- `packages/ui` — Shared CSS/utils (`@repo/ui`). Exports `globals.css` (Tailwind v4 design tokens) and `cn` util. No component exports — components live per-app in `src/components/`.
- `packages/eslint-config` — Shared ESLint configs; apps use the `base` export
- `packages/typescript-config` — Shared tsconfig templates

## Styling

Uses **Tailwind CSS v4** processed via `@tailwindcss/vite` Vite plugin in each app's `astro.config.mjs`. Import `@repo/ui/globals.css` in each layout.

Design system is brutalist/90s-inspired:

- **OKLCH color space** for all color tokens (`--main`, `--background`, `--foreground`, `--border`)
- `--shadow: 4px 4px 0px 0px var(--border)` — offset hard shadow used throughout
- `radius-base: 0px` — no border radius
- Font: **Gabarito** (loaded via Google Fonts link in each Layout)

Button-style elements use these Tailwind utility classes (defined via `@theme` in `globals.css`):

- `shadow-shadow`, `border-border`, `bg-main`, `text-main-foreground`
- `hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none`

## Code Style

- No semicolons, single quotes, trailing commas (Prettier config)
- Analytics (Umami) loaded only when `import.meta.env.PROD` is true
- Icons are inline SVGs (no icon library dependency)
- Interactive elements that are just links use `<a>` tags, not JS event handlers
