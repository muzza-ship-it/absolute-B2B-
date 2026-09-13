import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import CTASection from '../components/CTASection.jsx';
import Seo from '../components/Seo.jsx';
import { siteContent } from '../data/site-content.js';
import './About.css';

export default function About() {
  const about = siteContent.about;
  return (
    <>
      <Seo title="About" />
      <PageHero title={about.heading} />
      <Section>
        <div className="about-intro">
          <h2>10 YEARS OF EXCELLENCE</h2>
          <p>{about.intro}</p>
          <p>{about.story}</p>
        </div>
      </Section>
      <Section>
        <div className="about-stats">
          {about.stats.map((item) => (
            <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>
          ))}
        </div>
      </Section>
      <Section>
        <h2>OUR VALUES</h2>
        <p>The principles that guide everything we do</p>
        <div className="about-values">
          {about.values.map((item) => (
            <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>
          ))}
        </div>
      </Section>
      <Section>
        <h2>OUR JOURNEY</h2>
        <p>A decade of innovation and growth</p>
        <ol>
          {about.journey.map((item) => <li key={item.year}><strong>{item.year}</strong> {item.text}</li>)}
        </ol>
        <p>Additional journey milestones are not visible in the supplied screenshot and remain source-required.</p>
      </Section>
      <CTASection heading="CONTENT SOURCE REQUIRED" ctaLabel="Get Started" />
    </>
  );
}
