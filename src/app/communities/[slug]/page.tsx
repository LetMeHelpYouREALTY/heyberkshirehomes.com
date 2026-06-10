import { notFound, redirect } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getCommunityData, getAll55PlusCommunities } from '@/lib/communities';
import { getCommunityBySlug, communities } from '@/data/communities';
import CommunityHero from '@/components/communities/CommunityHero';
import CommunityOverview from '@/components/communities/CommunityOverview';
import CommunityListings from '@/components/communities/CommunityListings';
import CommunityAmenities from '@/components/communities/CommunityAmenities';
import CommunityFloorplans from '@/components/communities/CommunityFloorplans';
import CommunityHOA from '@/components/communities/CommunityHOA';
import CommunityMap from '@/components/communities/CommunityMap';
import CommunityFAQ from '@/components/communities/CommunityFAQ';
import CommunityCTA from '@/components/communities/CommunityCTA';
import Container from '@/components/Container';
import RealScoutWidgetLazy from '@/components/RealScoutWidgetLazy';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';
import {
  generateBreadcrumbSchema,
  generateRealEstateListingSchema,
  generateOrganizationSchema,
} from '@/lib/schema';
import { siteDetails } from '@/data/siteDetails';

// Combine all community slugs for static generation
export async function generateStaticParams() {
  const detailed55Plus = getAll55PlusCommunities();
  const allCommunities = [
    ...detailed55Plus.map(c => ({ slug: c.slug })),
    ...communities.map(c => ({ slug: c.slug })),
  ];
  return allCommunities;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  // Try detailed 55+ community data first
  const detailedCommunity = await getCommunityData(slug);
  if (detailedCommunity) {
    return {
      title: `${detailedCommunity.name} Homes for Sale | 55+ Community Las Vegas | Dr. Jan Duffy`,
      description: `Search ${detailedCommunity.name} homes for sale in ${detailedCommunity.location}. ${detailedCommunity.homeCount} homes, prices from ${detailedCommunity.priceRange}. Expert 55+ community guidance from Dr. Jan Duffy, BHHS Nevada Properties.`,
      keywords: detailedCommunity.seoKeywords.join(', '),
      openGraph: {
        title: `${detailedCommunity.name} Homes for Sale | 55+ Community Las Vegas`,
        description: `${detailedCommunity.tagline}. ${detailedCommunity.homeCount} homes from ${detailedCommunity.priceRange}.`,
        url: `${siteDetails.siteUrl}/communities/${slug}`,
        type: 'website',
      },
    };
  }

  // Fall back to simple community data
  const community = getCommunityBySlug(slug);
  if (!community) {
    return {
      title: 'Community Not Found',
    };
  }

  return {
    title: `${community.name} Homes for Sale | Las Vegas Real Estate | Dr. Jan Duffy`,
    description: `${community.description} Find homes for sale in ${community.name}, Las Vegas. ${siteDetails.agent.experience} of expertise.`,
    openGraph: {
      title: `${community.name} Homes for Sale | Las Vegas Real Estate`,
      description: community.description,
      url: `${siteDetails.siteUrl}/communities/${slug}`,
    },
  };
}

export default async function CommunityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // Redirect old broken URL to correct page
  if (slug === '55-plus-communities') {
    redirect('/55-plus-living');
  }
  
  // Try detailed 55+ community data first
  const detailedCommunity = await getCommunityData(slug);
  
  if (detailedCommunity) {
    // Use new detailed community components for 55+ communities
    const breadcrumbs = [
      { name: 'Home', url: siteDetails.siteUrl },
      { name: 'Communities', url: `${siteDetails.siteUrl}/communities` },
      { name: detailedCommunity.name, url: `${siteDetails.siteUrl}/communities/${slug}` },
    ];

    return (
      <>
        <SchemaMarkup
          schemas={[
            generateBreadcrumbSchema(breadcrumbs),
            generateRealEstateListingSchema({
              name: `${detailedCommunity.name} Homes for Sale`,
              description: detailedCommunity.overview,
              address: detailedCommunity.locationInfo.address,
              price: detailedCommunity.priceRange,
              url: `${siteDetails.siteUrl}/communities/${slug}`,
            }),
            generateOrganizationSchema(),
          ]}
        />

        <CommunityHero community={detailedCommunity} />
        <CommunityOverview community={detailedCommunity} />
        <CommunityListings community={detailedCommunity} />
        <CommunityAmenities community={detailedCommunity} />
        <CommunityFloorplans community={detailedCommunity} />
        <CommunityHOA community={detailedCommunity} />
        <CommunityMap community={detailedCommunity} />
        <CommunityFAQ community={detailedCommunity} />
        <CommunityCTA community={detailedCommunity} />
      </>
    );
  }

  // Fall back to simple community data for existing communities
  const community = getCommunityBySlug(slug);
  if (!community) {
    notFound();
  }

  // Render simple community page (existing structure)
  const relatedCommunities = (community.relatedCommunities
    ?.map((relatedSlug) => getCommunityBySlug(relatedSlug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))) || [];

  const breadcrumbs = [
    { name: 'Home', url: siteDetails.siteUrl },
    { name: 'Communities', url: `${siteDetails.siteUrl}/communities` },
    { name: community.name, url: `${siteDetails.siteUrl}/communities/${slug}` },
  ];

  return (
    <>
      <SchemaMarkup
        schemas={[
          generateBreadcrumbSchema(breadcrumbs),
          generateRealEstateListingSchema({
            name: `${community.name} Homes for Sale`,
            description: community.description,
            address: `${community.name}, Las Vegas, NV`,
            price: community.priceRange,
            url: `${siteDetails.siteUrl}/communities/${slug}`,
          }),
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white py-20">
        <Container>
          <nav className="mb-6 text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            {' / '}
            <Link href="/communities" className="hover:text-white">
              Communities
            </Link>
            {' / '}
            <span className="text-white">{community.name}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            {community.name} - Las Vegas Real Estate
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {community.description}
          </p>
        </Container>
      </section>

      {/* Quick Stats */}
      <section className="bg-white border-b py-8">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-sm text-slate mb-1">Price Range</div>
              <div className="text-xl font-bold text-primary font-display">
                {community.priceRange}
              </div>
            </div>
            <div>
              <div className="text-sm text-slate mb-1">Home Styles</div>
              <div className="text-xl font-bold text-primary font-display">
                {community.homeStyles.length} Types
              </div>
            </div>
            <div>
              <div className="text-sm text-slate mb-1">Year Built</div>
              <div className="text-xl font-bold text-primary font-display">
                {community.yearBuilt}
              </div>
            </div>
            <div>
              <div className="text-sm text-slate mb-1">HOA</div>
              <div className="text-xl font-bold text-primary font-display">
                {community.hoaRange}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Community Overview */}
      <section className="py-12">
        <Container>
          <div className="max-w-4xl mx-auto mb-8">
            <h2 className="text-3xl font-bold mb-6 font-display text-center">
              About {community.name} - Las Vegas Real Estate
            </h2>
            <p className="text-lg text-slate text-center mb-6">
              {community.name} is one of Las Vegas's premier communities, offering residents a unique combination of location, amenities, and lifestyle. Whether you're seeking luxury living, family-friendly neighborhoods, or active adult communities, {community.name} has something special to offer for every type of homebuyer.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-display text-primary">
                Community Overview
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-slate mb-4">
                  {community.description}
                </p>
                <p className="text-slate mb-4">
                  {community.name} offers a unique lifestyle in the heart of Las
                  Vegas. Whether you're seeking luxury living, family-friendly
                  amenities, or active adult communities, this area has
                  something special to offer. The community has established itself as a desirable location for homeowners who value quality, convenience, and a strong sense of community.
                </p>
                <p className="text-slate mb-4">
                  With {siteDetails.agent.experience} of experience in Las Vegas
                  real estate, I can help you find the perfect home in{' '}
                  {community.name} that matches your lifestyle and budget. I understand the nuances of this community, from pricing trends to available inventory, and can guide you through the home buying or selling process with confidence.
                </p>
                <p className="text-slate">
                  Las Vegas real estate continues to be one of the most attractive markets in the Southwest, and {community.name} represents an excellent opportunity for buyers and investors alike. The combination of location, amenities, and value makes this community a smart choice for those looking to call Las Vegas home.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-primary/20 to-primary/40">
              {community.image ? (
                <Image
                  src={community.image}
                  alt={`${community.name} community in Las Vegas`}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/30 via-primary/20 to-gold/20">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🏘️</div>
                    <div className="text-2xl font-bold font-display">{community.name}</div>
                    <div className="text-sm mt-2 opacity-80">Las Vegas, NV</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Why Choose This Community */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 font-display text-primary">
              Why Choose {community.name}?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-cream rounded-xl p-6">
                <h4 className="text-xl font-bold text-primary mb-3 font-display">Location Benefits</h4>
                <p className="text-slate text-sm mb-3">
                  {community.name} is strategically located in Las Vegas, offering convenient access to employment centers, shopping, dining, entertainment, and major transportation routes. This prime location enhances both quality of life and property values.
                </p>
                <ul className="list-disc list-inside text-sm text-slate space-y-1">
                  <li>Convenient access to Las Vegas Strip and downtown</li>
                  <li>Proximity to major employers and business centers</li>
                  <li>Easy access to shopping, dining, and entertainment</li>
                  <li>Close to healthcare facilities and services</li>
                </ul>
              </div>
              <div className="bg-cream rounded-xl p-6">
                <h4 className="text-xl font-bold text-primary mb-3 font-display">Community Features</h4>
                <p className="text-slate text-sm mb-3">
                  {community.name} offers a range of features and amenities that enhance daily living. From well-maintained common areas to community events and social opportunities, this community provides a welcoming environment for residents.
                </p>
                <ul className="list-disc list-inside text-sm text-slate space-y-1">
                  <li>Well-maintained neighborhoods and common areas</li>
                  <li>Community amenities and recreational facilities</li>
                  <li>Strong sense of community and neighbor connections</li>
                  <li>HOA services that maintain property values</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* RealScout Widget */}
      <section className="bg-cream py-12">
        <Container>
          <div className="max-w-4xl mx-auto mb-8">
            <h2 className="text-3xl font-bold mb-4 text-center font-display">
              Homes for Sale in {community.name}
            </h2>
            <p className="text-slate text-center mb-6 text-lg">
              Browse current listings in {community.name} with our comprehensive property search. All listings are updated daily from the MLS, giving you access to the most current inventory available in this Las Vegas community.
            </p>
            <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-gold mb-6">
              <h3 className="text-xl font-bold text-primary mb-3 font-display">Search Features</h3>
              <ul className="space-y-2 text-slate text-sm">
                <li className="flex items-start">
                  <span className="text-gold mr-2 font-bold">✓</span>
                  <span><strong>Real-Time MLS Data:</strong> All listings are pulled directly from the MLS and updated daily, ensuring you see the most current inventory.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 font-bold">✓</span>
                  <span><strong>Advanced Filters:</strong> Filter by price, bedrooms, bathrooms, square footage, and more to find exactly what you're looking for.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 font-bold">✓</span>
                  <span><strong>Community-Specific Results:</strong> Search results are automatically filtered to show only properties in {community.name}.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2 font-bold">✓</span>
                  <span><strong>Off-Market Access:</strong> Call Dr. Jan at {siteDetails.contact.primaryPhone} for access to pocket listings, coming soon properties, and exclusive opportunities not available on public MLS.</span>
                </li>
              </ul>
            </div>
          </div>
          <RealScoutWidgetLazy
            className="min-h-[600px]"
          />
          <p className="text-sm text-slate text-center mt-4 italic">
            Use the search filters within the widget to filter by {community.name} or other communities. Price range: {community.priceRange}
          </p>
        </Container>
      </section>

      {/* Market Insights */}
      <section className="py-12 bg-warm-gray">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center font-display">
              {community.name} Real Estate Market Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-display">Pricing Trends</h3>
                <p className="text-slate text-sm mb-3">
                  The {community.name} real estate market reflects the overall strength of Las Vegas housing. Prices in this community typically range from {community.priceRange}, offering options for various budgets and preferences.
                </p>
                <ul className="list-disc list-inside text-sm text-slate space-y-1">
                  <li>Competitive pricing compared to similar communities</li>
                  <li>Strong appreciation potential over time</li>
                  <li>Good value for location and amenities</li>
                  <li>Active market with consistent sales</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-display">Investment Potential</h3>
                <p className="text-slate text-sm mb-3">
                  {community.name} offers solid investment potential for both primary residence buyers and real estate investors. The combination of location, amenities, and market fundamentals supports long-term value.
                </p>
                <ul className="list-disc list-inside text-sm text-slate space-y-1">
                  <li>Strong rental demand in Las Vegas market</li>
                  <li>Appreciation potential with market growth</li>
                  <li>Diverse property types for different strategies</li>
                  <li>Stable community with established reputation</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Work With Dr. Jan for This Community */}
      <section className="py-12">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center font-display">
              Why Work With Dr. Jan Duffy for {community.name} Real Estate
            </h2>
            <p className="text-slate text-center mb-8 text-lg">
              With {siteDetails.agent.experience} of experience in Las Vegas real estate and deep knowledge of {community.name} and surrounding communities, I bring the expertise and personalized service you need to successfully buy or sell in this area.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-cream rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-primary mb-3 font-display">Local Expertise</h3>
                <p className="text-slate text-sm">
                  I know {community.name} inside and out—from pricing trends and available inventory to neighborhood nuances and market dynamics. This local knowledge helps you make informed decisions.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-primary mb-3 font-display">Access to Listings</h3>
                <p className="text-slate text-sm">
                  Beyond public MLS listings, I have access to pocket listings, coming soon properties, and off-market opportunities in {community.name} that aren't available to the general public.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-primary mb-3 font-display">Negotiation Skills</h3>
                <p className="text-slate text-sm">
                  With {siteDetails.agent.experience} of experience, I know how to negotiate the best terms whether you're buying or selling in {community.name}. My expertise gives you an advantage in competitive situations.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Communities */}
      {relatedCommunities.length > 0 && (
        <section className="py-12 bg-warm-gray">
          <Container>
            <h2 className="text-3xl font-bold mb-4 text-center font-display">
              Explore Related Las Vegas Communities
            </h2>
            <p className="text-slate text-center mb-8 max-w-2xl mx-auto">
              If {community.name} isn't quite the right fit, or if you'd like to compare options, here are related communities in Las Vegas that might also interest you. Each offers unique features and benefits for different lifestyles and budgets.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCommunities.map((related) => (
                <Link
                  key={related.slug}
                  href={`/communities/${related.slug}`}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
                >
                  <h3 className="font-bold mb-2 font-display hover:text-primary text-lg">
                    {related.name}
                  </h3>
                  <p className="text-primary font-semibold mb-2">
                    {related.priceRange}
                  </p>
                  <p className="text-sm text-slate mb-4 line-clamp-3">
                    {related.description}
                  </p>
                  <span className="text-primary text-sm font-semibold">
                    Explore {related.name} →
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection
        title={`Thinking About ${community.name}?`}
        description={`Let's find your perfect home in ${community.name}. ${siteDetails.agent.tagline}`}
      />
    </>
  );
}
