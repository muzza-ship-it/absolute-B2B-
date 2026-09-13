# Site Inventory

Status: architecture-level inventory. Content marked `CONTENT SOURCE REQUIRED`
is not invented — see `CONTENT_GAPS.md` for the master list.

---

## 1. Home — `/`

**Purpose:** Primary entry point; communicate positioning, build trust, route
visitors to Services / Case Studies / Contact.

**Confirmed sections:**
- Hero: headline "TRANSFORM YOUR B2B LEAD GENERATION", supporting copy (10
  years / 500,000 qualified leads claim — flagged as CLAIM TO VERIFY, not
  presented as independently confirmed), primary CTA "Get Started"

**Structural sections (placeholder until real site inventory confirms
presence/order/content):**
- Statistics band — CONTENT SOURCE REQUIRED (which numbers, beyond the two
  in the hero copy)
- Services preview (subset of the 21 services) — CONTENT SOURCE REQUIRED
  (which services are featured)
- Industries served (Technology, Healthcare, Finance, E-commerce confirmed
  as the four industries; presentation format not confirmed)
- Value proposition / "why us" — CONTENT SOURCE REQUIRED
- Testimonials preview (subset of the 10) — CONTENT SOURCE REQUIRED
- Case studies preview — CONTENT SOURCE REQUIRED
- Secondary CTA band before footer

**Components required:** Header, PageHero, StatBand, ServicePreviewGrid,
IndustryList, TestimonialPreviewCarousel/Grid, CaseStudyPreviewGrid,
CTASection, Footer

**Data required:** `site-content.js` (hero/claims), `services.js` (subset),
`testimonials.js` (subset), `case-studies.js` (subset)

**CTAs:** "Get Started" (hero) → Contact; secondary CTAs on preview
sections → Services / Case Studies / Testimonials respectively

**Forms:** none directly (CTAs route to Contact page's form)

**Navigation relationships:** links to all 6 other routes via Header/Footer

**Mobile considerations:** hero copy wraps without breaking claim numbers
across lines awkwardly; stat band stacks vertically under ~430px; preview
grids collapse to single column under ~768px

**Desktop considerations:** hero supports large imagery/illustration slot
(asset itself is CONTENT SOURCE REQUIRED); preview grids 3–4 columns

**SEO metadata:**
- Title: CONTENT SOURCE REQUIRED (placeholder: "Absolute B2B | B2B Lead
  Generation Experts")
- Meta description: derived from supporting copy, needs confirmation
- OG image: CONTENT SOURCE REQUIRED

---

## 2. About — `/about`

**Purpose:** Company credibility — history, team, mission.

**Sections:** all CONTENT SOURCE REQUIRED (no About copy has been supplied).
Structural placeholders only: intro/mission block, company story/timeline
block, team block (optional — presence not confirmed), CTA band.

**Components required:** Header, PageHero, RichTextSection, (optional)
TeamGrid, CTASection, Footer

**Data required:** `site-content.js` → `about` object, entirely placeholder

**CTAs:** likely "Get Started" or "Contact Us" — placement not confirmed

**Forms:** none expected

**Mobile/Desktop:** standard content-column responsive behavior

**SEO metadata:** CONTENT SOURCE REQUIRED

---

## 3. Services — `/services` (+ 21 detail routes)

**Purpose:** List and explain all 21 services; each service may have its
own detail view.

**Sections:**
- Hero/intro copy — CONTENT SOURCE REQUIRED
- Grid/list of 21 service cards (name + short description + CTA)
- Individual service detail page per service (route pattern
  `/services/:slug`), each with: title, full description, deliverables,
  process, outcomes, relevant industries, CTA — CONTENT SOURCE REQUIRED for
  all 21

**Components required:** Header, PageHero, ServiceCard, ServiceGrid,
ServiceDetailLayout, CTASection, Footer

**Data required:** `services.js` — exactly 21 records, `service-01`…
`service-21`, fields present but values `CONTENT SOURCE REQUIRED`

**CTAs:** per-card "Learn more" → detail route; per-detail-page "Get
Started" → Contact

**Forms:** none directly

**Navigation relationships:** every service must be reachable both via the
`/services` grid and via direct URL `/services/:slug` (must survive a
browser refresh once routing is implemented — SPA fallback required at
hosting level, documented in `HOSTINGRAJA_DEPLOYMENT_PLAN.md`)

**Mobile considerations:** grid → single column under ~768px; long service
names must not overflow cards

**SEO metadata:** each service detail page needs its own title/description
once real content exists — CONTENT SOURCE REQUIRED per service

---

## 4. Case Studies — `/case-studies` (+ detail routes)

**Purpose:** Proof of outcomes per client/industry.

**Sections:** intro copy (CONTENT SOURCE REQUIRED), case study card grid,
individual case study detail (`/case-studies/:slug`) with challenge /
solution / execution / results / metrics / CTA

**Components required:** Header, PageHero, CaseStudyCard, CaseStudyGrid,
CaseStudyDetailLayout, MetricStat, CTASection, Footer

**Data required:** `case-studies.js` — record count unknown (CONTENT SOURCE
REQUIRED — do not assume a number)

**CTAs:** per-card "Read case study" → detail; detail page CTA → Contact

**Forms:** none

**SEO metadata:** CONTENT SOURCE REQUIRED per case study

---

## 5. Testimonials — `/testimonials`

**Purpose:** Social proof with filterable client quotes.

**Confirmed structure:** 10 testimonial entries; industry filter with
options Technology, Healthcare, Finance, E-commerce (+ implicit "All");
5-star display; testimonial cards; client info; CTA; supporting statistics.

**Components required:** Header, PageHero, IndustryFilterBar,
TestimonialCard (with StarRating), TestimonialGrid, StatBand, CTASection,
Footer

**Data required:** `testimonials.js` — exactly 10 records, fields (quote,
author name, title, company, industry tag, rating) present as `CONTENT
SOURCE REQUIRED`

**Interaction requirement:** filtering must be client-side state (selected
industry → filtered subset of the 10), must not break layout at any
breakpoint, "All" must restore the full set

**CTAs:** CONTENT SOURCE REQUIRED (likely "Get Started")

**Forms:** none

**SEO metadata:** CONTENT SOURCE REQUIRED

---

## 6. Pricing — `/pricing`

**Purpose:** Present pricing tiers and drive to Contact/Get Started.

**Sections:** intro copy (CONTENT SOURCE REQUIRED), pricing card grid,
feature comparison per tier, CTA per tier

**Components required:** Header, PageHero, PricingCard, PricingGrid,
FeatureList, CTASection, Footer

**Data required:** `pricing.js` — tier count, names, prices, billing
period, feature lists all CONTENT SOURCE REQUIRED (no default 3-tier
"Starter/Pro/Enterprise" template will be invented — that would violate the
no-invention rule, since it implies real plan names/prices that don't exist
yet)

**CTAs:** per-tier CTA — target (Contact vs. external checkout) CONTENT
SOURCE REQUIRED

**Forms:** none directly (unless a tier CTA opens a form — unconfirmed)

**Mobile considerations:** horizontal scroll or stacked cards under
~768px; comparison table (if one exists on the real site) needs a mobile
strategy — unconfirmed until visual reference arrives

**SEO metadata:** CONTENT SOURCE REQUIRED

---

## 7. Contact — `/contact`

**Purpose:** Primary conversion point; lead capture form + direct contact
info.

**Confirmed sections:**
- Contact form: Name, Email, Phone, Company, Service/Area of Interest,
  Message (see `FORM_API_SPEC.md` for full field spec)
- Direct contact info: info@absoluteb2b.com, +1 (518) 740-9315

**Unconfirmed sections:** office address/map (CONTENT SOURCE REQUIRED —
presence unconfirmed), business hours (CONTENT SOURCE REQUIRED), any
secondary CTA copy

**Components required:** Header, PageHero, ContactForm, ContactInfoPanel,
Footer

**Data required:** `site-content.js` → `contact` object (confirmed fields
only); form config lives in `FORM_API_SPEC.md` / frontend `data/` as
field-schema, not hard-coded strings scattered across the component

**CTAs:** the form's own submit button ("Send Message" — label itself is a
structural default, not a confirmed brand string; mark for confirmation)

**Forms:** Contact form — full spec in `FORM_API_SPEC.md`. Must have real
frontend + backend validation, real API call, real loading/success/error
states. No fake success message.

**Mobile considerations:** form fields full-width under ~768px, phone
number tap-to-call, email tap-to-mail

**SEO metadata:** CONTENT SOURCE REQUIRED

---

## Cross-Page: Navigation

**Header (all pages):** logo (real asset, supplied 2026-09-12 — see
`frontend/src/assets/brand/MANIFEST.md`) + links to
Home, About, Services, Case Studies, Testimonials, Pricing, Contact +
primary CTA button ("Get Started") + mobile hamburger triggering a slide-in
/ overlay drawer with the same links.

**Footer (all pages):** company info block, navigation links (mirrors
header), services list (short list or full 21 — unconfirmed which),
contact info (email/phone confirmed), social icons (platforms + URLs —
CONTENT SOURCE REQUIRED), copyright line (year should be computed, not
hard-coded), legal links (Privacy/Terms — existence unconfirmed).

## Cross-Page: SEO Baseline

Every route gets: unique `<title>`, meta description, canonical URL built
from `absoluteb2b.com` + route (domain itself not to be hard-coded in every
file — centralized in `site-content.js` / a `config` module so the
production domain is set in one place), Open Graph tags, Twitter/X card
tags, and correct heading hierarchy (one `<h1>` per page). Sitemap.xml and
robots.txt are generated from the route list at build time, not hand
maintained per page.
