import type { Community as DetailedCommunity } from '@/lib/communities';
import type { Community as SimpleCommunity } from '@/data/communities';
import type { PageAnswer } from '@/data/page-answers';
import { siteDetails } from '@/data/siteDetails';

const phone = siteDetails.contact.primaryPhone;

export function detailedCommunityAnswer(
  community: DetailedCommunity,
  slug: string,
): PageAnswer {
  const gated = community.gated ? 'It is gated.' : 'It is not gated.';
  const golf = community.golf
    ? 'Golf is part of the community.'
    : 'A community golf course is not listed.';
  const answer = `${community.name} is a ${community.ageRestriction} community in ${community.location}, built by ${community.builder}. ${gated} ${golf} Address: ${community.locationInfo.address}. Published price note: ${community.priceRange}. HOA: ${community.hoaFees.monthlyRange}. Dr. Jan Duffy represents buyers and sellers here. Call ${phone}.`;

  return {
    path: `/communities/${slug}`,
    title: `${community.name} Homes for Sale | Las Vegas`,
    description: `${community.name} in ${community.location}. ${community.ageRestriction}, ${community.gated ? 'gated' : 'not gated'}. ${community.priceRange}. Call ${phone}.`,
    question: `What is ${community.name}?`,
    answer,
    facts: [
      { label: 'Community', value: community.name },
      { label: 'Address', value: community.locationInfo.address },
      { label: 'Age', value: community.ageRestriction },
      { label: 'Gate', value: community.gated ? 'Gated' : 'Not gated' },
      { label: 'Golf', value: community.golf ? 'Yes' : 'Not in the community' },
      { label: 'Builder', value: community.builder },
      { label: 'Price', value: community.priceRange },
      { label: 'HOA', value: community.hoaFees.monthlyRange },
      { label: 'Agent', value: `Dr. Jan Duffy, ${phone}` },
      { label: 'Updated', value: 'October 11, 2026' },
    ],
    sources:
      slug === 'heritage-stonebridge'
        ? [
            {
              label: 'Heritage at Stonebridge',
              href: 'https://www.heritageatstonebridge.org/',
            },
            {
              label: 'Summerlin.com, Heritage by Lennar',
              href: 'https://summerlin.com/heritage-by-lennar-is-newest-neighborhood-in-the-village-of-stonebridge-at-summerlin/',
            },
          ]
        : undefined,
    sections: {
      overview: `${community.name} sits in ${community.location}. ${community.tagline} ${gated} ${golf}`,
      listings: `Homes for sale in ${community.name} come from the MLS. The price note on this page is: ${community.priceRange}. Confirm the live list before you tour.`,
      amenities: community.amenities
        .map((group) => `${group.category}: ${group.items.join(', ')}`)
        .join('. '),
      floorplans: community.floorplans
        .map((plan) => `${plan.name}, ${plan.sqftRange}, ${plan.priceRange}`)
        .join('. '),
      hoa: `HOA for ${community.name}: ${community.hoaFees.monthlyRange}. ${community.hoaFees.notes ?? ''} Golf membership: ${community.hoaFees.golfMembership}.`,
      location: `${community.locationInfo.address}. Nearby: ${community.locationInfo.nearbyAttractions
        .map((place) => `${place.name} (${place.distance})`)
        .join(', ')}.`,
      faq: `Questions below cover the age rule, the gate, and the HOA for ${community.name}.`,
    },
    faqs: community.faqs,
  };
}

function categoryLabel(category: SimpleCommunity['category']): string {
  switch (category) {
    case 'luxury':
      return 'luxury';
    case '55plus':
      return '55+';
    case 'family':
      return 'residential';
    case 'other':
      return 'Las Vegas';
    default: {
      const exhaustive: never = category;
      return exhaustive;
    }
  }
}

export function simpleCommunityAnswer(community: SimpleCommunity, slug: string): PageAnswer {
  const answer = `${community.name} is listed on this site as a ${categoryLabel(community.category)} community in Las Vegas. Published price band: ${community.priceRange}. Home styles: ${community.homeStyles.join(', ')}. Years: ${community.yearBuilt}. HOA: ${community.hoaRange}. ${community.description} Dr. Jan Duffy. Call ${phone}.`;

  return {
    path: `/communities/${slug}`,
    title: `${community.name} Homes for Sale | Las Vegas`,
    description: `${community.name} in Las Vegas. ${community.priceRange}. ${community.homeStyles.join(', ')}. HOA ${community.hoaRange}. Call ${phone}.`,
    question: `What should I know before buying in ${community.name}?`,
    answer,
    facts: [
      { label: 'Community', value: community.name },
      { label: 'Price band', value: community.priceRange },
      { label: 'Home styles', value: community.homeStyles.join(', ') },
      { label: 'Years', value: community.yearBuilt },
      { label: 'HOA', value: community.hoaRange },
      { label: 'Agent', value: `Dr. Jan Duffy, ${phone}` },
      { label: 'Updated', value: 'October 11, 2026' },
    ],
    sections: {
      overview: community.description,
      listings: `Search active MLS homes in ${community.name}. Published band on this page: ${community.priceRange}.`,
      market: `Use closed sales inside ${community.name}, not the Las Vegas median, to price a house. The band published here is ${community.priceRange}.`,
      advisor: `Dr. Jan Duffy represents buyers and sellers in ${community.name}. Call ${phone} with the address.`,
      related: 'Related communities are linked for a side-by-side price band and HOA range.',
    },
    faqs: [
      {
        question: `What is the published price band for ${community.name}?`,
        answer: community.priceRange,
      },
      {
        question: `What is the HOA range listed for ${community.name}?`,
        answer: community.hoaRange,
      },
      {
        question: `Who do I call about ${community.name}?`,
        answer: `Dr. Jan Duffy at ${phone}, ${siteDetails.agent.brokerage}.`,
      },
    ],
  };
}
