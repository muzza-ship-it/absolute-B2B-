import nodemailer from 'nodemailer';
import { env, isEmailConfigured } from '../config/env.js';
import { logger } from '../utils/logger.js';

let transporter = null;

function getTransporter() {
  if (!isEmailConfigured()) return null;
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: env.smtpHost,
      port: env.smtpPort,
      secure: env.smtpPort === 465,
      auth: { user: env.smtpUser, pass: env.smtpPassword },
    });
  }
  return transporter;
}

// Sends the contact-form notification email. Throws if SMTP isn't
// configured or the send fails — the caller (contact.controller.js) is
// responsible for turning that into the correct HTTP error response. This
// function never returns a fake success.
//
// IMPORTANT: actual delivery through this function has not been exercised
// against a real SMTP server in this sandbox (no network egress) —
// NOT EXECUTED — ENVIRONMENT LIMITATION. It must be verified against real
// credentials before relying on it in production.
export async function sendContactNotification(fields) {
  const t = getTransporter();
  if (!t) {
    const err = new Error('Email is not configured on the server.');
    err.status = 502;
    throw err;
  }

  const subject = `New contact form submission — ${fields.name}`;
  const text = [
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    fields.phone ? `Phone: ${fields.phone}` : null,
    fields.company ? `Company: ${fields.company}` : null,
    fields.service ? `Service of interest: ${fields.service}` : null,
    '',
    'Message:',
    fields.message,
  ]
    .filter(Boolean)
    .join('\n');

  try {
    await t.sendMail({
      from: env.emailFrom,
      to: env.contactEmail,
      replyTo: fields.email,
      subject,
      text,
    });
  } catch (sendErr) {
    logger.error('SMTP send failed', sendErr);
    const err = new Error(
      "We couldn't send your message right now. Please try again or email us directly."
    );
    err.status = 502;
    throw err;
  }
}
