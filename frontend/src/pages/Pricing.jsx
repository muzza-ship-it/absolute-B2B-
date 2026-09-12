import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';
import CTASection from '../components/CTASection.jsx';
import { pricingTiers } from '../data/pricing.js';
import './Pricing.css';

export default function Pricing() {
  return (
    <>
      <PageHero title="Pricing" subtitle="CONTENT SOURCE REQUIRED" />
      <Section>
        <div className="pricing-grid">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.id}
              className={tier.highlighted ? 'pricing-card pricing-card--highlighted' : 'pricing-card'}
            >
              <h3>{tier.name}</h3>
              <p className="pricing-card__price">
                {tier.price}
                {tier.billingPeriod ? ` / ${tier.billingPeriod}` : ''}
              </p>
              <p>{tier.description}</p>
              <ul>
                {tier.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <Button as="link" to={tier.ctaTo}>
                {tier.ctaLabel}
              </Button>
            </Card>
          ))}
        </div>
      </Section>
      <CTASection heading="Questions about pricing?" ctaLabel="Get Started" />
    </>
  );
}
