import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

import { Analytics } from "@vercel/analytics/react";

const regularFont = localFont({
  src: "../fonts/NeueHaasDisplay-Roman.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-rl",
});

const mediumFont = localFont({
  src: "../fonts/NeueHaasDisplay-Mediu.woff2",
  weight: "600",
  style: "normal",
  variable: "--font-md",
});

export const metadata: Metadata = {
  title: "Modelo C 2.0",
  description: "Negócios de impacto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${regularFont.variable} ${mediumFont.variable} antialiased`}
      >
        <Header />
        <div className="pt-8 md:pt-20">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
