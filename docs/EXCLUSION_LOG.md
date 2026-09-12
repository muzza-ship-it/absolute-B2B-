# Exclusion Log

Append-only. Every file identified as belonging to another company (most
notably CallentTech or Disprz) is recorded here instead of being silently
discarded — the log itself is the evidence that contamination was caught,
not ingested.

**Rule:** nothing is deleted outright. Excluded files are moved to
`RECOVERY/EXCLUDED/` (or, if the file is large/binary and only a reference
is practical, noted by filename/description here) and logged below. No
text, imagery, color, or layout from an excluded file is copied into any
Absolute B2B data file, ever — exclusion is total, not partial.

## Log

| Filename | Detected Company | Reason Excluded | Date | Reviewer |
|---|---|---|---|---|
| _(no entries yet)_ | | | | |

## How an entry gets added

1. A file is reviewed per `docs/REVIEW_PROTOCOL.md`.
2. If the review finds a company name, logo, domain, email, phone number,
   or marketing material belonging to anyone other than Absolute B2B
   Pvt. Ltd. — most commonly CallentTech or Disprz — it is excluded.
3. The row records exactly what triggered exclusion (e.g. "CallentTech
   wordmark visible in header", "domain callenttech.com found in footer
   text", "Disprz logo detected top-left of poster").
4. **Reviewer** is recorded as "Claude" for automated review during this
   conversation, or the person's name if they made the call themselves.
5. If a file is ambiguous rather than clearly another company's, it goes
   to UNKNOWN (see `docs/CONTENT_STATUS.md`), not here — this log is
   specifically for confirmed exclusions.

## Running total

**Excluded files: 0**
