# Phase 4A — Content & Visual Recovery: Ingestion Process

This document defines how recovered content enters the codebase, and how
its trustworthiness is tracked. It does not itself contain business
content — see the per-file status ledgers this doc points to.

## Goal

Recover the ORIGINAL Absolute B2B content and visual identity as
accurately as possible. Nothing in this process invents or rewrites
missing content. Where the original wording is recoverable, it is
preserved as closely as possible and its origin is recorded. Where it
isn't recoverable, it stays `CONTENT SOURCE REQUIRED` — never silently
filled in.

## Mandatory Contamination Gate (Phase 4B)

Before any uploaded file is reviewed for Absolute B2B content, it must
pass this gate. This applies to every file without exception — images,
PDFs, exported text/JSON, documents, screen recordings.

**The gate exists specifically because other companies' material —
confirmed so far: CallentTech, Disprz — may be present in whatever source
the client searches, and must never be copied into Absolute B2B's
website.**

### Checks (run in this order, every time)

1. **Company name** — does any visible/extracted text name a company
   other than Absolute B2B?
2. **Logo** — does the file display a logo other than Absolute B2B's?
3. **Domain** — does any URL/domain other than `absoluteb2b.com` appear?
4. **Email addresses** — does any email domain other than
   `absoluteb2b.com` (or a personal address clearly tied to an Absolute
   B2B contact) appear?
5. **Phone numbers** — does a phone number appear that doesn't match the
   confirmed Absolute B2B number, `+1 (518) 740-9315`, without other
   corroborating evidence that it's still a legitimate Absolute B2B
   number (e.g. a second office line)?
6. **Brand colors** — used only as supporting evidence, never as a sole
   basis for inclusion or exclusion (colors alone are not
   company-identifying).
7. **Context** — does the surrounding material (captions, filenames,
   folder names, adjacent slides/pages) suggest a different company?
8. **Source** — where did this file come from, and does that source
   context imply mixed-client material (e.g. a shared drive known to
   contain multiple clients' assets)?

### Decision outcomes

- **CONFIRMED** — Checks 1–5 show only Absolute B2B identifiers (or none
  at all, with strong contextual/source evidence of Absolute B2B origin
  and no conflicting identifiers), AND the client has explicitly verified
  it.
- **RECOVERED — NEEDS VERIFICATION** — Checks 1–5 show only Absolute B2B
  identifiers or are silent (e.g. a plain product-shot image with no
  visible branding), and context/source reasonably suggests Absolute B2B,
  but the client hasn't explicitly confirmed it yet.
- **EXCLUDED** — Any check surfaces a different company's name, logo,
  domain, or email/phone. Logged in `docs/EXCLUSION_LOG.md` with filename,
  detected company, and reason. The file (or a note referencing it, for
  large binaries) moves to `RECOVERY/EXCLUDED/`. No text, image, color, or
  layout from it is used anywhere in the Absolute B2B build.
- **UNKNOWN** — Any ambiguity at all — mixed signals, illegible/cropped
  branding, no identifying information and no strong contextual evidence
  either way. **When uncertain, choose UNKNOWN, never CONFIRMED or
  RECOVERED.** Held in `RECOVERY/UNKNOWN/` pending clarification from the
  client.

This gate runs before, and is independent of, the general Three-Tier
Status System below (which governs how a *confirmed-as-Absolute-B2B*
item's content then gets treated for accuracy/currency). A file must clear
the contamination gate before its content can even be considered for
CONFIRMED/RECOVERED status in that system.

See `docs/REVIEW_PROTOCOL.md` for the full step-by-step review sequence
and `docs/ASSET_INTAKE_CHECKLIST.md` for the per-file intake record.

## Three-Tier Status System

Every content item (a service, a testimonial, a case study, a pricing
tier, an About section, a homepage stat, a nav/footer string, an image) is
tagged with exactly one of:

| Status | Meaning |
|---|---|
| **CONFIRMED** | The client has explicitly stated this text/fact directly in this conversation, in their own words, as current and accurate (e.g. the homepage headline, the contact email/phone). |
| **RECOVERED — NEEDS VERIFICATION** | Text was pulled from a supplied source — a screenshot, an exported file, a screen recording, prior project history — but has NOT been explicitly re-confirmed by the client as accurate/current. It may be stale, may have been edited since the screenshot was taken, or (for testimonials/case-study results especially) may not be verifiably genuine. |
| **CONTENT SOURCE REQUIRED** | Nothing usable has been supplied yet. No placeholder invented text — the literal string `"CONTENT SOURCE REQUIRED"` stays in the data file. |

**Nothing skips from CONTENT SOURCE REQUIRED straight to CONFIRMED.**
Recovered material always lands in RECOVERED — NEEDS VERIFICATION first,
with its source recorded, and is only promoted to CONFIRMED when the
client explicitly says "yes, that's accurate/current" for that specific
item.

### Per-item metadata

Every content record in the data layer now carries a `_meta` block:

```js
_meta: {
  status: 'CONFIRMED' | 'RECOVERED_NEEDS_VERIFICATION' | 'CONTENT_SOURCE_REQUIRED',
  source: null | 'string describing exactly where this came from',
  confidence: null | 'high' | 'medium' | 'low',
  notes: null | 'anything relevant — e.g. "screenshot partially cropped, name may be truncated"',
}
```

`source` examples once real material arrives: `"client message,
2026-09-08"`, `"screenshot: content-inbox/screenshots/services-page.png"`,
`"Emergent export file: services.json, supplied 2026-09-10"`.

`confidence` is set by whoever transcribes the item (Claude, when
recovering from a screenshot/file) based on legibility/completeness — a
blurry screenshot crop is `low`, a clean exported JSON field is `high`.

## Where Supplied Material Goes

- **Raw files the client uploads** (Emergent export JSON, CSV, docs,
  screen recordings): drop them in the chat as attachments. Claude reads
  them directly from `/mnt/user-data/uploads/` — nothing needs to be
  pre-sorted into `content-inbox/`.
- **`content-inbox/screenshots/`** and **`content-inbox/raw-text/`** exist
  in the repo as the place recovered material gets *archived* after
  Claude has transcribed it into the data files, so there's a durable
  record of exactly what a piece of content was recovered from, kept
  alongside the code rather than only in chat history.
- **`frontend/src/assets/brand/`** — logo file(s), and any font files, once
  supplied.
- **`frontend/src/assets/inbox/`** — raw supplied images (hero imagery,
  team photos, etc.) before they're optimized/placed into their final
  page locations.

## The Two Flagged Claims

Per explicit instruction, these two strings are never treated as
independently verified facts, regardless of source, unless the client
explicitly confirms them as currently accurate:
- "over 10 years"
- "500,000 qualified leads"

They remain tagged `CONFIRMED` only in the narrow sense of "the client
told us this is the existing site's copy" (their `_meta.status` in
`site-content.js` is `CONFIRMED` as *copy that exists on the site*), but
`docs/CONTENT_STATUS.md` and the UI-facing comment both carry a persistent
"claim to verify before production launch" note that must not be dropped
even after the copy itself is marked confirmed.

## Testimonial-Specific Caution

Testimonial names, companies, quotes, ratings, and results are NEVER
promoted to `CONFIRMED` merely because they appeared on the old
Emergent-generated site. A testimonial recovered from a screenshot of the
old site starts at `RECOVERED — NEEDS VERIFICATION` with a note like
"appeared on prior site; authenticity of client/quote not independently
verified" — this status persists until the client (Absolute B2B) confirms
the testimonial is genuine and current, not merely that the screenshot
shows this text.

## Status Ledger

`docs/CONTENT_STATUS.md` is the master ledger — one row per content item
across every category, with its current status, source, and confidence.
It's the single place to check "what's left" without opening every data
file. It's regenerated/updated by hand each time content is ingested.

## What Changed in the Data Layer (Phase 4A)

- `frontend/src/data/services.js`, `testimonials.js`, `case-studies.js`,
  `pricing.js`, `site-content.js` — every record now carries a `_meta`
  block as above. IDs are unchanged from Phase 1–3 (`service-01`…
  `service-21`, `testimonial-01`…`testimonial-10`).
- No architecture from Phases 1–3 was altered — components still read the
  same fields (`name`, `description`, `quote`, etc.); `_meta` is additive
  and ignored by the UI layer (it's for editorial/audit tracking, not
  rendering).
