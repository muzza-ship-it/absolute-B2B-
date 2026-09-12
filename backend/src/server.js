import express from 'express';
import cors from 'cors';
import { env } from './config/env.js';
import { logger } from './utils/logger.js';
import { errorHandler } from './middleware/errorHandler.js';
import contactRoutes from './routes/contact.routes.js';

// Exported (not auto-started) so tests can build a fresh app instance per
// test without binding a real port at import time — see tests/contact.test.js.
export function createApp() {
  const app = express();

  app.use(express.json({ limit: '20kb' }));
  app.use(
    cors({
      origin: env.frontendUrl,
    })
  );

  // Health check — used by process managers / uptime checks, and by the
  // deployment verification steps in docs/HOSTINGRAJA_DEPLOYMENT_PLAN.md.
  app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok', env: env.nodeEnv });
  });

  app.use('/api', contactRoutes);

  // 404 for unknown API routes.
  app.use('/api', (req, res) => {
    res.status(404).json({ success: false, message: 'Not found.' });
  });

  app.use(errorHandler);

  return app;
}

// Only start listening when this file is run directly (node src/server.js),
// not when it's imported by the test suite.
const isMain = process.argv[1] && process.argv[1].endsWith('server.js');
if (isMain) {
  const app = createApp();
  app.listen(env.port, () => {
    logger.info(`Absolute B2B backend listening on port ${env.port} (${env.nodeEnv})`);
  });
}
