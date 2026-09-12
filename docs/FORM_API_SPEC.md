# Form / API Specification

Status of every claim in this doc: **architecture only**. Nothing here has
been executed against a live SMTP server, live database, or live browser in
this sandbox (no network egress). Every execution-dependent line is marked
`NOT EXECUTED — ENVIRONMENT LIMITATION`.

---

## Form: Contact Form

**Page:** `/contact`
**Form ID:** `contact-form`

### Fields

| Field | Key | Type | Required | Notes |
|---|---|---|---|---|
| Name | `name` | text | Yes | 2–100 chars |
| Email | `email` | email | Yes | RFC-5322-style pattern, server re-validates |
| Phone | `phone` | tel | No | loose E.164-ish pattern if provided, not required |
| Company | `company` | text | No | 0–150 chars |
| Service / Area of Interest | `service` | select | No | options sourced from `services.js` slugs once real service names exist; until then a placeholder `CONTENT SOURCE REQUIRED` option list of the 21 slugs (`service-01`…`service-21`) |
| Message | `message` | textarea | Yes | 10–2000 chars |

### Frontend Validation
- Required-field presence check on blur and on submit.
- Email format check (regex) before submit is allowed.
- Phone, if present, loose format check (digits, spaces, `+`, `-`,
  parentheses; 7–15 digits).
- Message length bounds enforced live (character counter optional).
- Submit button disabled while: any required field invalid, OR a request is
  in flight.
- Client-side honeypot field (`website` — hidden input, humans never fill
  it) as a first spam-protection layer, checked again server-side.

### Backend Validation (mirrors frontend, never trusts it)
- Re-validate every field server-side regardless of what the client sent.
- Reject if honeypot field is non-empty (treat as bot, return a generic
  success-shaped response to avoid tipping off scrapers, but do not process
  it — this is a standard anti-spam pattern, not a fake-success violation of
  the "never fake success" rule, because it applies only to detected bot
  traffic, not to real user submissions).
- Sanitize all string fields (trim, strip HTML/script content) before
  storage or email use, to prevent stored/reflected injection.
- Enforce the same length bounds as the frontend.
- Basic rate limiting per IP (e.g., 5 requests / 10 minutes) to blunt
  scripted abuse — see `backend/src/middleware/rateLimit.js`.

### API Endpoint

```
POST /api/contact
Content-Type: application/json
```

**Request body:**
```json
{
  "name": "string, required",
  "email": "string, required",
  "phone": "string, optional",
  "company": "string, optional",
  "service": "string, optional (service slug)",
  "message": "string, required",
  "website": "string, optional honeypot — must be empty"
}
```

**Success response — `200 OK`:**
```json
{
  "success": true,
  "message": "Your message has been sent. We'll be in touch soon."
}
```
This response is only returned once the backend has actually attempted
delivery (email and/or DB write, per configuration) and that attempt
succeeded. It is never returned unconditionally just because the HTTP
request was well-formed.

**Validation error — `400 Bad Request`:**
```json
{
  "success": false,
  "message": "Please correct the highlighted fields.",
  "errors": {
    "email": "Enter a valid email address."
  }
}
```

**Server/delivery error — `502 Bad Gateway`** (e.g., SMTP unreachable or
misconfigured):
```json
{
  "success": false,
  "message": "We couldn't send your message right now. Please try again or email us directly at info@absoluteb2b.com."
}
```

**Rate-limited — `429 Too Many Requests`:**
```json
{
  "success": false,
  "message": "Too many requests. Please try again shortly."
}
```

### Frontend States
- **Idle:** form editable, submit enabled once required fields are valid.
- **Loading:** submit button shows spinner + disabled, fields disabled to
  prevent double-submit.
- **Success:** form replaced with a confirmation message; fields cleared.
- **Error:** inline error banner with the server's `message`; field-level
  errors mapped from `errors` object if present; form remains editable so
  the user can retry without re-typing everything.

### Email Notification Architecture
- `backend/src/services/email.service.js` wraps a standard SMTP transport
  (nodemailer over SMTP), configured entirely by environment variables:
  `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `CONTACT_EMAIL`
  (recipient), `EMAIL_FROM` (sender identity).
- If any required SMTP env var is missing, the service throws a clear
  configuration error at startup-check time rather than silently pretending
  to send — the `/api/contact` route will return the `502` shape above with
  a message indicating email is not configured, not a fake `200`.
- **Real delivery through this service has not been tested in this
  sandbox — NOT EXECUTED — ENVIRONMENT LIMITATION.** It must be tested
  against real SMTP credentials on the client's machine or on HostingRaja.

### Optional Database Persistence
- MongoDB is **not** wired in by default per the "don't add Mongo unless
  demonstrated need" rule. The architecture leaves a clean seam
  (`backend/src/models/` is present but empty, `backend/src/config/env.js`
  reads an optional `MONGODB_URI`) so persistence can be added later
  without restructuring: `contact.controller.js` calls an injectable
  `leadStore` interface that currently only calls the email service. If the
  client confirms the real site persists leads to a database, a Mongo (or
  other) model/repository can be dropped into that same seam.

### Spam Protection Summary
- Honeypot field (frontend + backend check)
- Per-IP rate limiting (backend)
- Server-side re-validation regardless of client state
- (Documented but not implemented pending client decision: CAPTCHA/
  reCAPTCHA — would require a third-party key, which is a real business
  decision, not an architecture default)

### Security Considerations
- CORS restricted to the configured `FRONTEND_URL` origin, not `*`.
- No stack traces or internal error detail returned to the client in
  production (`NODE_ENV=production` suppresses verbose error bodies).
- All secrets via environment variables, never committed; `.env.example`
  lists variable names only.
- Input sanitized before use in the email body to prevent header injection
  (CRLF stripped from all fields used in email headers).

---

## Other Forms

No other forms have been confirmed to exist on the real site yet. If the
client confirms additional forms (e.g., a newsletter signup, a per-service
inquiry form, a "Get Started" modal), each will get its own entry in this
document before implementation, following the same spec shape above.
