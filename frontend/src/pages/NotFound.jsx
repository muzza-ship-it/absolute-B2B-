import { Link } from 'react-router-dom';
import Section from '../components/Section.jsx';
import Seo from '../components/Seo.jsx';

export default function NotFound() {
  return (
    <Section>
      <Seo title="Page Not Found" />
      <h1>Page not found</h1>
<p>The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link to="/">Return home</Link>
    </Section>
  );
}
