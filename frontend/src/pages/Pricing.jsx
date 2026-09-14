import Section from '../components/Section.jsx';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';
import CTASection from '../components/CTASection.jsx';
import Seo from '../components/Seo.jsx';
import { pricingTiers, pricingPage } from '../data/pricing.js';
import './Pricing.css';

export default function Pricing() {
  return (
    <>
      <Seo title="Pricing" />
      <Section>
        <h1>TRANSPARENT PRICING</h1>
        <p>{pricingPage.heroSubtitle}</p>
        <div className="pricing-grid">
          {pricingTiers.map((tier) => (
            <Card key={tier.id} className={tier.highlighted ? 'pricing-card pricing-card--highlighted' : 'pricing-card'}>
              {tier.highlighted && <small>RECOMMENDED</small>}
              <h3>{tier.name}</h3>
              <p className="pricing-card__description">{tier.description}</p>
              <p className="pricing-card__price">{tier.price}{tier.billingPeriod ? ` / ${tier.billingPeriod}` : ''}</p>
              <ul>{tier.features.map((f) => <li key={f}>{f}</li>)}</ul>
              <Button as="link" to={tier.ctaTo}>{tier.ctaLabel}</Button>
            </Card>
          ))}
        </div>
      </Section>
      <Section>
        <h2>{pricingPage.calculator.heading}</h2>
        <p>{pricingPage.calculator.subtitle}</p>
        <div className="pricing-calculator" aria-label="Pricing calculator">
          <label>Service Type<select><option>Select a service</option></select></label>
          <label>Monthly Leads Target<input type="number" min="0" /></label>
          <label>Your Industry<input type="text" placeholder="Your Industry" /></label>
          <label>Company Name<input type="text" placeholder="Your Company" /></label>
          <Button type="button">Calculate Estimate</Button>
        </div>
      </Section>
      <Section>
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <div className="pricing-faq">
          {pricingPage.faqs.map((faq) => <article key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></article>)}
        </div>
      </Section>
</>
  );
}
