import Container from './Container.jsx';
import './Section.css';

// Generic vertical-rhythm wrapper used by every page section, so spacing
// between sections is controlled in one place.
export default function Section({ children, className = '', tight = false }) {
  return (
    <section className={`section ${tight ? 'section--tight' : ''} ${className}`.trim()}>
      <Container>{children}</Container>
    </section>
  );
}
