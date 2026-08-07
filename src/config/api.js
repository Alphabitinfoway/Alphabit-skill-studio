/**
 * Centralized API Configuration
 * Pulls NEXT_PUBLIC_API_BASE_URL from environment variables (.env.local / env)
 * Defaults to http://localhost:5000 during local development (both SSR and Client).
 */
const isDev = process.env.NODE_ENV !== 'production';

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || (
    isDev
        ? 'http://localhost:5000'
        : typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
            ? 'http://localhost:5000'
            : 'https://skill-backend-admin.onrender.com'
);
