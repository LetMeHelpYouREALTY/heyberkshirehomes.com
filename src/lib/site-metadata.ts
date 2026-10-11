import type { Metadata } from 'next';

import { siteDetails } from '@/data/siteDetails';

export const SITE_TITLE =
  'Las Vegas Luxury Real Estate | Dr. Jan Duffy | Berkshire Hathaway HomeServices Nevada';

export const SITE_DESCRIPTION =
  'Las Vegas luxury real estate with Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada. Summerlin estates, guard-gated communities, and 55+ neighborhoods. 35+ years, $127M+ sold.';

export const OG_IMAGE_PATH = '/opengraph-image';
export const TWITTER_IMAGE_PATH = '/twitter-image';

export const OG_IMAGE_ALT = SITE_TITLE;

export const openGraphImages: NonNullable<Metadata['openGraph']>['images'] = [
  {
    url: OG_IMAGE_PATH,
    width: 1200,
    height: 630,
    alt: OG_IMAGE_ALT,
  },
];

export const twitterImages: NonNullable<Metadata['twitter']>['images'] = [
  {
    url: TWITTER_IMAGE_PATH,
    width: 1200,
    height: 630,
    alt: OG_IMAGE_ALT,
  },
];

export function buildOpenGraph(
  overrides?: Partial<NonNullable<Metadata['openGraph']>>,
): NonNullable<Metadata['openGraph']> {
  return {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: siteDetails.siteUrl,
    siteName: siteDetails.siteName,
    type: 'website',
    locale: siteDetails.locale.replace('-', '_'),
    images: openGraphImages,
    ...overrides,
  };
}

export function buildTwitter(
  overrides?: Partial<NonNullable<Metadata['twitter']>>,
): NonNullable<Metadata['twitter']> {
  return {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: twitterImages,
    ...overrides,
  };
}

export const rootSiteMetadata: Metadata = {
  metadataBase: new URL(siteDetails.siteUrl),
  title: {
    default: SITE_TITLE,
    template: `%s | ${siteDetails.siteName}`,
  },
  description: SITE_DESCRIPTION,
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
  openGraph: buildOpenGraph(),
  twitter: buildTwitter(),
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
};
