const defaultApiUrl = process.env.REACT_APP_API_URL ||
  (typeof window !== "undefined" &&
  !window.location.hostname.includes("localhost") &&
  window.location.hostname !== "127.0.0.1"
    ? "https://connectus-hivh.onrender.com"
    : "http://localhost:8080");

export const API_BASE_URL = defaultApiUrl;

export const apiUrl = (path) => `${API_BASE_URL}${path}`;

