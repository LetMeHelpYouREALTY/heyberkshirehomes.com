import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import CommunitiesSection from '@/components/CommunitiesSection';
import RealScoutAdvancedSearch from '@/components/RealScoutAdvancedSearch';
import RealScoutWidgetLazy from '@/components/RealScoutWidgetLazy';
import LazyOnVisible from '@/components/LazyOnVisible';
import SimpleSearchSection from '@/components/SimpleSearchSection';
import FooterHomeValue from '@/components/FooterHomeValue';
import AboutSection from '@/components/AboutSection';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/sections/FAQSection';
import Section from '@/components/Section';
import Container from '@/components/Container';
import SchemaMarkup from '@/components/SchemaMarkup';
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
} from '@/lib/schema';
import {
  buildOpenGraph,
  buildTwitter,
  SITE_DESCRIPTION,
  SITE_TITLE,
} from '@/lib/site-metadata';
import { siteDetails } from '@/data/siteDetails';

export const metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: buildOpenGraph(),
  twitter: buildTwitter(),
};

const marketStats = [
  { value: '$494K', label: 'Median Price', sub: 'Record High — June 2026' },
  { value: '52', label: 'Avg Days on Market', sub: '' },
  { value: '6,784', label: 'Active Listings', sub: '' },
  { value: '3.3', label: 'Months Inventory', sub: '' },
];

const valuePropositions = [
  {
    title: 'Neighborhood Expertise',
    description:
      'Proven results across every Las Vegas neighborhood — 35+ years, $127M+ in sales',
  },
  {
    title: 'Local Market Knowledge',
    description:
      'Serving Las Vegas and Henderson for 35+ years with proven results.',
  },
];

const testimonials = [
  {
    quote: 'Dr. Jan made our home buying experience seamless. Her knowledge of Summerlin communities is unmatched, and she found us the perfect home in The Ridges.',
    author: 'Sarah & Michael Johnson',
    location: 'The Ridges, Summerlin',
    result: 'Closed in 30 days, $50K under budget',
  },
  {
    quote: 'We were relocating from California and needed someone who understood the Las Vegas market. Dr. Jan exceeded our expectations and helped us find our dream home in Skye Canyon.',
    author: 'Robert Chen',
    location: 'Skye Canyon',
    result: 'Sold our CA home and bought in NV within 60 days',
  },
  {
    quote: 'As a first-time homebuyer, I was nervous about the process. Dr. Jan walked me through everything and made sure I understood each step. Couldn\'t have asked for a better agent!',
    author: 'Jessica Martinez',
    location: 'Centennial Hills',
    result: 'First home purchase, closed smoothly',
  },
];

export default function HomePage() {
  return (
    <>
      <SchemaMarkup
        schemas={[generateOrganizationSchema(), generateLocalBusinessSchema()]}
      />
      
      {/* 1. Hero - Service-focused CTAs (no stats) - H1 is in Hero component */}
      <Hero />

      {/* Trust indicator */}
      <div className="bg-primary text-white py-3 border-t border-white/10">
        <Container>
          <div className="flex items-center justify-center gap-2 text-sm md:text-base">
            <span className="font-semibold text-white">35+ Years</span>
            <span>Las Vegas Experience</span>
          </div>
        </Container>
      </div>

      {/* Value proposition cards */}
      <section className="bg-charcoal text-white py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {valuePropositions.map((item) => (
              <div key={item.title} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-3 font-display">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 2. Services Section - Expanded with benefits - H2 in Section component */}
      <ServicesSection />

      {/* 3. Las Vegas Real Estate Market Overview - New H2 section */}
      <Section
        id="market-overview"
        title="Las Vegas Real Estate Market Overview"
        description="Understanding the dynamic Las Vegas housing market"
        className="bg-white"
      >
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-slate mb-6">
            The Las Vegas real estate market continues to be one of the most dynamic and attractive markets in the Southwest. With a growing population, strong job market, and no state income tax, Las Vegas offers exceptional opportunities for homebuyers, sellers, and real estate investors alike.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-cream rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-3 font-display">Strong Market Fundamentals</h3>
              <p className="text-slate text-sm">
                Las Vegas has experienced consistent population growth over the past decade, with new residents drawn by affordable housing, entertainment options, and business-friendly policies. This steady demand supports a healthy real estate market with opportunities across all price points.
              </p>
            </div>
            <div className="bg-cream rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-3 font-display">Diverse Neighborhood Options</h3>
              <p className="text-slate text-sm">
                From luxury estates in Summerlin to active adult communities and family-friendly neighborhoods, Las Vegas offers something for every lifestyle. Whether you're seeking a guard-gated community, golf course living, or new construction, the options are abundant.
              </p>
            </div>
          </div>

          <p className="text-slate mb-6">
            As your Las Vegas real estate expert, I bring {siteDetails.agent.experience} of experience navigating this market. I understand the nuances of different neighborhoods, market trends, and how to help you achieve your real estate goals whether you're buying, selling, or investing in Las Vegas properties.
          </p>

          <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-gold">
            <h3 className="text-xl font-bold text-primary mb-3 font-display">Why Las Vegas Real Estate?</h3>
            <ul className="space-y-2 text-slate">
              <li className="flex items-start">
                <span className="text-gold mr-2 font-bold">✓</span>
                <span><strong>No State Income Tax:</strong> Nevada's tax-friendly environment makes it attractive for retirees and high earners.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2 font-bold">✓</span>
                <span><strong>Affordable Luxury:</strong> Get more home for your money compared to California and other West Coast markets.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2 font-bold">✓</span>
                <span><strong>Year-Round Recreation:</strong> Golf courses, hiking trails, and entertainment options for an active lifestyle.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2 font-bold">✓</span>
                <span><strong>Strong Rental Market:</strong> Excellent opportunities for real estate investors with consistent rental demand.</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 4. Communities/Locations - Filterable - H2 in Section component */}
      <CommunitiesSection />

      {/* 5. Property Search Widget - Advanced Search - H2 in Section component */}
      <Section
        id="search"
        title="Search Las Vegas Homes for Sale"
        description="Use our advanced search to find your perfect home with detailed filters. Browse MLS listings updated daily."
        className="bg-cream"
      >
        <div className="mb-6 max-w-3xl mx-auto">
          <p className="text-slate text-center mb-4">
            Our comprehensive property search tool gives you access to all active MLS listings in Las Vegas, Henderson, Summerlin, and surrounding areas. Filter by price, bedrooms, bathrooms, square footage, community, and more to find exactly what you're looking for.
          </p>
          <p className="text-slate text-center text-sm">
            <strong>Looking for off-market listings or coming soon properties?</strong> Call Dr. Jan at {siteDetails.contact.primaryPhone} for exclusive access to pocket listings and pre-market opportunities.
          </p>
        </div>
        <LazyOnVisible minHeight="120px" className="flex justify-center">
          <RealScoutAdvancedSearch className="w-full max-w-2xl" />
        </LazyOnVisible>
      </Section>

      {/* Las Vegas market stats */}
      <section className="bg-charcoal text-white py-12">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-2">
              Las Vegas Market at a Glance
            </h2>
            <p className="text-slate-400">Source: GLVAR · Updated June 2026</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {marketStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold-light mb-1 font-display">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-medium mb-1">{stat.label}</div>
                {stat.sub ? (
                  <div className="text-xs text-slate-400">{stat.sub}</div>
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured MLS Listings */}
      <Section
        id="featured-listings"
        title="Featured Las Vegas Homes for Sale"
        description="Browse active MLS listings updated daily across Las Vegas, Henderson, and Summerlin."
        className="bg-white"
      >
        <RealScoutWidgetLazy widgetId="homepage-featured-listings" className="min-h-[600px]" />
      </Section>

      {/* 6. About Dr. Jan - Brief with credentials as proof - H2 in Section component */}
      <AboutSection />

      {/* 7. Testimonials - Social proof - H2 in Section component */}
      <Section
        id="testimonials"
        title="What Our Clients Say About Dr. Jan Duffy"
        description="Real experiences from families we've helped find their perfect homes in Las Vegas"
        className="bg-cream"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        <div className="text-center">
          <p className="text-slate mb-4">
            With {siteDetails.agent.familiesServed} families served and {siteDetails.agent.salesVolume} in career sales volume, Dr. Jan Duffy has a proven track record of helping clients achieve their real estate goals in Las Vegas.
          </p>
          <p className="text-slate text-sm">
            Whether you're buying your first home, upgrading to a luxury estate, or investing in rental properties, you can trust Dr. Jan's expertise and personalized approach.
          </p>
        </div>
      </Section>

      {/* 8. Why Choose Dr. Jan - New H2 section */}
      <Section
        id="why-choose"
        title="Why Choose Dr. Jan Duffy for Your Las Vegas Real Estate Needs"
        description="Experience, expertise, and personalized service that makes a difference"
        className="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-cream rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-3 font-display">30+ Years of Las Vegas Market Experience</h3>
            <p className="text-slate text-sm">
              With over three decades of experience in Las Vegas real estate, Dr. Jan has witnessed market cycles, neighborhood transformations, and emerging opportunities. This deep market knowledge helps clients make informed decisions and avoid costly mistakes.
            </p>
          </div>
          <div className="bg-cream rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-3 font-display">Ph.D. Research-Driven Approach</h3>
            <p className="text-slate text-sm">
              Dr. Jan's advanced education brings analytical rigor to every transaction. Market analysis, pricing strategies, and investment evaluations are backed by thorough research and data-driven insights.
            </p>
          </div>
          <div className="bg-cream rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-3 font-display">Berkshire Hathaway HomeServices Network</h3>
            <p className="text-slate text-sm">
              As part of the prestigious Berkshire Hathaway HomeServices network, Dr. Jan has access to extensive resources, marketing tools, and a network of professionals to support your real estate transaction.
            </p>
          </div>
          <div className="bg-cream rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-3 font-display">Specialized Expertise Across Market Segments</h3>
            <p className="text-slate text-sm">
              From luxury homes in The Ridges to 55+ communities like Sun City Summerlin, new construction with top builders, and investment properties, Dr. Jan has specialized knowledge across all Las Vegas real estate segments.
            </p>
          </div>
          <div className="bg-cream rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-3 font-display">Personalized Service and Communication</h3>
            <p className="text-slate text-sm">
              Every client receives personalized attention tailored to their unique goals, timeline, and preferences. You'll always know where things stand with transparent, regular communication throughout your transaction.
            </p>
          </div>
          <div className="bg-cream rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-3 font-display">Proven Results and Client Satisfaction</h3>
            <p className="text-slate text-sm">
              {siteDetails.agent.familiesServed} families served and {siteDetails.agent.salesVolume} in sales volume demonstrate consistent results. Client testimonials and repeat business speak to the quality of service and outcomes.
            </p>
          </div>
        </div>
      </Section>

      <LazyOnVisible minHeight="200px">
        <SimpleSearchSection />
      </LazyOnVisible>

      <LazyOnVisible minHeight="400px">
        <FooterHomeValue />
      </LazyOnVisible>

      <FAQSection />

      {/* 9. Contact CTA */}
      <CTASection />
    </>
  );
}
