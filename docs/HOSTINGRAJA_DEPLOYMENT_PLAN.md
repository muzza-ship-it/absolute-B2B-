# HostingRaja Deployment Plan

**Status: PLAN ONLY — NOT EXECUTED — ENVIRONMENT LIMITATION.**
This sandbox has no outbound network access, so none of the steps below
have been run against a real HostingRaja account. This document describes
the procedure precisely enough to execute by hand; it is not a report of
completed deployment.

## Prerequisites (to confirm with HostingRaja plan details)
- Node.js hosting support (HostingRaja offers Node.js hosting plans/VPS —
  exact version support should be confirmed against the specific plan
  purchased; target **Node 18 LTS or newer** unless the plan dictates
  otherwise).
- SSH or file-manager access to upload the project.
- Ability to run a persistent Node process (PM2, systemd, or the host's
  built-in Node app manager) for the backend — a pure shared-hosting plan
  with no persistent process support would require re-architecting the
  contact form as a serverless-style script; this plan assumes a Node-
  capable plan.
- A MySQL/Mongo add-on only if the optional database seam is ever used
  (not required for the current architecture).

## Deployment Steps

1. **Build the frontend locally or in CI** (not on the shared host):
   ```
   cd frontend
   npm install
   npm run build
   ```
   Produces `frontend/dist/` — static files only.

2. **Upload:**
   - `frontend/dist/*` → the domain's public web root (e.g., `public_html/`
     or the document root HostingRaja assigns to `absoluteb2b.com`).
   - `backend/` (excluding `node_modules`) → a non-public app directory,
     e.g. `~/apps/absolute-b2b-backend/`.

3. **Backend dependencies on the server:**
   ```
   cd ~/apps/absolute-b2b-backend
   npm install --production
   ```

4. **Environment variables:** create `backend/.env` on the server (never
   uploaded from local/dev) using `backend/.env.example` as the template.
   Required at minimum: `PORT`, `NODE_ENV=production`, `FRONTEND_URL`,
   `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `CONTACT_EMAIL`,
   `EMAIL_FROM`. `MONGODB_URI` only if persistence is later added.

5. **Start the backend under a process manager**, e.g.:
   ```
   pm2 start src/server.js --name absolute-b2b-api
   pm2 save
   ```
   (Exact process-manager availability depends on the HostingRaja plan —
   confirm PM2/systemd support or use whatever process supervisor the
   plan provides.)

6. **Reverse proxy:** configure the web server (Apache/Nginx/LiteSpeed —
   whichever HostingRaja uses on the plan) to:
   - Serve `frontend/dist` as static files at `/`.
   - Proxy `/api/*` requests to the backend process's local port (e.g.,
     `http://127.0.0.1:5000/api/*`).
   - **SPA fallback:** any non-`/api` route that doesn't match a static
     file must fall back to `index.html`, so client-side routes like
     `/services/service-04` work on direct load/refresh, not just via
     in-app navigation.

7. **Domain & DNS:** point `absoluteb2b.com` (and `www.absoluteb2b.com` if
   used) to the HostingRaja server via the DNS settings in the HostingRaja
   control panel or the domain registrar.

8. **HTTPS:** issue an SSL certificate (Let's Encrypt via HostingRaja's
   panel, or HostingRaja's own SSL offering) and force HTTP→HTTPS redirect
   at the web-server/reverse-proxy level.

9. **Post-deploy verification (to be done by the client or in a future
   session with real access — not performable from this sandbox):**
   - Load `https://absoluteb2b.com/` and every route directly (including a
     hard refresh on a nested route) to confirm the SPA fallback works.
   - Submit the real Contact form and confirm an email actually arrives at
     `info@absoluteb2b.com`.
   - Confirm `/api/contact` returns correct status codes for valid/invalid
     input using a tool like `curl` or Postman against the live URL.
   - Run a mobile-network / Lighthouse check for performance and basic
     accessibility.

## Explicitly Not Assumed
- Exact HostingRaja plan tier, panel (cPanel/DirectAdmin/custom), or
  whether Node hosting vs. plain shared PHP-style hosting was purchased —
  this changes step 3/5/6 mechanics and should be confirmed before
  execution.
- Exact process-manager availability.
- Whether a database will ultimately be required.

## Summary
Every step above is a documented procedure only. **No command in this
document has been run; no HostingRaja account, server, or domain has been
accessed from this sandbox.** Actual execution requires either the client
running these steps on their HostingRaja account, or a future Claude
session with real credentials/network access to that account.
