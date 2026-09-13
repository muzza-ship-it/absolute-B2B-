import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import Card from '../components/Card.jsx';
import CTASection from '../components/CTASection.jsx';
import Seo from '../components/Seo.jsx';
import { caseStudies, caseStudyImpact } from '../data/case-studies.js';
import './CaseStudies.css';

export default function CaseStudies() {
  return (
    <>
      <Seo title="Case Studies" />
      <PageHero title="Success Stories" subtitle="Real results from real clients. See how we've helped businesses generate leads and drive substantial growth." />
      <Section>
        <h2>{caseStudyImpact.heading}</h2>
        <p>{caseStudyImpact.subtitle}</p>
        <div className="case-study-impact">
          {caseStudyImpact.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
        </div>
      </Section>
      {caseStudies.length > 0 && (
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
      )}
      <CTASection heading="CONTENT SOURCE REQUIRED" ctaLabel="Get Started" />
    </>
  );
}
