# The Alpha Chapter — Website

Website for the **Alpha Chapter of Alpha Phi Alpha Fraternity, Inc.** at Cornell University.

> *First of All, Servants of All, We Shall Transcend All.*

## Stack

- [Astro](https://astro.build) — static site framework with islands of interactivity
- [Tailwind CSS](https://tailwindcss.com) — utility-first styling
- [Sanity](https://www.sanity.io) — headless CMS for brothers, events, posts, jewels
- [Vercel](https://vercel.com) — hosting + CI

## Local development

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables and fill in your Sanity project info
cp .env.example .env

# 3. Run the dev server
npm run dev
# → http://localhost:4321
```

## Sanity (CMS) setup

```bash
# Create a Sanity project (one-time)
npx sanity@latest init --bare
# Choose: create new project, "production" dataset, paste the projectId into .env

# Run the Sanity Studio locally (port 3333 by default)
cd sanity && npx sanity dev
```

When the studio is running, chapter members can sign in and add brothers, events, posts, and jewels through a friendly editor.

## Project structure

```
.
├── astro.config.mjs       # Astro config (Tailwind + sitemap)
├── tailwind.config.mjs    # Custom Alpha Phi Alpha palette
├── public/                # Static assets (logo, favicon)
├── src/
│   ├── layouts/Layout.astro   # Base page shell + SEO
│   ├── components/            # Nav, Footer, future shared components
│   ├── pages/                 # Each file = a route
│   ├── lib/sanity.ts          # Sanity client + image URL builder
│   └── styles/global.css      # Tailwind base + component classes
└── sanity/
    ├── sanity.config.ts       # Studio config
    └── schemas/               # Content types (brother, event, post, jewel)
```

## Pages roadmap

- [x] `/` — Home
- [ ] `/founding` — The Seven Jewels
- [ ] `/fraternity` — Aims, motto, colors, Sphinx, notable Alphas
- [ ] `/chapter` — Alpha Chapter history & lineage
- [ ] `/house-of-alpha` — The Leadership Institute
- [ ] `/brothers` — Current line + alumni
- [ ] `/events` — Upcoming + past events
- [ ] `/posts/[slug]` — Blog posts
- [ ] `/gallery` — Photo archive
- [ ] `/contact` — Email, IG, listserv signup

## Deploy

1. Push this repo to GitHub.
2. Import the repo into [Vercel](https://vercel.com/new).
3. Add the `PUBLIC_SANITY_*` environment variables in Vercel project settings.
4. Vercel auto-deploys on every push to `main`.

---

ΑΦΑ · 1906 · Cornell University
