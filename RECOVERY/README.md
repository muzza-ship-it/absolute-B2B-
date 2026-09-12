# RECOVERY/ — Asset Recovery Workspace

This folder is documentation/classification scaffolding for Phase 4B. It
currently contains **no assets** — no files have been uploaded or
inspected yet. Nothing here is fabricated or assumed.

## Structure

```
RECOVERY/
├── CONFIRMED/                     Files verified as genuine Absolute B2B material
├── RECOVERED_NEEDS_VERIFICATION/  Files that strongly appear to be Absolute B2B
│                                  but await explicit client confirmation
├── EXCLUDED/                      Files identified as belonging to another
│                                  company (e.g. CallentTech, Disprz) — kept here
│                                  for audit purposes only, never used as source
│                                  material
├── UNKNOWN/                       Files that can't yet be classified either way
├── LOGS/                          RECOVERY_LOG.md and any future audit logs
└── TEMPLATES/                     Blank copies of the intake/review templates,
                                   for reuse each time a new batch arrives
```

## How a file moves through this system

1. File is uploaded to the chat.
2. Reviewed per `docs/REVIEW_PROTOCOL.md`.
3. Logged in `docs/ASSET_INTAKE_CHECKLIST.md`.
4. Classified into exactly one of: CONFIRMED / RECOVERED — NEEDS
   VERIFICATION / EXCLUDED / UNKNOWN, per the contamination gate in
   `docs/CONTENT_INGESTION.md`.
5. A copy (or a reference note, for large binary files) is placed in the
   matching `RECOVERY/` subfolder.
6. The decision is appended to `docs/RECOVERY_LOG.md` and, if excluded,
   also to `docs/EXCLUSION_LOG.md`.
7. `docs/CONTENT_STATUS.md` counters are updated.

## Current state

All four subfolders (CONFIRMED, RECOVERED_NEEDS_VERIFICATION, EXCLUDED,
UNKNOWN) are empty. `.gitkeep` files preserve the folder structure until
real content arrives.
