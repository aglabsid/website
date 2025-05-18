# Aglabs website monorepo

This is a monorepo for the Aglabs website, built with [Turborepo](https://turborepo.org/).

## What's inside?

This Turborepo includes the following apps and packages:

### Apps and Packages

- `web`: main website application [aglabs](https://www.aglabs.id/)
- `bot`: landing page for the [bot](https://bot.aglabs.id/)
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd website
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd website
pnpm dev
```
