# web

Main Aglabs website — [aglabs.id](https://www.aglabs.id/).

Static [Astro](https://astro.build/) site with React components (hero, about, projects sections) styled with Tailwind CSS v4 via `@repo/ui`. Project entries live in `src/content/projects/` as JSON, loaded through a content collection defined in `src/content.config.ts`.

## Development

```bash
pnpm dev       # Dev server on http://localhost:4321
pnpm build     # `astro check` + build to dist/
pnpm preview   # Preview the production build
```

Run from the monorepo root with `pnpm --filter web <script>`.
