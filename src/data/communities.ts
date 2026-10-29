export interface Community {
  slug: string;
  name: string;
  description: string;
  priceRange: string;
  homeStyles: string[];
  yearBuilt: string;
  hoaRange: string;
  category: 'luxury' | 'family' | '55plus' | 'other';
  image?: string;
  relatedCommunities?: string[];
}

export const communities: Community[] = [
  // Luxury Communities
  {
    slug: 'the-ridges',
    name: 'The Ridges',
    description: 'Ultra-luxury guard-gated community in Summerlin with homes ranging from $2M to $10M+. Features stunning mountain views, world-class amenities, and privacy.',
    priceRange: '$2M - $10M+',
    homeStyles: ['Custom Estates', 'Luxury Villas', 'Mountain View Homes'],
    yearBuilt: '2000 - Present',
    hoaRange: '$300 - $800/month',
    category: 'luxury',
    relatedCommunities: ['the-summit', 'red-rock-country-club'],
  },
  {
    slug: 'the-summit',
    name: 'The Summit',
    description: 'Exclusive guard-gated luxury community in Summerlin featuring elegant estates with panoramic views of the Las Vegas Valley.',
    priceRange: '$1.5M - $8M',
    homeStyles: ['Luxury Estates', 'Custom Homes'],
    yearBuilt: '1998 - Present',
    hoaRange: '$400 - $700/month',
    category: 'luxury',
    relatedCommunities: ['the-ridges', 'red-rock-country-club'],
  },
  {
    slug: 'red-rock-country-club',
    name: 'Red Rock Country Club',
    description: 'Premier golf community in Summerlin with luxury homes surrounding championship golf courses. Perfect for golf enthusiasts seeking resort-style living.',
    priceRange: '$800K - $5M',
    homeStyles: ['Golf Course Homes', 'Luxury Estates', 'Custom Builds'],
    yearBuilt: '1997 - Present',
    hoaRange: '$500 - $1,200/month',
    category: 'luxury',
    relatedCommunities: ['the-ridges', 'the-summit'],
  },
  {
    slug: 'summerlin-west',
    name: 'Summerlin West',
    description: 'Overview of Summerlin West communities including The Ridges, The Summit, and other luxury neighborhoods. One of Las Vegas\' most prestigious areas.',
    priceRange: '$500K - $10M+',
    homeStyles: ['Luxury Estates', 'Custom Homes', 'Golf Course Homes'],
    yearBuilt: '1990 - Present',
    hoaRange: '$200 - $1,200/month',
    category: 'luxury',
    relatedCommunities: ['the-ridges', 'the-summit', 'red-rock-country-club'],
  },
  
  // Family Communities
  {
    slug: 'skye-canyon',
    name: 'Skye Canyon',
    description: 'Master-planned community in Northwest Las Vegas featuring newer construction, amenities, and modern home designs.',
    priceRange: '$400K - $900K',
    homeStyles: ['Single Family', 'New Construction', 'Modern Designs'],
    yearBuilt: '2015 - Present',
    hoaRange: '$100 - $250/month',
    category: 'family',
    relatedCommunities: ['centennial-hills', 'the-vistas'],
  },
  {
    slug: 'centennial-hills',
    name: 'Centennial Hills',
    description: 'Older community in Northwest Las Vegas with nearby public schools, parks, and convenient shopping.',
    priceRange: '$350K - $750K',
    homeStyles: ['Single Family', 'Townhomes'],
    yearBuilt: '2000 - 2015',
    hoaRange: '$50 - $200/month',
    category: 'family',
    relatedCommunities: ['skye-canyon', 'the-vistas'],
  },
  {
    slug: 'the-vistas',
    name: 'The Vistas',
    description: 'Charming Summerlin village community with well-maintained homes, tree-lined streets, and close proximity to Red Rock Canyon.',
    priceRange: '$450K - $1.2M',
    homeStyles: ['Single Family', 'Luxury Homes'],
    yearBuilt: '1995 - 2010',
    hoaRange: '$150 - $400/month',
    category: 'family',
    relatedCommunities: ['summerlin-west', 'skye-canyon'],
  },
  {
    slug: 'henderson',
    name: 'Henderson',
    description: 'Overview of Henderson real estate including Green Valley, Anthem, and other desirable neighborhoods. with nearby schools.',
    priceRange: '$300K - $2M',
    homeStyles: ['Single Family', 'Luxury Homes', '55+ Communities'],
    yearBuilt: '1980 - Present',
    hoaRange: '$50 - $500/month',
    category: 'family',
    relatedCommunities: ['skye-canyon', 'centennial-hills'],
  },
  
  // 55+ Communities
  {
    slug: 'sun-city-summerlin',
    name: 'Sun City Summerlin',
    description: 'Premier 55+ active adult community in Summerlin with resort-style amenities, golf courses, and vibrant social scene.',
    priceRange: '$300K - $1.5M',
    homeStyles: ['Single Family', 'Villas', 'Condos'],
    yearBuilt: '1990 - 2010',
    hoaRange: '$200 - $500/month',
    category: '55plus',
    relatedCommunities: ['sun-city-aliante', 'del-webb'],
  },
  {
    slug: 'sun-city-aliante',
    name: 'Sun City Aliante',
    description: 'Active adult community in North Las Vegas featuring modern homes, fitness centers, and active lifestyle amenities.',
    priceRange: '$250K - $800K',
    homeStyles: ['Single Family', 'Villas'],
    yearBuilt: '2000 - Present',
    hoaRange: '$150 - $400/month',
    category: '55plus',
    relatedCommunities: ['sun-city-summerlin', 'del-webb'],
  },
  {
    slug: 'del-webb',
    name: 'Del Webb Communities',
    description: 'Multiple Del Webb 55+ communities throughout Las Vegas Valley offering resort-style living and active adult lifestyle.',
    priceRange: '$300K - $1M',
    homeStyles: ['Single Family', 'Villas'],
    yearBuilt: '2005 - Present',
    hoaRange: '$200 - $450/month',
    category: '55plus',
    relatedCommunities: ['sun-city-summerlin', 'sun-city-aliante'],
  },
  {
    slug: 'heritage-stonebridge',
    name: 'Heritage at Stonebridge',
    description: 'Gated 55+ community in Summerlin with elegant homes, clubhouse amenities, and beautiful landscaping.',
    priceRange: '$400K - $1.2M',
    homeStyles: ['Single Family', 'Luxury Villas'],
    yearBuilt: '2000 - 2015',
    hoaRange: '$300 - $600/month',
    category: '55plus',
    relatedCommunities: ['sun-city-summerlin', 'del-webb'],
  },
  
  // Other Areas
  {
    slug: 'north-las-vegas',
    name: 'North Las Vegas',
    description: 'Affordable and growing area with new construction, older neighborhoods, and excellent value for homebuyers.',
    priceRange: '$250K - $600K',
    homeStyles: ['Single Family', 'New Construction'],
    yearBuilt: '1990 - Present',
    hoaRange: '$50 - $200/month',
    category: 'other',
    relatedCommunities: ['centennial-hills', 'skye-canyon'],
  },
  {
    slug: 'las-vegas-strip-condos',
    name: 'Las Vegas Strip Condos',
    description: 'High-rise luxury condominiums along the Las Vegas Strip offering resort-style amenities and stunning city views.',
    priceRange: '$300K - $5M',
    homeStyles: ['High-Rise Condos', 'Penthouse Units'],
    yearBuilt: '2000 - Present',
    hoaRange: '$500 - $2,000/month',
    category: 'other',
    relatedCommunities: [],
  },
];

export function getCommunityBySlug(slug: string): Community | undefined {
  return communities.find(c => c.slug === slug);
}

export function getCommunitiesByCategory(category: Community['category']): Community[] {
  return communities.filter(c => c.category === category);
}
