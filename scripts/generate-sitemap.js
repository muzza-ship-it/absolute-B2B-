#!/usr/bin/env node
// Generates frontend/public/sitemap.xml from the project's existing,
// already-confirmed route list — does not invent or guess any routes.
//
// This file was referenced by frontend/src/App.jsx and docs/ARCHITECTURE.md
// but was missing (an empty scripts/ directory existed with no file in it).
// Added as part of Phase 4B remediation — see the "Fix SEO foundation" item
// in the remediation prompt.
//
// Scope note: only the 7 top-level routes are included. The dynamic detail
// routes (/services/:slug, /case-studies/:slug) are intentionally excluded
// for now — every one of those pages currently renders placeholder
// "CONTENT SOURCE REQUIRED" content (see docs/CONTENT_GAPS.md), and listing
// placeholder pages in a public sitemap would invite search engines to
// index content that isn't real yet. Once the corresponding real service/
// case-study content lands (tracked in docs/CONTENT_STATUS.md), extend the
// `routes` list below to include the populated slugs.
//
// Usage:
//   node scripts/generate-sitemap.js
// (Wired into frontend's "prebuild" script — see frontend/package.json —
// so it runs automatically before `npm run build`. It has no dependency on
// npm packages, so it works even when node_modules hasn't been installed.)

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const NAV_LINKS_PATH = path.join(ROOT, 'frontend/src/config/navigation.js');
const SITE_CONTENT_PATH = path.join(ROOT, 'frontend/src/data/site-content.js');
const OUTPUT_PATH = path.join(ROOT, 'frontend/public/sitemap.xml');

async function main() {
  // Both source files are real ES modules (frontend/package.json sets
  // "type": "module"); a dynamic import() works here even though this
  // script itself is loaded as CommonJS (no package.json at repo root).
  const navModule = await import(`file://${NAV_LINKS_PATH}`);
  const siteContentModule = await import(`file://${SITE_CONTENT_PATH}`);

  const { NAV_LINKS } = navModule;
  const { siteContent } = siteContentModule;
  const domain = siteContent.domain; // already-confirmed value, not invented

  if (!domain || !Array.isArray(NAV_LINKS) || NAV_LINKS.length === 0) {
    console.error(
      'generate-sitemap.js: could not read domain/NAV_LINKS from the ' +
        'expected source files. Aborting without writing a sitemap.'
    );
    process.exitCode = 1;
    return;
  }

  const urls = NAV_LINKS.map((link) => link.to);
  const lastmod = new Date().toISOString().slice(0, 10);

  const body = urls
    .map(
      (route) => `  <url>
    <loc>https://${domain}${route}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, xml, 'utf8');
  console.log(`generate-sitemap.js: wrote ${urls.length} URLs to ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error('generate-sitemap.js failed:', err);
  process.exitCode = 1;
});
