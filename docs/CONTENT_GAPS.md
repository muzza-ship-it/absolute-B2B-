# Content Gaps — CONTENT REQUIRING SOURCE

Per explicit instruction: nothing in this list may be invented. Each item
below blocks the corresponding build phase until real source content is
supplied (from the live site, screenshots, screen recording, CMS export,
or client-provided text).

## Blocks Phase 6 — Services
- [ ] Full list of all 21 service names
- [ ] Description text for each of the 21 services
- [ ] Deliverables / process / outcomes / relevant industries per service
      (if this level of detail exists on the real site)
- [ ] Any per-service imagery/icons

## Blocks Phase 7 — Case Studies
- [ ] Number of case studies on the real site
- [ ] Client/industry name per case study (or confirmation they're anonymized)
- [ ] Challenge / solution / execution / results / metrics text per case study

## Blocks Phase 8 — Testimonials
- [ ] The 10 actual testimonial quotes
- [ ] Client name, title, company, industry tag per testimonial
- [ ] Star ratings (if not uniformly 5-star)
- [ ] The "supporting statistics" shown on the testimonials page (numbers +
      labels)

## Blocks Phase 9 — Pricing
- [ ] Number of pricing tiers/plans
- [ ] Tier names, prices, billing period
- [ ] Feature list per tier
- [ ] Any "most popular" / highlighted tier
- [ ] CTA label/behavior per tier (e.g., does it link to Contact, or to a
      checkout?)

## Blocks Phase 5 / Visual QA — Design Reference
- [ ] Screenshots or screen recording of the live Emergent site (Home,
      About, Services, a service detail page, Case Studies, a case study
      detail page, Testimonials, Pricing, Contact — desktop and mobile)
- [ ] Color palette (hex values if known, or clear screenshots to sample from)
- [ ] Font family names if known
- [ ] Logo file (SVG/PNG)

## Blocks Phase 11/13 (partial) — Homepage detail
- [ ] Exact statistics block content beyond "500,000 qualified leads" /
      "10 years" (e.g., number of clients, industries served count, etc., if
      shown separately)
- [ ] Services-preview section content on homepage (which services are
      featured, in what order)
- [ ] Any additional homepage sections not yet named

## Blocks Phase 2/11/13 — Forms & Backend
- [ ] Exact field list for the Contact form (name, email, phone, company,
      message — confirmed as an example in the master doc, but need to
      confirm this matches the real form exactly, plus any additional forms
      e.g. a newsletter signup, a "Get Started" modal form, per-service
      inquiry forms, etc.)
- [ ] Whether the real site currently uses a database for lead storage, or
      only sends email (this determines whether MongoDB is actually needed
      per the "only if required" rule)
- [ ] Current email provider/service in use (if known) — informs which SMTP
      abstraction to build (e.g., generic SMTP vs. a provider API like
      SendGrid/Postmark)

## About Page
- [ ] Actual About page copy (team, history, mission — only "preserve
      existing content" was specified; content itself not supplied)

## Additional gaps surfaced during Phase 1–3 build
- [ ] Confirm the Contact form submit button label (implemented as "Send
      Message" — a reasonable structural default, not a confirmed brand
      string)
- [ ] Confirm whether the real site persists contact submissions to a
      database, or only sends email (determines whether the optional
      MongoDB seam in `backend/src/models/` is ever used)
- [ ] Confirm the current/desired email provider (generic SMTP assumed —
      see `docs/FORM_API_SPEC.md`)
- [ ] Confirm brand colors and typeface (frontend currently ships with
      clearly labeled neutral placeholder design tokens —
      `frontend/src/styles/tokens.css`)

---
**Next step:** send the screenshots/recording plus the actual text content
for Services, Testimonials, Case Studies, Pricing, and About. Phases 0–3
(requirements, inventory, form/API spec, architecture, and scaffolding —
see `docs/SITE_INVENTORY.md`, `docs/FORM_API_SPEC.md`, `docs/ARCHITECTURE.md`)
are complete without this; Phase 4+ (real page content and visual fidelity)
is blocked until it arrives.
