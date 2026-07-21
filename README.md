# ToolFreeKit

A production-ready foundation for a fast, SEO-focused directory of free online tools.

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- Cloudflare OpenNext adapter
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

This project uses the Cloudflare OpenNext adapter for Next.js 15. The
`wrangler.jsonc` and `open-next.config.ts` files are part of the production
deployment configuration.

Cloudflare Workers Build command:

```bash
npm run build
```

Cloudflare deploy command:

```bash
npm run deploy
```

Cloudflare output:

```bash
.open-next/assets
```

On Windows, `npm run build` runs `next build` for local verification because
OpenNext warns that Windows support is unreliable. In Cloudflare's Linux build
environment, `npm run deploy` runs `opennextjs-cloudflare build &&
opennextjs-cloudflare deploy`.

If the Workers Builds log shows `Executing user deploy command: npx wrangler deploy`,
change the deploy command to `npm run deploy` so the compiled OpenNext config
is created before deployment.
