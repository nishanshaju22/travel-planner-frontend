import { NextResponse } from 'next/server';

export function middleware(request) {
    const token = request.cookies.get('jwt')?.value;
    const { pathname } = request.nextUrl;

    // add new routes here
    const protectedRoutes = ['/dashboard'];

    const publicRoutes = ['/', '/login', '/signup'];

    const isProtectedRoute = protectedRoutes.some(route =>
        pathname.startsWith(route)
    );

    const isPublicRoute = publicRoutes.includes(pathname);

    // Not logged in → block protected routes
    if (!token && isProtectedRoute) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Logged in → block auth pages
    if (token && isPublicRoute) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    return NextResponse.next();
}
