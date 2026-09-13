// Recovered from the supplied existing Absolute B2B pricing screenshot.
// Status remains RECOVERED_NEEDS_VERIFICATION until the client confirms
// these are current production prices/features.
export const pricingTiers = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$2,500',
    billingPeriod: 'month',
    description: 'Perfect for small businesses & getting started',
    features: [
      '50 qualified leads per month',
      'Email marketing campaigns',
      'Basic reporting',
      'Email support',
      'Monthly strategy call',
    ],
    highlighted: false,
    ctaLabel: 'Get Started',
    ctaTo: '/contact',
    _meta: { status: 'RECOVERED_NEEDS_VERIFICATION', source: 'screenshot: 05-pricing.png, supplied 2026-09-13', confidence: 'high', notes: 'Recovered from visible pricing card.' },
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$5,500',
    billingPeriod: 'month',
    description: 'Ideal for growing companies.',
    features: [
      '100 qualified leads per month',
      'Multi-channel campaigns',
      'Advanced analytics',
      'Priority support',
      'Weekly strategy calls',
      'Dedicated account manager',
      'Custom campaign strategies',
    ],
    highlighted: true,
    ctaLabel: 'Get Started',
    ctaTo: '/contact',
    _meta: { status: 'RECOVERED_NEEDS_VERIFICATION', source: 'screenshot: 05-pricing.png, supplied 2026-09-13', confidence: 'high', notes: 'Recovered from visible pricing card; marked Recommended on source screenshot.' },
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    billingPeriod: '',
    description: 'For large-scale operations',
    features: [
      'Unlimited qualified leads',
      'Full-service outbound',
      'Custom integrations',
      '24/7 priority support',
      'Daily strategy sessions',
      'Dedicated account manager',
      'Multi-region campaigns',
      'API access',
    ],
    highlighted: false,
    ctaLabel: 'Get Started',
    ctaTo: '/contact',
    _meta: { status: 'RECOVERED_NEEDS_VERIFICATION', source: 'screenshot: 05-pricing.png, supplied 2026-09-13', confidence: 'high', notes: 'Recovered from visible pricing card.' },
  },
];

export const pricingPage = {
  heroSubtitle: 'Choose the plan that fits your business needs. All plans include quality assurance and dedicated support.',
  calculator: {
    heading: 'PRICING CALCULATOR',
    subtitle: 'Get an instant estimate based on your requirements',
  },
  faqs: [
    {
      question: 'What is included in the monthly price?',
      answer: 'All plans include lead generation, quality assurance, dedicated support, and regular reporting. Higher-tier plans include additional services like content creation and priority support.',
    },
    {
      question: 'Are there any setup fees?',
      answer: 'No, there are no setup fees. We believe in transparent pricing with no hidden costs.',
    },
    {
      question: 'Can I switch plans later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time to match your business needs.',
    },
    {
      question: 'What is your refund policy?',
      answer: "We offer a 30-day satisfaction guarantee. If you're not happy with our service in the first month, we'll provide a full refund.",
    },
  ],
  _meta: { status: 'RECOVERED_NEEDS_VERIFICATION', source: 'screenshot: 05-pricing.png, supplied 2026-09-13', confidence: 'high', notes: 'Pricing cards, hero subtitle, calculator heading/subtitle, and four FAQ items recovered. Calculator input labels/logic require separate verification if implementation is required.' },
};
