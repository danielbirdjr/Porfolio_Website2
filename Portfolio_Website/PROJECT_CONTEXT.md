# Daniel Bird — Personal Site: Project Context & Handoff

> **Purpose of this file:** drop-in context for a fresh Claude Code / terminal
> session. Paste or point the new session at this file so it understands the
> project, the design rules that govern it, the current state, and what's left.
> Last updated: 2026-06-03.

---

## TL;DR for a new session

- This is **Daniel Bird's personal website** — engineer + Georgia Tech M.S. (AI/ML) student + online fitness coach.
- **Stack:** Next.js 15 (App Router) + TypeScript + Tailwind CSS v3 + shadcn-style UI + Framer Motion + Lucide + MDX.
- **Repo root:** `/Users/danielbird/Porfolio_Website2` — but the **app lives in the `Portfolio_Website/` subdirectory** (this is where you run `npm` commands). The git repo root is the PARENT of the app dir. ⚠️ Important nuance.
- **Current best version** is on the **`scholar-notebook`** branch (HEAD). It is a warm "scholar's paper" light theme **with a dark-mode toggle** that restores an espresso+gold register.
- **Not production yet.** `main` still holds the OLD pre-redesign site, which is what `danielbird.org` currently serves via Vercel. The redesign branches are not merged.
- **A design-principles guide GOVERNS all visual decisions** (restraint / "less is more"). Key rules summarized below — follow them. Don't rebuild/reskin without cause; prefer subtraction.

---

## How to run / verify

```bash
cd /Users/danielbird/Porfolio_Website2/Portfolio_Website
npm install            # if node_modules missing
npm run dev            # http://localhost:3000
npm run build          # production build (also type-checks + lints)
```

⚠️ **Gotcha:** Do **not** run `npm run build` while `next dev` is running — the build clobbers the shared `.next` dir and the dev server starts 404-ing JS chunks (symptom: page renders but Framer-Motion content stays at `opacity:0`, i.e. invisible). Fix: stop dev, `rm -rf .next`, rebuild, then restart dev fresh.

Screenshots/QA were done with headless Chrome via `puppeteer-core` (installed with `--no-save`, so it's in `node_modules` but not `package.json`). Chrome path: `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`. Headless `--screenshot` does not scroll, so use puppeteer to scroll (Framer reveals need to enter viewport) — write a temp `_*.mjs` script *inside the project dir* (ESM needs to resolve `puppeteer-core` from there) and delete it after.

---

## Repository, branches & deployment

- **Remote:** `github.com/danielbirdjr/Porfolio_Website2`
- **Domain:** `danielbird.org` (CNAME file at repo root). Hosted on **Vercel**, which builds from the `Portfolio_Website/` subdir. Production tracks `main`.
- **Branches:**
  - `main` — OLD original site (Vite + plain-JS React, Brittany-Chiang-style). Currently in production. NOT yet updated.
  - `redesign` — first redesign: Next.js 15, **dark** warm-espresso + **gold** theme, Bebas Neue condensed display headings, graph-paper background, a handwritten "start here" annotation. (Inspired by bryanlow.co.)
  - `scholar-notebook` — **CURRENT / BEST.** Built on `redesign`, then: (1) a design-principles "subtraction" pass, (2) the **scholar's-notebook** light "paper" aesthetic, (3) a **dark-mode toggle**. This is the one to keep iterating on.
- **Commit only when asked.** The user runs a branch-per-iteration workflow and is push-oriented; confirm the target branch before pushing.

### scholar-notebook commit history (most recent first)
- `e8fa554` Add dark-mode toggle (paper light ↔ espresso/gold dark)
- `a626fad` Apply "scholar's notebook" aesthetic refinement (restyle + respace)
- `7d7b6ff` Refine redesign per design-principles guide (subtraction pass)
- `e9b030a` Redesign: migrate to Next.js 15 + warm editorial graph-paper theme

---

## Design evolution (so you understand the "why")

1. **v1 (redesign branch):** Dark, editorial, bryanlow.co-inspired. Warm espresso bg, metallic gold accent, **Bebas Neue** all-caps condensed headlines + **Fraunces** serif-italic accent words + **Inter** body + **Caveat** handwriting. Graph-paper background, ghost "DB" wordmark, hero glow. The user liked this a lot.
2. **Principles pass:** A "Portfolio Design Principles Guide" was introduced (governs everything; philosophy = *less is more*). Applied as **refinement, not rebuild**: enforced a **3-typeface cap** (retired Caveat), scrubbed banned filler words, capped motion at ≤400ms on one ease-out curve, raised tap targets to ≥44px, added a skip link, fixed 320px overflow.
3. **v_current (scholar-notebook):** A "Scholar's Notebook" brief — quieter, more spacious, da Vinci/Einstein notebook tone. Flipped to a **warm paper light theme** (sepia ink on linen), faint CSS graph grid, **retired Bebas** (Fraunces now does Display + Heading), **re-introduced Caveat** as the single decorative face (handwritten annotations in exactly 3 spots), increased section spacing, removed clutter (glows, ghost text, card shadows, in-card grid fills). Then added a **dark-mode toggle** that swaps back to the espresso+gold palette — "best of both."

---

## GOVERNING design rules (the Principles Guide — follow these)

Philosophy: **restraint is the default; subtraction is the first instinct; every element must earn its place.** Before adding anything, ask: does an existing token/component already serve this? Does it reinforce (not compete with) the direction? Could it be removed without hurting hierarchy/contrast/legibility? If yes to that last one, don't add it.

- **Typography — max 3 families, 4 roles** (Display, Heading, Body, Mono). A decorative/script face counts toward the 3. **Currently: Fraunces (Display+Heading), Inter (Body), Caveat (decorative accent), Mono = system stack.** To add any face you must retire one. Weight range ≤ 3 stops — **only 400 / 500 / 600 are used** (no 700+). Don't combine italic + bold in one run.
- **Color — named role tokens only, no raw hex in components.** ≤ 5 hues (neutrals count as one). Current palette = warm neutrals + one quiet accent. Body/label text ≥ 4.5:1 contrast; large text & UI affordances ≥ 3:1 — **test with the graph grid present.** Hover/active = consistent tonal shift, not per-component colors. Dark/light = token role swaps (already implemented).
- **Spacing — 4px base; multiplier scale** (4/8/12/16/24/32/48/64/96). Whitespace is the divider — no decorative rules/dividers. Components don't own external margins (parent controls gaps via `gap`).
- **Motion — justified only** (orientation/feedback/attention). UI feedback ≤ 250ms, page transitions ≤ 400ms. **One ease-out curve site-wide: `cubic-bezier(0, 0, 0.2, 1)`.** Animate only `transform`/`opacity`. **Always respect `prefers-reduced-motion`.**
- **Imagery** — documentary or atmospheric only; consistent aspect ratios per category (project thumbnails 16:10 here); SVG icons, WebP/AVIF photos; descriptive `alt`; no sepia filters on content photos (texture lives in the background, not the content).
- **Responsive** — mobile-first; few breakpoints (Tailwind sm/md/lg); **no root horizontal scroll ever** (test 320/375/768/1024/1440); tap targets ≥ 44×44.
- **Accessibility** — WCAG AA floor (AAA where palette allows); visible high-contrast focus rings; semantic HTML + landmarks; color never the sole signal; accessible names describe action/destination; ARIA only as last resort.
- **Copy & tone** — first person, direct; sentences ~12–18 words; **banned filler** (remove on sight): *passionate about, leveraging, solutions, innovative, impactful, cutting-edge, results-driven, synergy, robust, seamlessly, delightful, world-class*. Headings state a fact/question and stand alone. CTAs name action + object ("View my work", not "Learn more"). Em dash ≤ 1 per paragraph. Tech lists = names only.

---

## Design tokens (CSS custom properties)

Defined in `app/globals.css`. `:root` = LIGHT (paper, default). `.dark` = dark (espresso/gold). Tailwind maps semantic classes to these (`bg-background`, `text-foreground`, `text-primary` = accent, `text-muted-foreground`, `bg-card`, `border-border`, `bg-accent` = hover surface, `ring`). Values are HSL triplets.

### Light (`:root`) — "paper"
| Token | HSL | ~Hex | Role |
|---|---|---|---|
| `--background` | `42 33% 90%` | `#EEE9DD` | warm paper surface |
| `--foreground` | `30 26% 14%` | `#2D241A` | sepia ink (body/headings) |
| `--card` | `40 40% 95%` | `#F7F2E6` | clean sheet (cards) |
| `--muted-foreground` | `32 18% 32%` | `#605343` | secondary text (6.2:1) |
| `--primary` | `35 50% 33%` | `#7E5B2A` | quiet burnt-amber accent (5.0:1) |
| `--border` | `38 22% 78%` | `#D6CDBA` | hairline borders |

### Dark (`.dark`) — "espresso + gold"
| Token | HSL | ~Hex | Role |
|---|---|---|---|
| `--background` | `30 16% 5%` | `#0F0D0B` | warm near-black |
| `--foreground` | `36 33% 90%` | warm cream | body/headings |
| `--card` | `30 14% 7%` | — | cards |
| `--muted-foreground` | `36 12% 62%` | — | secondary text |
| `--primary` | `41 56% 60%` | gold | accent |
| `--border` | `34 14% 16%` | — | hairline borders |

**Graph-paper grid:** generated in `body{}` with `linear-gradient`s using `hsl(var(--foreground)/0.045)` fine (24px cells) + `/0.06` major (120px = every 5th line). Because it uses `--foreground`, it auto-adapts: warm-ink lines on paper, cream lines on espresso. The grid lives on the page background only; cards sit on top (`bg-card`) so the grid reads as absent inside them.

---

## Typography & spacing specifics

- **Fonts** loaded via `next/font/google` in `app/layout.tsx`: `Fraunces` (`--font-fraunces`, serif, has optical sizing), `Inter` (`--font-inter`, body), `Caveat` (`--font-caveat`, handwriting). Tailwind families: `font-serif`, `font-sans`, `font-hand`.
- **`.display-heading`** (in globals) = Fraunces, sentence case, `leading-[1.06] tracking-[-0.015em]`. Hero h1 uses `clamp(2.5rem,4vw+1.5rem,4.5rem)`.
- **`.eyebrow`** = small uppercase letterspaced accent label (used in section headings via `components/section-heading.tsx`).
- **`.annotation`** = Caveat handwriting, accent color. **Used in exactly 3 places** (cap is ≤4): hero ("open to interesting problems"), about ("the short version of a longer story"), notes-preview ("straight from the notebook"). Keep it ≤4 and never on body/headings/nav/CTAs.
- **Section vertical padding:** `py-28 sm:py-40 lg:py-48`. **Card inner padding:** `p-8` (skills cells `p-8 sm:p-10`). Content container: `.container` (Tailwind container, centered, 24px padding; max ~1200). Prose width capped (`max-w-prose` ≈ 65ch).

---

## File / component map

```
Portfolio_Website/
  app/
    layout.tsx              # fonts, metadata, <head> no-flash theme script, skip link, Nav/main/Footer
    page.tsx                # home: Hero, About, Projects, Skills, NotesPreview, Contact
    globals.css             # tokens (:root + .dark), grid, .display-heading/.eyebrow/.annotation/.skip-link, prose-note (+ .dark prose)
    not-found.tsx           # 404
    notes/page.tsx          # /notes index (filterable)
    notes/[slug]/page.tsx   # MDX article page (generateStaticParams)
  components/
    nav.tsx                 # sticky nav, mobile menu, hosts <ThemeToggle/>
    footer.tsx              # social links
    theme-toggle.tsx        # dark-mode button (CSS-driven icon, localStorage)
    icons.tsx               # GitHub/LinkedIn/X brand SVGs
    section-heading.tsx     # <SectionHeading> (eyebrow + index + h2) and <Eyebrow>
    ui/{button,card,badge}.tsx   # shadcn-style primitives
    motion/reveal.tsx       # Reveal / RevealGroup / RevealItem (Framer, 400ms, reduced-motion)
    sections/{hero,about,projects,project-card,skills,notes-preview,contact}.tsx
    notes/{note-card,notes-grid,mdx-components}.tsx
  content/notes/*.mdx       # the notes/guides content (3 seeded)
  lib/
    data.ts                 # SITE CONTENT: siteConfig, socials, navLinks, stats, projects, skillGroups
    notes.ts                # server-side MDX reading (fs + gray-matter)
    notes-shared.ts         # client-safe Note types + formatDate (keeps fs out of client bundle)
    utils.ts                # cn()
  tailwind.config.ts, next.config.mjs, postcss.config.mjs, tsconfig.json, components.json
```

⚠️ **Client/server split:** `lib/notes.ts` imports `fs` (server only). Anything reachable from a client component (`note-card`, `notes-grid`) must import types/`formatDate` from **`lib/notes-shared.ts`**, never `lib/notes.ts`, or the build fails with "Can't resolve 'fs'".

---

## Notes / Guides (MDX) system

- Content = MDX files in `content/notes/`. Frontmatter: `title`, `date` (YYYY-MM-DD, controls sort), `category` (Fitness | Engineering | Notes | anything), `description`, `slug`, `published` (true/false).
- **To add a note:** drop a new `.mdx` file in `content/notes/` with that frontmatter. It auto-appears on `/notes` (filterable grid), the home preview, gets a page at `/notes/<slug>`, and new categories become filter pills. `published: false` hides drafts.
- Rendering: `next-mdx-remote/rsc` `<MDXRemote>` + `gray-matter`. Prose styled via Tailwind Typography `prose prose-note` (token-driven, has a `.dark` variant). 3 seeded notes: beginner-lifting-program (Fitness), shipping-ai-features-that-dont-break (Engineering), working-full-time-while-getting-a-masters (Notes).

---

## Editing content

Almost all site copy/data is centralized in **`lib/data.ts`** — bio strings live in `components/sections/about.tsx` and `hero.tsx`. Projects, skills, stats, nav links, social URLs, email, résumé link are all in `data.ts`. Search for `TODO(daniel)` for the known gaps.

---

## Dark-mode toggle — how it works

- `tailwind.config.ts` has `darkMode: "class"`. `.dark` on `<html>` swaps the token values → whole site adapts (no per-component dark styles except the toggle icon).
- `components/theme-toggle.tsx`: button toggles `document.documentElement.classList` and writes `localStorage.theme`. Icon is **CSS-driven** (`<Sun className="hidden dark:block">` / `<Moon className="dark:hidden">`) so there's no hydration mismatch or icon flicker.
- **No-flash:** an inline script in `app/layout.tsx` `<head>` reads `localStorage.theme` and applies `.dark` before paint. `<html suppressHydrationWarning>` is set because that script mutates the class.
- **Default = light** when nothing is saved (does NOT follow OS preference — change the head script if you want `matchMedia('(prefers-color-scheme: dark)')` fallback).

---

## Open placeholders / TODO before production (`TODO(daniel)` in `lib/data.ts`)

- [ ] **Public email** — currently `danielbirdwork@gmail.com` (user's personal is `danielbirdpersonal@gmail.com`; confirm which to show).
- [ ] **X/Twitter handle** — assumed `x.com/danielbirdjr`; confirm.
- [ ] **TicketChain project** — no live/repo links yet (GitHub points at profile); add real URLs + a real 16:10 screenshot (currently a flat placeholder).
- [ ] **ProgressAI repo link** — points at profile; set the real repo if public.
- [ ] **AI/ML skills list** — placeholder set (PyTorch, scikit-learn, OpenAI API, Pandas, NumPy); tune to actual toolset.
- [ ] **Favicon** — missing (one harmless console 404). Consider a "DB" monogram icon.
- [ ] **Portrait photo** — the scholar's-notebook brief wanted one 4:5 portrait (hero or about). Not added (no asset). If desired: WebP+JPEG, ≤200KB, warm tones, descriptive alt, radial edge-blend.
- [ ] **Ship to production** — when approved, merge `scholar-notebook` → `main` (Vercel deploys main to danielbird.org). Currently main = old site.

---

## Suggested ways to start the next session

- "Read `Portfolio_Website/PROJECT_CONTEXT.md`, then continue on the `scholar-notebook` branch."
- Good next tasks: fill the placeholders above; add a favicon; (optionally) a real portrait; final a11y/contrast/perf pass; then merge to `main` to deploy.
- Reminder for the agent: a **design-principles guide governs** — refine by subtraction, respect the 3-family cap, the token system, ≤400ms one-curve motion, ≥44px targets, no horizontal overflow, banned-filler list, and `prefers-reduced-motion`.

## Quick verification commands

```bash
cd /Users/danielbird/Porfolio_Website2/Portfolio_Website
npm run build                       # must compile clean (type-check + lint)
# overflow + contrast checks: scroll with puppeteer-core at 320/375/768/1024/1440
grep -rniE "passionate|leveraging|innovative|impactful|robust|seamless" app components content  # banned filler
```
