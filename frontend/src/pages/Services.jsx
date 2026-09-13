import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import Card from '../components/Card.jsx';
import CTASection from '../components/CTASection.jsx';
import Seo from '../components/Seo.jsx';
import { services } from '../data/services.js';
import './Services.css';

// Renders all 21 service records from data/services.js — the grid itself
// is fully functional; only the per-service text is pending real content.
export default function Services() {
  return (
    <>
      <Seo title="Services" />
      <PageHero title="Services" subtitle="Comprehensive B2B lead generation solutions designed to drive growth across Technology, Healthcare, Finance, and E-commerce industries." />
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
      <CTASection heading="CONTENT SOURCE REQUIRED" ctaLabel="Get Started" />
    </>
  );
}
