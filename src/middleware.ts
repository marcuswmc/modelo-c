import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

// Lista de idiomas suportados
const supportedLocales = ['en','es', 'pt'];

export default function middleware(request: NextRequest) {
  const hostname = request.headers.get('host');

  if (hostname && hostname.includes('cmodel.co')) {
    const pathname = request.nextUrl.pathname;

    const localePrefix = pathname.split('/')[1];
    const hasLocale = supportedLocales.includes(localePrefix);

    // Redireciona para inglês somente se não houver prefixo de idioma
    if (!hasLocale) {
      const url = request.nextUrl.clone();
      url.pathname = `/en${pathname}`;
      return Response.redirect(url, 307);
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
