// Restored Phase 4B (whitepaper recovery pass). Source: 20 original PDF
// files supplied directly by the client (Absolute-B2B-White-Papers-1.zip),
// NOT screenshots — the PDFs themselves are the primary source, so title/
// author/publisher/subtitle are read directly from each PDF's embedded
// document properties and cover/table-of-contents page, not transcribed
// from an image. See docs/CONTENT_INGESTION.md for the _meta status
// system and docs/RECOVERY_LOG.md for the per-file intake record.
//
// Contamination gate (docs/CONTENT_INGESTION.md): all 20 files were
// scanned for other companies' names/logos/domains/emails/phone numbers.
// None were found — every file references only Absolute B2B and the
// stated author. See docs/RECOVERY_LOG.md for the per-file entries.
//
// IMPORTANT — what is and is NOT verified here:
// - title, subtitle, author, publisher, linkedin: read directly from the
//   PDF's own text/metadata -> RECOVERED_NEEDS_VERIFICATION (the document
//   says this about itself; the client has not separately confirmed it's
//   accurate/current for public display).
// - category, publicationDate, description/summary, tags, CTA: NOT stated
//   anywhere in the PDF body or metadata -> left as
//   CONTENT SOURCE REQUIRED. Do not infer these from the filename or
//   guess a plausible value.
// - pdf.creationDateUtc is the PDF file's technical CreationDate property
//   (set by the PDF-generation tool, ReportLab, at file-creation time). It
//   is NOT treated as an editorial "publication date" — no such date is
//   stated in the document itself.
// - Original filenames and one-to-one PDF <-> record mapping are
//   preserved exactly; do not renumber or rename.
//
// Exactly 20 records, whitepaper-01 ... whitepaper-20, matching the 20
// PDFs in frontend/public/whitepapers/.
export const whitepapers = [
  {
    id: 'whitepaper-01',
    filename: '01-absolute-b2b-demand-generation-strategy.pdf',
    filePath: '/whitepapers/01-absolute-b2b-demand-generation-strategy.pdf',
    title: 'Absolute B2B Demand Generation Strategy',
    subtitle: 'A Framework for Building Predictable Pipeline in Complex B2B Sales',
    author: 'Muzaffar Shaikh',
    publisher: 'Absolute B2B',
    authorLinkedIn: 'https://linkedin.com/in/muzaffarshaikhtherealog',
    pageCount: 4,
    category: 'CONTENT SOURCE REQUIRED',
    publicationDate: 'CONTENT SOURCE REQUIRED',
    description: 'CONTENT SOURCE REQUIRED',
    tags: [], // CONTENT SOURCE REQUIRED
    cta: 'CONTENT SOURCE REQUIRED',
    _meta: {
      status: 'RECOVERED_NEEDS_VERIFICATION',
      source: 'original supplied PDF: Absolute-B2B-White-Papers-1.zip, 01-absolute-b2b-demand-generation-strategy.pdf',
      confidence: 'high',
      notes: 'Title/subtitle/author/publisher/LinkedIn read directly from the PDF text and document properties. Contamination gate passed (no other company/domain/email/phone detected). Category, publication date, description, tags, and CTA are not stated in the source PDF and remain CONTENT SOURCE REQUIRED.',
    },
    pdf: {
      creationDateUtc: '',
    },
  },
  {
    id: 'whitepaper-02',
    filename: '02-the-client-first-approach.pdf',
    filePath: '/whitepapers/02-the-client-first-approach.pdf',
    title: 'The Client-First Approach',
    subtitle: 'How Absolute B2B Structures Engagements Around Client Outcomes, Not Deliverables',
    author: 'Muzaffar Shaikh',
    publisher: 'Absolute B2B',
    authorLinkedIn: 'https://linkedin.com/in/muzaffarshaikhtherealog',
    pageCount: 4,
    category: 'CONTENT SOURCE REQUIRED',
    publicationDate: 'CONTENT SOURCE REQUIRED',
    description: 'CONTENT SOURCE REQUIRED',
    tags: [], // CONTENT SOURCE REQUIRED
    cta: 'CONTENT SOURCE REQUIRED',
    _meta: {
      status: 'RECOVERED_NEEDS_VERIFICATION',
      source: 'original supplied PDF: Absolute-B2B-White-Papers-1.zip, 02-the-client-first-approach.pdf',
      confidence: 'high',
      notes: 'Title/subtitle/author/publisher/LinkedIn read directly from the PDF text and document properties. Contamination gate passed (no other company/domain/email/phone detected). Category, publication date, description, tags, and CTA are not stated in the source PDF and remain CONTENT SOURCE REQUIRED.',
    },
    pdf: {
      creationDateUtc: '',
    },
  },
  {
    id: 'whitepaper-03',
    filename: '03-hr-tech-specific-campaigns.pdf',
    filePath: '/whitepapers/03-hr-tech-specific-campaigns.pdf',
    title: 'HR Tech Specific Campaigns',
    subtitle: 'An Absolute B2B Case Study in Category-Aware Demand Generation',
    author: 'Muzaffar Shaikh',
    publisher: 'Absolute B2B',
    authorLinkedIn: 'https://linkedin.com/in/muzaffarshaikhtherealog',
    pageCount: 4,
    category: 'CONTENT SOURCE REQUIRED',
    publicationDate: 'CONTENT SOURCE REQUIRED',
    description: 'CONTENT SOURCE REQUIRED',
    tags: [], // CONTENT SOURCE REQUIRED
    cta: 'CONTENT SOURCE REQUIRED',
    _meta: {
      status: 'RECOVERED_NEEDS_VERIFICATION',
      source: 'original supplied PDF: Absolute-B2B-White-Papers-1.zip, 03-hr-tech-specific-campaigns.pdf',
      confidence: 'high',
      notes: 'Title/subtitle/author/publisher/LinkedIn read directly from the PDF text and document properties. Contamination gate passed (no other company/domain/email/phone detected). Category, publication date, description, tags, and CTA are not stated in the source PDF and remain CONTENT SOURCE REQUIRED.',
    },
    pdf: {
      creationDateUtc: '',
    },
  },
  {
    id: 'whitepaper-04',
    filename: '04-the-silent-killer-of-modern-outbound.pdf',
    filePath: '/whitepapers/04-the-silent-killer-of-modern-outbound.pdf',
    title: 'The Silent Killer of Modern Outbound',
    subtitle: 'Understanding the Demand Capture Trap',
    author: 'Muzaffar Shaikh',
    publisher: 'Absolute B2B',
    authorLinkedIn: 'https://linkedin.com/in/muzaffarshaikhtherealog',
    pageCount: 4,
    category: 'CONTENT SOURCE REQUIRED',
    publicationDate: 'CONTENT SOURCE REQUIRED',
    description: 'CONTENT SOURCE REQUIRED',
    tags: [], // CONTENT SOURCE REQUIRED
    cta: 'CONTENT SOURCE REQUIRED',
    _meta: {
      status: 'RECOVERED_NEEDS_VERIFICATION',
      source: 'original supplied PDF: Absolute-B2B-White-Papers-1.zip, 04-the-silent-killer-of-modern-outbound.pdf',
      confidence: 'high',
      notes: 'Title/subtitle/author/publisher/LinkedIn read directly from the PDF text and document properties. Contamination gate passed (no other company/domain/email/phone detected). Category, publication date, description, tags, and CTA are not stated in the source PDF and remain CONTENT SOURCE REQUIRED.',
    },
    pdf: {
      creationDateUtc: '',
    },
  },
  {
    id: 'whitepaper-05',
    filename: '05-why-you-lose-the-deal-before-the-rfp-is-even-written.pdf',
    filePath: '/whitepapers/05-why-you-lose-the-deal-before-the-rfp-is-even-written.pdf',
    title: 'Why You Lose the Deal Before the RFP Is Even Written',
    subtitle: 'The Case for Winning in the Pre-Awareness Stage of B2B Buying',
    author: 'Muzaffar Shaikh',
    publisher: 'Absolute B2B',
    authorLinkedIn: 'https://linkedin.com/in/muzaffarshaikhtherealog',
    pageCount: 4,
    category: 'CONTENT SOURCE REQUIRED',
    publicationDate: 'CONTENT SOURCE REQUIRED',
    description: 'CONTENT SOURCE REQUIRED',
    tags: [], // CONTENT SOURCE REQUIRED
    cta: 'CONTENT SOURCE REQUIRED',
    _meta: {
      status: 'RECOVERED_NEEDS_VERIFICATION',
      source: 'original supplied PDF: Absolute-B2B-White-Papers-1.zip, 05-why-you-lose-the-deal-before-the-rfp-is-even-written.pdf',
      confidence: 'high',
      notes: 'Title/subtitle/author/publisher/LinkedIn read directly from the PDF text and document properties. Contamination gate passed (no other company/domain/email/phone detected). Category, publication date, description, tags, and CTA are not stated in the source PDF and remain CONTENT SOURCE REQUIRED.',
    },
    pdf: {
      creationDateUtc: '',
    },
  },
  {
    id: 'whitepaper-06',
    filename: '06-the-95-5-rule-in-b2b.pdf',
    filePath: '/whitepapers/06-the-95-5-rule-in-b2b.pdf',
    title: 'The 95-5 Rule in B2B',
    subtitle: 'Selling to the 95 Percent Who Aren\'t Ready to Buy',
    author: 'Muzaffar Shaikh',
    publisher: 'Absolute B2B',
    authorLinkedIn: 'https://linkedin.com/in/muzaffarshaikhtherealog',
    pageCount: 4,
    category: 'CONTENT SOURCE REQUIRED',
    publicationDate: 'CONTENT SOURCE REQUIRED',
    description: 'CONTENT SOURCE REQUIRED',
    tags: [], // CONTENT SOURCE REQUIRED
    cta: 'CONTENT SOURCE REQUIRED',
    _meta: {
      status: 'RECOVERED_NEEDS_VERIFICATION',
      source: 'original supplied PDF: Absolute-B2B-White-Papers-1.zip, 06-the-95-5-rule-in-b2b.pdf',
      confidence: 'high',
      notes: 'Title/subtitle/author/publisher/LinkedIn read directly from the PDF text and document properties. Contamination gate passed (no other company/domain/email/phone detected). Category, publication date, description, tags, and CTA are not stated in the source PDF and remain CONTENT SOURCE REQUIRED.',
    },
    pdf: {
      creationDateUtc: '',
    },
  },
  {
    id: 'whitepaper-07',
    filename: '07-building-an-outbound-machine-that-doesn-t-rely-on-cold-calls.pdf',
    filePath: '/whitepapers/07-building-an-outbound-machine-that-doesn-t-rely-on-cold-calls.pdf',
    title: 'Building an Outbound Machine That Doesn\'t Rely on Cold Calls',
    subtitle: 'A Blueprint for Warm, Signal-Driven Outbound',
    author: 'Muzaffar Shaikh',
    publisher: 'Absolute B2B',
    authorLinkedIn: 'https://linkedin.com/in/muzaffarshaikhtherealog',
    pageCount: 4,
    category: 'CONTENT SOURCE REQUIRED',
    publicationDate: 'CONTENT SOURCE REQUIRED',
    description: 'CONTENT SOURCE REQUIRED',
    tags: [], // CONTENT SOURCE REQUIRED
    cta: 'CONTENT SOURCE REQUIRED',
    _meta: {
      status: 'RECOVERED_NEEDS_VERIFICATION',
      source: 'original supplied PDF: Absolute-B2B-White-Papers-1.zip, 07-building-an-outbound-machine-that-doesn-t-rely-on-cold-calls.pdf',
      confidence: 'high',
      notes: 'Title/subtitle/author/publisher/LinkedIn read directly from the PDF text and document properties. Contamination gate passed (no other company/domain/email/phone detected). Category, publication date, description, tags, and CTA are not stated in the source PDF and remain CONTENT SOURCE REQUIRED.',
    },
    pdf: {
      creationDateUtc: '',
    },
  },
  {
    id: 'whitepaper-08',
    filename: '08-how-to-sell-to-buyers-who-aren-t-buying-yet.pdf',
    filePath: '/whitepapers/08-how-to-sell-to-buyers-who-aren-t-buying-yet.pdf',
    title: 'How to Sell to Buyers Who Aren\'t Buying (Yet)',
    subtitle: 'A Playbook for Engaging Pre-Intent Prospects Without Pushing Them Away',
    author: 'Muzaffar Shaikh',
    publisher: 'Absolute B2B',
    authorLinkedIn: 'https://linkedin.com/in/muzaffarshaikhtherealog',
    pageCount: 4,
    category: 'CONTENT SOURCE REQUIRED',
    publicationDate: 'CONTENT SOURCE REQUIRED',
    description: 'CONTENT SOURCE REQUIRED',
    tags: [], // CONTENT SOURCE REQUIRED
    cta: 'CONTENT SOURCE REQUIRED',
    _meta: {
      status: 'RECOVERED_NEEDS_VERIFICATION',
      source: 'original supplied PDF: Absolute-B2B-White-Papers-1.zip, 08-how-to-sell-to-buyers-who-aren-t-buying-yet.pdf',
      confidence: 'high',
      notes: 'Title/subtitle/author/publisher/LinkedIn read directly from the PDF text and document properties. Contamination gate passed (no other company/domain/email/phone detected). Category, publication date, description, tags, and CTA are not stated in the source PDF and remain CONTENT SOURCE REQUIRED.',
    },
    pdf: {
      creationDateUtc: '',
    },
  },
  {
    id: 'whitepaper-09',
    filename: '09-clarity-beats-the-perfect-tool.pdf',
    filePath: '/whitepapers/09-clarity-beats-the-perfect-tool.pdf',
    title: 'Clarity Beats the Perfect Tool',
    subtitle: 'A Framework for AI Adoption in B2B Teams',
    author: 'Muzaffar Shaikh',
    publisher: 'Absolute B2B',
    authorLinkedIn: 'https://linkedin.com/in/muzaffarshaikhtherealog',
    pageCount: 4,
    category: 'CONTENT SOURCE REQUIRED',
    publicationDate: 'CONTENT SOURCE REQUIRED',
    description: 'CONTENT SOURCE REQUIRED',
    tags: [], // CONTENT SOURCE REQUIRED
    cta: 'CONTENT SOURCE REQUIRED',
    _meta: {
      status: 'RECOVERED_NEEDS_VERIFICATION',
      source: 'original supplied PDF: Absolute-B2B-White-Papers-1.zip, 09-clarity-beats-the-perfect-tool.pdf',
      confidence: 'high',
      notes: 'Title/subtitle/author/publisher/LinkedIn read directly from the PDF text and document properties. Contamination gate passed (no other company/domain/email/phone detected). Category, publication date, description, tags, and CTA are not stated in the source PDF and remain CONTENT SOURCE REQUIRED.',
    },
    pdf: {
      creationDateUtc: '',
    },
  },
  {
    id: 'whitepaper-10',
    filename: '10-the-2026-ai-stack-for-b2b-marketers.pdf',
    filePath: '/whitepapers/10-the-2026-ai-stack-for-b2b-marketers.pdf',
    title: 'The 2026 AI Stack for B2B Marketers',
    subtitle: 'Organizing AI Tools Around Function, Not Hype',
    author: 'Muzaffar Shaikh',
    publisher: 'Absolute B2B',
    authorLinkedIn: 'https://linkedin.com/in/muzaffarshaikhtherealog',
    pageCount: 4,
    category: 'CONTENT SOURCE REQUIRED',
    publicationDate: 'CONTENT SOURCE REQUIRED',
    description: 'CONTENT SOURCE REQUIRED',
    tags: [], // CONTENT SOURCE REQUIRED
    cta: 'CONTENT SOURCE REQUIRED',
    _meta: {
      status: 'RECOVERED_NEEDS_VERIFICATION',
      source: 'original supplied PDF: Absolute-B2B-White-Papers-1.zip, 10-the-2026-ai-stack-for-b2b-marketers.pdf',
      confidence: 'high',
      notes: 'Title/subtitle/author/publisher/LinkedIn read directly from the PDF text and document properties. Contamination gate passed (no other company/domain/email/phone detected). Category, publication date, description, tags, and CTA are not stated in the source PDF and remain CONTENT SOURCE REQUIRED.',
    },
    pdf: {
      creationDateUtc: '',
    },
  },
  {
    id: 'whitepaper-11',
    filename: '11-40-ai-tools-for-b2b-teams.pdf',
    filePath: '/whitepapers/11-40-ai-tools-for-b2b-teams.pdf',
    title: '40 AI Tools for B2B Teams',
    subtitle: 'A Practical Buyer\'s Guide by Function',
    author: 'Muzaffar Shaikh',
    publisher: 'Absolute B2B',
    authorLinkedIn: 'https://linkedin.com/in/muzaffarshaikhtherealog',
    pageCount: 4,
    category: 'CONTENT SOURCE REQUIRED',
    publicationDate: 'CONTENT SOURCE REQUIRED',
    description: 'CONTENT SOURCE REQUIRED',
    tags: [], // CONTENT SOURCE REQUIRED
    cta: 'CONTENT SOURCE REQUIRED',
    _meta: {
      status: 'RECOVERED_NEEDS_VERIFICATION',
      source: 'original supplied PDF: Absolute-B2B-White-Papers-1.zip, 11-40-ai-tools-for-b2b-teams.pdf',
      confidence: 'high',
      notes: 'Title/subtitle/author/publisher/LinkedIn read directly from the PDF text and document properties. Contamination gate passed (no other company/domain/email/phone detected). Category, publication date, description, tags, and CTA are not stated in the source PDF and remain CONTENT SOURCE REQUIRED.',
    },
    pdf: {
      creationDateUtc: '',
    },
  },
  {
    id: 'whitepaper-12',
    filename: '12-the-feature-complex.pdf',
    filePath: '/whitepapers/12-the-feature-complex.pdf',
    title: 'The Feature Complex',
    subtitle: 'Why Chasing Features Loses Deals',
    author: 'Muzaffar Shaikh',
    publisher: 'Absolute B2B',
    authorLinkedIn: 'https://linkedin.com/in/muzaffarshaikhtherealog',
    pageCount: 4,
    category: 'CONTENT SOURCE REQUIRED',
    publicationDate: 'CONTENT SOURCE REQUIRED',
    description: 'CONTENT SOURCE REQUIRED',
    tags: [], // CONTENT SOURCE REQUIRED
    cta: 'CONTENT SOURCE REQUIRED',
    _meta: {
      status: 'RECOVERED_NEEDS_VERIFICATION',
      source: 'original supplied PDF: Absolute-B2B-White-Papers-1.zip, 12-the-feature-complex.pdf',
      confidence: 'high',
      notes: 'Title/subtitle/author/publisher/LinkedIn read directly from the PDF text and document properties. Contamination gate passed (no other company/domain/email/phone detected). Category, publication date, description, tags, and CTA are not stated in the source PDF and remain CONTENT SOURCE REQUIRED.',
    },
    pdf: {
      creationDateUtc: '',
    },
  },
  {
    id: 'whitepaper-13',
    filename: '13-why-it-leaders-waste-budget-on-decisions-they-don-t-fully-un.pdf',
    filePath: '/whitepapers/13-why-it-leaders-waste-budget-on-decisions-they-don-t-fully-un.pdf',
    title: 'Why IT Leaders Waste Budget on Decisions They Don\'t Fully Understand',
    subtitle: 'Closing the Knowledge Gap Behind Poor Technology Spend',
    author: 'Muzaffar Shaikh',
    publisher: 'Absolute B2B',
    authorLinkedIn: 'https://linkedin.com/in/muzaffarshaikhtherealog',
    pageCount: 4,
    category: 'CONTENT SOURCE REQUIRED',
    publicationDate: 'CONTENT SOURCE REQUIRED',
    description: 'CONTENT SOURCE REQUIRED',
    tags: [], // CONTENT SOURCE REQUIRED
    cta: 'CONTENT SOURCE REQUIRED',
    _meta: {
      status: 'RECOVERED_NEEDS_VERIFICATION',
      source: 'original supplied PDF: Absolute-B2B-White-Papers-1.zip, 13-why-it-leaders-waste-budget-on-decisions-they-don-t-fully-un.pdf',
      confidence: 'high',
      notes: 'Title/subtitle/author/publisher/LinkedIn read directly from the PDF text and document properties. Contamination gate passed (no other company/domain/email/phone detected). Category, publication date, description, tags, and CTA are not stated in the source PDF and remain CONTENT SOURCE REQUIRED.',
    },
    pdf: {
      creationDateUtc: '',
    },
  },
  {
    id: 'whitepaper-14',
    filename: '14-webinars-as-a-pipeline-engine.pdf',
    filePath: '/whitepapers/14-webinars-as-a-pipeline-engine.pdf',
    title: 'Webinars as a Pipeline Engine',
    subtitle: 'What Most SaaS Companies Get Wrong About Webinar Marketing',
    author: 'Muzaffar Shaikh',
    publisher: 'Absolute B2B',
    authorLinkedIn: 'https://linkedin.com/in/muzaffarshaikhtherealog',
    pageCount: 4,
    category: 'CONTENT SOURCE REQUIRED',
    publicationDate: 'CONTENT SOURCE REQUIRED',
    description: 'CONTENT SOURCE REQUIRED',
    tags: [], // CONTENT SOURCE REQUIRED
    cta: 'CONTENT SOURCE REQUIRED',
    _meta: {
      status: 'RECOVERED_NEEDS_VERIFICATION',
      source: 'original supplied PDF: Absolute-B2B-White-Papers-1.zip, 14-webinars-as-a-pipeline-engine.pdf',
      confidence: 'high',
      notes: 'Title/subtitle/author/publisher/LinkedIn read directly from the PDF text and document properties. Contamination gate passed (no other company/domain/email/phone detected). Category, publication date, description, tags, and CTA are not stated in the source PDF and remain CONTENT SOURCE REQUIRED.',
    },
    pdf: {
      creationDateUtc: '',
    },
  },
  {
    id: 'whitepaper-15',
    filename: '15-why-hr-tech-saas-pipelines-run-dry-before-their-competitors-.pdf',
    filePath: '/whitepapers/15-why-hr-tech-saas-pipelines-run-dry-before-their-competitors-.pdf',
    title: 'Why HR Tech SaaS Pipelines Run Dry Before Their Competitors Do',
    subtitle: 'Diagnosing the Pipeline Gaps Specific to HR Technology Vendors',
    author: 'Muzaffar Shaikh',
    publisher: 'Absolute B2B',
    authorLinkedIn: 'https://linkedin.com/in/muzaffarshaikhtherealog',
    pageCount: 4,
    category: 'CONTENT SOURCE REQUIRED',
    publicationDate: 'CONTENT SOURCE REQUIRED',
    description: 'CONTENT SOURCE REQUIRED',
    tags: [], // CONTENT SOURCE REQUIRED
    cta: 'CONTENT SOURCE REQUIRED',
    _meta: {
      status: 'RECOVERED_NEEDS_VERIFICATION',
      source: 'original supplied PDF: Absolute-B2B-White-Papers-1.zip, 15-why-hr-tech-saas-pipelines-run-dry-before-their-competitors-.pdf',
      confidence: 'high',
      notes: 'Title/subtitle/author/publisher/LinkedIn read directly from the PDF text and document properties. Contamination gate passed (no other company/domain/email/phone detected). Category, publication date, description, tags, and CTA are not stated in the source PDF and remain CONTENT SOURCE REQUIRED.',
    },
    pdf: {
      creationDateUtc: '',
    },
  },
  {
    id: 'whitepaper-16',
    filename: '16-cold-outreach-is-failing.pdf',
    filePath: '/whitepapers/16-cold-outreach-is-failing.pdf',
    title: 'Cold Outreach Is Failing',
    subtitle: 'A Diagnostic for B2B Sales Teams',
    author: 'Muzaffar Shaikh',
    publisher: 'Absolute B2B',
    authorLinkedIn: 'https://linkedin.com/in/muzaffarshaikhtherealog',
    pageCount: 4,
    category: 'CONTENT SOURCE REQUIRED',
    publicationDate: 'CONTENT SOURCE REQUIRED',
    description: 'CONTENT SOURCE REQUIRED',
    tags: [], // CONTENT SOURCE REQUIRED
    cta: 'CONTENT SOURCE REQUIRED',
    _meta: {
      status: 'RECOVERED_NEEDS_VERIFICATION',
      source: 'original supplied PDF: Absolute-B2B-White-Papers-1.zip, 16-cold-outreach-is-failing.pdf',
      confidence: 'high',
      notes: 'Title/subtitle/author/publisher/LinkedIn read directly from the PDF text and document properties. Contamination gate passed (no other company/domain/email/phone detected). Category, publication date, description, tags, and CTA are not stated in the source PDF and remain CONTENT SOURCE REQUIRED.',
    },
    pdf: {
      creationDateUtc: '',
    },
  },
  {
    id: 'whitepaper-17',
    filename: '17-from-founder-led-sales-to-scalable-demand-gen.pdf',
    filePath: '/whitepapers/17-from-founder-led-sales-to-scalable-demand-gen.pdf',
    title: 'From Founder-Led Sales to Scalable Demand Gen',
    subtitle: 'A Transition Playbook for Growing B2B Companies',
    author: 'Muzaffar Shaikh',
    publisher: 'Absolute B2B',
    authorLinkedIn: 'https://linkedin.com/in/muzaffarshaikhtherealog',
    pageCount: 4,
    category: 'CONTENT SOURCE REQUIRED',
    publicationDate: 'CONTENT SOURCE REQUIRED',
    description: 'CONTENT SOURCE REQUIRED',
    tags: [], // CONTENT SOURCE REQUIRED
    cta: 'CONTENT SOURCE REQUIRED',
    _meta: {
      status: 'RECOVERED_NEEDS_VERIFICATION',
      source: 'original supplied PDF: Absolute-B2B-White-Papers-1.zip, 17-from-founder-led-sales-to-scalable-demand-gen.pdf',
      confidence: 'high',
      notes: 'Title/subtitle/author/publisher/LinkedIn read directly from the PDF text and document properties. Contamination gate passed (no other company/domain/email/phone detected). Category, publication date, description, tags, and CTA are not stated in the source PDF and remain CONTENT SOURCE REQUIRED.',
    },
    pdf: {
      creationDateUtc: '',
    },
  },
  {
    id: 'whitepaper-18',
    filename: '18-ai-won-t-replace-b2b.pdf',
    filePath: '/whitepapers/18-ai-won-t-replace-b2b.pdf',
    title: 'AI Won\'t Replace B2B',
    subtitle: 'It Will Replace Slow B2B',
    author: 'Muzaffar Shaikh',
    publisher: 'Absolute B2B',
    authorLinkedIn: 'https://linkedin.com/in/muzaffarshaikhtherealog',
    pageCount: 4,
    category: 'CONTENT SOURCE REQUIRED',
    publicationDate: 'CONTENT SOURCE REQUIRED',
    description: 'CONTENT SOURCE REQUIRED',
    tags: [], // CONTENT SOURCE REQUIRED
    cta: 'CONTENT SOURCE REQUIRED',
    _meta: {
      status: 'RECOVERED_NEEDS_VERIFICATION',
      source: 'original supplied PDF: Absolute-B2B-White-Papers-1.zip, 18-ai-won-t-replace-b2b.pdf',
      confidence: 'high',
      notes: 'Title/subtitle/author/publisher/LinkedIn read directly from the PDF text and document properties. Contamination gate passed (no other company/domain/email/phone detected). Category, publication date, description, tags, and CTA are not stated in the source PDF and remain CONTENT SOURCE REQUIRED.',
    },
    pdf: {
      creationDateUtc: '',
    },
  },
  {
    id: 'whitepaper-19',
    filename: '19-the-economics-of-inbound-vs-outbound-in-2026-b2b.pdf',
    filePath: '/whitepapers/19-the-economics-of-inbound-vs-outbound-in-2026-b2b.pdf',
    title: 'The Economics of Inbound vs Outbound in 2026 B2B',
    subtitle: 'Rethinking the Cost and Payoff Structure of Each Motion',
    author: 'Muzaffar Shaikh',
    publisher: 'Absolute B2B',
    authorLinkedIn: 'https://linkedin.com/in/muzaffarshaikhtherealog',
    pageCount: 4,
    category: 'CONTENT SOURCE REQUIRED',
    publicationDate: 'CONTENT SOURCE REQUIRED',
    description: 'CONTENT SOURCE REQUIRED',
    tags: [], // CONTENT SOURCE REQUIRED
    cta: 'CONTENT SOURCE REQUIRED',
    _meta: {
      status: 'RECOVERED_NEEDS_VERIFICATION',
      source: 'original supplied PDF: Absolute-B2B-White-Papers-1.zip, 19-the-economics-of-inbound-vs-outbound-in-2026-b2b.pdf',
      confidence: 'high',
      notes: 'Title/subtitle/author/publisher/LinkedIn read directly from the PDF text and document properties. Contamination gate passed (no other company/domain/email/phone detected). Category, publication date, description, tags, and CTA are not stated in the source PDF and remain CONTENT SOURCE REQUIRED.',
    },
    pdf: {
      creationDateUtc: '',
    },
  },
  {
    id: 'whitepaper-20',
    filename: '20-building-trust-before-pipeline.pdf',
    filePath: '/whitepapers/20-building-trust-before-pipeline.pdf',
    title: 'Building Trust Before Pipeline',
    subtitle: 'A Client-First Demand Generation Model',
    author: 'Muzaffar Shaikh',
    publisher: 'Absolute B2B',
    authorLinkedIn: 'https://linkedin.com/in/muzaffarshaikhtherealog',
    pageCount: 4,
    category: 'CONTENT SOURCE REQUIRED',
    publicationDate: 'CONTENT SOURCE REQUIRED',
    description: 'CONTENT SOURCE REQUIRED',
    tags: [], // CONTENT SOURCE REQUIRED
    cta: 'CONTENT SOURCE REQUIRED',
    _meta: {
      status: 'RECOVERED_NEEDS_VERIFICATION',
      source: 'original supplied PDF: Absolute-B2B-White-Papers-1.zip, 20-building-trust-before-pipeline.pdf',
      confidence: 'high',
      notes: 'Title/subtitle/author/publisher/LinkedIn read directly from the PDF text and document properties. Contamination gate passed (no other company/domain/email/phone detected). Category, publication date, description, tags, and CTA are not stated in the source PDF and remain CONTENT SOURCE REQUIRED.',
    },
    pdf: {
      creationDateUtc: '',
    },
  },
];
