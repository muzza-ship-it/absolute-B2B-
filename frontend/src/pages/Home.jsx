import Section from '../components/Section.jsx';
import Button from '../components/Button.jsx';
import CTASection from '../components/CTASection.jsx';
import Seo from '../components/Seo.jsx';
import { siteContent } from '../data/site-content.js';
import { services } from '../data/services.js';
import './Home.css';

export default function Home() {
  const { hero, statsBand, servicesPreview, valueProposition } = siteContent.home;
  const featured = services.filter((s) => servicesPreview.featuredServiceSlugs.includes(s.slug));
  return (
    <>
      <Seo description={hero.supportingCopy} />
      <Section className="home-hero" tight>
        <h1 className="home-hero__headline">{hero.headline}</h1>
        <p className="home-hero__supporting">{hero.supportingCopy}</p>
        <Button as="link" to="/contact">{hero.primaryCtaLabel}</Button>
        <Button as="link" to="/services">Explore Services</Button>
      </Section>

      <Section>
        <div className="home-stats">
          {statsBand.items.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
        </div>
      </Section>

      <Section>
        <h2>OUR CORE EXPERTISE</h2>
        <p>Comprehensive lead generation services tailored to your industry and goals</p>
        <div className="home-service-grid">
          {featured.map((service) => <article key={service.id}><h3>{service.name}</h3><p>{service.shortDescription}</p></article>)}
        </div>
        <Button as="link" to="/services">View All Services</Button>
      </Section>

      <CTASection heading={valueProposition.heading} subtext={valueProposition.body} ctaLabel="Get Started" />
    </>
  );
}
