export interface Amenity {
  category: string;
  items: string[];
}

export interface Floorplan {
  name: string;
  sqftRange: string;
  bedRange: string;
  bathRange: string;
  garageRange: string;
  priceRange: string;
}

export interface HOAInfo {
  monthlyRange: string;
  includes: string[];
  golfMembership: string;
  notes?: string;
}

export interface LocationInfo {
  address: string;
  coordinates: { lat: number; lng: number };
  nearbyAttractions: Array<{
    name: string;
    distance: string;
    type: string;
  }>;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Community {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  city: string;
  homeCount: string;
  priceRange: string;
  priceMin: number;
  priceMax: number;
  yearEstablished: number;
  builder: string;
  builderStatus: 'active' | 'resale-only';
  ageRestriction: '55+' | '45+' | 'none';
  gated: boolean;
  golf: boolean;
  golfOptional: boolean;
  heroImage: string;
  galleryImages: string[];
  overview: string;
  highlights: string[];
  amenities: Amenity[];
  floorplans: Floorplan[];
  hoaFees: HOAInfo;
  locationInfo: LocationInfo;
  faqs: FAQ[];
  seoKeywords: string[];
}

export const communities55Plus: Community[] = [
  {
    slug: 'sun-city-summerlin',
    name: 'Sun City Summerlin',
    tagline: "Del Webb's Flagship Las Vegas 55+ Community",
    location: 'Summerlin, Las Vegas',
    city: 'Las Vegas',
    homeCount: '7,700+',
    priceRange: '$300K–$1.5M',
    priceMin: 300000,
    priceMax: 1500000,
    yearEstablished: 1989,
    builder: 'Del Webb (Pulte Homes)',
    builderStatus: 'resale-only',
    ageRestriction: '55+',
    gated: false,
    golf: true,
    golfOptional: true,
    heroImage: '/images/communities/sun-city-summerlin/hero.jpg',
    galleryImages: [
      '/images/communities/sun-city-summerlin/clubhouse.jpg',
      '/images/communities/sun-city-summerlin/golf.jpg',
      '/images/communities/sun-city-summerlin/pool.jpg',
      '/images/communities/sun-city-summerlin/homes.jpg',
    ],
    overview: `Sun City Summerlin is Del Webb's flagship Las Vegas active adult community, offering over 7,700 homes across 2,400 acres in the prestigious Summerlin master plan. Established in 1989, this mature community features tree-lined streets, stunning mountain views, and an unparalleled lifestyle for residents 55 and better.

With three championship golf courses, four recreation centers totaling over 100,000 square feet, and more than 150 chartered clubs and organizations, Sun City Summerlin delivers the ultimate active adult lifestyle in Southern Nevada.`,
    highlights: [
      'Largest 55+ community in Las Vegas (7,700+ homes)',
      '3 championship golf courses (Highland Falls, Palm Valley, Eagle Crest)',
      '4 recreation centers with pools, fitness, and meeting rooms',
      '150+ chartered clubs and social organizations',
      'Established community with mature landscaping',
      'Minutes from Downtown Summerlin shopping & dining',
      'No State Income Tax advantage',
      'Resale homes only – established neighborhood character',
    ],
    amenities: [
      { category: 'Golf', items: ['Highland Falls Golf Club', 'Palm Valley Golf Club', 'Eagle Crest Golf Club', 'Pro shops', 'Driving ranges'] },
      { category: 'Fitness & Recreation', items: ['4 fitness centers', '8 swimming pools', 'Tennis courts', 'Pickleball courts', 'Bocce ball', 'Walking trails'] },
      { category: 'Social & Entertainment', items: ['Performing arts theater', 'Ballrooms', 'Card rooms', 'Billiards', 'Woodworking shop', 'Ceramics studio'] },
      { category: 'Convenience', items: ['On-site restaurants', 'Library', 'Computer labs', 'RV parking available'] },
    ],
    floorplans: [
      { name: 'Single-Story Homes', sqftRange: '1,200–2,800 sq ft', bedRange: '2–3', bathRange: '2–3', garageRange: '2–3', priceRange: '$300K–$600K' },
      { name: 'Golf Course Homes', sqftRange: '1,800–3,500 sq ft', bedRange: '2–4', bathRange: '2–4', garageRange: '2–3', priceRange: '$500K–$1M+' },
      { name: 'Custom/Premium', sqftRange: '2,500–4,500 sq ft', bedRange: '3–5', bathRange: '3–5', garageRange: '3', priceRange: '$800K–$1.5M' },
    ],
    hoaFees: {
      monthlyRange: '$150–$300',
      includes: ['Community centers', 'Pools', 'Common areas', 'Landscaping of common areas', 'Security patrol'],
      golfMembership: 'Optional – separate golf memberships available',
      notes: 'HOA fees vary by neighborhood within Sun City Summerlin',
    },
    locationInfo: {
      address: 'Sun City Summerlin, Las Vegas, NV 89134',
      coordinates: { lat: 36.1989, lng: -115.2981 },
      nearbyAttractions: [
        { name: 'Downtown Summerlin', distance: '5 min', type: 'Shopping/Dining' },
        { name: 'Red Rock Canyon', distance: '15 min', type: 'Recreation' },
        { name: 'Las Vegas Strip', distance: '25 min', type: 'Entertainment' },
        { name: 'Summerlin Hospital', distance: '10 min', type: 'Healthcare' },
      ],
    },
    faqs: [
      {
        question: 'What is the age requirement for Sun City Summerlin?',
        answer: 'Sun City Summerlin is a 55+ community. At least one resident must be 55 or older, and no permanent residents under 19 are permitted.',
      },
      {
        question: 'Are there new homes available in Sun City Summerlin?',
        answer: 'Sun City Summerlin is a fully built-out community. All homes are resales, which means mature landscaping, established neighborhoods, and no construction activity.',
      },
      {
        question: 'What are the HOA fees in Sun City Summerlin?',
        answer: 'Monthly HOA fees typically range from $150–$300 depending on the specific neighborhood. Fees cover community centers, pools, common area maintenance, and security patrol. Golf memberships are optional and separate.',
      },
      {
        question: 'Is golf membership required?',
        answer: 'No, golf membership is optional. Many residents enjoy the community amenities without playing golf. Golf memberships can be purchased separately for access to the three courses.',
      },
      {
        question: 'What is the rental policy?',
        answer: 'Rental policies vary by neighborhood. Some areas have minimum lease terms (typically 6-12 months) and limits on the number of rentals. I can provide specific details for any neighborhood you\'re considering.',
      },
    ],
    seoKeywords: [
      'Sun City Summerlin homes for sale',
      'Sun City Summerlin real estate',
      'Sun City Summerlin 55+',
      'Del Webb Las Vegas',
      'Summerlin 55+ community',
      'Sun City Summerlin HOA fees',
      'Sun City Summerlin golf',
    ],
  },
  {
    slug: 'sun-city-anthem',
    name: 'Sun City Anthem',
    tagline: "Henderson's Award-Winning 55+ Community",
    location: 'Henderson, Nevada',
    city: 'Henderson',
    homeCount: '7,100+',
    priceRange: '$300K–$800K',
    priceMin: 300000,
    priceMax: 800000,
    yearEstablished: 1998,
    builder: 'Del Webb (Pulte Homes)',
    builderStatus: 'resale-only',
    ageRestriction: '55+',
    gated: true,
    golf: true,
    golfOptional: true,
    heroImage: '/images/communities/sun-city-anthem/hero.jpg',
    galleryImages: [],
    overview: `Sun City Anthem is Henderson's premier active adult community, featuring 7,100+ homes nestled in the foothills with stunning mountain and city views. This guard-gated Del Webb community offers two championship golf courses, a 62,000 square foot clubhouse, and an exceptional lifestyle for residents 55 and better.

Located in Henderson – consistently ranked one of America's safest cities – Sun City Anthem combines the active adult lifestyle with small-town charm and easy access to Las Vegas amenities.`,
    highlights: [
      'Guard-gated community with 24/7 security',
      '7,100+ homes with mountain & valley views',
      '2 championship golf courses (Anthem & Revere)',
      '62,000 sq ft Anthem Center clubhouse',
      'Located in Henderson – one of America\'s safest cities',
      'Diverse price points ($300Ks–$800Ks)',
      'Strong resale market with consistent activity',
      'Easy access to Lake Mead & Hoover Dam',
    ],
    amenities: [
      { category: 'Golf', items: ['Anthem Country Club', 'Revere Golf Club nearby', 'Pro shop', 'Driving range', 'Golf lessons'] },
      { category: 'Fitness & Recreation', items: ['62,000 sq ft clubhouse', 'Indoor/outdoor pools', 'Tennis center', 'Fitness center', 'Walking trails', 'Bocce'] },
      { category: 'Social & Entertainment', items: ['Performing arts center', 'Ballroom', 'Restaurant & bar', 'Card rooms', 'Art studio', 'Computer lab'] },
      { category: 'Convenience', items: ['Guard-gated entry', 'On-site dining', 'Library', 'Business center'] },
    ],
    floorplans: [
      { name: 'Single-Story', sqftRange: '1,100–2,500 sq ft', bedRange: '2–3', bathRange: '2–3', garageRange: '2', priceRange: '$300K–$500K' },
      { name: 'View Homes', sqftRange: '1,800–3,200 sq ft', bedRange: '2–4', bathRange: '2–3', garageRange: '2–3', priceRange: '$450K–$700K' },
      { name: 'Golf Course', sqftRange: '2,200–3,800 sq ft', bedRange: '3–4', bathRange: '3–4', garageRange: '3', priceRange: '$550K–$800K' },
    ],
    hoaFees: {
      monthlyRange: '$180–$280',
      includes: ['Guard-gated security', 'Clubhouse', 'Pools', 'Common areas', 'Landscaping'],
      golfMembership: 'Optional – separate memberships available',
      notes: 'Some neighborhoods have additional sub-HOA fees',
    },
    locationInfo: {
      address: 'Sun City Anthem, Henderson, NV 89052',
      coordinates: { lat: 35.9647, lng: -115.0897 },
      nearbyAttractions: [
        { name: 'Lake Mead', distance: '20 min', type: 'Recreation' },
        { name: 'Henderson Hospital', distance: '10 min', type: 'Healthcare' },
        { name: 'Galleria at Sunset', distance: '15 min', type: 'Shopping' },
        { name: 'Las Vegas Strip', distance: '25 min', type: 'Entertainment' },
      ],
    },
    faqs: [
      {
        question: 'Is Sun City Anthem gated?',
        answer: 'Yes, Sun City Anthem is a guard-gated community with 24/7 security at all entry points. Visitors must check in at the gate.',
      },
      {
        question: 'What is the difference between Sun City Anthem and Sun City Summerlin?',
        answer: 'Both are Del Webb 55+ communities, but Sun City Anthem is in Henderson (east valley) and is guard-gated, while Sun City Summerlin is in Summerlin (west valley) and is not gated. Anthem tends to have slightly newer homes (built 1998-2008 vs 1989-2002) and more views.',
      },
      {
        question: 'How safe is Henderson?',
        answer: 'Henderson is consistently ranked as one of the safest cities in America. Combined with Sun City Anthem\'s guard-gated security, residents enjoy exceptional safety and peace of mind.',
      },
    ],
    seoKeywords: [
      'Sun City Anthem homes for sale',
      'Sun City Anthem Henderson',
      'Sun City Anthem real estate',
      'Henderson 55+ community',
      'Del Webb Henderson',
      'Sun City Anthem HOA',
    ],
  },
  {
    slug: 'siena',
    name: 'Siena',
    tagline: 'Upscale Gated Golf Community in Summerlin',
    location: 'Summerlin, Las Vegas',
    city: 'Las Vegas',
    homeCount: '2,800+',
    priceRange: '$400K–$1.2M',
    priceMin: 400000,
    priceMax: 1200000,
    yearEstablished: 1999,
    builder: 'Various (Resale Only)',
    builderStatus: 'resale-only',
    ageRestriction: '55+',
    gated: true,
    golf: true,
    golfOptional: true,
    heroImage: '/images/communities/siena/hero.jpg',
    galleryImages: [],
    overview: `Siena is an upscale, gated 55+ community in Summerlin offering 2,800+ homes in a refined, country club setting. Built around the private Siena Golf Club, this community attracts affluent active adults seeking a quieter, more exclusive lifestyle than the larger Del Webb communities.

With its guard-gated entrance, golf-optional membership structure, and sophisticated amenity package, Siena delivers luxury 55+ living for discerning buyers who value privacy and quality.`,
    highlights: [
      'Gated community with controlled access',
      'Private Siena Golf Club (membership optional)',
      'Smaller, more intimate than Sun City (2,800 homes)',
      'Affluent, discerning resident community',
      'Premium Summerlin location',
      'Strong resale values',
      'Upscale finishes and architectural standards',
      'Golf-optional – enjoy amenities without playing',
    ],
    amenities: [
      { category: 'Golf', items: ['Siena Golf Club (private)', 'Pro shop', 'Practice facilities', 'Golf instruction'] },
      { category: 'Fitness & Recreation', items: ['Fitness center', 'Resort-style pool', 'Tennis courts', 'Spa', 'Walking paths'] },
      { category: 'Social', items: ['Clubhouse dining', 'Event spaces', 'Card rooms', 'Social clubs'] },
      { category: 'Convenience', items: ['Guard-gated entry', 'On-site restaurant', 'Concierge services'] },
    ],
    floorplans: [
      { name: 'Patio Homes', sqftRange: '1,400–2,200 sq ft', bedRange: '2–3', bathRange: '2–3', garageRange: '2', priceRange: '$400K–$600K' },
      { name: 'Single Family', sqftRange: '2,000–3,500 sq ft', bedRange: '2–4', bathRange: '2–4', garageRange: '2–3', priceRange: '$550K–$900K' },
      { name: 'Golf Course Estates', sqftRange: '2,800–4,500 sq ft', bedRange: '3–5', bathRange: '3–4', garageRange: '3', priceRange: '$800K–$1.2M' },
    ],
    hoaFees: {
      monthlyRange: '$250–$400',
      includes: ['Guard gate', 'Common areas', 'Landscaping', 'Community amenities'],
      golfMembership: 'Optional – Social and Golf memberships available',
      notes: 'Higher HOA reflects gated security and upscale maintenance standards',
    },
    locationInfo: {
      address: 'Siena, Summerlin, Las Vegas, NV 89135',
      coordinates: { lat: 36.1625, lng: -115.3142 },
      nearbyAttractions: [
        { name: 'Downtown Summerlin', distance: '10 min', type: 'Shopping/Dining' },
        { name: 'Red Rock Canyon', distance: '10 min', type: 'Recreation' },
        { name: 'Summerlin Hospital', distance: '8 min', type: 'Healthcare' },
        { name: 'Las Vegas Strip', distance: '25 min', type: 'Entertainment' },
      ],
    },
    faqs: [
      {
        question: 'How is Siena different from Sun City Summerlin?',
        answer: 'Siena is smaller (2,800 vs 7,700 homes), gated, and generally more upscale. It attracts buyers who prefer a more intimate, exclusive atmosphere with higher architectural standards. Home prices tend to be higher than comparable Sun City Summerlin properties.',
      },
      {
        question: 'Do I have to join the golf club?',
        answer: 'No, golf membership is optional. Many residents enjoy Siena for its gated security, location, and social amenities without playing golf. Social memberships with dining privileges are also available.',
      },
    ],
    seoKeywords: [
      'Siena Summerlin homes for sale',
      'Siena Las Vegas 55+',
      'Siena Golf Club',
      'gated 55+ community Summerlin',
      'luxury 55+ Las Vegas',
    ],
  },
  {
    slug: 'del-webb-lake-las-vegas',
    name: 'Del Webb at Lake Las Vegas',
    tagline: 'Premium Lakefront 55+ Living',
    location: 'Lake Las Vegas, Henderson',
    city: 'Henderson',
    homeCount: '1,500+',
    priceRange: '$400K–$900K+',
    priceMin: 400000,
    priceMax: 900000,
    yearEstablished: 2018,
    builder: 'Del Webb (Pulte Homes)',
    builderStatus: 'active',
    ageRestriction: '55+',
    gated: true,
    golf: false,
    golfOptional: false,
    heroImage: '/images/communities/del-webb-lake-las-vegas/hero.jpg',
    galleryImages: [],
    overview: `Del Webb at Lake Las Vegas brings the trusted Del Webb active adult lifestyle to Henderson's premier resort destination. This newer community (established 2018) offers both new construction and resale homes with stunning lake and mountain views.

Residents enjoy exclusive access to Lake Las Vegas amenities including the lakefront village, water activities, and multiple golf courses nearby – all while living in modern, energy-efficient Del Webb homes.`,
    highlights: [
      'Newer construction (2018+) with modern floor plans',
      'Lake Las Vegas resort lifestyle',
      'Both new homes and resales available',
      'Stunning lake and mountain views',
      'Energy-efficient, modern designs',
      'Access to Lake Las Vegas amenities',
      'Del Webb\'s trusted quality and warranty',
      'Growing community with strong appreciation',
    ],
    amenities: [
      { category: 'Community', items: ['Residents\' clubhouse', 'Fitness center', 'Resort-style pool', 'Event lawn', 'Pickleball courts'] },
      { category: 'Lake Las Vegas', items: ['Lake access', 'Lakefront village shops/dining', 'Water sports rentals', 'Walking trails'] },
      { category: 'Nearby Golf', items: ['Reflection Bay Golf Club', 'SouthShore Golf Club', 'Public access courses'] },
    ],
    floorplans: [
      { name: 'Passport Series', sqftRange: '1,400–1,900 sq ft', bedRange: '2', bathRange: '2', garageRange: '2', priceRange: '$400K–$550K' },
      { name: 'Expedition Series', sqftRange: '1,800–2,400 sq ft', bedRange: '2–3', bathRange: '2–3', garageRange: '2', priceRange: '$500K–$700K' },
      { name: 'Summit Series', sqftRange: '2,200–3,000 sq ft', bedRange: '2–4', bathRange: '2–3', garageRange: '2–3', priceRange: '$650K–$900K+' },
    ],
    hoaFees: {
      monthlyRange: '$200–$350',
      includes: ['Community clubhouse', 'Pools', 'Fitness', 'Common areas', 'Lake Las Vegas access'],
      golfMembership: 'N/A – golf courses are public or separate membership',
      notes: 'New construction may have Mello-Roos/SID taxes',
    },
    locationInfo: {
      address: 'Del Webb at Lake Las Vegas, Henderson, NV 89011',
      coordinates: { lat: 36.1069, lng: -114.9123 },
      nearbyAttractions: [
        { name: 'Lake Las Vegas Village', distance: '5 min', type: 'Shopping/Dining' },
        { name: 'Lake Mead', distance: '15 min', type: 'Recreation' },
        { name: 'Henderson Hospital', distance: '20 min', type: 'Healthcare' },
        { name: 'Las Vegas Strip', distance: '30 min', type: 'Entertainment' },
      ],
    },
    faqs: [
      {
        question: 'Is new construction still available?',
        answer: 'Yes! Del Webb at Lake Las Vegas is still actively building. I can provide current availability, floor plans, and builder incentives. Resale homes are also available for those who prefer move-in ready.',
      },
      {
        question: 'What is the Lake Las Vegas lifestyle like?',
        answer: 'Lake Las Vegas offers a resort atmosphere with a 320-acre private lake, lakefront village with shops and restaurants, water activities, and two golf courses. It feels like a vacation destination while being just 30 minutes from the Las Vegas Strip.',
      },
    ],
    seoKeywords: [
      'Del Webb Lake Las Vegas',
      'Lake Las Vegas 55+',
      'Del Webb Henderson',
      'new construction 55+ Las Vegas',
      'Lake Las Vegas homes for sale',
    ],
  },
  {
    slug: 'trilogy-summerlin',
    name: 'Trilogy in Summerlin',
    tagline: 'Resort-Style Luxury 55+ by Shea Homes',
    location: 'Summerlin, Las Vegas',
    city: 'Las Vegas',
    homeCount: '1,800+',
    priceRange: '$500K–$1M+',
    priceMin: 500000,
    priceMax: 1000000,
    yearEstablished: 2016,
    builder: 'Shea Homes',
    builderStatus: 'active',
    ageRestriction: '55+',
    gated: true,
    golf: false,
    golfOptional: false,
    heroImage: '/images/communities/trilogy-summerlin/hero.jpg',
    galleryImages: [],
    overview: `Trilogy in Summerlin is Shea Homes' premier resort-style 55+ community, featuring modern architecture, innovative floor plans, and the stunning Kona Kai Club – a 25,000 square foot resort amenity center.

This gated community attracts active adults seeking contemporary design, wellness-focused amenities, and a vibrant social scene. With both new construction and resales available, Trilogy offers some of the newest 55+ homes in Summerlin.`,
    highlights: [
      'Modern, contemporary architecture',
      '25,000 sq ft Kona Kai Club amenity center',
      'Resort-style pool with cabanas',
      'Gated community',
      'New construction available',
      'Innovative Shea Homes floor plans',
      'Wellness-focused amenities',
      'Prime Summerlin location',
    ],
    amenities: [
      { category: 'Kona Kai Club', items: ['25,000 sq ft clubhouse', 'Resort pool with cabanas', 'State-of-the-art fitness', 'Movement studio', 'Spa services'] },
      { category: 'Recreation', items: ['Pickleball courts', 'Bocce ball', 'Event lawn', 'Walking trails', 'Dog park'] },
      { category: 'Social', items: ['Demonstration kitchen', 'Wine lounge', 'Game room', 'Event spaces', 'Full-time lifestyle director'] },
    ],
    floorplans: [
      { name: 'Reflect Series', sqftRange: '1,500–2,100 sq ft', bedRange: '2', bathRange: '2', garageRange: '2', priceRange: '$500K–$650K' },
      { name: 'Inspire Series', sqftRange: '2,000–2,800 sq ft', bedRange: '2–3', bathRange: '2–3', garageRange: '2–3', priceRange: '$650K–$850K' },
      { name: 'Luxe Series', sqftRange: '2,500–3,500 sq ft', bedRange: '3–4', bathRange: '3–4', garageRange: '3', priceRange: '$800K–$1M+' },
    ],
    hoaFees: {
      monthlyRange: '$300–$450',
      includes: ['Kona Kai Club', 'Gated entry', 'Pools', 'All amenities', 'Lifestyle programming'],
      golfMembership: 'N/A – no on-site golf; nearby courses available',
      notes: 'Higher HOA reflects resort-level amenities and programming',
    },
    locationInfo: {
      address: 'Trilogy in Summerlin, Las Vegas, NV 89138',
      coordinates: { lat: 36.2234, lng: -115.3156 },
      nearbyAttractions: [
        { name: 'Downtown Summerlin', distance: '10 min', type: 'Shopping/Dining' },
        { name: 'Red Rock Canyon', distance: '8 min', type: 'Recreation' },
        { name: 'TPC Las Vegas', distance: '5 min', type: 'Golf' },
        { name: 'Summerlin Hospital', distance: '12 min', type: 'Healthcare' },
      ],
    },
    faqs: [
      {
        question: 'What makes Trilogy different from Del Webb communities?',
        answer: 'Trilogy focuses on contemporary design, wellness amenities, and resort-style living. Homes feature modern architecture with clean lines, open floor plans, and luxury finishes. The community tends to attract a slightly younger, design-conscious 55+ buyer.',
      },
      {
        question: 'Is new construction still available at Trilogy Summerlin?',
        answer: 'Yes, Shea Homes is still building in Trilogy Summerlin. I can provide current floor plans, pricing, and available inventory. Builder incentives may be available.',
      },
    ],
    seoKeywords: [
      'Trilogy Summerlin homes for sale',
      'Trilogy Summerlin 55+',
      'Shea Homes Las Vegas',
      'luxury 55+ Summerlin',
      'Kona Kai Club',
    ],
  },
  {
    slug: 'regency-summerlin',
    name: 'Regency at Summerlin',
    tagline: 'Luxury 55+ Golf Community by Toll Brothers',
    location: 'Summerlin, Las Vegas',
    city: 'Las Vegas',
    homeCount: '1,200+',
    priceRange: '$600K–$1.5M+',
    priceMin: 600000,
    priceMax: 1500000,
    yearEstablished: 2015,
    builder: 'Toll Brothers',
    builderStatus: 'resale-only',
    ageRestriction: '55+',
    gated: true,
    golf: true,
    golfOptional: true,
    heroImage: '/images/communities/regency-summerlin/hero.jpg',
    galleryImages: [],
    overview: `Regency at Summerlin is Toll Brothers' luxury 55+ community built around the acclaimed TPC Las Vegas golf course. This guard-gated enclave offers premium single-family homes with exceptional finishes, stunning golf course and mountain views, and access to world-class amenities.

For discerning active adults seeking the finest in 55+ living, Regency delivers Toll Brothers' legendary quality in one of Summerlin's most prestigious locations.`,
    highlights: [
      'Toll Brothers luxury quality',
      'TPC Las Vegas golf course community',
      'Guard-gated with 24/7 security',
      'Premium finishes and architecture',
      'Stunning golf and mountain views',
      'Exclusive, intimate community (1,200 homes)',
      'The Crossing Club – private amenity center',
      'Top Summerlin location',
    ],
    amenities: [
      { category: 'The Crossing Club', items: ['Private clubhouse', 'Resort-style pool', 'State-of-the-art fitness', 'Tennis courts', 'Spa'] },
      { category: 'Golf', items: ['TPC Las Vegas (public)', 'Walking distance to clubhouse', 'Golf membership optional'] },
      { category: 'Social', items: ['Event spaces', 'Catering kitchen', 'Wine room', 'Card rooms', 'Lifestyle programming'] },
    ],
    floorplans: [
      { name: 'Carmel Collection', sqftRange: '1,800–2,400 sq ft', bedRange: '2–3', bathRange: '2–3', garageRange: '2', priceRange: '$600K–$800K' },
      { name: 'Napa Collection', sqftRange: '2,200–3,200 sq ft', bedRange: '2–4', bathRange: '2–4', garageRange: '2–3', priceRange: '$800K–$1.1M' },
      { name: 'Sonoma Collection', sqftRange: '2,800–4,000 sq ft', bedRange: '3–4', bathRange: '3–4', garageRange: '3', priceRange: '$1M–$1.5M+' },
    ],
    hoaFees: {
      monthlyRange: '$350–$500',
      includes: ['Guard gate', 'The Crossing Club', 'All amenities', 'Common areas', 'Premium landscaping'],
      golfMembership: 'Optional – TPC Las Vegas is public; memberships available',
      notes: 'Premium HOA reflects luxury amenities and services',
    },
    locationInfo: {
      address: 'Regency at Summerlin, Las Vegas, NV 89135',
      coordinates: { lat: 36.1923, lng: -115.3234 },
      nearbyAttractions: [
        { name: 'TPC Las Vegas', distance: 'On-site', type: 'Golf' },
        { name: 'Downtown Summerlin', distance: '8 min', type: 'Shopping/Dining' },
        { name: 'Red Rock Canyon', distance: '12 min', type: 'Recreation' },
        { name: 'Summerlin Hospital', distance: '10 min', type: 'Healthcare' },
      ],
    },
    faqs: [
      {
        question: 'Is Regency at Summerlin still building new homes?',
        answer: 'Regency at Summerlin is primarily sold out, with resale homes available. Toll Brothers quality means these homes feature premium finishes, solid construction, and strong resale values.',
      },
      {
        question: 'What is TPC Las Vegas?',
        answer: 'TPC Las Vegas is a Tournament Players Club course – part of the prestigious TPC network. It\'s a public course, so you don\'t need to be a member to play, but memberships with benefits are available for frequent golfers.',
      },
    ],
    seoKeywords: [
      'Regency at Summerlin homes for sale',
      'Toll Brothers 55+ Las Vegas',
      'TPC Las Vegas homes',
      'luxury 55+ golf community',
      'Regency Summerlin',
    ],
  },
  {
    slug: 'ardiente',
    name: 'Ardiente',
    tagline: 'Affordable Active Adult Living in North Las Vegas',
    location: 'North Las Vegas',
    city: 'North Las Vegas',
    homeCount: '2,500+',
    priceRange: '$300K–$500K',
    priceMin: 300000,
    priceMax: 500000,
    yearEstablished: 2017,
    builder: 'Taylor Morrison',
    builderStatus: 'active',
    ageRestriction: '55+',
    gated: true,
    golf: false,
    golfOptional: false,
    heroImage: '/images/communities/ardiente/hero.jpg',
    galleryImages: [],
    overview: `Ardiente by Taylor Morrison offers affordable active adult living in North Las Vegas with modern amenities and new construction homes. This gated 55+ community provides an exceptional value proposition for buyers seeking quality new homes without the premium Summerlin/Henderson price tags.

With the 14,000 square foot La Cala Club, resort-style pools, and a full calendar of activities, Ardiente delivers the active adult lifestyle at an accessible price point.`,
    highlights: [
      'Affordable entry point ($300K–$500K)',
      'New construction available',
      'Gated community',
      'Taylor Morrison quality',
      '14,000 sq ft La Cala Club',
      'Modern, energy-efficient homes',
      'Growing community with strong value',
      'Full amenity package',
    ],
    amenities: [
      { category: 'La Cala Club', items: ['14,000 sq ft clubhouse', 'Fitness center', 'Indoor/outdoor pools', 'Movement studio', 'Spa'] },
      { category: 'Recreation', items: ['Pickleball courts', 'Bocce ball', 'Tennis courts', 'Walking trails', 'Event lawn'] },
      { category: 'Social', items: ['Demonstration kitchen', 'Card rooms', 'Event spaces', 'Lifestyle director', 'Clubs & activities'] },
    ],
    floorplans: [
      { name: 'Discovery', sqftRange: '1,200–1,600 sq ft', bedRange: '2', bathRange: '2', garageRange: '2', priceRange: '$300K–$375K' },
      { name: 'Journey', sqftRange: '1,500–2,100 sq ft', bedRange: '2–3', bathRange: '2', garageRange: '2', priceRange: '$350K–$425K' },
      { name: 'Venture', sqftRange: '1,800–2,400 sq ft', bedRange: '2–3', bathRange: '2–3', garageRange: '2–3', priceRange: '$400K–$500K' },
    ],
    hoaFees: {
      monthlyRange: '$175–$250',
      includes: ['La Cala Club', 'Gated entry', 'Pools', 'All amenities', 'Common areas'],
      golfMembership: 'N/A – no on-site golf',
      notes: 'Lower HOA reflects value-oriented positioning',
    },
    locationInfo: {
      address: 'Ardiente, North Las Vegas, NV 89084',
      coordinates: { lat: 36.3012, lng: -115.1234 },
      nearbyAttractions: [
        { name: 'Aliante Casino', distance: '10 min', type: 'Entertainment' },
        { name: 'VA Medical Center', distance: '15 min', type: 'Healthcare' },
        { name: 'Las Vegas Strip', distance: '25 min', type: 'Entertainment' },
        { name: 'Downtown Las Vegas', distance: '20 min', type: 'Entertainment' },
      ],
    },
    faqs: [
      {
        question: 'Why is Ardiente more affordable than Summerlin 55+ communities?',
        answer: 'Ardiente is located in North Las Vegas, where land costs are lower than Summerlin or Henderson. You get Taylor Morrison quality, modern amenities, and new construction at a significant savings – often $100K–$200K less than comparable Summerlin homes.',
      },
      {
        question: 'Is North Las Vegas safe?',
        answer: 'Ardiente is a gated community with controlled access, providing security regardless of the broader area. North Las Vegas has seen significant development and improvement in recent years, with major employers and amenities moving to the area.',
      },
    ],
    seoKeywords: [
      'Ardiente homes for sale',
      'Ardiente North Las Vegas',
      'affordable 55+ Las Vegas',
      'Taylor Morrison 55+',
      'new construction 55+ Las Vegas',
    ],
  },
  {
    slug: 'sun-city-aliante',
    name: 'Sun City Aliante',
    tagline: 'Value-Oriented Del Webb Living in North Las Vegas',
    location: 'North Las Vegas (Aliante)',
    city: 'North Las Vegas',
    homeCount: '2,000+',
    priceRange: '$250K–$500K',
    priceMin: 250000,
    priceMax: 500000,
    yearEstablished: 2004,
    builder: 'Del Webb (Pulte Homes)',
    builderStatus: 'resale-only',
    ageRestriction: '55+',
    gated: false,
    golf: false,
    golfOptional: false,
    heroImage: '/images/communities/sun-city-aliante/hero.jpg',
    galleryImages: [],
    overview: `Sun City Aliante brings Del Webb's proven active adult lifestyle to North Las Vegas at accessible price points. With 2,000+ homes built between 2004-2012, this established community offers the full Del Webb amenity package – clubhouse, pools, fitness, and activities – at significantly lower prices than Sun City Summerlin.

Located within the Aliante master plan, residents enjoy easy access to Aliante Casino, shopping, and healthcare while benefiting from lower HOA fees and home prices.`,
    highlights: [
      'Most affordable Del Webb in Las Vegas ($250K–$500K)',
      'Full Del Webb amenity package',
      'Established community (2004-2012)',
      '2,000+ homes',
      'Lower HOA fees than Summerlin/Henderson',
      'Aliante master plan location',
      'Near Aliante Casino & shopping',
      'Strong value appreciation',
    ],
    amenities: [
      { category: 'Clubhouse', items: ['Fitness center', 'Indoor pool', 'Outdoor resort pool', 'Ballroom', 'Meeting rooms'] },
      { category: 'Recreation', items: ['Tennis courts', 'Bocce ball', 'Horseshoes', 'Walking paths', 'Putting green'] },
      { category: 'Social', items: ['Card rooms', 'Arts & crafts', 'Computer lab', 'Library', 'Clubs & activities'] },
    ],
    floorplans: [
      { name: 'Attached/Duplex', sqftRange: '1,000–1,400 sq ft', bedRange: '2', bathRange: '2', garageRange: '1–2', priceRange: '$250K–$325K' },
      { name: 'Single Family', sqftRange: '1,200–2,200 sq ft', bedRange: '2–3', bathRange: '2', garageRange: '2', priceRange: '$300K–$425K' },
      { name: 'Premium', sqftRange: '1,800–2,800 sq ft', bedRange: '2–4', bathRange: '2–3', garageRange: '2–3', priceRange: '$375K–$500K' },
    ],
    hoaFees: {
      monthlyRange: '$125–$200',
      includes: ['Clubhouse', 'Pools', 'Fitness', 'Common areas', 'Activities'],
      golfMembership: 'N/A – Aliante Golf Club nearby (public)',
      notes: 'Lowest HOA fees of any Del Webb in Las Vegas',
    },
    locationInfo: {
      address: 'Sun City Aliante, North Las Vegas, NV 89084',
      coordinates: { lat: 36.2876, lng: -115.1456 },
      nearbyAttractions: [
        { name: 'Aliante Casino', distance: '5 min', type: 'Entertainment/Dining' },
        { name: 'Aliante Golf Club', distance: '5 min', type: 'Golf' },
        { name: 'VA Medical Center', distance: '10 min', type: 'Healthcare' },
        { name: 'Las Vegas Strip', distance: '20 min', type: 'Entertainment' },
      ],
    },
    faqs: [
      {
        question: 'How does Sun City Aliante compare to Sun City Summerlin?',
        answer: 'Sun City Aliante offers the same Del Webb quality and lifestyle at 20-40% lower prices. The trade-off is location (North Las Vegas vs Summerlin), smaller community size (2,000 vs 7,700 homes), and fewer golf options. For value-conscious buyers, Aliante delivers excellent bang for the buck.',
      },
      {
        question: 'Is Sun City Aliante gated?',
        answer: 'No, Sun City Aliante is not a gated community. However, it is located within the Aliante master plan, a well-maintained area with its own identity and amenities.',
      },
    ],
    seoKeywords: [
      'Sun City Aliante homes for sale',
      'Sun City Aliante real estate',
      'affordable 55+ Las Vegas',
      'Del Webb North Las Vegas',
      'Aliante 55+ community',
    ],
  },
  {
    slug: 'heritage-stonebridge',
    name: 'Heritage at Stonebridge',
    tagline: 'Guard-gated 55+ neighborhood by Lennar in Stonebridge, Summerlin',
    location: 'Stonebridge, Summerlin',
    city: 'Las Vegas',
    homeCount: '9 floor plans',
    priceRange: 'New homes were listed from the $500,000s on May 18, 2026. Confirm the live MLS price.',
    priceMin: 500000,
    priceMax: 500000,
    yearEstablished: 2021,
    builder: 'Lennar',
    builderStatus: 'active',
    ageRestriction: '55+',
    gated: true,
    golf: false,
    golfOptional: false,
    heroImage: '',
    galleryImages: [],
    overview: `Heritage at Stonebridge is Lennar’s guard-gated 55+ neighborhood in the village of Stonebridge at Summerlin. The community site lists the address as 930 Silverfir Ct, Las Vegas, NV 89138, with a staffed gatehouse, pools and a spa, a fitness center, a clubhouse, pickleball, bocce, and trails. Summerlin.com describes nine floor plans in three collections. A public seller guide places the start of sales around 2021. A Summerlin.com note dated May 18, 2026 still showed remaining new homes from 1,232 to 1,422 square feet, priced from the $500,000s. That count is not current inventory. HOA dues are not published on the community site. The resale package lists the Heritage association fee and the Summerlin master assessment.`,
    highlights: [
      'Guard-gated 55+ neighborhood in Stonebridge, Summerlin',
      'Address: 930 Silverfir Ct, Las Vegas, NV 89138',
      'Builder: Lennar. Nine floor plans in three collections (Summerlin.com)',
      'Staffed gatehouse with 24/7 access control',
      'Clubhouse, pools and spa, fitness center, pickleball, and bocce',
      'No community golf course listed on the community site',
      'HOA dues are not published. Confirm them on the resale package',
      'Red Rock Canyon and Downtown Summerlin are the nearby anchors',
    ],
    amenities: [
      { category: 'Clubhouse', items: ['Lounge', 'Kitchen', 'Meeting space', 'Views toward the Strip and Red Rock'] },
      { category: 'Pool and fitness', items: ['Heated pools', 'Hot tub', 'Cabanas', 'Fitness center', 'Fitness studio'] },
      { category: 'Courts and paths', items: ['Pickleball', 'Bocce ball', 'Walking and biking paths'] },
      { category: 'Access', items: ['Staffed gatehouse', '24/7 access control'] },
    ],
    floorplans: [
      {
        name: 'Lennar collections',
        sqftRange: 'Nine floor plans. A May 18, 2026 note listed remaining homes at 1,232–1,422 sq ft.',
        bedRange: 'Confirm on the plan',
        bathRange: 'Confirm on the plan',
        garageRange: 'Confirm on the plan',
        priceRange: 'From the $500,000s (Summerlin.com, May 18, 2026). Not a current price.',
      },
    ],
    hoaFees: {
      monthlyRange: 'Not published. Confirm on the resale package.',
      includes: ['Clubhouse', 'Pools and spa', 'Fitness center', 'Pickleball and bocce', 'Staffed gate'],
      golfMembership: 'No community golf course is listed. Nearby courses are separate.',
      notes: 'Dues are two layers when they apply: the Heritage association and the Summerlin master assessment. heritageatstonebridge.org does not publish the amounts.',
    },
    locationInfo: {
      address: '930 Silverfir Ct, Las Vegas, NV 89138',
      coordinates: { lat: 36.1582366, lng: -115.3783524 },
      nearbyAttractions: [
        { name: 'Red Rock Canyon National Conservation Area', distance: 'Minutes west', type: 'Trails' },
        { name: 'Downtown Summerlin', distance: 'Short drive', type: 'Shopping and dining' },
        { name: 'Summerlin parks and trails', distance: 'In Summerlin', type: 'Paths' },
      ],
    },
    faqs: [
      {
        question: 'Is Heritage at Stonebridge 55+?',
        answer: 'Yes. The community site describes it as a guard-gated 55+ neighborhood. Confirm the occupancy rule in the CC&Rs for the address you are buying.',
      },
      {
        question: 'Where is Heritage at Stonebridge?',
        answer: '930 Silverfir Ct, Las Vegas, NV 89138, in the village of Stonebridge at Summerlin. Source: heritageatstonebridge.org. Map pin from OpenStreetMap, October 11, 2026.',
      },
      {
        question: 'Is the community gated?',
        answer: 'Yes. The community site describes a staffed gatehouse with round-the-clock access control.',
      },
      {
        question: 'Who built Heritage at Stonebridge?',
        answer: 'Lennar. Summerlin.com describes Heritage by Lennar as an age-qualified gated neighborhood with nine floor plans in three collections.',
      },
      {
        question: 'What amenities are listed?',
        answer: 'Pools and a spa, a fitness center, a clubhouse, pickleball, bocce, and walking paths. Source: heritageatstonebridge.org.',
      },
      {
        question: 'What are the HOA dues?',
        answer: 'They are not published on the community website. Ask for the resale package. It should list the Heritage association fee and the Summerlin master assessment.',
      },
      {
        question: 'Is there golf inside Heritage at Stonebridge?',
        answer: 'No community golf course is listed on the community site. Championship courses near Red Rock and in Summerlin are a separate trip and a separate fee.',
      },
      {
        question: 'Are new Lennar homes still available?',
        answer: 'Confirm with Lennar. A Summerlin.com article updated May 18, 2026 still listed remaining new homes. That sentence is not today’s inventory.',
      },
    ],
    seoKeywords: [
      'Heritage at Stonebridge homes for sale',
      'Heritage Stonebridge Summerlin',
      'Lennar 55+ Summerlin',
      'Stonebridge gated community',
      '930 Silverfir Ct Las Vegas',
    ],
  },
];

export async function getCommunityData(slug: string): Promise<Community | null> {
  return communities55Plus.find(c => c.slug === slug) || null;
}

export function getAll55PlusCommunities(): Community[] {
  return communities55Plus;
}
