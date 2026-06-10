import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter, Manrope } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterHomeValue from "@/components/FooterHomeValue";
import SimpleSearchSection from "@/components/SimpleSearchSection";
import FUBPixel from "@/components/FUBPixel";
import { siteDetails } from '@/data/siteDetails';

import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});
const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: {
    default: 'Ask Dr. Jan | Las Vegas Real Estate | Berkshire Hathaway HomeServices Nevada',
    template: `%s | ${siteDetails.siteName}`,
  },
  description:
    'Ask Dr. Jan Duffy — Las Vegas real estate expert with 35+ years, $127M+ sold, backed by Berkshire Hathaway HomeServices Nevada. Current market data, home valuations, 55+ communities, luxury homes.',
  keywords: [
    'Las Vegas real estate',
    'Berkshire Hathaway Las Vegas',
    'Las Vegas homes for sale',
    'Summerlin real estate',
    'Henderson real estate',
    '55+ communities Las Vegas',
    'luxury homes Las Vegas',
    'Dr. Jan Duffy',
  ],
  authors: [{ name: siteDetails.agent.name }],
  openGraph: {
    title: 'Ask Dr. Jan | Las Vegas Real Estate | Berkshire Hathaway HomeServices Nevada',
    description:
      'Ask Dr. Jan Duffy — Las Vegas real estate expert with 35+ years, $127M+ sold, backed by Berkshire Hathaway HomeServices Nevada. Current market data, home valuations, 55+ communities, luxury homes.',
    url: siteDetails.siteUrl,
    siteName: siteDetails.siteName,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: `${siteDetails.siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 675,
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ask Dr. Jan | Las Vegas Real Estate | Berkshire Hathaway HomeServices Nevada',
    description:
      'Ask Dr. Jan Duffy — Las Vegas real estate expert with 35+ years, $127M+ sold, backed by Berkshire Hathaway HomeServices Nevada. Current market data, home valuations, 55+ communities, luxury homes.',
    images: [`${siteDetails.siteUrl}/images/twitter-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
  },
};

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
          strategy="afterInteractive"
        />
        <FUBPixel />
        {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
        <Header />
        <main>
          {children}
        </main>
        {/* Simple Search Section - Appears on every page */}
        <SimpleSearchSection />
        {/* Home Value Widget Section - Before Footer */}
        <FooterHomeValue />
        <Footer />
      </body>
    </html>
  );
}
