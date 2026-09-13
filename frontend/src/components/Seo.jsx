import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteContent } from '../data/site-content.js';

// Lightweight, dependency-free per-route SEO manager.
//
// Deliberately implemented with plain DOM tag management instead of adding
// react-helmet/react-helmet-async, per Phase 4B remediation scope ("do not
// add unnecessary dependencies"). This is a client-side SPA with no SSR/
// prerendering, so these tags are set after initial mount — sufficient for
// browser tabs/bookmarks/social-share debuggers that execute JS, but a
// crawler that does not execute JS will still only see the static
// frontend/index.html <title>. That limitation is inherent to the current
// architecture (documented in docs/ARCHITECTURE.md) and is not something
// this component can fix without introducing SSR/prerendering, which is
// out of scope for this remediation pass.
//
// CONTENT RULE: every value rendered here is either (a) already-confirmed
// site copy from site-content.js, (b) a structural fact (route path,
// confirmed domain, confirmed contact info), or (c) the neutral technical
// fallback defined in site-content.js -> seo.defaultDescription. Nothing
// here invents marketing claims, statistics, or descriptions.

const { domain, seo } = siteContent;
const SITE_ORIGIN = `https://${domain}`;

function setMetaByName(name, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setMetaByProperty(property, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setCanonical(href) {
  let tag = document.querySelector('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', 'canonical');
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

/**
 * @param {string} [title] - Page-specific title segment. Falls back to
 *   seo.defaultTitle (already-confirmed structural default) if omitted.
 * @param {string} [description] - Authoritative page description, if one
 *   exists. Falls back to seo.defaultDescription (neutral technical
 *   fallback, not invented copy) if omitted.
 */
export default function Seo({ title, description }) {
  const location = useLocation();

  useEffect(() => {
    const resolvedTitle = title
      ? seo.titleTemplate.replace('%s', title)
      : seo.defaultTitle;
    const resolvedDescription = description || seo.defaultDescription;
    const canonicalUrl = `${SITE_ORIGIN}${location.pathname}`;

    document.title = resolvedTitle;

    setMetaByName('description', resolvedDescription);
    setCanonical(canonicalUrl);

    // Open Graph — no og:image tag is set: the real header logo
    // (frontend/src/assets/brand/logo.jpeg, integrated Phase 4B) is not a
    // substitute for a proper ~1200x630 social-share image, and none has
    // been supplied — see docs/CONTENT_GAPS.md.
    setMetaByProperty('og:type', 'website');
    setMetaByProperty('og:title', resolvedTitle);
    setMetaByProperty('og:description', resolvedDescription);
    setMetaByProperty('og:url', canonicalUrl);
    setMetaByProperty('og:site_name', seo.defaultTitle);

    // Twitter — "summary" (no image) card, consistent with no invented
    // imagery above.
    setMetaByName('twitter:card', 'summary');
    setMetaByName('twitter:title', resolvedTitle);
    setMetaByName('twitter:description', resolvedDescription);
  }, [title, description, location.pathname]);

  return null;
}
