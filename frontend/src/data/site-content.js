// Central place for one-off page copy that isn't a repeatable data list
// (that lives in services.js / testimonials.js / etc). See
// docs/CONTENT_INGESTION.md for the _meta status system:
// CONFIRMED | RECOVERED_NEEDS_VERIFICATION | CONTENT_SOURCE_REQUIRED.

export const siteContent = {
  domain: 'absoluteb2b.com',

  home: {
    hero: {
      headline: 'TRANSFORM YOUR B2B LEAD GENERATION',
      supportingCopy:
        "For over 10 years, we've helped businesses across Technology, " +
        'Healthcare, Finance, and E-commerce generate over 500,000 ' +
        'qualified leads. Partner with the experts who deliver measurable ' +
        'results.',
      primaryCtaLabel: 'Get Started',
      _meta: {
        status: 'CONFIRMED',
        source: 'client message, 2026-09-08',
        confidence: 'high',
        notes:
          'The copy itself is confirmed as the existing site\'s hero text. ' +
          'The two factual claims inside it are NOT independently verified — ' +
          'see claimsToVerify below. Do not drop this caveat even if this ' +
          'block is otherwise treated as confirmed copy.',
      },
    },
    // "over 10 years" and "500,000 qualified leads" — explicitly flagged,
    // per Phase 4A instruction, as claims to verify before production
    // launch, regardless of any other status applied to the surrounding copy.
    claimsToVerify: [
      { claim: 'over 10 years', status: 'UNVERIFIED' },
      { claim: '500,000 qualified leads', status: 'UNVERIFIED' },
    ],
    // Stats band, services preview, industries block detail, value prop,
    // testimonial/case-study previews: CONTENT SOURCE REQUIRED — presence,
    // order, and copy unconfirmed beyond the hero above.
    statsBand: {
      _meta: { status: 'CONTENT_SOURCE_REQUIRED', source: null, confidence: null, notes: null },
      items: [], // e.g. [{ value: "CONTENT SOURCE REQUIRED", label: "CONTENT SOURCE REQUIRED" }]
    },
    servicesPreview: {
      _meta: { status: 'CONTENT_SOURCE_REQUIRED', source: null, confidence: null, notes: 'Which services are featured, and in what order, is unconfirmed.' },
      featuredServiceSlugs: [],
    },
    valueProposition: {
      _meta: { status: 'CONTENT_SOURCE_REQUIRED', source: null, confidence: null, notes: null },
      heading: 'CONTENT SOURCE REQUIRED',
      body: 'CONTENT SOURCE REQUIRED',
    },
  },

  about: {
    _meta: { status: 'CONTENT_SOURCE_REQUIRED', source: null, confidence: null, notes: 'No About copy supplied yet.' },
    intro: 'CONTENT SOURCE REQUIRED',
    story: 'CONTENT SOURCE REQUIRED',
    mission: 'CONTENT SOURCE REQUIRED',
    team: [], // presence on the real site unconfirmed
  },

  contact: {
    email: 'info@absoluteb2b.com',
    phoneDisplay: '+1 (518) 740-9315',
    phoneHref: '+15187409315',
    _meta: {
      status: 'CONFIRMED',
      source: 'client message, 2026-09-08',
      confidence: 'high',
      notes: null,
    },
    address: null, // CONTENT SOURCE REQUIRED — presence unconfirmed
    hours: null, // CONTENT SOURCE REQUIRED — presence unconfirmed
  },

  navigation: {
    // Link labels/targets are confirmed via the 7-route structure already
    // in frontend/src/config/navigation.js. Anything beyond that — e.g.
    // whether the real header shows extra utility links — is unconfirmed.
    _meta: { status: 'CONFIRMED', source: 'client message, 2026-09-08 (7-page structure)', confidence: 'high', notes: null },
  },

  footer: {
    _meta: { status: 'CONTENT_SOURCE_REQUIRED', source: null, confidence: null, notes: 'Company description, social links, legal links all unconfirmed.' },
    companyDescription: 'CONTENT SOURCE REQUIRED',
    socialLinks: [], // CONTENT SOURCE REQUIRED
    legalLinks: [], // CONTENT SOURCE REQUIRED — presence unconfirmed
  },

  brand: {
    _meta: { status: 'CONTENT_SOURCE_REQUIRED', source: null, confidence: null, notes: 'Logo file, brand colors, and typeface not yet supplied. See frontend/src/assets/brand/.' },
    logoPath: null,
    colors: null,
    fonts: null,
  },

  seo: {
    _meta: { status: 'CONTENT_SOURCE_REQUIRED', source: null, confidence: null, notes: 'Placeholders below are structurally reasonable, not confirmed brand copy.' },
    defaultTitle: 'Absolute B2B',
    titleTemplate: '%s | Absolute B2B',
    defaultDescription:
      'CONTENT SOURCE REQUIRED — replace with confirmed meta description.',
  },
};
