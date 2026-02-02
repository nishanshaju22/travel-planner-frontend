import { NextResponse } from 'next/server'

export function middleware(request) {
	const { pathname } = request.nextUrl

	// Get token from cookie
	const token = request.cookies.get('jwt')?.value

	// Define routes
	const protectedRoutes = ['/dashboard', '/trips']
	const publicRoutes = ['/login', '/signup']

	// Check if current path is protected
	const isProtectedRoute = protectedRoutes.some(route =>
		pathname === route || pathname.startsWith(route + '/'),
	)

	// Check if current path is public
	const isPublicRoute = publicRoutes.some(route =>
		pathname === route || pathname.startsWith(route + '/'),
	)

	// 1️⃣ Not logged in → block protected routes
	if (!token && isProtectedRoute) {
		return NextResponse.redirect(new URL('/login', request.url))
	}

	// 2️⃣ Logged in → block public routes
	if (token && isPublicRoute) {
		return NextResponse.redirect(new URL('/dashboard', request.url))
	}

	// 3️⃣ Everything else → allow
	return NextResponse.next()
}

// Optional: limit middleware to only the relevant routes for performance
export const config = {
	matcher: [
		'/',
		'/login',
		'/signup',
		'/dashboard/:path*',
		'/trips/:path*',
	],
}
