import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import Card from '../components/Card.jsx';
import CTASection from '../components/CTASection.jsx';
import { caseStudies } from '../data/case-studies.js';

export default function CaseStudies() {
  return (
    <>
      <PageHero title="Case Studies" subtitle="CONTENT SOURCE REQUIRED" />
      <Section>
        <div className="case-study-grid">
          {caseStudies.map((cs) => (
            <Card key={cs.id}>
              <h3>{cs.client}</h3>
              <p>{cs.industry}</p>
              <Link to={`/case-studies/${cs.slug}`}>Read case study</Link>
            </Card>
          ))}
        </div>
      </Section>
      <CTASection heading="Want results like these?" ctaLabel="Get Started" />
    </>
  );
}
