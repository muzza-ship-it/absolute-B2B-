// Tier count, names, prices, and features are NOT confirmed. A generic
// "Starter / Pro / Enterprise" 3-tier template is deliberately NOT used
// here, because that would imply real plan names/prices that don't exist
// yet — a violation of the no-invented-content rule. One placeholder tier
// proves out the component shape (Pricing.jsx / PricingCard). Replace the
// whole array once real pricing content is supplied — see
// docs/CONTENT_GAPS.md and docs/CONTENT_INGESTION.md.
export const pricingTiers = [
  {
    id: 'tier-placeholder',
    name: 'CONTENT SOURCE REQUIRED',
    price: 'CONTENT SOURCE REQUIRED',
    billingPeriod: 'CONTENT SOURCE REQUIRED',
    description: 'CONTENT SOURCE REQUIRED',
    features: [], // CONTENT SOURCE REQUIRED
    highlighted: false, // whether this is the "most popular" tier — unconfirmed
    ctaLabel: 'CONTENT SOURCE REQUIRED',
    ctaTo: '/contact', // target unconfirmed — see docs/CONTENT_GAPS.md
    _meta: {
      status: 'CONTENT_SOURCE_REQUIRED',
      source: null,
      confidence: null,
      notes: 'Placeholder record only — real tier count is unconfirmed.',
    },
  },
];
