# Recovery Log

Append-only audit trail. One entry per file, added the moment it's
reviewed — never edited or removed afterward (a re-classification gets a
*new* entry referencing the original, not a rewrite of history).

## Entry format

```
---
Timestamp: <ISO date/time>
Filename: <original filename>
Action taken: <e.g. "reviewed per REVIEW_PROTOCOL.md", "moved to RECOVERY/EXCLUDED/">
Classification: CONFIRMED | RECOVERED_NEEDS_VERIFICATION | EXCLUDED | UNKNOWN
Reviewer notes: <free text — what was found, why this classification>
---
```

## Log

_(Empty. No files have been uploaded or reviewed yet — nothing in this
conversation has produced a real recovery entry. This log will not contain
fabricated entries; every entry from this point forward corresponds to an
actual file a person supplied.)_
