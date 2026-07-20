# ToolFreeKit

A production-ready foundation for a fast, SEO-focused directory of free online tools.

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- Static export for Cloudflare Pages
- ESLint and Prettier

## Commands

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

## Adding Tools

1. Add a tool definition in `src/data/tools.ts`.
2. Add an isolated tool page under `src/app/tools/[slug]/page.tsx` or migrate to generated pages when tool count grows.
3. Reuse `ToolLayout` for consistent SEO, layout, FAQs, ads, and related tools.

## Deployment

This project is configured as a static Next.js export for Cloudflare Pages.
It does not need OpenNext or `@cloudflare/next-on-pages` unless we later add
server-side rendering or Pages Functions.

Cloudflare Pages settings:

- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npx next build`
- Output directory: `out`

If the Pages log shows `npx opennextjs-cloudflare build`, the project is
attached to the wrong preset. Switch it to `Next.js (Static HTML Export)`.

Cloudflare Pages build command:

```bash
npm run build
```

Output directory:

```bash
out
```
