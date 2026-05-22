# Start Point — Website

Premium marketing site for Start Point, a Riyadh-based creative production and fabrication studio.

> Before doing anything, read `CLAUDE.md` and `project_specs.md`.

---

## Running locally

1. Make sure you have `Node.js 20+` installed (this project uses Node 24, npm 11).
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Fill in `RESEND_API_KEY` if you want contact/quote emails to actually send. Without it the forms still work — they just log to the server and redirect to `/thank-you`.
4. Start the dev server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000).

---

## Editing content

All copy lives in `/content/`. To change what appears on the site, edit these files (no DB, no CMS):

| File | What it controls |
|---|---|
| `content/site.ts` | Company name, address, phone, email, social links — used in header, footer, schema |
| `content/services.ts` | The 10 services (also drives `/services` and each `/services/[slug]`) |
| `content/industries.ts` | The 25 industries (drives `/industries/*`) |
| `content/capabilities.ts` | The 8 capability pages |
| `content/projects.ts` | Case studies (drives `/work` index and each `/work/[slug]`) |
| `content/locations.ts` | The 8 location pages |
| `content/clients.ts` | Client logo marquee |
| `content/testimonials.ts` | Testimonials shown on case studies + homepage |
| `content/faqs.ts` | FAQ pool — tagged so services/industries can pull relevant Q&As |
| `content/insights/*.mdx` | Blog/insight articles, written in Markdown |

### Add a new service

1. Open `content/services.ts`.
2. Copy an existing entry, change the `slug`, `title`, `description`, `heroImage`, etc.
3. Save. The new page appears at `/services/<slug>` automatically.

### Add a new project (case study)

1. Open `content/projects.ts`.
2. Add a new object following the existing shape. Set `status: 'live'` for it to render fully, or `status: 'stub'` to show it on the index without a full detail page.
3. Save. The new page appears at `/work/<slug>`.

### Add a new insight article

1. Create a new `.mdx` file in `content/insights/` (e.g. `my-article.mdx`).
2. Add frontmatter at the top — see existing files for the shape.
3. Save. It appears at `/insights/<filename>`.

---

## Project structure

See `project_specs.md` §8 for the full file structure breakdown.

## SEO

- Every page sets metadata via `generateMetadata`.
- JSON-LD schema is injected per page type (Organization, Service, Article, FAQPage, LocalBusiness).
- `sitemap.xml` and `robots.txt` are generated automatically.
- See `lib/seo/*` for helpers.

## Deployment

Vercel, default config. Set the env vars from `.env.example` in the Vercel project settings.
