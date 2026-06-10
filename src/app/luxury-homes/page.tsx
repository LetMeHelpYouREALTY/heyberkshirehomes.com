import RealScoutWidgetLazy from '@/components/RealScoutWidgetLazy';
import CTASection from '@/components/CTASection';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Link from 'next/link';
import { getCommunitiesByCategory } from '@/data/communities';
import { siteDetails } from '@/data/siteDetails';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = {
  title: 'Luxury Homes Las Vegas | $800K-$10M+ Estates | Dr. Jan Duffy',
  description: 'Discover luxury homes in Las Vegas from $800K to $10M+. Exclusive communities including The Ridges, The Summit, and Red Rock Country Club.',
};

const luxuryCommunities = getCommunitiesByCategory('luxury');

export default function LuxuryHomesPage() {
  const breadcrumbs = [
    { name: 'Home', url: siteDetails.siteUrl },
    { name: 'Luxury Homes', url: `${siteDetails.siteUrl}/luxury-homes` },
  ];

  return (
    <>
      <SchemaMarkup schemas={[generateBreadcrumbSchema(breadcrumbs)]} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary-accent to-secondary text-white py-20">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Luxury Homes Las Vegas
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Discover exceptional estates from $800K to $10M+ in Las Vegas's most
            exclusive communities. White-glove service, discretion, and
            unparalleled expertise.
          </p>
        </Container>
      </section>

      {/* Overview */}
      <Section
        id="overview"
        title="Luxury Real Estate in Las Vegas - Experience the Finest in Luxury Living"
        description="Discover exceptional estates from $800K to $10M+ in Las Vegas's most exclusive communities"
      >
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-foreground-accent mb-6 text-lg">
            Las Vegas luxury real estate offers some of the most spectacular
            properties in the Southwest. From guard-gated estates in Summerlin
            to golf course homes, custom builds, and high-rise condominiums, the luxury market here is
            vibrant, diverse, and offers exceptional value compared to other major metropolitan areas.
          </p>
          <p className="text-foreground-accent mb-6 text-lg">
            With {siteDetails.agent.experience} of experience in high-end real
            estate, I understand the unique needs of luxury buyers and sellers.
            Discretion, attention to detail, deep market knowledge, and access to off-market listings are
            essential when working with luxury properties. I bring all of these to every transaction.
          </p>
          <p className="text-foreground-accent mb-6 text-lg">
            Whether you're seeking a $2M estate in The Ridges, a golf course
            home in Red Rock Country Club, a custom build in The Summit, or a luxury high-rise condominium, I'll help you navigate the luxury
            market with confidence and find the perfect property that matches your lifestyle and investment goals.
          </p>
          <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-gold mb-6">
            <h3 className="text-xl font-bold text-primary mb-3 font-display">Why Las Vegas for Luxury Real Estate?</h3>
            <ul className="space-y-2 text-foreground-accent">
              <li className="flex items-start">
                <span className="text-gold mr-2 font-bold">✓</span>
                <span><strong>Exceptional Value:</strong> Get significantly more home for your money compared to California, New York, or other major luxury markets.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2 font-bold">✓</span>
                <span><strong>No State Income Tax:</strong> Nevada's tax-friendly environment makes it attractive for high-net-worth individuals and business owners.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2 font-bold">✓</span>
                <span><strong>World-Class Amenities:</strong> Golf courses, spas, fine dining, entertainment, and recreation options create a resort-like lifestyle.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2 font-bold">✓</span>
                <span><strong>Privacy and Security:</strong> Guard-gated communities offer the privacy and security that luxury buyers expect.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2 font-bold">✓</span>
                <span><strong>Year-Round Climate:</strong> Las Vegas's climate allows for outdoor living and recreation throughout the year.</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Featured Communities */}
      <Section
        id="communities"
        title="Featured Luxury Communities"
        description="Las Vegas's most exclusive neighborhoods"
        className="bg-warm-gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {luxuryCommunities.map((community) => (
            <Link
              key={community.slug}
              href={`/communities/${community.slug}`}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-bold mb-2 font-display hover:text-primary">
                {community.name}
              </h3>
              <p className="text-primary font-semibold mb-2">
                {community.priceRange}
              </p>
              <p className="text-sm text-foreground-accent line-clamp-3">
                {community.description}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Why Work With Dr. Jan for Luxury */}
      <Section
        id="expertise"
        title="Why Choose Dr. Jan Duffy for Luxury Real Estate in Las Vegas"
        description="Expertise, discretion, and results that luxury buyers and sellers deserve"
      >
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-foreground-accent mb-6 text-lg">
            Luxury real estate transactions require a different level of expertise, service, and attention to detail. With {siteDetails.agent.experience} of experience in high-end properties and {siteDetails.agent.salesVolume} in sales volume, I bring the knowledge, discretion, and white-glove service that luxury clients expect and deserve.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-bold mb-2 font-display text-lg">Complete Discretion</h3>
            <p className="text-sm text-foreground-accent">
              Complete confidentiality and privacy for high-profile transactions. I understand the importance of discretion for celebrities, executives, and high-net-worth individuals. Your privacy is always protected.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-bold mb-2 font-display text-lg">Deep Market Knowledge</h3>
            <p className="text-sm text-foreground-accent">
              Deep understanding of luxury market trends, pricing, and
              opportunities. I know which communities appreciate, which properties represent value, and how to position luxury listings for maximum exposure and results.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="font-bold mb-2 font-display text-lg">White-Glove Service</h3>
            <p className="text-sm text-foreground-accent">
              Personalized attention and seamless transaction management from
              start to finish. Every detail is handled with care, from initial consultation through closing and beyond.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-cream rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-3 font-display">Access to Off-Market Listings</h3>
            <p className="text-slate text-sm mb-3">
              Many luxury properties never hit the public MLS. Through my network and relationships, I have access to pocket listings, coming soon properties, and exclusive opportunities that aren't available to the general public.
            </p>
            <ul className="list-disc list-inside text-sm text-slate space-y-1">
              <li>Pocket listings from other luxury agents</li>
              <li>Pre-market opportunities before public listing</li>
              <li>Exclusive access to private sales</li>
              <li>Relationships with luxury property owners</li>
            </ul>
          </div>
          <div className="bg-cream rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-3 font-display">Luxury Marketing Expertise</h3>
            <p className="text-slate text-sm mb-3">
              Selling luxury properties requires specialized marketing strategies. I use professional photography, virtual tours, targeted marketing to high-net-worth individuals, and premium listing presentation to showcase your property's unique features.
            </p>
            <ul className="list-disc list-inside text-sm text-slate space-y-1">
              <li>Professional photography and videography</li>
              <li>Virtual and 3D tours for remote buyers</li>
              <li>Targeted marketing to luxury buyer networks</li>
              <li>Premium listing presentation and staging guidance</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* RealScout Widget */}
      <Section
        id="search"
        title="Search Luxury Homes"
        description="Browse active luxury listings in Las Vegas"
        className="bg-warm-gray"
      >
        <RealScoutWidgetLazy
          priceMin={800000}
          className="min-h-[600px]"
        />
      </Section>

      <CTASection
        title="Ready to Explore Luxury Homes?"
        description="Let's discuss your luxury real estate goals. Discretion and expertise guaranteed."
      />
    </>
  );
}
