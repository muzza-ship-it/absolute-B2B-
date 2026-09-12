// Mirrors backend validation in backend/src/middleware/validate.js.
// Frontend validation is a UX convenience only — the backend re-validates
// everything and is the actual source of truth (see FORM_API_SPEC.md).

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+()\-\s]{7,20}$/;

export function validateContactForm(values) {
  const errors = {};

  if (!values.name || values.name.trim().length < 2) {
    errors.name = 'Enter your name.';
  } else if (values.name.trim().length > 100) {
    errors.name = 'Name is too long.';
  }

  if (!values.email || !EMAIL_RE.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }

  if (values.phone && !PHONE_RE.test(values.phone.trim())) {
    errors.phone = 'Enter a valid phone number.';
  }

  if (values.company && values.company.trim().length > 150) {
    errors.company = 'Company name is too long.';
  }

  if (!values.message || values.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  } else if (values.message.trim().length > 2000) {
    errors.message = 'Message is too long (2000 character limit).';
  }

  return errors;
}
