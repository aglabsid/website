# bot

Landing page for the Aglabs bot — [bot.aglabs.id](https://bot.aglabs.id/).

Static [Astro](https://astro.build/) site styled with Tailwind CSS v4 via `@repo/ui`. The `/chat` route redirects to [t.me/aglabs_bot](https://t.me/aglabs_bot) (configured in `astro.config.mjs`).

## Development

```bash
pnpm dev       # Dev server on http://localhost:4322
pnpm build     # `astro check` + build to dist/
pnpm preview   # Preview the production build
```

Run from the monorepo root with `pnpm --filter bot <script>`.
