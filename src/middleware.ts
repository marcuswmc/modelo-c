import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const hostname = request.headers.get('host');

  if (hostname && hostname.includes('cmodel.co')) {
    const url = request.nextUrl.clone();

    if (!url.pathname.startsWith('/en')) {
      url.pathname = `/en${url.pathname}`;
      return Response.redirect(url, 307);
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
