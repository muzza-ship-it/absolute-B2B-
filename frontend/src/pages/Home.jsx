import Section from '../components/Section.jsx';
import Button from '../components/Button.jsx';
import CTASection from '../components/CTASection.jsx';
import { siteContent } from '../data/site-content.js';
import './Home.css';

// Confirmed content only in the hero. Everything below the hero
// (stats band, services preview, industries, testimonials/case-study
// previews) is structurally scaffolded but marked CONTENT SOURCE REQUIRED
// until the real homepage sections are confirmed — see
// docs/CONTENT_GAPS.md and docs/SITE_INVENTORY.md.
export default function Home() {
  const { hero } = siteContent.home;

  return (
    <>
      <Section className="home-hero" tight>
        <h1 className="home-hero__headline">{hero.headline}</h1>
        <p className="home-hero__supporting">{hero.supportingCopy}</p>
        <Button as="link" to="/contact">
          {hero.primaryCtaLabel}
        </Button>
      </Section>

      <Section className="content-gap-placeholder">
        <p className="content-gap-placeholder__label">CONTENT SOURCE REQUIRED</p>
        <p>
          Statistics band, services preview, industries-served detail,
          value proposition, testimonials preview, and case studies preview
          sections belong here once their real content and order are
          confirmed from the existing site.
        </p>
      </Section>

      <CTASection
        heading="Ready to grow your pipeline?"
        subtext="CONTENT SOURCE REQUIRED"
        ctaLabel="Get Started"
      />
    </>
  );
}
