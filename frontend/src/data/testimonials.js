// Exactly 10 testimonial records, matching the confirmed count and the
// confirmed industry filter categories (Technology, Healthcare, Finance,
// E-commerce). Quote/author/company text is intentionally not invented —
// see docs/CONTENT_GAPS.md.
//
// All 10 records were CONTENT_SOURCE_REQUIRED with no recovered text, so
// they have been removed rather than left rendering placeholder strings.
// Add real, client-confirmed testimonials here once available — see
// docs/CONTENT_INGESTION.md "Testimonial-Specific Caution": status starts
// at CONTENT_SOURCE_REQUIRED and, even once recovered from a screenshot or
// export, moves only to RECOVERED_NEEDS_VERIFICATION — never straight to
// CONFIRMED — until the client explicitly confirms the testimonial is
// genuine and current.
export const INDUSTRY_FILTERS = ["All", "Technology", "Healthcare", "Finance", "E-commerce"];

export const testimonials = [];