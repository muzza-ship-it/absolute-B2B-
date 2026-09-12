# Absolute B2B — Project Requirements (Phase 0 Freeze)

Status: **DRAFT — Phases 1–3 architecture complete.** This document only
contains information that has actually been supplied. Anything not
confirmed is listed in `CONTENT_GAPS.md` and must NOT be invented (per
explicit client instruction). See `docs/SITE_INVENTORY.md`,
`docs/FORM_API_SPEC.md`, `docs/ARCHITECTURE.md`, and
`docs/HOSTINGRAJA_DEPLOYMENT_PLAN.md` for the Phase 1–3 deliverables built
on top of this freeze.

## 1. Project Identity
- Company: Absolute B2B Pvt. Ltd.
- Domain: absoluteb2b.com
- Contact email: info@absoluteb2b.com
- Contact phone: +1 (518) 740-9315
- Origin: existing site built on Emergent platform, being migrated to an
  independent, portable codebase for HostingRaja deployment.

## 2. Confirmed Site Structure (7 primary pages)
1. Home
2. About
3. Services
4. Case Studies
5. Testimonials
6. Pricing
7. Contact

## 3. Confirmed Homepage Content
- Headline: "TRANSFORM YOUR B2B LEAD GENERATION"
- Supporting copy: "For over 10 years, we've helped businesses across
  Technology, Healthcare, Finance, and E-commerce generate over 500,000
  qualified leads. Partner with the experts who deliver measurable results."
- Primary CTA label: "Get Started"

No other homepage section copy (stats block detail, services preview items,
industries list beyond the four named, social proof content, testimonial/case
study preview content) has been supplied yet. See CONTENT_GAPS.md.

## 4. Confirmed Facts About Existing Functionality
- The current (Emergent-hosted) site has working forms with active backend
  responses — confirmed by the client directly, not independently verified by
  Claude (no network access in this environment; the live site has not been
  fetched or tested here).
- The rebuild must preserve equivalent real functionality: frontend +
  backend validation, real API endpoints, real success/error responses,
  loading states, and duplicate-submission handling. No decorative/fake forms.

## 5. Confirmed Numeric/Structural Facts
- 21 services exist on the current site. **Names and descriptions of these
  21 services have not been supplied.** (Gap — see CONTENT_GAPS.md)
- Testimonials section: 10 testimonial entries, with industry filtering across
  Technology, Healthcare, Finance, E-commerce, 5-star display, testimonial
  cards, client info, CTA, supporting statistics. **Actual testimonial content
  (names, companies, quotes, ratings) not supplied.** (Gap)
- Case Studies: page exists with per-case-study structure (client/industry,
  challenge, solution, execution, results, metrics, CTA). **Actual case study
  content not supplied.** (Gap)
- Pricing: page exists, structure not yet detailed. **Actual pricing tiers/
  amounts/features not supplied.** (Gap)

## 6. Technical Architecture (client-specified)
- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MongoDB **only if** existing functionality actually requires
  persistent storage (e.g., storing contact/lead submissions) — not to be
  added by default.
- Email: SMTP via environment variables, no hard-coded credentials.
- All secrets via environment variables; `.env.example` provided, `.env`
  never committed.
- Hosting target: HostingRaja (shared/VPS Node hosting — exact plan/config
  not yet specified by client).

## 7. Non-Functional Requirements
- Fully responsive at: 360, 390, 430, 768, 1024, 1280, 1440, 1920 px — no
  horizontal overflow at any width.
- SEO: titles, meta descriptions, canonical URLs, Open Graph, Twitter/X
  metadata, sitemap.xml, robots.txt, semantic HTML, alt text.
- Security: no exposed secrets, input validation/sanitization both ends,
  CORS configured, no debug/dev routes in production build.
- Zero dependency on Emergent (APIs, SDKs, env vars, deploy references) in
  the final codebase.

## 8. Visual Source of Truth
- Client will supply screenshots / screen recording of the existing Emergent
  site. Until received, no visual/layout/typography/spacing decisions can be
  verified against the real site — placeholder professional design will be
  used and must be corrected once references arrive (tracked in
  `VISUAL_QA.md`, created once references exist).

## 9. Explicit Constraints From Client
- Do not invent services, testimonials, case studies, pricing, or statistics.
  Anything unknown is marked "CONTENT REQUIRING SOURCE" in `CONTENT_GAPS.md`.
- Do not simplify or fake backend/form behavior.
- Do not claim any test, deployment, email delivery, or database write is
  "verified"/"working" unless actually executed in this environment. Where
  this sandbox cannot execute something (no network egress, no live SMTP,
  no live MongoDB, no live HostingRaja access), it will be explicitly labeled
  **NOT EXECUTED — ENVIRONMENT LIMITATION**.

## 10. Environment Limitations Disclosed Up Front
This sandbox (Claude's code execution environment) has **no outbound network
access**. As a direct consequence:
- `npm install` cannot reach the public npm registry.
- No live SMTP server can be contacted to send real email.
- No live MongoDB Atlas/remote instance can be connected to.
- The real absoluteb2b.com / Emergent site cannot be fetched or compared
  against directly from this sandbox.
- HostingRaja cannot be accessed or deployed to from here.

All code will be written to be correct and production-ready, and all
commands needed to install/run/test/deploy will be documented precisely —
but execution of those network-dependent steps will happen on the client's
own machine or HostingRaja server, not here. This will be stated plainly in
`HANDOVER.md` rather than glossed over.
