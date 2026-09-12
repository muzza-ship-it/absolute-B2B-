import 'dotenv/config';

// Central place that reads process.env, so nothing else in the codebase
// touches process.env directly. Missing SMTP vars are NOT fatal at boot —
// they're checked lazily by email.service.js so the server can still run
// (e.g., for local frontend dev) and the contact route can return a clear
// "email not configured" error instead of crashing the whole process.
export const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT) || 5000,
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5173',

  smtpHost: process.env.SMTP_HOST || '',
  smtpPort: Number(process.env.SMTP_PORT) || 587,
  smtpUser: process.env.SMTP_USER || '',
  smtpPassword: process.env.SMTP_PASSWORD || '',
  contactEmail: process.env.CONTACT_EMAIL || '',
  emailFrom: process.env.EMAIL_FROM || '',

  mongodbUri: process.env.MONGODB_URI || null,
};

export function isEmailConfigured() {
  return Boolean(
    env.smtpHost && env.smtpUser && env.smtpPassword && env.contactEmail && env.emailFrom
  );
}
