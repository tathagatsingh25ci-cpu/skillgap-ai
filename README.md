# SkillGap AI

SkillGap AI is a premium startup-grade SaaS application for career discovery and guided skill development. Built with Next.js 15, TypeScript, Tailwind CSS, ShadCN UI, Prisma, Clerk, Stripe, OpenAI, and PostgreSQL.

## Features

- AI-powered resume analysis
- GitHub profile and skill gap analysis
- Personalized 30/90/180 day career roadmaps
- Project recommendation engine
- Interview preparation content
- Career readiness dashboard and simulator
- Admin analytics panel
- Clerk authentication and Stripe checkout support
- SEO-ready sitemap and robots file

## Local setup

1. Install dependencies

```bash
npm install
```

2. Create environment file

```bash
cp .env.example .env
```

3. Configure `.env` values

- `DATABASE_URL` for PostgreSQL
- `OPENAI_API_KEY`
- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`

4. Run Prisma migrations

```bash
npx prisma generate
npx prisma migrate dev --name init
node prisma/seed/seed.js
```

5. Run the development server

```bash
npm run dev
```

## Deployment

This project is ready for deployment on Vercel.

- Connect the repository to Vercel.
- Set environment variables in the Vercel dashboard.
- Deploy the app.

## Folder structure

- `app/` — Next.js App Router pages and API routes
- `components/` — Reusable UI components and dashboard widgets
- `lib/` — API helpers for Clerk, Stripe, OpenAI, and Prisma
- `prisma/` — Prisma schema and seed data
- `public/` — Static assets and SEO files

## Notes

- The app uses dark mode by default and features a premium glassmorphism design.
- Connect Clerk and Stripe in production for authentication and payments.
- OpenAI integration is available via the `app/api/openai/route.ts` endpoint.
