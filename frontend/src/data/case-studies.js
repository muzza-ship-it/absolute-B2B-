// Case study record count is NOT confirmed from the real site — a fixed
// number is deliberately not invented here (unlike services/testimonials,
// where the count was explicitly confirmed). This array ships with ONE
// placeholder record purely to prove out the component/route shape
// (CaseStudies.jsx / CaseStudyDetail.jsx). Replace/extend once the real
// count and content are known — see docs/CONTENT_GAPS.md.
//
// See docs/CONTENT_INGESTION.md for the _meta status system. Case study
// results/metrics are treated with the same caution as testimonials —
// recovered results are RECOVERED_NEEDS_VERIFICATION, never assumed
// genuine just because they appeared on the prior site.
export const caseStudies = [
  {
    id: 'case-study-placeholder',
    slug: 'case-study-placeholder',
    client: 'CONTENT SOURCE REQUIRED',
    industry: 'CONTENT SOURCE REQUIRED',
    challenge: 'CONTENT SOURCE REQUIRED',
    solution: 'CONTENT SOURCE REQUIRED',
    execution: 'CONTENT SOURCE REQUIRED',
    results: 'CONTENT SOURCE REQUIRED',
    metrics: [], // e.g. [{ label: "CONTENT SOURCE REQUIRED", value: "CONTENT SOURCE REQUIRED" }]
    _meta: {
      status: 'CONTENT_SOURCE_REQUIRED',
      source: null,
      confidence: null,
      notes: 'Placeholder record only — real count of case studies on the live site is unconfirmed.',
    },
  },
];
