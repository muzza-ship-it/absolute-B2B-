// Exactly 10 testimonial records, matching the confirmed count and the
// confirmed industry filter categories (Technology, Healthcare, Finance,
// E-commerce). Quote/author/company text is intentionally not invented —
// see docs/CONTENT_GAPS.md.
//
// _meta.status starts CONTENT_SOURCE_REQUIRED for every record and, even
// once text is recovered from a screenshot/export of the prior Emergent
// site, moves only to RECOVERED_NEEDS_VERIFICATION — never straight to
// CONFIRMED — until the client explicitly confirms the testimonial is
// genuine and current. See docs/CONTENT_INGESTION.md.
export const INDUSTRY_FILTERS = ["All", "Technology", "Healthcare", "Finance", "E-commerce"];

export const testimonials = [
  {
    id: "testimonial-01",
    quote: "CONTENT SOURCE REQUIRED",
    authorName: "CONTENT SOURCE REQUIRED",
    authorTitle: "CONTENT SOURCE REQUIRED",
    company: "CONTENT SOURCE REQUIRED",
    industry: null, // one of: "Technology" | "Healthcare" | "Finance" | "E-commerce" — CONTENT SOURCE REQUIRED
    rating: null, // CONTENT SOURCE REQUIRED (assumed 5-star per confirmed design, not yet verified per-entry)
    _meta: {
      status: "CONTENT_SOURCE_REQUIRED",
      source: null,
      confidence: null,
      // Per Phase 4A instruction: even once recovered from the prior site,
      // authenticity of the client/quote is not assumed — see
      // docs/CONTENT_INGESTION.md "Testimonial-Specific Caution".
      notes: null,
    },
  },
  {
    id: "testimonial-02",
    quote: "CONTENT SOURCE REQUIRED",
    authorName: "CONTENT SOURCE REQUIRED",
    authorTitle: "CONTENT SOURCE REQUIRED",
    company: "CONTENT SOURCE REQUIRED",
    industry: null, // one of: "Technology" | "Healthcare" | "Finance" | "E-commerce" — CONTENT SOURCE REQUIRED
    rating: null, // CONTENT SOURCE REQUIRED (assumed 5-star per confirmed design, not yet verified per-entry)
    _meta: {
      status: "CONTENT_SOURCE_REQUIRED",
      source: null,
      confidence: null,
      // Per Phase 4A instruction: even once recovered from the prior site,
      // authenticity of the client/quote is not assumed — see
      // docs/CONTENT_INGESTION.md "Testimonial-Specific Caution".
      notes: null,
    },
  },
  {
    id: "testimonial-03",
    quote: "CONTENT SOURCE REQUIRED",
    authorName: "CONTENT SOURCE REQUIRED",
    authorTitle: "CONTENT SOURCE REQUIRED",
    company: "CONTENT SOURCE REQUIRED",
    industry: null, // one of: "Technology" | "Healthcare" | "Finance" | "E-commerce" — CONTENT SOURCE REQUIRED
    rating: null, // CONTENT SOURCE REQUIRED (assumed 5-star per confirmed design, not yet verified per-entry)
    _meta: {
      status: "CONTENT_SOURCE_REQUIRED",
      source: null,
      confidence: null,
      // Per Phase 4A instruction: even once recovered from the prior site,
      // authenticity of the client/quote is not assumed — see
      // docs/CONTENT_INGESTION.md "Testimonial-Specific Caution".
      notes: null,
    },
  },
  {
    id: "testimonial-04",
    quote: "CONTENT SOURCE REQUIRED",
    authorName: "CONTENT SOURCE REQUIRED",
    authorTitle: "CONTENT SOURCE REQUIRED",
    company: "CONTENT SOURCE REQUIRED",
    industry: null, // one of: "Technology" | "Healthcare" | "Finance" | "E-commerce" — CONTENT SOURCE REQUIRED
    rating: null, // CONTENT SOURCE REQUIRED (assumed 5-star per confirmed design, not yet verified per-entry)
    _meta: {
      status: "CONTENT_SOURCE_REQUIRED",
      source: null,
      confidence: null,
      // Per Phase 4A instruction: even once recovered from the prior site,
      // authenticity of the client/quote is not assumed — see
      // docs/CONTENT_INGESTION.md "Testimonial-Specific Caution".
      notes: null,
    },
  },
  {
    id: "testimonial-05",
    quote: "CONTENT SOURCE REQUIRED",
    authorName: "CONTENT SOURCE REQUIRED",
    authorTitle: "CONTENT SOURCE REQUIRED",
    company: "CONTENT SOURCE REQUIRED",
    industry: null, // one of: "Technology" | "Healthcare" | "Finance" | "E-commerce" — CONTENT SOURCE REQUIRED
    rating: null, // CONTENT SOURCE REQUIRED (assumed 5-star per confirmed design, not yet verified per-entry)
    _meta: {
      status: "CONTENT_SOURCE_REQUIRED",
      source: null,
      confidence: null,
      // Per Phase 4A instruction: even once recovered from the prior site,
      // authenticity of the client/quote is not assumed — see
      // docs/CONTENT_INGESTION.md "Testimonial-Specific Caution".
      notes: null,
    },
  },
  {
    id: "testimonial-06",
    quote: "CONTENT SOURCE REQUIRED",
    authorName: "CONTENT SOURCE REQUIRED",
    authorTitle: "CONTENT SOURCE REQUIRED",
    company: "CONTENT SOURCE REQUIRED",
    industry: null, // one of: "Technology" | "Healthcare" | "Finance" | "E-commerce" — CONTENT SOURCE REQUIRED
    rating: null, // CONTENT SOURCE REQUIRED (assumed 5-star per confirmed design, not yet verified per-entry)
    _meta: {
      status: "CONTENT_SOURCE_REQUIRED",
      source: null,
      confidence: null,
      // Per Phase 4A instruction: even once recovered from the prior site,
      // authenticity of the client/quote is not assumed — see
      // docs/CONTENT_INGESTION.md "Testimonial-Specific Caution".
      notes: null,
    },
  },
  {
    id: "testimonial-07",
    quote: "CONTENT SOURCE REQUIRED",
    authorName: "CONTENT SOURCE REQUIRED",
    authorTitle: "CONTENT SOURCE REQUIRED",
    company: "CONTENT SOURCE REQUIRED",
    industry: null, // one of: "Technology" | "Healthcare" | "Finance" | "E-commerce" — CONTENT SOURCE REQUIRED
    rating: null, // CONTENT SOURCE REQUIRED (assumed 5-star per confirmed design, not yet verified per-entry)
    _meta: {
      status: "CONTENT_SOURCE_REQUIRED",
      source: null,
      confidence: null,
      // Per Phase 4A instruction: even once recovered from the prior site,
      // authenticity of the client/quote is not assumed — see
      // docs/CONTENT_INGESTION.md "Testimonial-Specific Caution".
      notes: null,
    },
  },
  {
    id: "testimonial-08",
    quote: "CONTENT SOURCE REQUIRED",
    authorName: "CONTENT SOURCE REQUIRED",
    authorTitle: "CONTENT SOURCE REQUIRED",
    company: "CONTENT SOURCE REQUIRED",
    industry: null, // one of: "Technology" | "Healthcare" | "Finance" | "E-commerce" — CONTENT SOURCE REQUIRED
    rating: null, // CONTENT SOURCE REQUIRED (assumed 5-star per confirmed design, not yet verified per-entry)
    _meta: {
      status: "CONTENT_SOURCE_REQUIRED",
      source: null,
      confidence: null,
      // Per Phase 4A instruction: even once recovered from the prior site,
      // authenticity of the client/quote is not assumed — see
      // docs/CONTENT_INGESTION.md "Testimonial-Specific Caution".
      notes: null,
    },
  },
  {
    id: "testimonial-09",
    quote: "CONTENT SOURCE REQUIRED",
    authorName: "CONTENT SOURCE REQUIRED",
    authorTitle: "CONTENT SOURCE REQUIRED",
    company: "CONTENT SOURCE REQUIRED",
    industry: null, // one of: "Technology" | "Healthcare" | "Finance" | "E-commerce" — CONTENT SOURCE REQUIRED
    rating: null, // CONTENT SOURCE REQUIRED (assumed 5-star per confirmed design, not yet verified per-entry)
    _meta: {
      status: "CONTENT_SOURCE_REQUIRED",
      source: null,
      confidence: null,
      // Per Phase 4A instruction: even once recovered from the prior site,
      // authenticity of the client/quote is not assumed — see
      // docs/CONTENT_INGESTION.md "Testimonial-Specific Caution".
      notes: null,
    },
  },
  {
    id: "testimonial-10",
    quote: "CONTENT SOURCE REQUIRED",
    authorName: "CONTENT SOURCE REQUIRED",
    authorTitle: "CONTENT SOURCE REQUIRED",
    company: "CONTENT SOURCE REQUIRED",
    industry: null, // one of: "Technology" | "Healthcare" | "Finance" | "E-commerce" — CONTENT SOURCE REQUIRED
    rating: null, // CONTENT SOURCE REQUIRED (assumed 5-star per confirmed design, not yet verified per-entry)
    _meta: {
      status: "CONTENT_SOURCE_REQUIRED",
      source: null,
      confidence: null,
      // Per Phase 4A instruction: even once recovered from the prior site,
      // authenticity of the client/quote is not assumed — see
      // docs/CONTENT_INGESTION.md "Testimonial-Specific Caution".
      notes: null,
    },
  },
];
