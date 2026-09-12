import { useState } from 'react';
import { validateContactForm } from '../utils/validation.js';
import { submitContactForm } from '../services/api.js';

const INITIAL_VALUES = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
  website: '', // honeypot — must stay empty; hidden from real users in the UI
};

// Encapsulates Contact form state so the page component stays declarative:
// idle -> loading -> success | error, with field-level validation errors.
export function useContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [serverMessage, setServerMessage] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  function handleBlur(e) {
    const fieldErrors = validateContactForm(values);
    setErrors((prev) => ({ ...prev, [e.target.name]: fieldErrors[e.target.name] }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const fieldErrors = validateContactForm(values);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setStatus('loading');
    setServerMessage('');
    try {
      const data = await submitContactForm(values);
      setStatus('success');
      setServerMessage(data?.message || "Your message has been sent.");
      setValues(INITIAL_VALUES);
      setErrors({});
    } catch (err) {
      setStatus('error');
      setServerMessage(err.message || 'Something went wrong. Please try again.');
      if (err.errors) setErrors((prev) => ({ ...prev, ...err.errors }));
    }
  }

  return { values, errors, status, serverMessage, handleChange, handleBlur, handleSubmit };
}
