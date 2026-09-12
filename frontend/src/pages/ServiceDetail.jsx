import { useParams, Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import CTASection from '../components/CTASection.jsx';
import NotFound from './NotFound.jsx';
import { services } from '../data/services.js';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <NotFound />;

  return (
    <>
      <PageHero title={service.name} subtitle={service.shortDescription} />
      <Section>
        <p>{service.description}</p>
        <Link to="/services">&larr; Back to all services</Link>
      </Section>
      <CTASection heading="Ready to get started?" ctaLabel="Get Started" />
    </>
  );
}
