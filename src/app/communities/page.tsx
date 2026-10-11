import { communities } from '@/data/communities';
import { getAll55PlusCommunities } from '@/lib/communities';
import CommunityCard from '@/components/CommunityCard';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { siteDetails } from '@/data/siteDetails';
import { PageAnswerBlock, PageFaq, PageSeo } from '@/components/seo/PageSeo';
import { getPageAnswer } from '@/data/page-answers';

const pageAnswer = getPageAnswer('/communities');

export const metadata = {
  title: pageAnswer.title,
  description: pageAnswer.description,
  alternates: { canonical: `${siteDetails.siteUrl}/communities` },
};

export default function CommunitiesPage() {
  const luxuryCommunities = communities.filter((c) => c.category === 'luxury');
  const familyCommunities = communities.filter((c) => c.category === 'family');
  const activeAdultCommunities = communities.filter(
    (c) => c.category === '55plus'
  );
  const otherCommunities = communities.filter((c) => c.category === 'other');

  return (
    <PageSeo page={pageAnswer}>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary-accent to-secondary text-white py-20">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Las Vegas Luxury Communities
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Summerlin estates, Henderson neighborhoods, and 55+ communities.
            Each page lists the price band and HOA range published on this site.
          </p>
        </Container>
      </section>
      <PageAnswerBlock />

      {/* Luxury Communities */}
      <Section
        id="luxury"
        title="Luxury Communities"
        description="Exclusive guard-gated communities with world-class amenities"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {luxuryCommunities.map((community) => (
            <CommunityCard key={community.slug} community={community} />
          ))}
        </div>
      </Section>

      {/* Family Communities */}
      <Section
        id="family"
        title="Summerlin and Henderson Neighborhoods"
        description="Price bands, home styles, and HOA ranges for northwest Las Vegas and Henderson"
        className="bg-warm-gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {familyCommunities.map((community) => (
            <CommunityCard key={community.slug} community={community} />
          ))}
        </div>
      </Section>

      {/* 55+ Communities */}
      <Section
        id="55plus"
        title="55+ Active Adult Communities"
        description="Resort-style living for active adults"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Show detailed 55+ communities first */}
          {getAll55PlusCommunities().map((community) => (
            <CommunityCard 
              key={community.slug} 
              community={{
                slug: community.slug,
                name: community.name,
                description: community.overview,
                priceRange: community.priceRange,
                homeStyles: community.floorplans.map(fp => fp.name),
                yearBuilt: `${community.yearEstablished} - ${community.builderStatus === 'active' ? 'Present' : community.yearEstablished + 10}`,
                hoaRange: community.hoaFees.monthlyRange,
                category: '55plus' as const,
                image: community.heroImage,
              }} 
            />
          ))}
          {/* Then show simple 55+ communities that aren't in detailed list */}
          {activeAdultCommunities
            .filter(c => !getAll55PlusCommunities().some(detailed => detailed.slug === c.slug))
            .map((community) => (
              <CommunityCard key={community.slug} community={community} />
            ))}
        </div>
      </Section>

      {/* Other Areas */}
      {otherCommunities.length > 0 && (
        <Section
          id="other"
          title="Other Areas"
          description="Additional Las Vegas neighborhoods and communities"
          className="bg-warm-gray"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCommunities.map((community) => (
              <CommunityCard key={community.slug} community={community} />
            ))}
          </div>
        </Section>
      )}

      {/* Las Vegas Market Overview */}
      <Section
        id="market-overview"
        title="Las Vegas Real Estate Market Overview"
        description="Understanding the diverse Las Vegas housing market and finding your perfect community"
        className="bg-warm-gray"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-foreground-accent mb-6 text-lg">
            Las Vegas listings on this site run from Summerlin guard-gated estates to Henderson neighborhoods, 55+ communities, and new construction. Compare the price band, the gate, and the HOA before you choose.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-3 font-display">Luxury Communities</h3>
              <p className="text-slate text-sm mb-3">
                Las Vegas luxury communities like The Ridges, The Summit, and Red Rock Country Club offer guard-gated security, world-class amenities, and exceptional value compared to other major luxury markets. These communities typically feature:
              </p>
              <ul className="list-disc list-inside text-sm text-slate space-y-1">
                <li>Guard-gated security and privacy</li>
                <li>Golf courses and resort-style amenities</li>
                <li>Homes from $800K to $10M+</li>
                <li>Exclusive neighborhoods with prestige</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-3 font-display">Henderson and Northwest Neighborhoods</h3>
              <p className="text-slate text-sm mb-3">
                Henderson, Skye Canyon, and Centennial Hills are published on this site from about $300,000 to $2 million. Compare square footage, parks, and drive time.
              </p>
              <ul className="list-disc list-inside text-sm text-slate space-y-1">
                <li>Parks, trails, and recreation facilities</li>
                <li>Single-family homes and townhomes</li>
                <li>Published HOA ranges on each community page</li>
                <li>Commute times you can measure to Summerlin or the Strip</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-3 font-display">55+ Active Adult Communities</h3>
              <p className="text-slate text-sm mb-3">
                Las Vegas is home to some of the nation's premier 55+ active adult communities, offering resort-style living for active adults. These communities typically feature:
              </p>
              <ul className="list-disc list-inside text-sm text-slate space-y-1">
                <li>Golf courses and fitness centers</li>
                <li>Social clubs and organized activities</li>
                <li>Low-maintenance living with HOA services</li>
                <li>Age-restricted communities with vibrant social scenes</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-3 font-display">New Construction Communities</h3>
              <p className="text-slate text-sm mb-3">
                Master-planned new construction communities offer modern homes, new amenities, and the opportunity to customize your home. These communities typically feature:
              </p>
              <ul className="list-disc list-inside text-sm text-slate space-y-1">
                <li>Brand new homes with modern features</li>
                <li>Builder warranties and incentives</li>
                <li>Master-planned amenities and parks</li>
                <li>Customization options and new construction benefits</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Work With Dr. Jan for Communities */}
      <Section
        id="why-work-with-dr-jan"
        title="Why Work With Dr. Jan Duffy to Find Your Las Vegas Community"
        description="Expert knowledge of Las Vegas neighborhoods and communities"
      >
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-foreground-accent mb-6 text-lg">
            Finding the right community in Las Vegas requires understanding not just the homes and amenities, but also the lifestyle, schools, HOA structures, appreciation potential, and long-term value. With {siteDetails.agent.experience} of experience helping families find their perfect Las Vegas communities, I bring deep knowledge of neighborhoods, market trends, and what makes each community unique.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-cream rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-3 font-display">Deep Neighborhood Knowledge</h3>
            <p className="text-slate text-sm">
              I know the nuances of each Las Vegas community—from school districts and HOA structures to appreciation trends and lifestyle factors. This knowledge helps you make informed decisions about where to live.
            </p>
          </div>
          <div className="bg-cream rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-3 font-display">Access to All Communities</h3>
            <p className="text-slate text-sm">
              Whether you're interested in luxury estates, family neighborhoods, 55+ communities, or new construction, I have access to listings and communities across all market segments throughout Las Vegas.
            </p>
          </div>
          <div className="bg-cream rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-3 font-display">Lifestyle Matching</h3>
            <p className="text-slate text-sm">
              Tell me the square footage, the gate, the commute, and the HOA you will accept. I will match those facts to a community.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section id="cta" title="Can't Find What You're Looking For? Let's Discuss Your Needs" description="Every buyer has unique needs and preferences">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-foreground-accent mb-6">
            Bring the price, the square footage, and the drive you will make. I will name the communities that match those facts.
          </p>
          <p className="text-foreground-accent mb-6">
            With {siteDetails.agent.experience} of experience in Las Vegas real estate, I know the communities, understand the market, and can guide you to neighborhoods that match your goals. Whether you're relocating from another state, moving within Las Vegas, or planning for retirement, I'm here to help.
          </p>
          <a
            href={`tel:${siteDetails.contact.primaryPhone}`}
            className="inline-block bg-primary text-white hover:bg-primary-accent px-8 py-4 rounded-full font-semibold text-lg transition-colors"
          >
            Call/Text {siteDetails.contact.primaryPhone}
          </a>
          <p className="text-sm text-foreground-accent mt-4">
            Available 7 days a week to discuss your Las Vegas real estate needs
          </p>
        </div>
      </Section>
      <PageFaq />
    </PageSeo>
  );
}
