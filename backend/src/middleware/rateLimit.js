import rateLimit from 'express-rate-limit';

// 5 requests per 10 minutes per IP on the contact endpoint — blunts basic
// scripted abuse without requiring a third-party CAPTCHA service.
export const contactRateLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests. Please try again shortly.',
  },
});
