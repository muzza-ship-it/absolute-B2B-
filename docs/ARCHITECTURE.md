# Architecture

## Stack
- **Frontend:** React 18 + Vite, React Router for the 7 routes (+ service
  and case-study detail sub-routes). Plain CSS with CSS custom properties
  for design tokens (no CSS-in-JS runtime, no Tailwind) — kept deliberately
  simple for HostingRaja-style shared/VPS hosting, which just needs a static
  `dist/` build served by any web server or reverse proxy.
- **Backend:** Node.js + Express. No framework beyond Express — no
  NestJS/serverless — to keep the deployment story a single
  `node server.js` process under a process manager (PM2 or equivalent),
  which HostingRaja-type Node hosting expects.
- **Database:** none wired in yet. Seam left open (see `FORM_API_SPEC.md`)
  in case the client confirms the real site persists leads.
- **Email:** nodemailer over generic SMTP, fully env-var driven.

No Emergent SDK, API, environment variable, or generated integration exists
anywhere in this codebase — it was built from scratch in this sandbox, not
exported from Emergent, so there is nothing to "remove." This will be
re-confirmed with a text search in the Phase-13 security/cleanup pass once
real content and remaining pages are filled in.

## Directory Structure

```
absolute-b2b/
├── frontend/
│   ├── src/
│   │   ├── components/       # Header, Footer, Button, Card, Section,
│   │   │                     # Container, PageHero, CTASection,
│   │   │                     # form/ (FormField, Input, Textarea, Select)
│   │   ├── layouts/          # MainLayout (Header + <Outlet/> + Footer)
│   │   ├── pages/            # one file per route
│   │   ├── data/             # services.js, testimonials.js,
│   │   │                     # case-studies.js, pricing.js, site-content.js
│   │   ├── services/         # api.js — fetch wrapper for backend calls
│   │   ├── hooks/            # useContactForm.js — form state + validation
│   │   ├── utils/            # validation.js
│   │   ├── styles/           # tokens.css, global.css
│   │   ├── App.jsx           # route table
│   │   └── main.jsx          # entry point
│   ├── public/                # favicon, robots.txt, sitemap.xml (generated)
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   │   ├── routes/            # contact.routes.js
│   │   ├── controllers/       # contact.controller.js
│   │   ├── services/          # email.service.js
│   │   ├── models/            # empty — reserved seam for optional DB
│   │   ├── middleware/        # validate.js, rateLimit.js, errorHandler.js
│   │   ├── config/            # env.js — reads & validates process.env
│   │   ├── utils/             # logger.js
│   │   └── server.js
│   ├── tests/                 # contact.test.js — created, not executed
│   └── package.json
│
├── docs/
├── scripts/
├── .gitignore
└── README.md
```

## Data-Driven Content

Every page that lists repeatable items (services, testimonials, case
studies, pricing tiers) reads from a single data module rather than having
content hard-coded into JSX. This means:
- Inserting the real 21 services, 10 testimonials, case studies, and
  pricing tiers later is a **data edit**, not a restructuring of components
  or pages.
- Each data file currently contains the correct **shape** and the correct
  **count** where known (21 services, 10 testimonials), with every content
  field set to the literal string `"CONTENT SOURCE REQUIRED"` rather than
  invented text.

Example shape (`frontend/src/data/services.js`):
```js
{
  id: "service-01",
  slug: "service-01",
  name: "CONTENT SOURCE REQUIRED",
  shortDescription: "CONTENT SOURCE REQUIRED",
  description: "CONTENT SOURCE REQUIRED",
  deliverables: [],
  process: [],
  outcomes: [],
  industries: [],
}
```

## Design Tokens

`frontend/src/styles/tokens.css` defines CSS custom properties for color,
type, spacing, radius, shadow, breakpoints, and container widths. Per the
explicit instruction not to guess brand colors, the color tokens currently
use clearly neutral, clearly-labeled placeholder values (a plain
grayscale + one functional blue for links/focus states — a genuinely
boring, non-opinionated choice on purpose) with a code comment on every
color token reading `/* PLACEHOLDER — replace with confirmed brand color */`.
This is deliberately not a "generic B2B SaaS" aesthetic pass (no gradient
washes, no rounded-card kit, no invented brand personality) — it's
undecorated structural CSS waiting on the real visual reference, so that
swapping in the real palette/type later is a token edit, not a rebuild.

Typography currently uses the system font stack (no invented brand
typeface) for the same reason — a real font choice from the client's brief
or reference material replaces this in one place (`tokens.css`) once known.

## Component Reuse

- `Header` and `Footer` are rendered once, in `MainLayout`, not duplicated
  per page.
- `CTASection` is a single reusable component parameterized by
  heading/subtext/button — used on Home, Services, Case Studies,
  Testimonials, and Pricing rather than five bespoke CTA blocks.
- `PageHero` is reused across every inner page (About, Services, Case
  Studies, Testimonials, Pricing, Contact) with per-page title/subtitle
  props; only the Home page uses the larger, distinct hero treatment
  described in the confirmed homepage copy.
- Form primitives (`FormField`, `Input`, `Textarea`, `Select`) are shared
  by the Contact form and by any future form, rather than each form owning
  its own input markup/styling.

## Routing & Refresh Behavior

React Router is configured in `App.jsx` with all 7 top-level routes plus
`/services/:slug` and `/case-studies/:slug`. Because this is a client-side
SPA, a hard browser refresh on a nested route (e.g., `/services/service-04`)
requires the hosting server to fall back to `index.html` for unknown paths
— this is called out explicitly in `HOSTINGRAJA_DEPLOYMENT_PLAN.md` since
it's the most common cause of "it works until you refresh" bugs in this
kind of deployment, and is a server/hosting configuration concern, not
something the frontend code alone can guarantee.

## What Is Deliberately Not Built Yet

- No visual styling matching the real Absolute B2B site — that requires
  the screenshots/recording (`CONTENT_GAPS.md`).
- No real service/testimonial/case-study/pricing content.
- No database model, since no confirmed need exists yet.
- No CAPTCHA integration (requires a business decision + a real API key).
- No production build has been run yet (Phase 4+ / build phase).
