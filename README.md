# Absolute B2B — Website Rebuild

Independent, portable rebuild of the Absolute B2B website (previously
built on Emergent), targeting deployment on HostingRaja at
`absoluteb2b.com`.

## Status

Architecture and scaffolding for Phases 1–3 are complete. Real business
content (21 services, 10 testimonials, case studies, pricing, About copy,
and the visual reference) is still required before Phase 4 (full build)
can proceed — see `docs/CONTENT_GAPS.md`.

## Structure

```
frontend/   React + Vite SPA
backend/    Node.js + Express API (contact form)
docs/       Requirements, inventory, architecture, deployment docs
scripts/    Build/deploy helper scripts
```

See `docs/ARCHITECTURE.md` for the full breakdown.

## Local Development

**Frontend:**
```
cd frontend
cp .env.example .env
npm install
npm run dev
```

**Backend:**
```
cd backend
cp .env.example .env    # fill in real SMTP credentials to test email
npm install
npm run dev
```

The frontend expects the backend at the URL in `VITE_API_URL`
(`frontend/.env`) — default `http://localhost:5000/api`.

## Testing

```
cd backend
npm install
npm test
```

**Note:** none of the above commands have been executed in the Claude
sandbox that generated this codebase — it has no outbound network access,
so `npm install` cannot reach the npm registry here. Every command above is
documented precisely so it can be run for real on a developer machine or
CI. See `docs/HANDOVER.md` (created at the end of the build) for the exact
list of what has and hasn't been executed.

## Documentation Index

- `docs/PROJECT_REQUIREMENTS.md` — confirmed requirements freeze
- `docs/CONTENT_GAPS.md` — content still required from the client
- `docs/SITE_INVENTORY.md` — per-page section/component/data inventory
- `docs/FORM_API_SPEC.md` — Contact form + `/api/contact` specification
- `docs/ARCHITECTURE.md` — technical architecture
- `docs/HOSTINGRAJA_DEPLOYMENT_PLAN.md` — deployment procedure (not yet
  executed)

## License / Ownership

Proprietary — Absolute B2B Pvt. Ltd.
