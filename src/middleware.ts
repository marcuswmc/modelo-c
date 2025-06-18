import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

const supportedLocales = ['pt', 'en', 'es'];

export default function middleware(request: NextRequest) {
  const hostname = request.headers.get('host');
  const pathname = request.nextUrl.pathname;

  const localePrefix = pathname.split('/')[1];
  const hasLocale = supportedLocales.includes(localePrefix);

  // Caso o domínio seja cmodel.co e a URL não tenha prefixo de idioma,
  // forçamos o redirecionamento para EN
  if (hostname && hostname.includes('cmodel.co') && !hasLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/en${pathname}`;
    return Response.redirect(url, 307);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
