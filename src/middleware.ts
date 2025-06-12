import { NextResponse } from 'next/server';

export async function middleware(request: { nextUrl: { pathname: any; }; cookies: { get: (arg0: string) => any; }; url: string | URL | undefined; }) {
    const publicRoutes = ['/login'];
    const path = request.nextUrl.pathname;
    const isPublicRoute = publicRoutes.includes(path);
    const sessionCookie = request.cookies.get('laravel_session');

    if (!isPublicRoute && !sessionCookie) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};