import Container from './Container.jsx';
import './PageHero.css';

// Reused on every inner page (About, Services, Case Studies, Testimonials,
// Pricing, Contact). Home uses its own larger hero treatment because the
// confirmed homepage copy is distinct from a generic page intro.
export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <div className="page-hero">
      <Container>
        {eyebrow && <p className="page-hero__eyebrow">{eyebrow}</p>}
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
        {children}
      </Container>
    </div>
  );
}
