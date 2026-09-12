const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Thin fetch wrapper. Throws a normalized error object on non-2xx so
// callers can read { status, message, errors } consistently.
export async function submitContactForm(payload) {
  let response;
  try {
    response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (networkErr) {
    // fetch itself threw — e.g. backend unreachable. Not simulated: this is
    // a real network-layer failure surfaced to the caller.
    throw {
      status: 0,
      message:
        "We couldn't reach the server. Check your connection and try again.",
    };
  }

  let data;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw {
      status: response.status,
      message: data?.message || 'Something went wrong. Please try again.',
      errors: data?.errors || {},
    };
  }

  return data;
}
