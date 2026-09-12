// Single source of truth for primary navigation, consumed by both Header
// and Footer so the two never drift out of sync.
export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
];

// Label confirmed by client ("Get Started"). Target route assumed to be
// Contact until confirmed otherwise (e.g., a dedicated "Get Started" flow).
export const PRIMARY_CTA = { label: 'Get Started', to: '/contact' };
