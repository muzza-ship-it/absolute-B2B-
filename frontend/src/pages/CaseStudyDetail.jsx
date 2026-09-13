import { useParams, Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import CTASection from '../components/CTASection.jsx';
import Seo from '../components/Seo.jsx';
import NotFound from './NotFound.jsx';
import { caseStudies } from '../data/case-studies.js';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const caseStudy = caseStudies.find((c) => c.slug === slug);

  if (!caseStudy) return <NotFound />;

  const hasRealContent = caseStudy._meta.status !== 'CONTENT_SOURCE_REQUIRED';

  return (
    <>
      <Seo
        title={hasRealContent ? caseStudy.client : 'Case Studies'}
        description={hasRealContent ? caseStudy.results : undefined}
      />
      <PageHero title={caseStudy.client} subtitle={caseStudy.industry} />
      <Section>
        <h3>Challenge</h3>
        <p>{caseStudy.challenge}</p>
        <h3>Solution</h3>
        <p>{caseStudy.solution}</p>
        <h3>Execution</h3>
        <p>{caseStudy.execution}</p>
        <h3>Results</h3>
        <p>{caseStudy.results}</p>
        <Link to="/case-studies">&larr; Back to all case studies</Link>
      </Section>
      <CTASection heading="CONTENT SOURCE REQUIRED" ctaLabel="Get Started" />
    </>
  );
}
