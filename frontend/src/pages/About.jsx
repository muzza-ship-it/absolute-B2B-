import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import CTASection from '../components/CTASection.jsx';

export default function About() {
  return (
    <>
      <PageHero
        title="About Absolute B2B"
        subtitle="CONTENT SOURCE REQUIRED"
      />
      <Section>
        <p style={{ fontWeight: 600, color: 'var(--color-error)' }}>
          CONTENT SOURCE REQUIRED
        </p>
        <p>
          Company history, mission, and team content go here once supplied
          from the existing site — see docs/CONTENT_GAPS.md.
        </p>
      </Section>
      <CTASection heading="Let's work together" ctaLabel="Get Started" />
    </>
  );
}
