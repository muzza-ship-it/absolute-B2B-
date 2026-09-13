// Central place for one-off page copy that isn't a repeatable data list
// (that lives in services.js / testimonials.js / etc). See
// docs/CONTENT_INGESTION.md for the _meta status system:
// CONFIRMED | RECOVERED_NEEDS_VERIFICATION | CONTENT_SOURCE_REQUIRED.
//
// IMPORTANT: this file must stay loadable by plain Node with no bundler —
// scripts/generate-sitemap.js dynamically `import()`s it directly (see
// that script's comments) so the sitemap can be generated without
// `npm install`. Do NOT import binary assets (images, fonts) here, even
// for brand.logoPath — Node's module loader can't resolve those without
// Vite. The real logo import lives in Header.jsx instead, which is only
// ever loaded through Vite.

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
    statsBand: {
      _meta: { status: 'RECOVERED_NEEDS_VERIFICATION', source: 'screenshot: 07-media-deck-1.png, supplied 2026-09-13', confidence: 'high', notes: 'Media Deck shows the same aggregate 10+/500K+/50+ stats.' },
      items: [
        { value: '10+', label: 'Years Experience' },
        { value: '500K+', label: 'Leads Generated' },
        { value: '50+', label: 'Clients Served' },
      ],
    },
    servicesPreview: {
      _meta: { status: 'RECOVERED_NEEDS_VERIFICATION', source: 'screenshot: 01-home.png / 07-media-deck-1.png, supplied 2026-09-13', confidence: 'high', notes: 'Four visible core services recovered.' },
      featuredServiceSlugs: ['b2b-tech-marketing-sales', 'demand-appointment-generation', 'email-digital-marketing', 'content-strategy-creation'],
    },
    valueProposition: {
      _meta: { status: 'RECOVERED_NEEDS_VERIFICATION', source: 'screenshot: 01-home.png, supplied 2026-09-13', confidence: 'high', notes: 'Visible CTA band copy recovered from screenshot.' },
      heading: 'READY TO TRANSFORM YOUR LEAD GENERATION?',
      body: 'Join 50+ companies who trust us to deliver qualified leads and drive growth. Get started today with a free consultation.',
    },
  },

  about: {
    _meta: {
      status: 'RECOVERED_NEEDS_VERIFICATION',
      source: 'screenshot: 06-about.png, supplied 2026-09-13',
      confidence: 'high',
      notes: 'About page content recovered from the supplied screenshot. Journey continues below the captured viewport; only visible milestones are recorded here.',
    },
    heading: '10 YEARS OF EXCELLENCE',
    intro:
      "Since 2014, we've been helping businesses across Technology, Healthcare, Finance, and E-commerce transform their lead generation strategies and achieve unprecedented growth.",
    story:
      "With over 500,000 qualified leads generated and 50+ satisfied clients, we've established ourselves as the trusted partner for B2B lead generation excellence.",
    stats: [
      { value: '10+', label: 'Years in Business' },
      { value: '500K+', label: 'Leads Generated' },
      { value: '50+', label: 'Happy Clients' },
      { value: '98%', label: 'Client Satisfaction' },
    ],
    values: [
      { title: 'Results Driven', body: 'We measure success by the qualified leads we deliver and the growth we drive for your business.' },
      { title: 'Client Centric', body: 'Your success is our success. We build long-term partnerships based on trust and transparency.' },
      { title: 'Quality First', body: 'Every lead goes through rigorous quality assurance to ensure it meets your exact criteria.' },
      { title: 'Data Driven', body: 'We leverage advanced analytics and market insights to continuously optimize your campaigns.' },
    ],
    journey: [
      { year: '2014', text: 'Founded with a mission to revolutionize B2B lead generation' },
      { year: '2016', text: 'Reached 100 clients and expanded into healthcare sector' },
      { year: '2018', text: 'Generated 100,000+ qualified leads' },
    ],
    mission: 'CONTENT SOURCE REQUIRED',
    team: [],
  },

  contact: {
    email: 'info@absoluteb2b.com',
    phoneDisplay: '+91 8208876771',
    phoneHref: '+918208876771',
   
    _meta: {
      status: 'CONFIRMED',
      source: 'client clarification, 2026-09-13',
      confidence: 'high',
      notes: 'Current contact details were explicitly confirmed by the client. The previous New York address is no longer current. +91 8208876771 and +91 7972855961 are both current primary contact numbers; do not assign founder/partner role labels.',
    },
    address: '8 The Green, Suite R, Kent, Dover, Delaware 19901, United States of America',
    hours: 'Mon–Fri 9AM–6PM EST',
    secondaryPhoneDisplay: '+91 7972855961',
    secondaryPhoneHref: '+917972855961',
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
    _meta: {
      status: 'PARTIALLY_CONFIRMED',
      source: 'owner-supplied file, AB_Logo.jpeg, 2026-09-12',
      confidence: 'high (logo only)',
      notes:
        'Primary logo supplied and integrated (Phase 4B logo integration). ' +
        "logoPath is a descriptive location string, not a live import — " +
        'see the file-level comment above for why (keeps this file ' +
        'Node-loadable for scripts/generate-sitemap.js). Header.jsx does ' +
        'its own `import logo from \'../assets/brand/logo.jpeg\'` to get ' +
        'the actual Vite-resolved asset URL. Brand colors and typeface ' +
        'are still NOT supplied — do not infer them from the logo\'s ' +
        'colors. See frontend/src/assets/brand/.',
    },
    logoPath: 'frontend/src/assets/brand/logo.jpeg',
    colors: null,
    fonts: null,
  },

  seo: {
    _meta: {
      status: 'CONTENT_SOURCE_REQUIRED',
      source: null,
      confidence: null,
      notes:
        'defaultTitle/titleTemplate are structural, not confirmed brand ' +
        'copy. defaultDescription is a deliberately neutral technical ' +
        'fallback (company name only) — not invented marketing copy — ' +
        'used only on pages/fields with no authoritative source content, ' +
        'so a real <meta name="description"> value exists instead of a ' +
        'literal "CONTENT SOURCE REQUIRED" string leaking into page ' +
        'source. Replace with confirmed copy once supplied — see ' +
        'docs/CONTENT_GAPS.md.',
    },
    defaultTitle: 'Absolute B2B',
    titleTemplate: '%s | Absolute B2B',
    defaultDescription: 'Absolute B2B.',
  },
};
