# Brand Assets Manifest

Nothing has been supplied yet. This file is the checklist/record for what
lands in this folder as it arrives.

| Asset | File | Status | Source |
|---|---|---|---|
| Logo (primary) | — | CONTENT SOURCE REQUIRED | — |
| Logo (mark/favicon variant) | — | CONTENT SOURCE REQUIRED | — |
| Font file(s) / font names | — | CONTENT SOURCE REQUIRED | — |
| Brand color palette | — | CONTENT SOURCE REQUIRED | — |

Once a logo file is supplied, it goes here and `frontend/src/data/site-content.js`
→ `brand.logoPath` is updated to point at it; `Header.jsx`'s text wordmark
placeholder is then swapped for the real logo. Same pattern for fonts
(added to `frontend/src/styles/tokens.css` `--font-*` variables) and
colors (`--color-*` variables in the same file).
