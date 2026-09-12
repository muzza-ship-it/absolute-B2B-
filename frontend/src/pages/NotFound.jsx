import { Link } from 'react-router-dom';
import Section from '../components/Section.jsx';

export default function NotFound() {
  return (
    <Section>
      <h1>Page not found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Return home</Link>
    </Section>
  );
}
