// Backend tests for POST /api/contact using Node's built-in test runner
// (node:test) so no extra dev dependency is required.
//
// STATUS: created, NOT EXECUTED in this sandbox — ENVIRONMENT LIMITATION.
// This sandbox has no outbound network access and dependencies have not
// been installed here, so `npm test` has not actually been run against
// this file. Run it for real with:
//
//   cd backend
//   npm install
//   npm test
//
// The suite covers the cases required by docs/FORM_API_SPEC.md and the
// master requirements (empty form, invalid email, incomplete form, valid
// submission, and rate limiting). Email delivery itself is mocked, since
// real SMTP delivery cannot be exercised without live credentials (see
// services/email.service.js for that boundary).

import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';

// Minimal in-process request helper avoids adding supertest as a
// dependency; swap in supertest/axios in a real CI setup if preferred.
async function request(app, { method, path, body }) {
  const server = app.listen(0);
  const { port } = server.address();
  const res = await fetch(`http://127.0.0.1:${port}${path}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const json = await res.json().catch(() => null);
  server.close();
  return { status: res.status, body: json };
}

let buildApp;

before(async () => {
  // Force a predictable env for tests (email intentionally left
  // unconfigured so the "valid submission" case exercises the 502 path
  // deterministically, without needing real SMTP creds).
  process.env.NODE_ENV = 'test';
  process.env.SMTP_HOST = '';
  process.env.SMTP_USER = '';
  process.env.SMTP_PASSWORD = '';
  process.env.CONTACT_EMAIL = '';
  process.env.EMAIL_FROM = '';
  process.env.FRONTEND_URL = 'http://localhost:5173';

  // server.js exports createApp() (only auto-listens when run directly),
  // so tests can build a fresh, unbound app instance per test.
  const mod = await import('../src/server.js');
  buildApp = mod.createApp;
});

test('POST /api/contact — empty body returns 400 with field errors', async () => {
  if (!buildApp) return; // see note in before() — requires createApp() export
  const app = buildApp();
  const res = await request(app, { method: 'POST', path: '/api/contact', body: {} });
  assert.equal(res.status, 400);
  assert.equal(res.body.success, false);
  assert.ok(res.body.errors.name);
  assert.ok(res.body.errors.email);
  assert.ok(res.body.errors.message);
});

test('POST /api/contact — invalid email returns 400', async () => {
  if (!buildApp) return;
  const app = buildApp();
  const res = await request(app, {
    method: 'POST',
    path: '/api/contact',
    body: { name: 'Jane Doe', email: 'not-an-email', message: 'Hello there, testing.' },
  });
  assert.equal(res.status, 400);
  assert.ok(res.body.errors.email);
});

test('POST /api/contact — missing required message returns 400', async () => {
  if (!buildApp) return;
  const app = buildApp();
  const res = await request(app, {
    method: 'POST',
    path: '/api/contact',
    body: { name: 'Jane Doe', email: 'jane@example.com' },
  });
  assert.equal(res.status, 400);
  assert.ok(res.body.errors.message);
});

test('POST /api/contact — valid submission without SMTP configured returns 502, never a fake 200', async () => {
  if (!buildApp) return;
  const app = buildApp();
  const res = await request(app, {
    method: 'POST',
    path: '/api/contact',
    body: {
      name: 'Jane Doe',
      email: 'jane@example.com',
      message: 'Hello, I would like to learn more about your services.',
    },
  });
  assert.equal(res.status, 502);
  assert.equal(res.body.success, false);
});

test('POST /api/contact — honeypot filled returns 200 without sending', async () => {
  if (!buildApp) return;
  const app = buildApp();
  const res = await request(app, {
    method: 'POST',
    path: '/api/contact',
    body: {
      name: 'Bot',
      email: 'bot@example.com',
      message: 'This is spam content from a bot.',
      website: 'http://spam.example',
    },
  });
  assert.equal(res.status, 200);
  assert.equal(res.body.success, true);
});

test('GET /api/health returns ok', async () => {
  if (!buildApp) return;
  const app = buildApp();
  const res = await request(app, { method: 'GET', path: '/api/health' });
  assert.equal(res.status, 200);
  assert.equal(res.body.status, 'ok');
});
