import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import Card from '../components/Card.jsx';
import CTASection from '../components/CTASection.jsx';
import Seo from '../components/Seo.jsx';
import { whitepapers } from '../data/whitepapers.js';
import './Resources.css';

// Restored Phase 4B (whitepaper recovery pass). No "Blogs" / "Resources"
// page or route existed anywhere in the repository before this file was
// added â€” confirmed by a full-repo search (see docs/RECOVERY_LOG.md and
// docs/CONTENT_STATUS.md). This is the smallest clean implementation that
// makes the 20 restored whitepaper PDFs (frontend/public/whitepapers/,
// data/whitepapers.js) discoverable and downloadable, following the same
// PageHero/Section/Card/CTASection layout pattern already used by
// Services.jsx and CaseStudies.jsx. It does not add any new content
// strategy, categories, or copy beyond what the source PDFs themselves
// state.
//
// Fields shown per card are limited to what's verified in
// data/whitepapers.js (title, subtitle, author, page count). Category,
// publication date, and description are omitted unless verified in the source PDF, so they are not
// displayed as if they were real values.
export default function Resources() {
  return (
    <>
      <Seo title="Resources" />
      <PageHero
        title="Resources"
        subtitle="20 white papers from Absolute B2B, available to read or download."
      />
      <Section>
        <div className="whitepaper-grid">
          {whitepapers.map((wp) => (
            <Card key={wp.id} className="whitepaper-card">
              <h3>{wp.title}</h3>
              <p className="whitepaper-card__subtitle">{wp.subtitle}</p>
              <p className="whitepaper-card__meta">
                By {wp.author} Â· {wp.pageCount} pages
              </p>
              <a
                className="btn btn--primary"
                href={wp.filePath}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download PDF
              </a>
            </Card>
          ))}
        </div>
      </Section>
</>
  );
}
