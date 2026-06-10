import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter, Manrope } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FUBPixel from "@/components/FUBPixel";
import { siteDetails } from '@/data/siteDetails';
import { rootSiteMetadata } from '@/lib/site-metadata';

import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['700'],
  display: 'swap',
});

export const metadata: Metadata = rootSiteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${manrope.variable} font-sans antialiased`}
      >
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="lazyOnload"
        />
        <FUBPixel />
        {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
