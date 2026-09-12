# Review Protocol

The fixed sequence every uploaded file goes through. No step is skipped,
and no step proceeds without its finding being written down (in
`docs/ASSET_INTAKE_CHECKLIST.md` and, at the end, `docs/RECOVERY_LOG.md`).
This protocol implements the contamination gate defined in
`docs/CONTENT_INGESTION.md`.

## Sequence

1. **Inspect visual branding.**
   Look at the file itself (image, PDF page, document header/footer) for
   any logo, wordmark, or visual brand treatment. Record every mark found
   — not just whichever one is expected.

2. **Extract text.**
   Read all visible/embedded text in the file — captions, body copy,
   headers, footers, metadata, filenames. For images, this means reading
   what's rendered in the image itself, not guessing from the filename
   alone.

3. **Check company names.**
   Cross-reference every company name found in steps 1–2 against the
   known list: Absolute B2B (expected/legitimate) vs. CallentTech, Disprz,
   or any other name that isn't Absolute B2B (contamination signal).

4. **Check domains.**
   Any URL or domain reference is compared against `absoluteb2b.com`. A
   different domain is a contamination signal regardless of how minor its
   appearance (e.g. a small watermark URL).

5. **Check contact details.**
   Any email address or phone number is compared against the confirmed
   Absolute B2B contact info (`info@absoluteb2b.com`,
   `+1 (518) 740-9315`). A different email domain or an unrecognized phone
   number is a contamination signal unless there's clear corroborating
   context that it's a legitimate secondary Absolute B2B contact.

6. **Compare with known Absolute B2B identity.**
   Weigh everything found in steps 1–5 together against what's already
   `CONFIRMED` in `docs/CONTENT_STATUS.md` (company name, domain, contact
   info). If a file shows ONLY Absolute B2B identifiers → proceed toward
   CONFIRMED/RECOVERED. If it shows ANY other company's identifiers →
   EXCLUDED, regardless of whether Absolute B2B branding also appears
   alongside it (mixed files are excluded from ingestion, not partially
   used — a file showing both Absolute B2B and CallentTech marks does not
   get "cropped" to salvage the Absolute B2B portion without explicit
   client sign-off, since that risks misreading context). If nothing
   identifying appears either way → weigh source/context; when still
   ambiguous, UNKNOWN.

7. **Classify.**
   Assign exactly one of: CONFIRMED / RECOVERED — NEEDS VERIFICATION /
   EXCLUDED / UNKNOWN, per the decision rules in
   `docs/CONTENT_INGESTION.md`. When in doubt between two categories,
   choose the more cautious one (UNKNOWN over RECOVERED; RECOVERED over
   CONFIRMED; EXCLUDED over RECOVERED if any contamination signal is
   present at all).

8. **Log the decision.**
   Record the file in `docs/ASSET_INTAKE_CHECKLIST.md` (always),
   `docs/RECOVERY_LOG.md` (always, append-only), and — if EXCLUDED — also
   `docs/EXCLUSION_LOG.md`. Move the file (or a reference note, for large
   binaries kept outside the repo) into the matching `RECOVERY/`
   subfolder. Update the counters in `docs/CONTENT_STATUS.md`.

## Non-negotiable rules

- No step may be skipped, even for a file that seems obviously safe.
- No classification is assigned before all 8 steps are recorded.
- Confidence scores are honest about ambiguity — a fast glance is not the
  same as a confirmed read. A "confidence: low" classification is a valid
  and expected outcome, not a failure.
- Once a file is EXCLUDED, its content is never referenced again in any
  Absolute B2B data file, docs, or design decision — not even
  "inspired by."
