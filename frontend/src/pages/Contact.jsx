import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import Button from '../components/Button.jsx';
import FormField from '../components/form/FormField.jsx';
import Input from '../components/form/Input.jsx';
import Textarea from '../components/form/Textarea.jsx';
import Select from '../components/form/Select.jsx';
import Seo from '../components/Seo.jsx';
import { useContactForm } from '../hooks/useContactForm.js';
import { services } from '../data/services.js';
import { siteContent } from '../data/site-content.js';
import './Contact.css';

// Real form: client + server validation, real fetch call to the backend
// (see services/api.js -> backend/src/routes/contact.routes.js), and
// distinct idle/loading/success/error states. No fake success message is
// shown — success only renders after the backend actually confirms it.
export default function Contact() {
  const { values, errors, status, serverMessage, handleChange, handleBlur, handleSubmit } =
    useContactForm();

  const serviceOptions = [
    { value: '', label: 'Select a service (optional)' },
    ...services.map((s) => ({ value: s.slug, label: s.name })),
  ];

  return (
    <>
      {/* Description built only from already-confirmed contact info
          (siteContent.contact) — a structural fact, not marketing copy. */}
      <Seo
        title="Contact"
        description={`Contact Absolute B2B — ${siteContent.contact.email} or ${siteContent.contact.phoneDisplay}.`}
      />
      <PageHero
        title="Contact Us"
        subtitle="CONTENT SOURCE REQUIRED"
      />
      <Section>
        <div className="contact-layout">
          <div className="contact-form-wrap">
            {status === 'success' ? (
              <div className="contact-form__success" role="status">
                <h2>Message sent</h2>
                <p>{serverMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {status === 'error' && (
                  <p className="contact-form__banner" role="alert">
                    {serverMessage}
                  </p>
                )}

                <FormField id="name" label="Name" required error={errors.name}>
                  <Input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.name}
                    disabled={status === 'loading'}
                    autoComplete="name"
                  />
                </FormField>

                <FormField id="email" label="Email" required error={errors.email}>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email}
                    disabled={status === 'loading'}
                    autoComplete="email"
                  />
                </FormField>

                <FormField id="phone" label="Phone" error={errors.phone}>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.phone}
                    disabled={status === 'loading'}
                    autoComplete="tel"
                  />
                </FormField>

                <FormField id="company" label="Company" error={errors.company}>
                  <Input
                    id="company"
                    name="company"
                    value={values.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.company}
                    disabled={status === 'loading'}
                    autoComplete="organization"
                  />
                </FormField>

                <FormField id="service" label="Service / Area of Interest">
                  <Select
                    id="service"
                    name="service"
                    value={values.service}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    options={serviceOptions}
                  />
                </FormField>

                <FormField id="message" label="Message" required error={errors.message}>
                  <Textarea
                    id="message"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.message}
                    disabled={status === 'loading'}
                  />
                </FormField>

                {/* Honeypot — hidden from real users, left empty by them,
                    filled by naive bots; checked again server-side. */}
                <div className="form-field--honeypot" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={values.website}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending…' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>

          <div className="contact-info">
            <h3>Direct contact</h3>
            <p>
              <a href={`mailto:${siteContent.contact.email}`}>
                {siteContent.contact.email}
              </a>
            </p>
            <p>
              <a href={`tel:${siteContent.contact.phoneHref}`}>
                {siteContent.contact.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`tel:${siteContent.contact.secondaryPhoneHref}`}>
                {siteContent.contact.secondaryPhoneDisplay}
              </a>
            </p>
            <p>
              <strong>Virtual office</strong><br />
              {siteContent.contact.address}
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
