# ToolWeb

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

Cloudflare Pages build command:

```bash
npm run build
```

Output directory:

```bash
out
```
