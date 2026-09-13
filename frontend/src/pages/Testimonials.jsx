import { useState, useMemo } from 'react';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import Card from '../components/Card.jsx';
import CTASection from '../components/CTASection.jsx';
import Seo from '../components/Seo.jsx';
import { testimonials, INDUSTRY_FILTERS } from '../data/testimonials.js';
import './Testimonials.css';

// Industry filter is fully functional client-side state — swapping in the
// real 10 testimonial records (data/testimonials.js) is all that's needed
// to make this page complete.
export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return testimonials;
    return testimonials.filter((t) => t.industry === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <Seo title="Testimonials" />
      <PageHero title="Testimonials" subtitle="Don't just take our word for it. Hear from the clients who have experienced transformational growth with Absolute B2B's team, systems and strategies." />
      <Section>
        <div className="testimonial-filters" role="group" aria-label="Filter by industry">
          {INDUSTRY_FILTERS.map((industry) => (
            <button
              key={industry}
              type="button"
              className={
                industry === activeFilter
                  ? 'testimonial-filter testimonial-filter--active'
                  : 'testimonial-filter'
              }
              onClick={() => setActiveFilter(industry)}
              aria-pressed={industry === activeFilter}
            >
              {industry}
            </button>
          ))}
        </div>

        <div className="testimonial-grid">
          {filtered.filter((t) => t._meta?.status === 'RECOVERED_NEEDS_VERIFICATION' || t._meta?.status === 'CONFIRMED').map((t) => (
            <Card key={t.id} className="testimonial-card">
              <p className="testimonial-card__quote">
                {t.quote || 'CONTENT SOURCE REQUIRED'}
              </p>
              <p className="testimonial-card__author">
                {t.authorName || 'CONTENT SOURCE REQUIRED'}
                {t.company ? `, ${t.company}` : ''}
              </p>
            </Card>
          ))}
        </div>
      </Section>
      <CTASection heading="CONTENT SOURCE REQUIRED" ctaLabel="Get Started" />
    </>
  );
}
