import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

import { Analytics } from "@vercel/analytics/react";

const regularFont = localFont({
  src: "../../fonts/NeueHaasDisplay-Roman.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-rl",
});

const mediumFont = localFont({
  src: "../../fonts/NeueHaasDisplay-Mediu.woff2",
  weight: "600",
  style: "normal",
  variable: "--font-md",
});

export const metadata: Metadata = {
  title: "Modelo C 2.0",
  description: "Negócios de impacto",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}> 
}>) {

  const {locale} = await params
  if(!hasLocale(routing.locales, locale)) {
    return notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${regularFont.variable} ${mediumFont.variable} antialiased`}
      >
        <NextIntlClientProvider>
        <Header />
        <div className="pt-8 md:pt-20">{children}</div>
        <Footer />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
