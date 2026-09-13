# Content Status Ledger

Single source of truth for "what's confirmed, what's recovered-but-
unverified, what's still missing" across every content category. Update
this file whenever an item's `_meta.status` changes in the data layer, or
whenever a file is classified per `docs/REVIEW_PROTOCOL.md`. See
`docs/CONTENT_INGESTION.md` for what each status means and how items get
promoted between them.

Legend: **C** = CONFIRMED · **R** = RECOVERED — NEEDS VERIFICATION ·
**S** = CONTENT SOURCE REQUIRED

---

## Part 1 — Uploaded File / Asset Recovery (Phase 4B)

This part tracks individual **files** (images, PDFs, exports, documents)
as they're uploaded and reviewed — separate from the content-item ledger
in Part 2, which tracks **data fields** in the codebase. A single uploaded
file (e.g. a services brochure PDF) may eventually populate several
content items in Part 2 once transcribed.

No files have been uploaded or reviewed yet. All counters start at zero.

### CONFIRMED

_(No entries yet.)_

| Filename | Type | Description | Source | Date |
|---|---|---|---|---|

### RECOVERED — NEEDS VERIFICATION

_(No entries yet.)_

| Filename | Type | Description | Source | Reason for Confidence | Date |
|---|---|---|---|---|---|

### EXCLUDED

_(No entries yet. See `docs/EXCLUSION_LOG.md` for the full exclusion record.)_

| Filename | Detected Company | Reason Excluded | Date |
|---|---|---|---|

### UNKNOWN

_(No entries yet.)_

| Filename | Type | Why Unclassified | Date |
|---|---|---|---|

### Counters

| Bucket | Count |
|---|---|
| CONFIRMED | 0 |
| RECOVERED — NEEDS VERIFICATION | 8 |
| EXCLUDED | 0 |
| UNKNOWN | 0 |
| **Total files reviewed** | **8** |

---

## Part 2 — Content Item Ledger (Phase 4A)

Tracks the status of individual content **fields** in the data layer
(`frontend/src/data/*.js`), regardless of whether they've been populated
from an uploaded file yet.

### Homepage (`frontend/src/data/site-content.js` → `home`)

| Item | Status | Source | Confidence |
|---|---|---|---|
| Hero headline | C | client message, 2026-09-08 | high |
| Hero supporting copy | C | client message, 2026-09-08 | high |
| Hero CTA label | C | client message, 2026-09-08 | high |
| Claim: "over 10 years" | **UNVERIFIED — do not treat as fact** | — | — |
| Claim: "500,000 qualified leads" | **UNVERIFIED — do not treat as fact** | — | — |
| Statistics band | R | screenshot: 07-media-deck-1.png | high |
| Services preview (which/order) | R | screenshot: 01-home.png / 07-media-deck-1.png | high |
| Value proposition | R | screenshot: 01-home.png | high |
| Testimonials preview | S | — | — |
| Case studies preview | S | — | — |

## About (`site-content.js` → `about`)

| Item | Status | Source | Confidence |
|---|---|---|---|
| Intro / story / values / visible journey | R | screenshot: 06-about.png | high |
| Team content | S | — | — |

## Services (`frontend/src/data/services.js`) — 21 records

| ID | Status | Source | Confidence |
|---|---|---|---|
| service-01 … service-04 | R | screenshots: 01-home.png / 07-media-deck-1.png | high |
| service-05 … service-21 | S | — | — |

## Testimonials (`frontend/src/data/testimonials.js`) — 10 records

| ID | Status | Source | Confidence |
|---|---|---|---|
| testimonial-01 … testimonial-10 | S (all 10) | — | — |

## Case Studies (`frontend/src/data/case-studies.js`)

| Item | Status | Source | Confidence |
|---|---|---|---|
| Case study count | S (unconfirmed) | — | — |
| case-study-placeholder | S | — | — |

## Pricing (`frontend/src/data/pricing.js`)

| Item | Status | Source | Confidence |
|---|---|---|---|
| Tier count | R (3 tiers visible) | screenshot: 05-pricing.png | high |
| Starter / Professional / Enterprise + visible features | R | screenshot: 05-pricing.png | high |

## Contact (`site-content.js` → `contact`)

| Item | Status | Source | Confidence |
|---|---|---|---|
| Email | C | client message, 2026-09-08 | high |
| Primary phone | C | client message, 2026-09-08 | high |
| Virtual office address | C | client clarification, 2026-09-13 | high |
| Partner contact phone | C | client clarification, 2026-09-13 | high |
| Hours | R | screenshot: 08-media-deck-2.png | high |
| Page subtitle (below "Contact Us" heading) | S | — | — |

## CTA Bands (`components/CTASection.jsx`, rendered on 7 pages)

| Item | Status | Source | Confidence |
|---|---|---|---|
| Heading copy (Home, About, Services, ServiceDetail, Case Studies, CaseStudyDetail, Testimonials, Pricing) | S | — | — |

Added in Phase 4B remediation: these 8 headings previously shipped as
unlabeled invented marketing copy (e.g. "Ready to grow your pipeline?"),
found during the independent Phase 4B QA audit. All 8 call sites now pass
the literal string `"CONTENT SOURCE REQUIRED"`, consistent with every
other untracked field in this ledger — see `docs/CONTENT_GAPS.md`.

## SEO Metadata (`frontend/src/components/Seo.jsx`, added Phase 4B)

| Item | Status | Source | Confidence |
|---|---|---|---|
| Per-route `<title>` / meta description scaffold | C (structural) | — | n/a — mechanism, not business copy |
| Home meta description | C | reuses confirmed hero copy, `site-content.js` | high |
| Contact meta description | C | reuses confirmed `contact.email`/`phoneDisplay` | high |
| All other pages' meta description | S (uses neutral fallback `"Absolute B2B."` until real copy exists) | — | — |
| `og:image` / Twitter image card | S (intentionally omitted — no logo/imagery supplied) | — | — |

## Navigation / Footer

| Item | Status | Source | Confidence |
|---|---|---|---|
| 7-route structure + labels | C | client message, 2026-09-08 | high |
| Footer company description | S | — | — |
| Footer social links | S | — | — |
| Footer legal links | S (presence unconfirmed) | — | — |

## Brand Assets

| Item | Status | Source | Confidence |
|---|---|---|---|
| Logo file | **C** | owner-supplied file, `AB_Logo.jpeg`, 2026-09-12 | high |
| Logo (favicon/square mark variant) | S | — | — |
| Brand colors | S | — | — |
| Typeface | S | — | — |
| Hero/section imagery | S | — | — |
| Screenshots / screen recording (visual reference) | R | supplied screenshot ZIP | high |

---

### Recovered page-level observations

- Services screenshot shows a blank service-card region; 21 individual services are therefore NOT recoverable from that screenshot. Four core services are recoverable from Home/Media Deck.
- Testimonials screenshot explicitly shows “Showing 0 testimonials”; individual testimonials remain CONTENT SOURCE REQUIRED.
- Success Stories screenshot shows aggregate impact but no individual case-study cards; individual case studies remain CONTENT SOURCE REQUIRED.
- Media Deck provides six industries: Technology & SaaS, Healthcare & Medical, Finance & Insurance, E-commerce & Retail, Manufacturing, Professional Services.
- Media Deck closing contact block contained a conflicting New York address and two +91 phone numbers. Client clarification on 2026-09-13 replaces the address with the company virtual office address and confirms +91 7972855961 as the partner contact number; +91 8208876771 is not retained as a current contact number.
- Pricing page has three visible tiers and four FAQ items; recovered data remains verification-required.

**Part 2 totals as of this update (last revised 2026-09-12, Phase 4B logo
integration):** CONFIRMED content-item fields are all copy/contact/nav
strings, the SEO scaffold entries (the mechanism itself, and the two pages
— Home, Contact — whose meta descriptions reuse already-confirmed copy),
and the primary logo file (see "Brand Assets" above). 0 RECOVERED — NEEDS
VERIFICATION items. Everything else (21 services, 10 testimonials, case
studies, pricing, About, homepage sections, footer, the favicon/square
logo mark, brand colors, typeface, hero imagery, the 8 CTA band headings,
the Contact page subtitle, and every other page's meta description) is
CONTENT SOURCE REQUIRED — see the tables above for the current full
breakdown rather than relying on a single summary count.

**Part 1 totals as of this update:** 0 files reviewed of any kind.
