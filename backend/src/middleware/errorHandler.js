import { env } from '../config/env.js';
import { logger } from '../utils/logger.js';

// Central error handler. In production, never leaks stack traces or
// internal error detail to the client.
export function errorHandler(err, req, res, next) { // eslint-disable-line no-unused-vars
  logger.error(err);
  const status = err.status || 500;
  res.status(status).json({
    success: false,
    message:
      env.nodeEnv === 'production'
        ? 'Something went wrong. Please try again later.'
        : err.message,
  });
}
