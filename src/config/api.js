/**
 * Centralized API Configuration
 * Pulls NEXT_PUBLIC_API_BASE_URL from environment variables (.env.local / env)
 * Fallback to http://localhost:5000 during local development or production Render URL.
 */
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || (
    typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
        ? 'http://localhost:5000'
        : 'https://skill-backend-admin.onrender.com'
);
