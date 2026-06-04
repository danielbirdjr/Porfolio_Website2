# danielbird.org

Personal site for Daniel Bird — engineer, Georgia Tech M.S. student, and fitness coach.
Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**,
**Framer Motion**, and **MDX**.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
app/                     App Router pages
  page.tsx               Home (hero, about, projects, skills, notes, contact)
  notes/page.tsx         Notes index (filterable)
  notes/[slug]/page.tsx  Individual note (MDX article)
components/              UI + section components (one per file)
  ui/                    shadcn/ui primitives (button, card, badge)
  sections/              Home page sections
  notes/                 Notes cards, grid, MDX renderers
content/notes/           ← your MDX notes live here
lib/data.ts              ← edit site copy, projects, skills, links here
lib/notes.ts             Server-side MDX loading
```

## Updating content

Most copy — bio, projects, skills, stats, social links, email — lives in
[`lib/data.ts`](./lib/data.ts). Edit that file; no component changes needed.

## Adding a note / guide

1. Drop a new `.mdx` file into `content/notes/`.
2. Give it frontmatter:

   ```mdx
   ---
   title: "Your Title"
   date: "2026-06-10"          # YYYY-MM-DD, controls sort order
   category: "Engineering"      # Fitness | Engineering | Notes | (anything)
   description: "One-line summary shown on the card."
   slug: "your-title"           # the URL: /notes/your-title
   published: true              # set false to hide a draft
   ---

   Write the body in Markdown / MDX here.
   ```

3. Save. The note appears automatically on `/notes` and the home page,
   gets its own page at `/notes/<slug>`, and is added to the category filter.
   New categories show up as filter pills on their own.

Set `published: false` to keep a draft out of the site entirely.

## Deployment

Deployed on Vercel from this directory; `CNAME` (repo root) maps the
`danielbird.org` domain.
