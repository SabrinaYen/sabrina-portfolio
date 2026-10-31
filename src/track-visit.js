// Tells the API that someone opened the site (once per browser session).
import { API_URL } from './api-url.js';

export function trackVisit() {
  if (!API_URL || import.meta.env.DEV) return; // don't count local development
  try {
    if (sessionStorage.getItem('visit-counted')) return;
    sessionStorage.setItem('visit-counted', '1');
  } catch {
    // storage blocked: just count this visit
  }
  // fire and forget: a failed count should never break the site
  fetch(`${API_URL}/public/visit`, { method: 'POST' }).catch(() => {});
}
