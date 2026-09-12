// Server-side re-validation for the contact form. Never trusts the
// frontend — this runs regardless of what client-side validation already
// did. Mirrors frontend/src/utils/validation.js by design (see
// docs/FORM_API_SPEC.md); keep both in sync if rules change.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+()\-\s]{7,20}$/;

function sanitize(str) {
  if (typeof str !== 'string') return '';
  // Strip control/CRLF characters (prevents email header injection) and
  // any raw HTML tags, then trim.
  return str.replace(/[\r\n]/g, ' ').replace(/<[^>]*>/g, '').trim();
}

export function validateContactPayload(body) {
  const errors = {};
  const clean = {
    name: sanitize(body.name),
    email: sanitize(body.email).toLowerCase(),
    phone: sanitize(body.phone),
    company: sanitize(body.company),
    service: sanitize(body.service),
    message: sanitize(body.message),
    website: sanitize(body.website), // honeypot
  };

  if (!clean.name || clean.name.length < 2 || clean.name.length > 100) {
    errors.name = 'Enter your name.';
  }
  if (!clean.email || !EMAIL_RE.test(clean.email) || clean.email.length > 200) {
    errors.email = 'Enter a valid email address.';
  }
  if (clean.phone && !PHONE_RE.test(clean.phone)) {
    errors.phone = 'Enter a valid phone number.';
  }
  if (clean.company && clean.company.length > 150) {
    errors.company = 'Company name is too long.';
  }
  if (!clean.message || clean.message.length < 10 || clean.message.length > 2000) {
    errors.message = 'Message must be between 10 and 2000 characters.';
  }

  return { clean, errors, isBot: clean.website.length > 0 };
}

// Express middleware wrapper used by the route.
export function validateContactMiddleware(req, res, next) {
  const { clean, errors, isBot } = validateContactPayload(req.body || {});

  if (isBot) {
    // Detected bot traffic (honeypot filled): respond success-shaped so
    // scrapers don't learn the field is a trap, but do NOT process or
    // deliver it. This is a standard anti-spam pattern, distinct from
    // faking success for a real user submission.
    return res.status(200).json({
      success: true,
      message: "Your message has been sent. We'll be in touch soon.",
    });
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Please correct the highlighted fields.',
      errors,
    });
  }

  req.cleanBody = clean;
  next();
}
