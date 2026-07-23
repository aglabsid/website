# Aglabs website monorepo

Monorepo for the Aglabs websites, built with [Turborepo](https://turborepo.com/) and pnpm workspaces.

## What's inside?

### Apps

- `apps/web`: main website — [aglabs.id](https://www.aglabs.id/), static [Astro](https://astro.build/) site with React components
- `apps/bot`: landing page for the Aglabs bot — [bot.aglabs.id](https://bot.aglabs.id/), static Astro site (`/chat` redirects to [t.me/aglabs_bot](https://t.me/aglabs_bot))

### Packages

- `@repo/ui`: shared styles and utilities — Tailwind CSS v4 design tokens (`globals.css`) and the `cn` helper
- `@repo/eslint-config`: shared ESLint configurations
- `@repo/typescript-config`: shared `tsconfig.json` templates

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## Commands

```bash
pnpm dev           # Run all apps (web on :4321, bot on :4322)
pnpm build         # Build all apps and packages
pnpm lint          # ESLint across the monorepo
pnpm check-types   # Type-check via `astro check`
pnpm format        # Prettier formatting

# Run a single app
pnpm --filter web dev
pnpm --filter bot dev
```

## Deployment

Both apps build to static output and deploy to [Netlify](https://www.netlify.com/) via `netlify.toml`.
