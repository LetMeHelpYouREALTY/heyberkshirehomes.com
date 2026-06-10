import RealScoutWidgetLazy from '@/components/RealScoutWidgetLazy';
import CTASection from '@/components/CTASection';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { siteDetails } from '@/data/siteDetails';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = {
  title: 'Las Vegas Investment Properties | ROI & Cash Flow Analysis | Dr. Jan Duffy',
  description: 'Las Vegas real estate investment opportunities. ROI analysis, cap rates, cash flow projections, and market data for investors.',
};

export default function InvestorsPage() {
  const breadcrumbs = [
    { name: 'Home', url: siteDetails.siteUrl },
    { name: 'Investors', url: `${siteDetails.siteUrl}/investors` },
  ];

  return (
    <>
      <SchemaMarkup schemas={[generateBreadcrumbSchema(breadcrumbs)]} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary-accent to-secondary text-white py-20">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Las Vegas Investment Properties
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Data-driven real estate investment opportunities in Las Vegas. ROI
            analysis, cap rates, cash flow projections, and market insights.
          </p>
        </Container>
      </section>

      {/* Why Las Vegas */}
      <Section
        id="why-las-vegas"
        title="Why Invest in Las Vegas Real Estate - Strong Fundamentals for Investors"
        description="Las Vegas offers exceptional real estate investment opportunities with strong fundamentals, growing population, and attractive returns"
      >
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-foreground-accent mb-6 text-lg">
            Las Vegas has become one of the most attractive real estate investment markets in the Southwest. With a growing population, diversified economy, affordable entry points, and strong rental demand, Las Vegas offers investors multiple strategies for building wealth through real estate.
          </p>
          <p className="text-foreground-accent text-lg">
            Whether you're a first-time investor looking to purchase a single rental property, an experienced investor building a portfolio, or someone interested in fix-and-flip opportunities, Las Vegas provides the fundamentals that support successful real estate investing. With {siteDetails.agent.experience} of experience in the Las Vegas market, I can help you identify opportunities, analyze returns, and build a profitable investment portfolio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="font-bold mb-2 font-display text-lg">Growing Population</h3>
            <p className="text-sm text-foreground-accent">
              Las Vegas continues to attract new residents from California and other states, driving demand for
              rental properties and appreciation potential. Population growth supports both rental demand and property values.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">💼</div>
            <h3 className="font-bold mb-2 font-display text-lg">Diversified Economy</h3>
            <p className="text-sm text-foreground-accent">
              Beyond tourism, Las Vegas has strong healthcare, technology, logistics, and manufacturing sectors providing stable employment and supporting a diverse tenant base.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">🏠</div>
            <h3 className="font-bold mb-2 font-display text-lg">Affordable Entry</h3>
            <p className="text-sm text-foreground-accent">
              Compared to other major markets like California, Las Vegas offers attractive
              entry points with strong rental yields and cash flow potential for investors.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">🌴</div>
            <h3 className="font-bold mb-2 font-display text-lg">No State Income Tax</h3>
            <p className="text-sm text-foreground-accent">
              Nevada's tax-friendly environment benefits investors and
              residents alike, maximizing returns and making Las Vegas attractive for high-net-worth investors.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">✈️</div>
            <h3 className="font-bold mb-2 font-display text-lg">Tourism Stability</h3>
            <p className="text-sm text-foreground-accent">
              Strong short-term rental market with consistent visitor demand
              year-round. Las Vegas attracts millions of visitors annually, supporting both short-term and long-term rental strategies.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-bold mb-2 font-display text-lg">Market Data</h3>
            <p className="text-sm text-foreground-accent">
              Transparent market with comprehensive data for informed
              investment decisions. MLS data, rental rates, and market trends are readily available for analysis.
            </p>
          </div>
        </div>
        <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-gold">
          <h3 className="text-xl font-bold text-primary mb-3 font-display">Investment Market Overview</h3>
          <p className="text-foreground-accent mb-4">
            Las Vegas real estate investment opportunities span multiple property types and strategies. From single-family rentals in established neighborhoods to multi-family properties, short-term rentals near the Strip, and new construction investments, there are options for every investor profile and risk tolerance.
          </p>
          <ul className="space-y-2 text-foreground-accent">
            <li className="flex items-start">
              <span className="text-gold mr-2 font-bold">✓</span>
              <span><strong>Strong Rental Demand:</strong> Growing population and job market create consistent demand for rental properties across price points.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-2 font-bold">✓</span>
              <span><strong>Appreciation Potential:</strong> Las Vegas has shown strong appreciation over the long term, with periods of growth and stabilization.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-2 font-bold">✓</span>
              <span><strong>Cash Flow Opportunities:</strong> Rental yields in Las Vegas often exceed those in more expensive markets, providing positive cash flow for investors.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-2 font-bold">✓</span>
              <span><strong>1031 Exchange Friendly:</strong> Nevada's tax environment supports 1031 exchanges for tax-deferred portfolio growth.</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Investment Strategies */}
      <Section
        id="strategies"
        title="Las Vegas Real Estate Investment Strategies"
        description="Different approaches to building wealth through Las Vegas real estate investing"
        className="bg-warm-gray"
      >
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-foreground-accent mb-6 text-lg">
            Successful real estate investing requires choosing the right strategy for your goals, timeline, risk tolerance, and available capital. Las Vegas offers opportunities for multiple investment strategies, each with different risk profiles, time commitments, and return potential. I'll help you identify which strategy aligns best with your investment goals.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display text-lg">Buy & Hold (Long-Term Rental)</h3>
            <p className="text-foreground-accent mb-3">
              Purchase properties for steady monthly cash flow and long-term
              appreciation. This is the most common strategy for building wealth through real estate. Ideal for:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1 mb-3">
              <li>Single-family homes in established neighborhoods with strong rental demand</li>
              <li>Multi-family properties (duplexes, triplexes, fourplexes) for higher cash flow</li>
              <li>Properties near employment centers, universities, or growing areas</li>
              <li>Investors seeking passive income and long-term wealth building</li>
            </ul>
            <p className="text-sm text-foreground-accent">
              <strong>Benefits:</strong> Steady cash flow, tax advantages (depreciation, deductions), long-term appreciation, portfolio building potential. <strong>Considerations:</strong> Property management, maintenance, tenant turnover, market cycles.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display text-lg">Short-Term Rentals (Airbnb/VRBO)</h3>
            <p className="text-foreground-accent mb-3">
              Higher income potential with tourism demand, but requires more active management. Consider:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1 mb-3">
              <li>Properties near the Strip, Downtown, or major attractions</li>
              <li>Condos in resort areas with short-term rental allowances</li>
              <li>HOA restrictions and local regulations (some areas restrict short-term rentals)</li>
              <li>Properties with unique features or amenities that attract tourists</li>
            </ul>
            <p className="text-sm text-foreground-accent">
              <strong>Benefits:</strong> Higher nightly rates, flexibility to use property yourself, potential for 2-3x long-term rental income. <strong>Considerations:</strong> More management required, seasonal fluctuations, regulatory changes, higher maintenance and cleaning costs.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display text-lg">Fix & Flip</h3>
            <p className="text-foreground-accent mb-3">
              Renovate and resell for profit. This strategy requires market knowledge, renovation expertise, and access to capital. Requires:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1 mb-3">
              <li>Market knowledge to identify undervalued properties with renovation potential</li>
              <li>Access to reliable contractors and renovation expertise</li>
              <li>Understanding of ARV (After Repair Value) and renovation costs</li>
              <li>Financing options for purchase and renovation (hard money, private lenders)</li>
              <li>Timeline management to minimize holding costs</li>
            </ul>
            <p className="text-sm text-foreground-accent">
              <strong>Benefits:</strong> Faster returns, potential for significant profit on each transaction, active involvement in property improvement. <strong>Considerations:</strong> Higher risk, requires expertise, market timing critical, renovation cost overruns can erode profits.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display text-lg">New Construction Investment</h3>
            <p className="text-foreground-accent mb-3">
              Purchase new builds for appreciation, modern features, and immediate rental potential:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1 mb-3">
              <li>Builder incentives and warranties reduce initial costs and maintenance concerns</li>
              <li>Lower maintenance initially compared to older properties</li>
              <li>Potential for immediate rental income with modern amenities</li>
              <li>Appreciation potential as new communities develop and mature</li>
              <li>Energy-efficient features reduce operating costs</li>
            </ul>
            <p className="text-sm text-foreground-accent">
              <strong>Benefits:</strong> Modern features attract tenants, lower maintenance, builder warranties, potential for appreciation as community develops. <strong>Considerations:</strong> May pay premium for new construction, community development timeline, HOA fees in new communities.
            </p>
          </div>
        </div>
      </Section>

      {/* Market Data */}
      <Section
        id="market-data"
        title="Investment Analysis Services"
        description="Data-driven insights for smart investing"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display">ROI & Cash Flow Analysis</h3>
            <p className="text-sm text-foreground-accent mb-4">
              Detailed projections including:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Monthly cash flow calculations</li>
              <li>Cap rate analysis</li>
              <li>Cash-on-cash return</li>
              <li>Total ROI projections</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display">Market Trends & Data</h3>
            <p className="text-sm text-foreground-accent mb-4">
              Access to current market information:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Rental rates by neighborhood</li>
              <li>Appreciation trends</li>
              <li>Vacancy rates</li>
              <li>Neighborhood growth projections</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display">Property Management Resources</h3>
            <p className="text-sm text-foreground-accent mb-4">
              Connections and guidance for:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Property management companies</li>
              <li>Maintenance contractors</li>
              <li>Legal and tax considerations</li>
              <li>1031 exchange opportunities</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display">Portfolio Building</h3>
            <p className="text-sm text-foreground-accent mb-4">
              Strategic guidance for:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Diversification strategies</li>
              <li>Scaling your portfolio</li>
              <li>Financing options</li>
              <li>Exit strategies</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* RealScout Widget */}
      <Section
        id="search"
        title="Search Investment Properties"
        description="Browse investment opportunities in Las Vegas"
        className="bg-warm-gray"
      >
        <RealScoutWidgetLazy
          className="min-h-[600px]"
        />
      </Section>

      <CTASection
        title="Ready to Build Your Investment Portfolio?"
        description="Let's discuss your investment goals and find properties that match your strategy. Data-driven analysis and expert guidance."
      />
    </>
  );
}
