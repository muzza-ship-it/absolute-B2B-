import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import Card from '../components/Card.jsx';
import CTASection from '../components/CTASection.jsx';
import { services } from '../data/services.js';
import './Services.css';

// Renders all 21 service records from data/services.js — the grid itself
// is fully functional; only the per-service text is pending real content.
export default function Services() {
  return (
    <>
      <PageHero title="Services" subtitle="CONTENT SOURCE REQUIRED" />
      <Section>
        <div className="service-grid">
          {services.map((service) => (
            <Card key={service.id} className="service-card">
              <h3>{service.name}</h3>
              <p>{service.shortDescription}</p>
              <Link to={`/services/${service.slug}`}>Learn more</Link>
            </Card>
          ))}
        </div>
      </Section>
      <CTASection heading="Not sure which service fits?" ctaLabel="Get Started" />
    </>
  );
}
