# Crunch Foods

Wholesale marketing site — Next.js (App Router) + Postgres via Prisma.

## Stack

- **Next.js 15** (App Router) + React 18 + Tailwind + shadcn/ui
- **Postgres** via **Prisma** — `leads` table backs the contact/sample forms
- **OpenAI** — powers the on-site "Crispy" product assistant (`/api/chat`)

## Getting started

1. Copy `.env.example` to `.env` and fill in:
   - `DATABASE_URL` — a Postgres connection string (e.g. from Neon, Railway, RDS)
   - `OPENAI_API_KEY` — used by the chatbot
   - `OPENAI_MODEL` — optional, defaults to `gpt-4o-mini`

2. Install dependencies and set up the database:

   ```bash
   npm install
   npx prisma migrate dev --name init
   ```

3. Run the dev server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` / `npm run start` — production build and serve
- `npm run lint` — ESLint
- `npm test` / `npm run test:watch` — Vitest

## Structure

- `app/` — routes, layouts, and API routes (`app/api/leads`, `app/api/chat`)
- `src/pages/` — page-level content components rendered by each route
- `src/components/site/` — marketing sections; `src/components/ui/` — shadcn/ui primitives
- `prisma/schema.prisma` — the `Lead` model backing form submissions
