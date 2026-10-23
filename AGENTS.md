# Crunch Foods Agent Guide

Crunch Foods is a Next.js 15 App Router wholesale marketing site with React 18, Tailwind CSS, shadcn/Radix UI, and Vitest. See [README.md](README.md) for setup details and the full command list.

## Working Agreements

- Keep route files in `app/` thin. Marketing routes generally provide metadata and render the matching view in `src/views/`.
- Put page composition and section order in `src/views/`; put reusable marketing sections and site chrome in `src/components/site/`.
- Reuse primitives in `src/components/ui/` before creating new controls. Follow existing Tailwind classes and Framer Motion patterns.
- Use the `@/` TypeScript path alias for imports. Assets live under `src/assets/` and `public/images/`.
- Preserve the existing route and view naming convention: `app/<route>/page.tsx` paired with `src/views/<Name>Page.tsx`.

## Client and Server Boundaries

- App Router files are server components by default. Add `"use client"` only when a component needs browser state, event handlers, Framer Motion, or a client-only library.
- Many existing views are client components and consequently pull their imported sections into the client bundle. Avoid widening this boundary for static content when adding new work.
- Keep secrets server-side. The chatbot uses `/api/chat`.

## Data and API Conventions

- `OPENAI_API_KEY` is required by the chat route and `OPENAI_MODEL` is optional.
- The contact and sample forms use external Grillados embeds (iframes).
- Do not expose `OPENAI_API_KEY` to client components.

## Validation

Run the narrowest relevant check, then the broader checks when practical:

```bash
npm run lint
npm test
npm run build
```


## Known Repository Details

- The source directory is `src/views/`, not `src/pages/`; keep new documentation and imports aligned with the actual tree.
- Test coverage is minimal, so add focused Vitest coverage for new behavior rather than relying on the placeholder test.
- The project intentionally has permissive TypeScript and ESLint settings. Avoid using that as a reason to skip validation.
- Check site/contact values when editing chatbot copy; the chatbot has previously contained domain details that differed from the main site.