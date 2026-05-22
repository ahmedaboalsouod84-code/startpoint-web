# Start Point — Project Specs

> Read this before doing anything. Update it before adding scope.

---

## 1. What this is

A premium marketing and portfolio website for **Start Point**, a Riyadh-based creative production and fabrication company. The site sells trust: people read it before sending a six-figure project brief. Every page exists to move a serious buyer (procurement lead, marketing director, government project manager, agency partner) one step closer to requesting a quote.

**Who uses it:**
- **Brand-side buyers** — marketing/brand teams at corporates, banks, FMCG, luxury, retail.
- **Government & enterprise procurement** — KSA ministries, Vision 2030 programs, event authorities.
- **Agency partners** — global experiential agencies sourcing a KSA execution partner.
- **Recruits** — designers, fabricators, project managers checking us out before applying.
- **Journalists & search engines** — for press, AEO answers, and local SEO.

---

## 2. Tech stack

- **Framework:** Next.js 15 (App Router) — required by CLAUDE.md, also right for SEO/SSR.
- **Language:** TypeScript (strict).
- **Styling:** Tailwind CSS v4 + CSS variables for the brand token system.
- **Animation:** Framer Motion (hero motion, scroll reveals, marquee).
- **Fonts:** Local hosting of one editorial serif (display) + one neutral sans (body) via `next/font/local`. Picks below in §6.
- **Images:** `next/image`; assets stored in `/public/media/...`.
- **Data:** Static TypeScript content files in `/content/*` (services, industries, projects, insights, capabilities, locations). No DB for v1 — see §5.
- **Forms:** Native `<form>` + a single API route per form, mailing via **Resend** (simple, free tier, no DB). See §5.
- **Internationalization:** Scaffold an `/ar` mirror with RTL ready, but ship **English only in v1**. Arabic copy populated later.
- **Deployment:** Vercel.
- **Analytics:** Vercel Analytics (built-in) + Vercel Speed Insights. Nothing else in v1.

**Not in v1:** Supabase, auth, CMS, payments, search index. These can be added later if content velocity demands it — but for an agency site with a handful of editors and infrequent updates, static MDX/TS beats a CMS on speed, cost, and SEO control.

---

## 3. Design direction

**Mood:** Premium dark luxury, cinematic, industrial-modern, crafted. Inspired by Depa, NUSSLI, Pico — not a generic agency site, a fabrication studio's site.

**Palette** (grounded in the actual joinery imagery in `/media`):

| Token | Hex | Use |
|---|---|---|
| `bg/base` | `#0B0B0C` | Page background — near-black, not pure |
| `bg/raised` | `#141416` | Cards, raised surfaces |
| `bg/elevated` | `#1C1C1F` | Hover state, modal |
| `line/subtle` | `#26262A` | Hairline dividers |
| `line/strong` | `#3A3A3F` | Stronger dividers, borders |
| `ink/primary` | `#F4F1EC` | Body text — warm off-white, not pure |
| `ink/muted` | `#A8A39B` | Secondary text, captions |
| `ink/quiet` | `#6B665E` | Tertiary text, labels |
| `accent/copper` | `#C2724A` | Primary brand accent (warm copper, echoes the walnut + brass in the work) |
| `accent/copper-soft` | `#E8B894` | Hover, highlights |
| `accent/sand` | `#D9CBB3` | Secondary accent for tags, chips |

The copper accent comes directly from the studio's actual material palette (walnut joinery + brass-trim lighting visible in their photos). It avoids the generic "gold-on-black" trap.

**Typography:**
- **Display:** A high-contrast editorial serif (think Söhne Mono Mono or PP Editorial New / Fraunces as free fallback). Loaded with `next/font`.
- **Body:** A neutral, technical-feeling sans (Inter or Geist). 16px base, generous line-height.
- **Tracking:** Loose on display (display sizes -0.02em), neutral on body. Uppercase labels with +0.08em tracking.
- **Numerals:** Tabular for stats/credits.

**Layout primitives:**
- 12-col grid, 80px gutters on desktop, 24px on mobile.
- Generous vertical rhythm — sections breathe (min 96px padding on desktop).
- Hairline borders (`1px` `line/subtle`) instead of cards-on-cards.
- Subtle grain texture overlay (≤3% opacity) to avoid flat dark backgrounds.

**Motion principles:**
- Hero: slow ken-burns on a single image, paired with staggered word reveals (350ms each).
- Scroll: text fades up 16px over 600ms, with `prefers-reduced-motion` respected.
- Marquee: client logos at 40s/loop, pause on hover.
- Page transitions: no fancy transitions in v1 — page renders should be instant.

**Imagery rules:**
- Use the joinery/fit-out photos from `/media` as the primary visual material since they're the only real assets available.
- Treat the construction-in-progress corridor shot as a hero candidate — it screams "we actually build things."
- Until real photos exist for booths, packaging, activations, use the joinery work as stand-in placeholders and clearly label them in `/content/*` as `imagePlaceholder: true` so they're easy to swap.

---

## 4. Pages and routes

Top-level routes are scaffolded per the user's sitemap. Detail breakdown:

```
/                                          Homepage
/services                                  Services index
/services/[slug]                           Service detail × 10
/work                                      Work index (filterable)
/work/[slug]                               Case study (template)
/work/by-service/[service]                 Filter view
/work/by-industry/[industry]               Filter view
/work/by-year/[year]                       Filter view
/industries                                Industries index
/industries/[slug]                         Industry detail × 25
/capabilities                              Capabilities index
/capabilities/[slug]                       Capability detail × 8
/process                                   How we work
/about                                     Studio overview
/about/vision-mission
/about/leadership
/about/studio
/about/careers
/about/press
/clients                                   Client roster
/insights                                  Insights index
/insights/[slug]                           Article (MDX)
/insights/category/[slug]                  Category view
/insights/guides/[slug]                    Long-form guide (MDX)
/insights/comparisons/[slug]               Comparison guide (MDX)
/contact                                   Contact form
/quote                                     Quote brief form
/thank-you                                 Form confirmation
/locations                                 Locations index
/locations/[slug]                          Location pages × 8
/ar/*                                      Mirror — scaffolded, not built in v1
```

**v1 scope:** All routes resolve (no 404s), all `[slug]` routes generate from `/content/*` data. Some pages may show "Detailed content coming" placeholders if the brief requires the URL but copy doesn't exist yet — these will be clearly marked.

**Section composition** of each detail page matches the user's sitemap exactly (hero → what it is → approach → capabilities → materials → case studies → process → FAQs → quick answers → related → CTA).

---

## 5. Data model

All content is **static TS files** in `/content/`. Each is a typed array exported for use in routes.

```
/content
  /services.ts            10 services
  /industries.ts          25 industries
  /capabilities.ts        8 capabilities
  /projects.ts            ~8 case studies for v1
  /locations.ts           8 locations
  /clients.ts             ~30 logo entries
  /testimonials.ts
  /faqs.ts                shared FAQ pool, tagged by service/industry
/content/insights/*.mdx   Insights, guides, comparisons as MDX
```

Each `service`/`industry`/`project`/`insight` has full SEO metadata (title, description, OG image, schema type) co-located with the content.

**Why static, not Supabase:** an agency site updates content weekly at most; editors are likely 1-3 people who can edit MD files via a GitHub PR (or via a tool like Tina/Sanity later). Avoiding a DB keeps deploys fast, builds reproducible, and there's no RLS surface to misconfigure. If editorial volume grows past ~50 insights, revisit.

**Forms** (`/contact`, `/quote`):
- `POST /api/contact` and `POST /api/quote`
- Sends an email via **Resend** to `hello@startpoint.com.sa` (replace with real address)
- Stores nothing server-side in v1 — the email is the record
- Honeypot field + simple rate-limit via `headers().get('x-forwarded-for')` in-memory map
- Redirects to `/thank-you`

**Env vars** (`.env.local`):
- `RESEND_API_KEY` — required to actually send mail; dev can no-op if missing
- `CONTACT_TO_EMAIL` — destination address
- `NEXT_PUBLIC_SITE_URL` — for canonical URLs and OG tags

---

## 6. SEO / AEO

This is core to the brief, not an afterthought.

**Every page:**
- Unique `<title>` (~55 chars) and `description` (~155 chars) via Next `generateMetadata`.
- Semantic structure: one `<h1>`, then `<h2>`/`<h3>` properly nested.
- Open Graph + Twitter card.
- Canonical URL.
- Breadcrumbs (visible + JSON-LD).
- JSON-LD schema:
  - Site-wide: `Organization` (Start Point, Riyadh address, contact, sameAs social).
  - `/services/*`: `Service` schema.
  - `/work/*`: `CreativeWork` schema.
  - `/insights/*`: `Article` schema with author + datePublished.
  - `/insights/guides/*` and `/insights/comparisons/*`: `Article` + `FAQPage` where applicable.
  - `/locations/*`: `LocalBusiness` schema per location.
  - FAQ sections everywhere: `FAQPage` schema.
- `sitemap.xml` auto-generated from all content collections via Next's `sitemap.ts`.
- `robots.txt` with sitemap reference.

**Local SEO:**
- `/locations/riyadh` is the primary local landing page.
- City-specific copy (not just find-and-replace).
- `LocalBusiness` schema with `address`, `geo`, `areaServed`.

**AEO (AI answer engines):**
- Every insight has a 2-3 sentence TL;DR block right under the H1 — this is what gets quoted.
- Comparison and guide pages have explicit Q&A blocks (semantic `<dl><dt><dd>`) for citation.
- Service pages have a "Quick answers" section per the brief.

---

## 7. Reusable components (initial list)

Co-located in `/components/`. One per file.

```
/components/layout/Header.tsx         Sticky nav, mega-menu on services
/components/layout/Footer.tsx         Multi-column, address, sitemap, social
/components/layout/Section.tsx        Standard section wrapper (padding + max-w)
/components/layout/Breadcrumbs.tsx
/components/ui/Button.tsx             Primary, ghost, link variants
/components/ui/Tag.tsx
/components/ui/Eyebrow.tsx            Uppercase tracked label
/components/ui/Divider.tsx            Hairline with optional label
/components/marketing/Hero.tsx        Configurable hero (home, service, etc.)
/components/marketing/LogoMarquee.tsx
/components/marketing/CapabilityCard.tsx
/components/marketing/WorkCard.tsx
/components/marketing/IndustryCard.tsx
/components/marketing/ProcessSteps.tsx
/components/marketing/InsightCard.tsx
/components/marketing/StatBlock.tsx   For trust signals (years, projects, m²)
/components/marketing/FaqList.tsx     With FAQPage schema embedded
/components/marketing/CtaBlock.tsx
/components/marketing/RelatedGrid.tsx Used on service/industry/case study pages
/components/seo/JsonLd.tsx            Generic schema component
/components/motion/Reveal.tsx         Wraps children in scroll-reveal motion
```

---

## 8. File structure

```
/app
  /(marketing)/...                    Public marketing routes (default)
  /api
    /contact/route.ts
    /quote/route.ts
  layout.tsx                          Root layout: fonts, body classes, JsonLd Organization
  not-found.tsx
  sitemap.ts
  robots.ts
  globals.css                         Tailwind + CSS vars (brand tokens)
/components/...                       (see §7)
/content
  services.ts industries.ts capabilities.ts projects.ts locations.ts
  clients.ts testimonials.ts faqs.ts
  /insights/*.mdx
/lib
  /seo/buildMetadata.ts
  /seo/schema.ts                      Helpers to build JSON-LD
  /content/loaders.ts                 getServiceBySlug, listProjects, etc.
  /utils/cn.ts                        clsx + twMerge
/public
  /media/...                          Brand imagery (copied from E:/SEO-Preef/media/)
  /fonts/...                          Self-hosted display + body fonts
/types
  content.ts
.env.local                            Resend keys etc. (gitignored)
project_specs.md                      This file
CLAUDE.md
README.md                             How to run, deploy, edit content
```

---

## 9. What "done" looks like for v1

Acceptance criteria for the build to be called complete:

1. `npm run dev` starts cleanly with zero console errors or warnings.
2. `npm run build` succeeds, `npm run lint` passes.
3. All routes in §4 resolve to a real page with proper metadata (no 404s, no "Coming Soon" without explicit copy).
4. Homepage has all 10 sections from the brief, rendering with real (placeholder-marked) content.
5. At least one fully-built example of each detail page type:
   - 1 service detail (`/services/exhibition-booths-riyadh`)
   - 1 industry detail (`/industries/government-public-sector`)
   - 1 case study (`/work/[example-slug]`)
   - 1 insight article (MDX)
   - 1 location page (`/locations/riyadh`)
6. `/contact` and `/quote` forms validate client-side and POST to API routes; if `RESEND_API_KEY` is set they email; if not they log and still redirect to `/thank-you`.
7. SEO: every page has unique title/description; sitemap and robots resolve; `Organization` JSON-LD is on every page; service/insight pages have type-specific schema; at least one FAQ section emits `FAQPage` schema.
8. Lighthouse on `/` (mobile, throttled): Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO = 100.
9. The site looks premium on a real 13" laptop and on a real phone (not just in DevTools).
10. README documents how to add a new service, industry, project, and insight.

**Not in scope for v1** (call out so we don't drift):
- Arabic copy (mirror is scaffolded; copy is later).
- Admin/CMS interface.
- Live search.
- Auth / user accounts.
- Stripe / billing.
- Booking calendar.
- Real production photography for every category (we use the joinery imagery + clearly-marked placeholders).

---

## 10. Open decisions (need user input)

These three choices change the architecture, so the user is asked before scaffolding starts.

1. **Forms backend.** Resend (recommended — no DB, free tier, just email) vs. Supabase table vs. just `mailto:`.
2. **Animation library.** Framer Motion (per brief) is confirmed — using `motion/react` (the newer split package).
3. **Project count for v1.** How many real case studies do we build out (with real copy + imagery) vs. stub? Recommended: 4 fully-built case studies, 4 stubs visible in the index. Final list and which industries they represent — TBD with the user.

---

## 11. References (design quality bar)

- **Depa Group** — luxury fit-out authority, project breadth.
- **NUSSLI** — pavilion/exhibition cinematic storytelling.
- **Pico Group** — global brand activation depth.
- **Summertown Interiors** — premium fit-out polish, sustainability positioning.
- **Zawaya Industries** — GCC joinery + POS execution.

We're aiming for the project storytelling of NUSSLI, the capability authority of Depa, and the editorial polish of Summertown — applied to a KSA, fabrication-led identity.
