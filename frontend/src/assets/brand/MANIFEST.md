# Brand Assets Manifest

| Asset | File | Status | Source |
|---|---|---|---|
| Logo (primary) | `logo.jpeg` | **SUPPLIED — integrated** | owner-supplied file `AB_Logo.jpeg`, 2026-09-12 |
| Logo (mark/favicon variant) | — | CONTENT SOURCE REQUIRED | — (see note below) |
| Font file(s) / font names | — | CONTENT SOURCE REQUIRED | — |
| Brand color palette | — | CONTENT SOURCE REQUIRED | — |

## Primary logo (Phase 4B logo integration, 2026-09-12)

- **File:** `frontend/src/assets/brand/logo.jpeg` — byte-identical copy of
  the owner-supplied `AB_Logo.jpeg` (verified via matching MD5 checksum at
  integration time). Not redrawn, not recreated, not altered.
- **Format/dimensions:** JPEG, RGB, 428×173px, ~2.47:1 aspect ratio, no
  transparency, near-white (`rgb(254,254,254)`) flat background.
- **Used in:** `Header.jsx` (imports the file directly — `import logo from
  '../assets/brand/logo.jpeg'` — so Vite resolves it to a real build asset
  URL), rendered as an `<img>` in the site header, linked to `/`, with
  `alt="Absolute B2B"`. `frontend/src/data/site-content.js` →
  `brand.logoPath` holds a descriptive path string for reference, not a
  live import — that file is dynamically loaded by plain Node in
  `scripts/generate-sitemap.js` and can't resolve binary asset imports, so
  the real import lives only in `Header.jsx`. Not used anywhere else — no
  other component currently has a logo/brand-image slot (see
  `docs/SITE_INVENTORY.md` for the confirmed per-page component list).

## Favicon — still unresolved, and why

The supplied logo is a wide horizontal lockup (icon + "ABSOLUTE B2B"
wordmark), not a square icon. Two ways to get a favicon from it were
considered and both were rejected as unsafe to do without owner sign-off:

1. **Crop out just the circular icon** — would require judging exact pixel
   crop boundaries by eye (where the icon ends and the "A" of "ABSOLUTE"
   begins). That's an interpretive edit, not a mechanical one, and risks
   cutting the mark incorrectly.
2. **Letterbox the whole lockup onto a square canvas** — technically
   faithful (no cropping, no recoloring, real background color reused),
   but at real favicon sizes (16×16–32×32px) it would render as an
   illegible smudge, not a usable icon.

No favicon was created. See `frontend/index.html` for the corresponding
comment. This needs either a dedicated square icon-only mark from the
owner, or explicit sign-off on where to crop the supplied lockup — not a
default choice made here.

## Fonts / colors — unchanged, still required

Not supplied. Do not infer brand colors from the logo's red/black/white —
see the note in `site-content.js` → `brand._meta`. Once font files/names
and an official color palette are supplied, add them to
`frontend/src/styles/tokens.css` (`--font-*` / `--color-*` variables),
following the same "real source only" rule.
