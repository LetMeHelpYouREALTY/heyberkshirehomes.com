import CTASection from '@/components/CTASection';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { siteDetails } from '@/data/siteDetails';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateBreadcrumbSchema } from '@/lib/schema';
import { PageAnswerBlock, PageFaq, PageSeo } from '@/components/seo/PageSeo';
import { getPageAnswer } from '@/data/page-answers';

const pageAnswer = getPageAnswer('/sell-your-home');

export const metadata = {
  title: pageAnswer.title,
  description: pageAnswer.description,
  alternates: { canonical: `${siteDetails.siteUrl}/sell-your-home` },
};

export default function SellYourHomePage() {
  const breadcrumbs = [
    { name: 'Home', url: siteDetails.siteUrl },
    { name: 'Sell Your Home', url: `${siteDetails.siteUrl}/sell-your-home` },
  ];

  return (
    <PageSeo page={pageAnswer}>
      <SchemaMarkup schemas={[generateBreadcrumbSchema(breadcrumbs)]} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary-accent to-secondary text-white py-20">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Sell Your Home for Top Dollar
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Your home's worth more than online estimates. Get a free CMA and
            expert marketing plan to sell for maximum value.
          </p>
        </Container>
      </section>
      <PageAnswerBlock />

      {/* Value Proposition */}
      <Section
        id="value"
        title="Why Work With Dr. Jan Duffy to Sell Your Las Vegas Home"
        description="Expert marketing, proven results, and personalized service to maximize your sale price"
      >
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-foreground-accent mb-6 text-lg">
            Selling your Las Vegas home is one of the most significant financial decisions you'll make. With {siteDetails.agent.experience} of experience and {siteDetails.agent.salesVolume} in sales volume, I bring proven strategies, expert marketing, and personalized service to help you sell for top dollar—not just quickly, but for maximum value.
          </p>
          <p className="text-foreground-accent text-lg">
            Online home value estimates like Zillow's Zestimate are often inaccurate because they can't account for your home's unique features, recent upgrades, neighborhood nuances, or current market conditions. A professional Comparative Market Analysis (CMA) from an experienced Las Vegas real estate agent gives you the accurate valuation you need to price your home competitively and attract qualified buyers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="font-bold mb-2 font-display text-lg">Top Dollar Sales</h3>
            <p className="text-sm text-foreground-accent">
              Strategic pricing and marketing to maximize your sale price, not
              just sell quickly. I analyze comparable sales, market trends, and your home's unique features to price it competitively and attract multiple offers when possible.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="font-bold mb-2 font-display text-lg">Free CMA</h3>
            <p className="text-sm text-foreground-accent">
              Comprehensive market analysis to understand your home's true value
              in today's Las Vegas market. No obligation, just expert insight based on recent sales, active listings, and market conditions.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">📸</div>
            <h3 className="font-bold mb-2 font-display text-lg">Professional Marketing</h3>
            <p className="text-sm text-foreground-accent">
              Professional photography, staging guidance, and multi-channel
              marketing to reach qualified buyers. Your home will be featured on MLS, top real estate websites, social media, and my network of buyers and agents.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-cream rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-3 font-display">Expert Negotiation</h3>
            <p className="text-slate text-sm mb-3">
              With {siteDetails.agent.experience} of experience, I know how to negotiate the best terms for sellers. Whether you're dealing with multiple offers, inspection negotiations, or appraisal challenges, I'll protect your interests and maximize your net proceeds.
            </p>
            <ul className="list-disc list-inside text-sm text-slate space-y-1">
              <li>Multiple offer strategy and evaluation</li>
              <li>Inspection negotiation expertise</li>
              <li>Appraisal challenge resolution</li>
              <li>Contract terms optimization</li>
            </ul>
          </div>
          <div className="bg-cream rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-3 font-display">Comprehensive Support</h3>
            <p className="text-slate text-sm mb-3">
              Selling a home involves many moving parts. I coordinate everything from staging and photography to inspections, appraisals, and closing, keeping you informed every step of the way.
            </p>
            <ul className="list-disc list-inside text-sm text-slate space-y-1">
              <li>Staging and preparation guidance</li>
              <li>Professional photography coordination</li>
              <li>Inspection and appraisal management</li>
              <li>Closing coordination and support</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section
        id="process"
        title="The Selling Process"
        description="How we'll sell your home for top dollar"
        className="bg-warm-gray"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-bold mb-2 font-display">Free Home Valuation</h3>
                <p className="text-foreground-accent">
                  We'll analyze comparable sales, current market conditions, and
                  your home's unique features to provide an accurate valuation.
                  No obligation, just expert insight.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-bold mb-2 font-display">Marketing Strategy</h3>
                <p className="text-foreground-accent">
                  Together, we'll create a customized marketing plan including
                  pricing strategy, staging recommendations, professional
                  photography, and listing presentation.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-bold mb-2 font-display">Listing & Showings</h3>
                <p className="text-foreground-accent">
                  Your home will be listed on the MLS, featured on top real
                  estate websites, and marketed through social media and my
                  network. We'll coordinate showings that work with your
                  schedule.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-bold mb-2 font-display">Negotiation & Contracts</h3>
                <p className="text-foreground-accent">
                  I'll handle all offers, negotiations, and contract details to
                  ensure you get the best terms. You'll be informed every step
                  of the way.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="font-bold mb-2 font-display">Closing & Beyond</h3>
                <p className="text-foreground-accent">
                  We'll coordinate inspections, appraisals, and closing details.
                  Even after closing, I'm here to help with any questions or
                  referrals you might need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Success Stories */}
      <Section
        id="success"
        title="Recent Success Stories from Las Vegas Home Sellers"
        description="Real results from real clients who trusted Dr. Jan to sell their homes"
      >
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-foreground-accent mb-6 text-lg">
            The best indicator of future success is past results. Here are real stories from Las Vegas homeowners who worked with me to sell their properties. These results demonstrate the value of expert pricing, professional marketing, and strategic negotiation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <p className="text-primary font-bold text-lg mb-2">Sold in 5 Days</p>
            <p className="text-sm text-foreground-accent mb-4">
              "Dr. Jan listed our Summerlin home and we had multiple offers
              within days. Sold for $25K over asking price! Her pricing strategy and marketing were spot-on."
            </p>
            <p className="text-xs text-foreground-accent">- The Martinez Family, Summerlin</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <p className="text-primary font-bold text-lg mb-2">$50K Over Estimate</p>
            <p className="text-sm text-foreground-accent mb-4">
              "Online estimates said $450K. Dr. Jan's marketing and pricing
              strategy got us $500K. Incredible! She knew exactly how to position our home."
            </p>
            <p className="text-xs text-foreground-accent">- Robert Chen, Henderson</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <p className="text-primary font-bold text-lg mb-2">Smooth Relocation</p>
            <p className="text-sm text-foreground-accent mb-4">
              "We were relocating and needed a quick, profitable sale. Dr. Jan
              made it happen seamlessly. Sold in 3 weeks for top dollar."
            </p>
            <p className="text-xs text-foreground-accent">- Sarah Johnson, Centennial Hills</p>
          </div>
        </div>
        <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-gold">
          <h3 className="text-xl font-bold text-primary mb-3 font-display">What Makes These Results Possible?</h3>
          <ul className="space-y-2 text-foreground-accent">
            <li className="flex items-start">
              <span className="text-gold mr-2 font-bold">✓</span>
              <span><strong>Accurate Pricing:</strong> Pricing your home correctly from the start attracts qualified buyers and often leads to multiple offers.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-2 font-bold">✓</span>
              <span><strong>Professional Presentation:</strong> High-quality photography, staging, and listing presentation make your home stand out in a competitive market.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-2 font-bold">✓</span>
              <span><strong>Strategic Marketing:</strong> Multi-channel marketing reaches buyers through MLS, websites, social media, and agent networks.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-2 font-bold">✓</span>
              <span><strong>Expert Negotiation:</strong> {siteDetails.agent.experience} of experience means I know how to negotiate the best terms and protect your interests.</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* CTA Form */}
      <Section
        id="valuation"
        title="Get Your Free Home Valuation"
        description="Find out what your home is really worth"
        className="bg-warm-gray"
      >
        <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-md">
          <form className="space-y-6">
            <div>
              <label htmlFor="address" className="block text-sm font-semibold mb-2">
                Property Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="123 Main St, Las Vegas, NV"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="timeline" className="block text-sm font-semibold mb-2">
                When are you planning to sell?
              </label>
              <select
                id="timeline"
                name="timeline"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option>Immediately</option>
                <option>Within 30 days</option>
                <option>1-3 months</option>
                <option>3-6 months</option>
                <option>Just exploring</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white hover:bg-primary-accent px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Get Free Valuation
            </button>
            <p className="text-xs text-center text-foreground-accent">
              By submitting, you agree to be contacted about your home
              valuation. We respect your privacy.
            </p>
          </form>
        </div>
      </Section>

      <CTASection
        title="Ready to Sell Your Home?"
        description="Let's discuss your goals and create a plan to sell for top dollar. Free CMA and expert guidance."
      />
      <PageFaq />
    </PageSeo>
  );
}
