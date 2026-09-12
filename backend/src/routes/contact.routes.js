import { Router } from 'express';
import { validateContactMiddleware } from '../middleware/validate.js';
import { contactRateLimiter } from '../middleware/rateLimit.js';
import { submitContact } from '../controllers/contact.controller.js';

const router = Router();

router.post('/contact', contactRateLimiter, validateContactMiddleware, submitContact);

export default router;
