import Section from './Section.jsx';
import Button from './Button.jsx';
import './CTASection.css';

// Single reusable CTA band used on Home, Services, Case Studies,
// Testimonials, and Pricing rather than five bespoke blocks.
export default function CTASection({
  heading,
  subtext,
  ctaLabel,
  ctaTo = '/contact',
}) {
  return (
    <Section className="cta-section">
      <div className="cta-section__inner">
        <div>
          <h2>{heading}</h2>
          {subtext && <p>{subtext}</p>}
        </div>
        <Button as="link" to={ctaTo}>
          {ctaLabel}
        </Button>
      </div>
    </Section>
  );
}
