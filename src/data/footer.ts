import { siteDetails } from './siteDetails';

export const footerDetails = {
  subheading: `Las Vegas luxury real estate. ${siteDetails.agent.brokerage}. ${siteDetails.agent.tagline}`,
  quickLinks: [
    { text: 'Home', url: '/' },
    { text: 'About Dr. Jan', url: '/about' },
    { text: 'Luxury Homes', url: '/luxury-homes' },
    { text: '55+ Living', url: '/55-plus-living' },
    { text: 'New Construction', url: '/new-construction' },
    { text: 'Sell Your Home', url: '/sell-your-home' },
    { text: 'Divorce Real Estate', url: '/divorce-real-estate' },
    { text: 'Probate Real Estate', url: '/probate-real-estate' },
    { text: 'Contact', url: '/contact' },
  ],
  contact: {
    primaryPhone: siteDetails.contact.primaryPhone,
    professionalPhone: siteDetails.contact.professionalPhone,
    email: siteDetails.contact.email,
  },
  legal: {
    license: siteDetails.agent.license,
    brokerage: siteDetails.agent.brokerage,
  },
  socials: siteDetails.social,
};
