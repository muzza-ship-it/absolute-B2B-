// Exactly 4 confirmed service records (service-01 … service-04), matching the
// confirmed count on the existing Absolute B2B site. Field values are
// intentionally left as "CONTENT SOURCE REQUIRED" rather than invented —
// see docs/CONTENT_GAPS.md. Once real content is supplied, only this file
// needs to change; Services.jsx / ServiceDetail.jsx already render from it.
//
// Every record carries a `_meta` block tracking recovery status per
// docs/CONTENT_INGESTION.md — CONFIRMED | RECOVERED_NEEDS_VERIFICATION |
// CONTENT_SOURCE_REQUIRED. IDs/slugs are stable and must not be
// renumbered as real content is ingested.
export const services = [
  {
    id: "service-01",
    slug: "b2b-tech-marketing-sales",
    name: "B2B Tech Marketing & Sales",
    shortDescription: "Strategic outbound campaigns and sales enablement services designed to reach decision-makers in the tech industry. We accelerate your sales cycle with data-driven insights and proven methodologies.",
    description: "Strategic outbound campaigns and sales enablement services designed to reach decision-makers in the tech industry. We accelerate your sales cycle with data-driven insights and proven methodologies.",
    deliverables: [],
    process: [],
    outcomes: [],
    industries: ["Technology & SaaS"],
    _meta: {
      status: "RECOVERED_NEEDS_VERIFICATION",
      source: "screenshot: 07-media-deck-1.png / 01-home.png, supplied 2026-09-13",
      confidence: "high",
      notes: "Recovered from the supplied existing-site screenshot(s). No additional deliverables/process/outcome fields were inferred.",
    },
  },
  {
    id: "service-02",
    slug: "demand-appointment-generation",
    name: "Demand & Appointment Generation",
    shortDescription: "Fill your pipeline with qualified prospects and schedule meetings with decision-makers.",
    description: "Fill your pipeline with qualified prospects and schedule meetings with decision-makers.",
    deliverables: [],
    process: [],
    outcomes: [],
    industries: ["Technology & SaaS", "Healthcare & Medical", "Finance & Insurance", "E-commerce & Retail", "Manufacturing", "Professional Services"],
    _meta: {
      status: "RECOVERED_NEEDS_VERIFICATION",
      source: "screenshot: 07-media-deck-1.png, supplied 2026-09-13",
      confidence: "high",
      notes: "Recovered from the supplied existing-site screenshot(s). No additional deliverables/process/outcome fields were inferred.",
    },
  },
  {
    id: "service-03",
    slug: "email-digital-marketing",
    name: "Email & Digital Marketing",
    shortDescription: "Targeted campaigns with exceptional open rates and conversion performance.",
    description: "Targeted campaigns with exceptional open rates and conversion performance.",
    deliverables: [],
    process: [],
    outcomes: [],
    industries: ["Technology & SaaS", "Healthcare & Medical", "Finance & Insurance", "E-commerce & Retail", "Manufacturing", "Professional Services"],
    _meta: {
      status: "RECOVERED_NEEDS_VERIFICATION",
      source: "screenshot: 07-media-deck-1.png / 01-home.png, supplied 2026-09-13",
      confidence: "high",
      notes: "Recovered from the supplied existing-site screenshot(s). No additional deliverables/process/outcome fields were inferred.",
    },
  },
  {
    id: "service-04",
    slug: "content-strategy-creation",
    name: "Content Strategy & Creation",
    shortDescription: "Position your brand as a thought leader with engaging content marketing.",
    description: "Position your brand as a thought leader with engaging content marketing.",
    deliverables: [],
    process: [],
    outcomes: [],
    industries: ["Technology & SaaS", "Healthcare & Medical", "Finance & Insurance", "E-commerce & Retail", "Manufacturing", "Professional Services"],
    _meta: {
      status: "RECOVERED_NEEDS_VERIFICATION",
      source: "screenshot: 07-media-deck-1.png / 01-home.png, supplied 2026-09-13",
      confidence: "high",
      notes: "Recovered from the supplied existing-site screenshot(s). No additional deliverables/process/outcome fields were inferred.",
    },
  },
];