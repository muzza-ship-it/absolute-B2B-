import { useParams, Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import CTASection from '../components/CTASection.jsx';
import Seo from '../components/Seo.jsx';
import NotFound from './NotFound.jsx';
import { services } from '../data/services.js';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <NotFound />;

  // Only pass the service's own name/description into Seo once it's real
  // content â€” while it's still CONTENT_SOURCE_REQUIRED, fall back to Seo's
  // own neutral defaults rather than putting the literal placeholder
  // string into the page <title>/meta description.
  const hasRealContent = service._meta.status !== 'CONTENT_SOURCE_REQUIRED';

  return (
    <>
      <Seo
        title={hasRealContent ? service.name : 'Services'}
        description={hasRealContent ? service.shortDescription : undefined}
      />
      <PageHero title={service.name} subtitle={service.shortDescription} />
      <Section>
        <p>{service.description}</p>
        <Link to="/services">&larr; Back to all services</Link>
      </Section>
</>
  );
}
