import { siteDetails } from '@/data/siteDetails';

export interface SchemaMarkup {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
}

export function generateOrganizationSchema(): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${siteDetails.siteUrl}/#organization`,
    name: siteDetails.agent.name,
    url: siteDetails.siteUrl,
    logo: `${siteDetails.siteUrl}${siteDetails.siteLogo}`,
    image: `${siteDetails.siteUrl}${siteDetails.siteLogo}`,
    description: siteDetails.metadata.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteDetails.contact.officeAddress.city,
      addressRegion: siteDetails.contact.officeAddress.state,
      addressCountry: 'US',
    },
    telephone: siteDetails.contact.primaryPhone,
    email: siteDetails.contact.email.toLowerCase(),
    sameAs: [
      siteDetails.social.facebook,
      siteDetails.social.instagram,
      siteDetails.social.linkedin,
    ].filter(Boolean),
    memberOf: {
      '@type': 'RealEstateAgent',
      name: siteDetails.agent.brokerage,
    },
    areaServed: [
      { '@type': 'City', name: 'Las Vegas' },
      { '@type': 'City', name: 'Henderson' },
      { '@type': 'Place', name: 'Summerlin' },
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'license',
      identifier: siteDetails.agent.license,
      recognizedBy: {
        '@type': 'Organization',
        name: 'Nevada Real Estate Division',
      },
    },
    knowsAbout: [
      'Las Vegas luxury real estate',
      'Summerlin estates',
      'The Ridges',
      'Heritage at Stonebridge',
      '55+ communities',
      'New construction',
    ],
  };
}

export function generateLocalBusinessSchema(): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    additionalType: 'https://schema.org/RealEstateAgent',
    '@id': `${siteDetails.siteUrl}/#localbusiness`,
    name: `${siteDetails.agent.name} - ${siteDetails.agent.brokerage}`,
    image: `${siteDetails.siteUrl}${siteDetails.siteLogo}`,
    url: siteDetails.siteUrl,
    telephone: siteDetails.contact.primaryPhone,
    email: siteDetails.contact.email,
    priceRange: '$$$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteDetails.contact.officeAddress.city,
      addressRegion: siteDetails.contact.officeAddress.state,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.1699, // Las Vegas coordinates - update if needed
      longitude: -115.1398,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '18:00',
    },
    areaServed: ['Las Vegas', 'Summerlin', 'Henderson', 'North Las Vegas'],
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateRealEstateListingSchema(listing: {
  name: string;
  description: string;
  address: string;
  price: string;
  image?: string;
  url: string;
}): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: listing.name,
    description: listing.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: listing.address,
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      addressCountry: 'US',
    },
    offers: {
      '@type': 'Offer',
      price: listing.price,
      priceCurrency: 'USD',
    },
    image: listing.image,
    url: listing.url,
  };
}
