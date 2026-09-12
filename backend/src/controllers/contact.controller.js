import { sendContactNotification } from '../services/email.service.js';
import { logger } from '../utils/logger.js';

// req.cleanBody is set by validateContactMiddleware — already validated
// and sanitized by the time it reaches here.
//
// No database persistence is wired in (see docs/FORM_API_SPEC.md — no
// demonstrated need yet). If that changes, a `leadStore.save(fields)` call
// belongs here, alongside the email send, behind the same try/catch.
export async function submitContact(req, res, next) {
  const fields = req.cleanBody;

  try {
    await sendContactNotification(fields);
    logger.info('Contact form submitted', { email: fields.email });
    return res.status(200).json({
      success: true,
      message: "Your message has been sent. We'll be in touch soon.",
    });
  } catch (err) {
    // err.status is set to 502 by email.service.js for delivery failures /
    // missing config. Let the central error handler format the response.
    return next(err);
  }
}
