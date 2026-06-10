import RealScoutWidgetLazy from '@/components/RealScoutWidgetLazy';
import CTASection from '@/components/CTASection';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { getCommunitiesByCategory } from '@/data/communities';
import { getAll55PlusCommunities } from '@/lib/communities';
import CommunityCard from '@/components/CommunityCard';
import { siteDetails } from '@/data/siteDetails';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = {
  title: '55+ Communities Las Vegas | Active Adult Living | Dr. Jan Duffy',
  description: 'Discover 55+ active adult communities in Las Vegas. Resort-style amenities, golf courses, and vibrant social scenes. Sun City, Del Webb, and more.',
};

const activeAdultCommunities = getCommunitiesByCategory('55plus');

export default function ActiveAdultPage() {
  const breadcrumbs = [
    { name: 'Home', url: siteDetails.siteUrl },
    { name: '55+ Living', url: `${siteDetails.siteUrl}/55-plus-living` },
  ];

  return (
    <>
      <SchemaMarkup schemas={[generateBreadcrumbSchema(breadcrumbs)]} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary-accent to-secondary text-white py-20">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            55+ Active Adult Communities Las Vegas
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Discover resort-style living in Las Vegas's premier 55+ communities.
            Golf courses, fitness centers, social clubs, and an active lifestyle
            await.
          </p>
        </Container>
      </section>

      {/* Overview */}
      <Section
        id="overview"
        title="Active Adult Living in Las Vegas - Your Next Chapter Starts Here"
        description="Discover resort-style living in Las Vegas's premier 55+ communities"
      >
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-foreground-accent mb-6 text-lg">
            Las Vegas offers some of the finest 55+ active adult communities in
            the country. From Sun City Summerlin to Del Webb communities, Trilogy in Summerlin, and Siena, these
            neighborhoods are designed for active, vibrant living with resort-style amenities, golf courses, fitness centers, and vibrant social scenes.
          </p>
          <p className="text-foreground-accent mb-6 text-lg">
            With {siteDetails.agent.experience} of experience helping active
            adults find their perfect Las Vegas home, I understand the unique
            considerations: lifestyle amenities, healthcare access, social
            opportunities, maintenance-free living, and the importance of finding a community that matches your interests and values.
          </p>
          <p className="text-foreground-accent mb-6 text-lg">
            Whether you're planning your retirement move from another state, looking to downsize
            into an active adult community, or seeking a second home for active living, I'll help you find the perfect fit for your lifestyle, budget, and long-term goals.
          </p>
          <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-gold mb-6">
            <h3 className="text-xl font-bold text-primary mb-3 font-display">Why Choose 55+ Active Adult Living in Las Vegas?</h3>
            <ul className="space-y-2 text-foreground-accent">
              <li className="flex items-start">
                <span className="text-gold mr-2 font-bold">✓</span>
                <span><strong>Resort-Style Amenities:</strong> Golf courses, fitness centers, pools, tennis courts, and clubhouses create a resort-like lifestyle without leaving your neighborhood.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2 font-bold">✓</span>
                <span><strong>Active Social Scene:</strong> Organized activities, clubs, events, and interest groups help you stay active and build new friendships.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2 font-bold">✓</span>
                <span><strong>Low Maintenance Living:</strong> HOA handles landscaping, exterior maintenance, and common area upkeep, giving you more time to enjoy life.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2 font-bold">✓</span>
                <span><strong>Tax-Friendly Environment:</strong> Nevada's no state income tax makes it attractive for retirees looking to maximize their retirement income.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2 font-bold">✓</span>
                <span><strong>Year-Round Recreation:</strong> Las Vegas's climate allows for outdoor activities year-round, from golf to hiking to pickleball.</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Featured Communities */}
      <Section
        id="communities"
        title="Featured 55+ Communities"
        description="Las Vegas's premier active adult neighborhoods"
        className="bg-cream"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Show detailed 55+ communities first with full cards */}
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

      {/* Lifestyle Benefits */}
      <Section
        id="benefits"
        title="55+ Community Lifestyle Benefits in Las Vegas"
        description="What makes active adult living special and why so many choose Las Vegas for their retirement years"
      >
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-foreground-accent mb-6 text-lg">
            Active adult communities in Las Vegas offer a unique lifestyle that combines resort-style amenities, social opportunities, and maintenance-free living. These communities are designed specifically for active adults who want to enjoy their retirement years to the fullest, with amenities and activities that keep you engaged, healthy, and connected.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">🏌️</div>
            <h3 className="font-bold mb-2 font-display text-lg">Golf Courses</h3>
            <p className="text-sm text-foreground-accent">
              Championship courses and practice facilities. Many 55+ communities feature on-site golf courses or golf memberships, making it easy to enjoy your favorite sport year-round in Las Vegas's ideal climate.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">🏋️</div>
            <h3 className="font-bold mb-2 font-display text-lg">Fitness Centers</h3>
            <p className="text-sm text-foreground-accent">
              State-of-the-art equipment and classes. Stay active and healthy with modern fitness facilities, group exercise classes, yoga, Pilates, and personal training options available in many communities.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">🎭</div>
            <h3 className="font-bold mb-2 font-display text-lg">Social Clubs</h3>
            <p className="text-sm text-foreground-accent">
              Activities, events, and interest groups. From book clubs to card games, travel groups to hobby clubs, active adult communities offer countless ways to meet like-minded neighbors and build lasting friendships.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">🔧</div>
            <h3 className="font-bold mb-2 font-display text-lg">Low Maintenance</h3>
            <p className="text-sm text-foreground-accent">
              HOA handles landscaping and exterior maintenance. Spend less time on yard work and home maintenance, and more time enjoying the activities and amenities that matter to you.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-cream rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-3 font-display">Additional Amenities</h3>
            <ul className="space-y-2 text-slate text-sm">
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Swimming pools and spas for relaxation and exercise</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Pickleball and tennis courts for active recreation</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Arts and crafts studios for creative pursuits</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Libraries and computer labs for learning and connection</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Restaurants and cafes for dining and socializing</span>
              </li>
            </ul>
          </div>
          <div className="bg-cream rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-3 font-display">Community Features</h3>
            <ul className="space-y-2 text-slate text-sm">
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Guard-gated security for peace of mind</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>On-site healthcare facilities and medical services</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Proximity to shopping, dining, and entertainment</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Easy access to Las Vegas Strip and downtown attractions</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <span>Close to hospitals and medical centers for healthcare needs</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* RealScout Widget */}
      <Section
        id="search"
        title="Search 55+ Homes"
        description="Browse active listings in 55+ communities"
        className="bg-warm-gray"
      >
        <RealScoutWidgetLazy
          className="min-h-[600px]"
        />
      </Section>

      <CTASection
        title="Ready to Explore 55+ Living?"
        description="Let's find your perfect active adult community. Warm, helpful guidance every step of the way."
      />
    </>
  );
}
