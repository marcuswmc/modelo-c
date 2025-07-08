import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

const intlMiddlewareForCModel = createMiddleware({
  locales: ['en', 'pt', 'es'],
  defaultLocale: 'en',
  localePrefix: 'as-needed'
});

const intlMiddlewareDefault = createMiddleware({
  locales: ['pt', 'en', 'es'],
  defaultLocale: 'pt',
  localePrefix: 'as-needed'
});

export default function middleware(request: NextRequest) {
  const hostname = request.headers.get('host');

  if (hostname?.includes('cmodel.co')) {
    return intlMiddlewareForCModel(request);
  }

  return intlMiddlewareDefault(request);
}

export const config = {
   matcher: '/((?!api|trpc|_next|_vercel|.*\\.pdf$|.*\\..*).*)',
};
