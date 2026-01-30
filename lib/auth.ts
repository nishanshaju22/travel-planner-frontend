type User = { name?: string; email?: string } | null;

export function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('jwt_token') || getCookie('token') || null;
}

export function setToken(token: string) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('jwt_token', token);
  // Try to set a cookie so middleware can read it
  const exp = getTokenExpiration(token);
  let maxAge = 60 * 60 * 24 * 7; // default 7 days
  if (exp) {
    const seconds = Math.max(0, Math.floor(exp - Date.now() / 1000));
    maxAge = seconds;
  }
  document.cookie = `token=${token}; path=/; max-age=${maxAge}`;
}

export function removeToken() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('jwt_token');
  // expire cookie
  document.cookie = 'token=; path=/; max-age=0';
}

export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  const token = getToken();
  if (!token) return false;
  if (isTokenExpired(token)) return false;
  return true;
}

export function getUserFromToken(): User {
  const token = getToken();
  if (!token) return null;
  try {
    const payload = parseJwt(token);
    return { name: payload.name, email: payload.email } as User;
  } catch (e) {
    return null;
  }
}

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

export function parseJwt(token: string): any {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) throw new Error('Invalid token');
    const payload = parts[1];
    const json = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
    return JSON.parse(decodeURIComponent(encodeURIComponent(json)));
  } catch (e) {
    return null;
  }
}

export function getTokenExpiration(token: string): number | null {
  const payload = parseJwt(token);
  if (!payload || !payload.exp) return null;
  return Number(payload.exp);
}

export function isTokenExpired(token: string): boolean {
  const exp = getTokenExpiration(token);
  if (!exp) return false;
  return Date.now() / 1000 > exp;
}

export async function fetchWithAuth(input: RequestInfo, init: RequestInit = {}) {
  const token = getToken();
  const headers = new Headers(init.headers || {});
  if (token) headers.set('Authorization', `Bearer ${token}`);
  return fetch(input, { ...init, headers });
}
