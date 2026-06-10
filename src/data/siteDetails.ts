const callActionTrackingPhone =
  process.env.NEXT_PUBLIC_CALLACTION_TRACKING_PHONE?.trim() || '';

export const siteDetails = {
  siteName: 'HeyBerkshireHomes.com',
  siteUrl: 'https://www.heyberkshirehomes.com',
  metadata: {
    title: 'Las Vegas Real Estate Expert | Dr. Jan Duffy | Berkshire Hathaway',
    description: 'Your Las Vegas real estate expert with 30+ years experience. Find luxury homes, 55+ communities, new construction, and investment properties. Let me help you!',
  },
  language: 'en-us',
  locale: 'en-US',
  siteLogo: '/images/logo.png',
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID?.trim() || '',

  tracking: {
    // Follow Up Boss pixel ID (Widget Tracker) — Admin > Integrations > Pixel
    fubPixelId: process.env.NEXT_PUBLIC_FUB_PIXEL_ID?.trim() || 'WT-XQHVYQWW',
  },
  
  // Contact Information
  contact: {
    // Site-specific CallAction tracking number — set via NEXT_PUBLIC_CALLACTION_TRACKING_PHONE
    callActionPhone: callActionTrackingPhone,
    primaryPhone: callActionTrackingPhone || '702-842-1192',
    professionalPhone: callActionTrackingPhone || '702-842-1192',
    email: 'DrDuffy@HeyBerkshireHomes.com',
    officeAddress: {
      street: '',
      city: 'Las Vegas',
      state: 'NV',
      zip: '',
    },
  },
  
  // Agent Information
  agent: {
    name: 'Dr. Jan Duffy',
    fullName: 'Dr. Jan Duffy, Ph.D.',
    license: 'S.0197614.LLC',
    brokerage: 'Berkshire Hathaway HomeServices Nevada Properties',
    tagline: 'Let Me Help You!',
    experience: '35+ years',
    familiesServed: '500+',
    salesVolume: '$127M+',
    realscoutAgentId: 'QWdlbnQtMjI1MDUw', // RealScout agent encoded ID
  },
  
  // Social Media
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
    twitter: '',
  },
};
