# Screentime Offtrail

React and Vite prototype for the Screentime Offtrail experience.

## Prerequisites

- Node.js
- pnpm

This repo uses `pnpm-lock.yaml`, so use pnpm for dependency installs.

## Install Dependencies

```sh
pnpm install
```

For a clean install that exactly matches `pnpm-lock.yaml`, use:

```sh
pnpm install --frozen-lockfile
```

## Run The App

Start the Vite development server:

```sh
pnpm dev
```

Vite will print the local URL in the terminal. By default, it is usually:

```txt
http://localhost:5173/
```

## Run Storybook

Start the Storybook development server:

```sh
pnpm storybook
```

Storybook runs on:

```txt
http://localhost:6006/
```

Stories are loaded from `src/**/*.mdx` and `src/**/*.stories.@(js|jsx|mjs|ts|tsx)`.

## Useful Commands

```sh
pnpm build
```

Builds the Vite app into `dist/`.

```sh
pnpm preview
```

Serves the production build locally after `pnpm build`.

```sh
pnpm build-storybook
```

Builds the static Storybook site into `storybook-static/`.

```sh
pnpm lint
```

Runs ESLint across the repo.
