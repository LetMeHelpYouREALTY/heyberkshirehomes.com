import { siteDetails } from '@/data/siteDetails';

export type Fact = {
  label: string;
  value: string;
};

export type SourceLink = {
  label: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type PageAnswer = {
  path: string;
  title: string;
  description: string;
  question: string;
  answer: string;
  facts: Fact[];
  sources?: SourceLink[];
  sections: Record<string, string>;
  faqs: FaqItem[];
};

const phone = siteDetails.contact.primaryPhone;
const license = siteDetails.agent.license;
const brokerage = siteDetails.agent.brokerage;

const agentFacts: Fact[] = [
  { label: 'Agent', value: 'Dr. Jan Duffy' },
  { label: 'License', value: `Nevada ${license}` },
  { label: 'Brokerage', value: brokerage },
  { label: 'Service area', value: 'Las Vegas, Summerlin, Henderson, North Las Vegas' },
  { label: 'Phone', value: phone },
  { label: 'Updated', value: 'October 11, 2026' },
];

export const pageAnswers: Record<string, PageAnswer> = {
  '/': {
    path: '/',
    title: 'Las Vegas Luxury Real Estate | Dr. Jan Duffy',
    description: `Luxury homes in Summerlin, guard-gated estates, and 55+ communities. Dr. Jan Duffy, ${brokerage}. Call ${phone}.`,
    question: 'Who represents luxury buyers and sellers in Las Vegas?',
    answer: `Dr. Jan Duffy represents luxury buyers and sellers in Las Vegas with ${brokerage}. The work covers Summerlin estates, guard-gated communities, and 55+ neighborhoods such as Heritage at Stonebridge. Nevada license ${license}. ${siteDetails.agent.experience} in the valley and ${siteDetails.agent.salesVolume} in career sales. Call or text ${phone}.`,
    facts: agentFacts,
    sections: {
      practice:
        'The practice is luxury representation first: Summerlin estates, guard-gated communities, 55+ neighborhoods, new construction, and private sales.',
      services:
        'Services are buying, selling, 55+ community selection, new construction, investment analysis, and discreet divorce or probate sales. One agent. One phone number.',
      'market-overview':
        'This site publishes GLVAR figures dated June 2026: a $494,000 median price, 52 average days on market, 6,784 active listings, and 3.3 months of inventory. Luxury pricing is a separate band from that median.',
      communities:
        'Community pages cover Summerlin luxury villages, Henderson, northwest Las Vegas, Strip condominiums, and 55+ neighborhoods. Each page states the price band published on this site.',
      search:
        'The search reads active MLS listings for Las Vegas, Henderson, and Summerlin. Off-market and coming-soon homes are not in the public widget. Call for those.',
      'market-stats':
        'The four figures below are valley-wide GLVAR stats dated June 2026. They are not a price for The Ridges, Heritage at Stonebridge, or any single street.',
      'featured-listings':
        'Featured homes are active MLS listings. Availability and price change daily. Confirm the status before you tour.',
      'about-preview':
        `Dr. Jan Duffy is with ${brokerage}, Nevada license ${license}, with ${siteDetails.agent.experience} and ${siteDetails.agent.salesVolume} in career sales.`,
      testimonials:
        'Client notes on this page name a community and a result. They are illustrations, not a promise of price or timing.',
      'why-choose':
        'Clients hire this practice for street-level pricing, Berkshire Hathaway HomeServices Nevada Properties, and one point of contact from offer through closing.',
      'quick-search':
        'Search by address, neighborhood, or ZIP code. Results are MLS listings, not an appraisal.',
      'home-value':
        'A valuation on this page is a starting range. A pricing opinion uses closed sales on that street. Call with the address.',
      faq: 'The questions below name the service area, the June 2026 median, and how 55+ rules differ from a standard Las Vegas purchase.',
    },
    faqs: [],
  },
  '/luxury-homes': {
    path: '/luxury-homes',
    title: 'Luxury Homes in Las Vegas | Summerlin Estates',
    description: `Las Vegas luxury homes from $800,000 to $10 million and up in The Ridges, The Summit, and Red Rock Country Club. Dr. Jan Duffy. Call ${phone}.`,
    question: 'Where are Las Vegas luxury homes for sale?',
    answer: `Las Vegas luxury listings on this site run from $800,000 to $10 million and up. The concentration is Summerlin: The Ridges, The Summit, and Red Rock Country Club. Dr. Jan Duffy at ${brokerage} represents those buyers and sellers. Call ${phone} for the current list.`,
    facts: [
      ...agentFacts,
      { label: 'Published luxury band', value: '$800,000 to $10 million+' },
      { label: 'Primary villages', value: 'The Ridges, The Summit, Red Rock Country Club' },
    ],
    sections: {
      overview:
        'Luxury on this site means guard-gated Summerlin estates, golf-course homes, custom builds, and Strip high-rises, priced from $800,000.',
      communities:
        'The Ridges is published here at $2 million to $10 million and up. The Summit is $1.5 million to $8 million. Red Rock Country Club is $800,000 to $5 million.',
      expertise:
        'Luxury representation here means discreet showings, off-market inquiries, and pricing from closed sales on that street.',
      search:
        'The widget shows active luxury-range MLS listings. Pocket listings are not public. Call for those.',
    },
    faqs: [
      {
        question: 'What is the luxury price band on this site?',
        answer:
          'This site treats luxury as homes from $800,000 to $10 million and up, with the top of the band in The Ridges.',
      },
      {
        question: 'Which Las Vegas communities are the luxury focus?',
        answer:
          'The Ridges, The Summit, and Red Rock Country Club in Summerlin, plus selected Strip condominiums.',
      },
      {
        question: 'How do I see homes that are not on the MLS?',
        answer: `Call or text ${phone}. Off-market and coming-soon conversations stay off the public search.`,
      },
    ],
  },
  '/55-plus-living': {
    path: '/55-plus-living',
    title: '55+ Communities in Las Vegas | Luxury Active Adult',
    description: `Compare Las Vegas 55+ communities, including Sun City Summerlin and Heritage at Stonebridge. Dr. Jan Duffy. Call ${phone}.`,
    question: 'What 55+ communities are in Las Vegas?',
    answer: `Las Vegas 55+ communities on this site include Sun City Summerlin, Sun City Aliante, Del Webb, and Heritage at Stonebridge in Summerlin. At least one resident must be 55 or older. Gates, golf, and HOA dues differ by neighborhood. Dr. Jan Duffy compares them before you tour. Call ${phone}.`,
    facts: [
      ...agentFacts,
      { label: 'Age rule', value: 'At least one resident 55 or older' },
      { label: 'Summerlin 55+ example', value: 'Heritage at Stonebridge, 930 Silverfir Ct, Las Vegas, NV 89138' },
    ],
    sources: [
      {
        label: 'Heritage at Stonebridge community site',
        href: 'https://www.heritageatstonebridge.org/',
      },
    ],
    sections: {
      overview:
        'A 55+ community is age-restricted. It is not the same product as a Summerlin estate with no age rule. Compare the gate, the HOA, and the floor plans.',
      communities:
        'Featured pages include Sun City Summerlin, Sun City Aliante, Del Webb, and Heritage at Stonebridge, Lennar’s guard-gated neighborhood in Stonebridge.',
      benefits:
        'Buyers use these communities for single-story plans, a clubhouse, and exterior maintenance. Golf is included only where the community page says so.',
      search:
        'Filter the MLS search to the community name. Age rules and rental caps are in the resale package, not in the listing photo set.',
    },
    faqs: [
      {
        question: 'Is Heritage at Stonebridge a 55+ community?',
        answer:
          'Yes. The community site describes Heritage at Stonebridge as a guard-gated 55+ neighborhood in Summerlin, at 930 Silverfir Ct, Las Vegas, NV 89138.',
      },
      {
        question: 'Do all Las Vegas 55+ communities include golf?',
        answer:
          'No. Sun City Summerlin has golf. Heritage at Stonebridge does not list a community golf course. Nearby courses are a separate membership.',
      },
      {
        question: 'Where do I confirm HOA dues?',
        answer:
          'On the resale package for that address. Several communities do not publish a single dues number on their marketing sites.',
      },
    ],
  },
  '/communities': {
    path: '/communities',
    title: 'Las Vegas Luxury Communities | Summerlin and Henderson',
    description: `Summerlin estates, Henderson neighborhoods, and 55+ communities. Price bands and HOA ranges by community. Dr. Jan Duffy. Call ${phone}.`,
    question: 'Which Las Vegas communities does this site cover?',
    answer: `This site covers Summerlin luxury villages, Henderson, northwest Las Vegas, Strip condominiums, and 55+ communities. Each card lists the price band, home styles, and HOA range published here. Dr. Jan Duffy, ${brokerage}. Call ${phone}.`,
    facts: agentFacts,
    sections: {
      luxury:
        'Luxury cards are The Ridges, The Summit, Red Rock Country Club, and Summerlin West. Published bands start at $800,000 and run above $10 million in The Ridges.',
      family:
        'These neighborhoods are priced on this site from about $300,000 to $2 million. Compare square footage, HOA range, and drive time. School quality is not a reason stated here.',
      '55plus':
        '55+ cards include Sun City Summerlin, Sun City Aliante, Del Webb, and Heritage at Stonebridge. Age restriction applies.',
      other:
        'North Las Vegas and Strip condominiums sit outside the Summerlin luxury villages. Price bands are on each card.',
      'market-overview':
        'Match the community to the house: gate, age rule, HOA, and the closed sales on that street. A valley median is not a community price.',
      'why-work-with-dr-jan':
        `Dr. Jan Duffy uses ${siteDetails.agent.experience} in Las Vegas to separate a luxury village from a 55+ neighborhood before you write an offer.`,
      cta: `If the right community is not listed, call ${phone} with the address or the must-have list.`,
    },
    faqs: [
      {
        question: 'Where is Heritage at Stonebridge?',
        answer:
          '930 Silverfir Ct, Las Vegas, NV 89138, in the village of Stonebridge at Summerlin. It is a guard-gated 55+ neighborhood by Lennar.',
      },
      {
        question: 'What is the difference between The Ridges and a 55+ community?',
        answer:
          'The Ridges is a guard-gated luxury community without an age restriction in the description on this site. Heritage at Stonebridge and Sun City require a 55+ resident.',
      },
    ],
  },
  '/about': {
    path: '/about',
    title: 'Dr. Jan Duffy | Las Vegas Luxury Realtor',
    description: `Dr. Jan Duffy, Nevada ${license}, ${brokerage}. ${siteDetails.agent.experience}, ${siteDetails.agent.salesVolume} in career sales. Call ${phone}.`,
    question: 'Who is Dr. Jan Duffy?',
    answer: `Dr. Jan Duffy is a Las Vegas real estate agent with ${brokerage}, Nevada license ${license}. This site states ${siteDetails.agent.experience} and ${siteDetails.agent.salesVolume} in career sales. The work is luxury homes, 55+ communities, and new construction. Call ${phone}.`,
    facts: agentFacts,
    sections: {
      bio: `Dr. Jan Duffy works Las Vegas luxury and 55+ sales from ${brokerage}. The public figures on this site are ${siteDetails.agent.experience}, ${siteDetails.agent.familiesServed} households, and ${siteDetails.agent.salesVolume}.`,
      credentials: `License ${license}. Brokerage: ${brokerage}. Phone ${phone}. Email ${siteDetails.contact.email}.`,
      why: 'The working method is street-level comps, a written next step, and one point of contact through closing.',
      specializations:
        'Luxury Summerlin, 55+ communities including Heritage at Stonebridge, new construction, and investor purchases.',
      'additional-expertise':
        'Divorce sales and probate sales are available when the household needs a private listing process. Those pages are not legal advice.',
    },
    faqs: [
      {
        question: 'What is the license number?',
        answer: `Nevada ${license}.`,
      },
      {
        question: 'Which brokerage?',
        answer: brokerage,
      },
      {
        question: 'What phone number is the client line on this site?',
        answer: phone,
      },
    ],
  },
  '/contact': {
    path: '/contact',
    title: 'Contact Dr. Jan Duffy | Las Vegas Luxury Real Estate',
    description: `Call or text ${phone} or email ${siteDetails.contact.email}. Luxury homes, 55+ communities, and valuations in Las Vegas.`,
    question: 'How do I reach Dr. Jan Duffy?',
    answer: `Call or text ${phone}, or email ${siteDetails.contact.email}. The service area is Las Vegas, Summerlin, Henderson, and North Las Vegas. Use the form for a luxury search, a 55+ question, or a valuation tied to an address.`,
    facts: agentFacts,
    sections: {
      'contact-methods': `Phone ${phone}. Email ${siteDetails.contact.email}. Both reach Dr. Jan Duffy at ${brokerage}.`,
      'contact-form':
        'The form asks for name, email, phone, and the property interest. A reply follows that message. It does not create an agency agreement.',
      'what-to-expect':
        'The first conversation covers the address or community, the timing, and whether the home is luxury, 55+, new construction, or a sale.',
      map: 'The service area is Las Vegas, Henderson, Summerlin, and North Las Vegas. A street-level office address is not published on this page.',
    },
    faqs: [
      {
        question: 'What number should I call?',
        answer: `Call or text ${phone}.`,
      },
      {
        question: 'Do you cover Summerlin and Henderson?',
        answer: 'Yes. Las Vegas, Summerlin, Henderson, and North Las Vegas.',
      },
    ],
  },
  '/new-construction': {
    path: '/new-construction',
    title: 'New Construction Homes in Las Vegas | Lennar and More',
    description: `New construction representation in Las Vegas, including Lennar at Heritage at Stonebridge. Dr. Jan Duffy. Call ${phone}.`,
    question: 'Who represents new-construction buyers in Las Vegas?',
    answer: `Dr. Jan Duffy represents new-construction buyers in Las Vegas, including Lennar’s Heritage at Stonebridge in Summerlin. The work covers lot choice, incentives, and a resale comparison before you sign a builder contract. Call ${phone}. Inventory changes without notice.`,
    facts: [
      ...agentFacts,
      { label: 'Example community', value: 'Heritage at Stonebridge by Lennar, Summerlin' },
    ],
    sources: [
      {
        label: 'Summerlin.com on Heritage by Lennar',
        href: 'https://summerlin.com/heritage-by-lennar-is-newest-neighborhood-in-the-village-of-stonebridge-at-summerlin/',
      },
    ],
    sections: {
      overview:
        'A new home is a builder contract plus a lot premium and a timeline. Compare it with resale homes in the same community before you choose.',
      builders:
        'Lennar built Heritage at Stonebridge, a guard-gated 55+ neighborhood in Stonebridge. Other builders are handled the same way: incentives in writing, then a resale check.',
      process:
        'The sequence is community choice, plan and lot, incentive review, construction timeline, and closing. Confirm the current release with the builder.',
      search:
        'The search shows new-construction listings on the MLS. Builder inventory that is not listed will not appear. Call for that check.',
    },
    faqs: [
      {
        question: 'Is Heritage at Stonebridge new construction?',
        answer:
          'Lennar built it as an age-qualified neighborhood in Stonebridge. A Summerlin.com update dated May 18, 2026 still showed remaining new homes. Confirm today’s inventory with Lennar.',
      },
      {
        question: 'Should I use an agent with a builder?',
        answer: `Yes, if you want a resale comparison and a review of incentives before you sign. Call ${phone} before the builder registration.`,
      },
    ],
  },
  '/sell-your-home': {
    path: '/sell-your-home',
    title: 'Sell a Luxury Home in Las Vegas | Dr. Jan Duffy',
    description: `Sell a Las Vegas or Summerlin home with pricing from closed MLS sales. Dr. Jan Duffy, ${brokerage}. Call ${phone}.`,
    question: 'How do I sell a luxury home in Las Vegas?',
    answer: `Dr. Jan Duffy lists Las Vegas and Summerlin homes through ${brokerage}. The price starts with closed MLS sales on that street, not a portal estimate. Call ${phone} with the address for a valuation.`,
    facts: agentFacts,
    sections: {
      value:
        'A listing plan names the price, the prep, and the buyers who can close. Luxury and 55+ homes need the HOA resale package in that plan.',
      process:
        'The sale runs from a pricing opinion, to prep and photos, to showings, to contract and closing. Each step has a date.',
      success:
        'Results on this page are examples from past clients. They are not a forecast for your address.',
      valuation:
        'Enter the address. The number you get here is a start. The pricing conversation uses closed sales.',
    },
    faqs: [
      {
        question: 'How is the list price set?',
        answer:
          'From closed sales on that street, adjusted for size, lot, and condition. A portal estimate is not the list price.',
      },
      {
        question: 'Do you sell 55+ homes?',
        answer:
          'Yes. Sun City, Del Webb, and Heritage at Stonebridge sales include the age rule and the resale package.',
      },
    ],
  },
  '/investors': {
    path: '/investors',
    title: 'Las Vegas Investment Property | Luxury and Rentals',
    description: `Las Vegas investment property analysis by address: rent, HOA, and price. Dr. Jan Duffy. Call ${phone}.`,
    question: 'Does Dr. Jan Duffy represent Las Vegas investors?',
    answer: `Yes. Investor work covers rentals, 1031 exchanges, and luxury homes held as assets. The numbers are the address, the rent, and the HOA, not a valley-wide average. Call ${phone} with the property.`,
    facts: [
      ...agentFacts,
      { label: 'Valley inventory context', value: '3.3 months, GLVAR, June 2026' },
    ],
    sections: {
      'why-las-vegas':
        'Nevada has no state income tax. That is a statewide fact, not a return. The return depends on the address, the rent, and the expenses.',
      strategies:
        'Strategies on this page are long-term rentals, value-add, and 1031 exchanges. Each one needs a specific property.',
      'market-data':
        'Analysis delivered here is price, rent, HOA, and cash left in the deal. A cap rate without those inputs is not a recommendation.',
      search:
        'The search shows MLS listings. It does not calculate yield. Call with an address for that worksheet.',
    },
    faqs: [
      {
        question: 'What inventory figure should I use?',
        answer:
          'This site cites 3.3 months of inventory from GLVAR, June 2026. Check a current print before you rely on it.',
      },
      {
        question: 'Can a 55+ home be an investment?',
        answer:
          'Sometimes. Many 55+ communities limit rentals. Read the rental cap in the resale package before you model cash flow.',
      },
    ],
  },
  '/divorce-real-estate': {
    path: '/divorce-real-estate',
    title: 'Sell a Las Vegas Home During Divorce | Dr. Jan Duffy',
    description: `Private Las Vegas home sales during divorce, including luxury and 55+ property. Dr. Jan Duffy. Call ${phone}. Not legal advice.`,
    question: 'Can a Las Vegas home be sold during a divorce?',
    answer: `Yes. Dr. Jan Duffy handles the real estate side of a Las Vegas divorce sale, including luxury and 55+ homes. One contact for price, showings, and closing. Call ${phone}. This page is not legal advice.`,
    facts: agentFacts,
    sections: {
      overview:
        'The real estate task is a price, a buyer, and a closing both parties can sign. Court questions belong to the attorneys.',
      services:
        'Services are a pricing opinion, a private showing plan, and a closing calendar. Documents go to the parties you name.',
      'why-choose':
        'The listing stays factual. Price comes from closed sales. Communication goes to the contacts you authorize.',
      process:
        'Agree the goal, price the home, prepare it, accept an offer, and close on the date the order allows.',
      confidentiality:
        'Showings and inquiry calls stay limited to the plan you approve. Do not send account numbers or case files through the public form.',
    },
    faqs: [
      {
        question: 'Is this legal advice?',
        answer: 'No. It is real estate representation. Your attorney directs the court side.',
      },
      {
        question: 'Can you sell a home in The Ridges or a 55+ community during divorce?',
        answer: 'Yes. The community rules and the HOA resale package still apply.',
      },
    ],
  },
  '/probate-real-estate': {
    path: '/probate-real-estate',
    title: 'Probate Home Sales in Las Vegas | Dr. Jan Duffy',
    description: `Las Vegas probate real estate: pricing, buyers, and a closing that follows the estate timeline. Call ${phone}. Not legal advice.`,
    question: 'How is a Las Vegas home sold in probate?',
    answer: `A Las Vegas probate sale still needs a market price, a buyer, and a closing that fits the estate timeline. Dr. Jan Duffy handles the real estate and coordinates with the estate’s attorney. Call ${phone}. This page is not legal advice.`,
    facts: agentFacts,
    sections: {
      overview:
        'The house can be luxury, 55+, or a standard residence. The court timeline and the attorney control what can be signed.',
      services:
        'Services are a pricing opinion, a sale plan, and buyer qualification. Court filings stay with the attorney.',
      process:
        'Confirm authority to sell, price the home, list or accept an offer, and close when the estate allows.',
      'why-choose':
        'You get one real estate contact who will work with the attorney already on the file.',
      faq: 'Common questions cover timing, occupancy, and whether a 55+ or luxury home follows the same sale steps. The court steps do not change with the price.',
    },
    faqs: [],
  },
};

export function getPageAnswer(path: string): PageAnswer {
  const page = pageAnswers[path];
  if (!page) {
    throw new Error(`Missing page answer for ${path}`);
  }
  return page;
}
