# Asset Intake Checklist

Used once per uploaded file, at the moment it arrives — before any content
from it is used anywhere. Copy the template block below for each new file
and append it to the log table. Nothing is skipped, even for a file that
looks obviously fine at a glance.

## Template (copy per file)

```
### File: <original filename>

- Original filename: 
- Upload date: 
- Source (where/who supplied it, and via what — chat upload, described
  location, etc.): 
- File type (image / PDF / doc / export / recording frame / other): 
- Detected branding (company name(s), logo(s), domain(s), email(s),
  phone number(s) found — list ALL detected, not just the expected one): 
- Confidence score (high / medium / low, per docs/REVIEW_PROTOCOL.md): 
- Classification (CONFIRMED / RECOVERED — NEEDS VERIFICATION / EXCLUDED /
  UNKNOWN): 
- Notes (anything relevant — image quality, partial/cropped branding,
  conflicting signals, why a particular classification was chosen): 
```

## Log

_(No files have been uploaded yet — no entries.)_

| # | Filename | Upload Date | Source | Type | Detected Branding | Confidence | Classification | Notes |
|---|---|---|---|---|---|---|---|---|

## Rules

- Every uploaded file gets a row, regardless of classification —
  including EXCLUDED and UNKNOWN files. A file is never processed and
  then left off this log.
- "Detected branding" lists everything found, even if it includes both
  Absolute B2B and another company's marks on the same file (e.g. a
  partnership slide) — a mixed file is not automatically CONFIRMED just
  because Absolute B2B branding is also present; see
  `docs/REVIEW_PROTOCOL.md` step 6 for how to handle mixed evidence.
- This checklist feeds `docs/RECOVERY_LOG.md` (the append-only audit
  trail) and `docs/CONTENT_STATUS.md` (the live counters) — update all
  three together for each file.
