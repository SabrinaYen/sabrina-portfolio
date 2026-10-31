// Address of the portfolio API. Set VITE_API_URL in .env.local (see .env.example).
// While developing it falls back to the local API; in production it stays empty
// (the site then just uses the data built into the page).
export const API_URL = import.meta.env.VITE_API_URL ?? (import.meta.env.DEV ? 'http://127.0.0.1:8000' : '');
