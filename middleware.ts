import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Protect /dashboard and redirect unauthenticated users to landing page.
export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  const { pathname } = req.nextUrl;

  // Paths that require auth
  const protectedPaths = ['/dashboard'];

  if (protectedPaths.some((p) => pathname.startsWith(p))) {
    if (!token) {
      return NextResponse.redirect(new URL('/', req.url));
    }
    // If token present we allow; expiry checks could be added here
  }

  // If on landing page and logged in, redirect to dashboard
  if (pathname === '/' && token) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard/:path*'],
};
