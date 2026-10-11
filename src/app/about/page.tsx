import Image from 'next/image';
import Container from '@/components/Container';
import Section from '@/components/Section';
import CTASection from '@/components/CTASection';
import { siteDetails } from '@/data/siteDetails';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateBreadcrumbSchema, generateOrganizationSchema } from '@/lib/schema';
import { PageAnswerBlock, PageFaq, PageSeo } from '@/components/seo/PageSeo';
import { getPageAnswer } from '@/data/page-answers';

const pageAnswer = getPageAnswer('/about');

export const metadata = {
  title: pageAnswer.title,
  description: pageAnswer.description,
  alternates: { canonical: `${siteDetails.siteUrl}/about` },
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: 'Home', url: siteDetails.siteUrl },
    { name: 'About', url: `${siteDetails.siteUrl}/about` },
  ];

  return (
    <PageSeo page={pageAnswer}>
      <SchemaMarkup
        schemas={[
          generateBreadcrumbSchema(breadcrumbs),
          generateOrganizationSchema(),
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary-accent to-secondary text-white py-20">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Dr. Jan Duffy, Las Vegas Luxury Realtor
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {siteDetails.agent.brokerage}. Nevada license {siteDetails.agent.license}.{' '}
            {siteDetails.agent.experience}. {siteDetails.agent.salesVolume} in career sales.
          </p>
        </Container>
      </section>
      <PageAnswerBlock />

      {/* Bio Section */}
      <Section id="bio" title="Your Las Vegas Real Estate Expert" description="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/dr-jan-duffy.jpg"
                alt="Dr. Jan Duffy"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 font-display">
              {siteDetails.agent.fullName}
            </h2>
            <div className="prose prose-lg max-w-none space-y-4">
              <p className="text-foreground-accent">
                With over {siteDetails.agent.experience} of experience in Las
                Vegas real estate, I've had the privilege of helping{' '}
                {siteDetails.agent.familiesServed} families find their perfect
                homes and achieve their real estate goals. My approach combines
                deep market knowledge, professional expertise, and a genuine
                commitment to your success.
              </p>
              <p className="text-foreground-accent">
                I specialize in luxury homes, 55+ active adult communities, new
                construction, and investment properties. Whether you're buying
                your first home, upgrading to a luxury estate, or building a
                real estate portfolio, I bring the expertise and personalized
                service you deserve.
              </p>
              <p className="text-foreground-accent">
                My philosophy is simple: {siteDetails.agent.tagline} I'm here
                to guide you through every step of your real estate journey,
                making the process smooth, transparent, and successful.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Credentials */}
      <Section
        id="credentials"
        title="Credentials & Experience"
        description="Professional qualifications and achievements"
        className="bg-warm-gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">🎓</div>
            <h3 className="font-bold mb-2 font-display">Ph.D.</h3>
            <p className="text-sm text-foreground-accent">
              Advanced education and analytical expertise
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">📜</div>
            <h3 className="font-bold mb-2 font-display">License</h3>
            <p className="text-sm text-foreground-accent">
              {siteDetails.agent.license}
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="font-bold mb-2 font-display">Experience</h3>
            <p className="text-sm text-foreground-accent">
              {siteDetails.agent.experience} in Las Vegas real estate
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">💼</div>
            <h3 className="font-bold mb-2 font-display">Brokerage</h3>
            <p className="text-sm text-foreground-accent">
              {siteDetails.agent.brokerage}
            </p>
          </div>
        </div>
      </Section>

      {/* Why Work With Dr. Jan */}
      <Section
        id="why"
        title="Why Work With Dr. Jan Duffy for Your Las Vegas Real Estate Needs"
        description="What sets me apart as your real estate expert and trusted advisor"
      >
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-foreground-accent mb-6 text-lg">
            Choosing the right real estate agent can make all the difference in your Las Vegas home buying or selling experience. With {siteDetails.agent.experience} of experience, {siteDetails.agent.familiesServed} families served, and {siteDetails.agent.salesVolume} in sales volume, I bring a unique combination of expertise, personalized service, and proven results to every transaction.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display text-lg">Deep Market Knowledge</h3>
            <p className="text-sm text-foreground-accent">
              {siteDetails.agent.experience} of experience means I know every
              neighborhood, market trend, and opportunity in Las Vegas. From Summerlin to Henderson, from luxury estates to 55+ communities, I understand the nuances that help you make informed decisions and avoid costly mistakes.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display text-lg">Personalized Service</h3>
            <p className="text-sm text-foreground-accent">
              Every client is unique. I take time to understand your goals,
              preferences, timeline, and budget to create a customized strategy that
              works specifically for you. No cookie-cutter approaches—just tailored solutions.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display text-lg">Proven Results</h3>
            <p className="text-sm text-foreground-accent">
              {siteDetails.agent.familiesServed} families served and{' '}
              {siteDetails.agent.salesVolume} in sales demonstrate my track
              record of success. I consistently help clients achieve their goals, whether that's finding the perfect home, selling for top dollar, or building a real estate portfolio.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display text-lg">Transparent Communication</h3>
            <p className="text-sm text-foreground-accent">
              You'll always know where things stand. I keep you informed
              throughout the entire process with clear, honest communication. No surprises, no hidden agendas—just straightforward guidance every step of the way.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display text-lg">Negotiation Expertise</h3>
            <p className="text-sm text-foreground-accent">
              Whether buying or selling, I negotiate to get you the best terms
              and outcomes. My experience gives you an advantage in competitive situations, multiple offer scenarios, and complex transactions.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display text-lg">Ongoing Support</h3>
            <p className="text-sm text-foreground-accent">
              My relationship with clients doesn't end at closing. I'm here for
              referrals, questions, and support long after your transaction. Many clients become lifelong friends and trusted advisors for future real estate decisions.
            </p>
          </div>
        </div>
      </Section>

      {/* Specializations */}
      <Section
        id="specializations"
        title="Areas of Expertise in Las Vegas Real Estate"
        description="Specialized knowledge across all market segments to serve your unique needs"
        className="bg-warm-gray"
      >
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-foreground-accent mb-6 text-lg">
            Las Vegas real estate is diverse, and so are the needs of my clients. I've developed specialized expertise across multiple market segments to provide the best possible service whether you're buying your first home, upgrading to a luxury estate, planning for retirement, or building an investment portfolio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display text-lg">Luxury Homes Las Vegas</h3>
            <p className="text-sm text-foreground-accent mb-3">
              Expertise in high-end properties from $800K to $10M+ in
              Summerlin's most exclusive communities. I understand the unique needs of luxury buyers and sellers, including discretion, attention to detail, and deep market knowledge.
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>The Ridges, The Summit, Red Rock Country Club</li>
              <li>Discretion and white-glove service for high-profile clients</li>
              <li>Deep understanding of luxury market dynamics and pricing</li>
              <li>Access to off-market luxury listings and pocket listings</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display text-lg">55+ Active Adult Communities</h3>
            <p className="text-sm text-foreground-accent mb-3">
              Specialized knowledge of active adult living and retirement
              communities throughout Las Vegas. I understand the lifestyle considerations, HOA structures, and amenities that matter most to active adults.
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Sun City Summerlin, Sun City Anthem, Del Webb communities</li>
              <li>Lifestyle considerations, amenities, and social opportunities</li>
              <li>Warm, supportive guidance for retirement transitions</li>
              <li>Understanding of age-restricted community rules and benefits</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display text-lg">New Construction Homes</h3>
            <p className="text-sm text-foreground-accent mb-3">
              Established relationships with top builders and deep understanding of new
              construction process. I help clients navigate builder contracts, incentives, and construction timelines.
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Century Communities, KB Home, Lennar, Pulte, Toll Brothers</li>
              <li>Builder incentives, lot premiums, and upgrade negotiations</li>
              <li>Construction oversight and quality assurance</li>
              <li>New construction warranty and post-closing support</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display text-lg">Investment Properties Las Vegas</h3>
            <p className="text-sm text-foreground-accent mb-3">
              Data-driven analysis for real estate investors seeking rental properties, fix-and-flip opportunities, or portfolio growth in the Las Vegas market.
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>ROI, cash flow, and cap rate analysis</li>
              <li>Market trends, rental demand, and appreciation potential</li>
              <li>Portfolio building strategies and 1031 exchange coordination</li>
              <li>Access to investment-friendly properties and off-market deals</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Additional Expertise Section */}
      <Section
        id="additional-expertise"
        title="Additional Real Estate Services"
        description="Comprehensive support for all your Las Vegas real estate needs"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-cream rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-3 font-display">Divorce Real Estate Services</h3>
            <p className="text-slate text-sm mb-3">
              Sensitive situations require specialized expertise. I provide neutral, court-compliant real estate services for divorce proceedings, ensuring fair property valuations and smooth transactions during difficult times.
            </p>
            <ul className="list-disc list-inside text-sm text-slate space-y-1">
              <li>Court-compliant documentation and reporting</li>
              <li>Neutral third-party expertise for both parties</li>
              <li>Expedited sale timelines when court-ordered</li>
              <li>Discretion and professionalism throughout the process</li>
            </ul>
          </div>
          <div className="bg-cream rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-3 font-display">Probate Real Estate Services</h3>
            <p className="text-slate text-sm mb-3">
              Estate sales require patience, understanding, and expertise. I help families navigate probate real estate transactions with compassion and efficiency, ensuring properties are sold fairly and in compliance with legal requirements.
            </p>
            <ul className="list-disc list-inside text-sm text-slate space-y-1">
              <li>Estate property valuations and market analysis</li>
              <li>Probate court compliance and documentation</li>
              <li>Patient, understanding guidance for grieving families</li>
              <li>Efficient sale process to minimize estate holding costs</li>
            </ul>
          </div>
        </div>
      </Section>

      <CTASection
        title="Ready to Work Together?"
        description={`Call ${siteDetails.contact.primaryPhone}. ${siteDetails.agent.tagline}`}
      />
      <PageFaq />
    </PageSeo>
  );
}
