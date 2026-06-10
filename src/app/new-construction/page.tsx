import RealScoutWidgetLazy from '@/components/RealScoutWidgetLazy';
import CTASection from '@/components/CTASection';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { siteDetails } from '@/data/siteDetails';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = {
  title: 'New Construction Homes Las Vegas | Builder Communities | Dr. Jan Duffy',
  description: 'Find new construction homes in Las Vegas from top builders. Century Communities, KB Home, Lennar, Pulte, Toll Brothers. Current incentives and warranties.',
};

const builders = [
  { name: 'Century Communities', description: 'Modern designs and energy-efficient homes' },
  { name: 'KB Home', description: 'Personalized homes with innovative floor plans' },
  { name: 'Lennar', description: "Everything's Included® homes with premium features" },
  { name: 'Pulte Homes', description: 'Quality craftsmanship and design flexibility' },
  { name: 'Toll Brothers', description: 'Luxury new construction and custom options' },
];

export default function NewConstructionPage() {
  const breadcrumbs = [
    { name: 'Home', url: siteDetails.siteUrl },
    { name: 'New Construction', url: `${siteDetails.siteUrl}/new-construction` },
  ];

  return (
    <>
      <SchemaMarkup schemas={[generateBreadcrumbSchema(breadcrumbs)]} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary-accent to-secondary text-white py-20">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            New Construction Homes Las Vegas
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Discover brand new homes from Las Vegas's top builders. Current
            incentives, warranties, and the latest designs await.
          </p>
        </Container>
      </section>

      {/* Overview */}
      <Section
        id="overview"
        title="Why Choose New Construction Homes in Las Vegas"
        description="The benefits of buying a brand new home from Las Vegas's top builders"
      >
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-foreground-accent mb-6 text-lg">
            Buying a new construction home in Las Vegas offers numerous advantages over purchasing a resale property. From brand new everything to builder warranties, current incentives, and the ability to customize your home, new construction provides a unique opportunity to get exactly what you want in a modern, energy-efficient home.
          </p>
          <p className="text-foreground-accent text-lg">
            With {siteDetails.agent.experience} of experience working with Las Vegas builders, I understand the new construction process, current incentives, and how to help you get the best value. Whether you're buying from Century Communities, KB Home, Lennar, Pulte, Toll Brothers, or other top builders, I'll guide you through the process and ensure your interests are protected.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">🆕</div>
            <h3 className="font-bold mb-2 font-display text-lg">Brand New Everything</h3>
            <p className="text-sm text-foreground-accent">
              No wear and tear, everything is fresh and modern with the latest
              features and finishes. You're the first owner, so you know the complete history and can maintain it from day one.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="font-bold mb-2 font-display text-lg">Builder Warranties</h3>
            <p className="text-sm text-foreground-accent">
              Comprehensive warranties covering structure, systems, and
              workmanship for peace of mind. Most builders offer 1-year workmanship, 2-year systems, and 10-year structural warranties.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="font-bold mb-2 font-display text-lg">Current Incentives</h3>
            <p className="text-sm text-foreground-accent">
              Builders often offer closing cost assistance, rate buydowns, and
              upgrade credits. I track current incentives and help you negotiate the best deal.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="font-bold mb-2 font-display text-lg">Customization Options</h3>
            <p className="text-sm text-foreground-accent">
              Choose finishes, colors, and sometimes even floor plans to match
              your style. Many builders allow you to select upgrades and personalize your home before construction.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold mb-2 font-display text-lg">Energy Efficiency</h3>
            <p className="text-sm text-foreground-accent">
              Modern building standards mean lower utility bills and
              environmental impact. New homes are built to current energy codes with efficient HVAC, insulation, and windows.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">🏘️</div>
            <h3 className="font-bold mb-2 font-display text-lg">Master-Planned Communities</h3>
            <p className="text-sm text-foreground-accent">
              New construction often comes with parks, trails, and community
              amenities. Many new communities feature pools, fitness centers, walking trails, and social spaces.
            </p>
          </div>
        </div>
        <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-gold">
          <h3 className="text-xl font-bold text-primary mb-3 font-display">Additional Benefits of New Construction</h3>
          <ul className="space-y-2 text-foreground-accent">
            <li className="flex items-start">
              <span className="text-gold mr-2 font-bold">✓</span>
              <span><strong>Modern Technology:</strong> New homes include smart home features, modern wiring for high-speed internet, and updated electrical systems.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-2 font-bold">✓</span>
              <span><strong>Lower Maintenance:</strong> Everything is new, so you won't face immediate repair or replacement costs for major systems like HVAC, roof, or appliances.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-2 font-bold">✓</span>
              <span><strong>Builder Relationships:</strong> Working with an experienced agent who has relationships with builders can help you access better incentives and smoother transactions.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-2 font-bold">✓</span>
              <span><strong>Community Development:</strong> As new communities develop, property values often appreciate as amenities are completed and the area matures.</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Builder Partners */}
      <Section
        id="builders"
        title="Las Vegas Top Builders - Working with Industry Leaders"
        description="Established relationships with Las Vegas's premier home builders"
        className="bg-warm-gray"
      >
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-foreground-accent mb-6 text-lg">
            Las Vegas is home to some of the nation's top home builders, each offering unique designs, features, and communities. With {siteDetails.agent.experience} of experience working with builders throughout Las Vegas, I have established relationships that can help you access current incentives, navigate the new construction process, and ensure you get the best value for your investment.
          </p>
          <p className="text-foreground-accent text-lg">
            Whether you're interested in affordable starter homes, mid-range family homes, or luxury new construction, Las Vegas builders offer options across all price points. I'll help you understand each builder's strengths, current communities, available incentives, and which builder might be the best fit for your needs and budget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {builders.map((builder) => (
            <div
              key={builder.name}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <h3 className="text-xl font-bold mb-2 font-display">
                {builder.name}
              </h3>
              <p className="text-sm text-foreground-accent mb-3">
                {builder.description}
              </p>
              <p className="text-xs text-foreground-accent">
                Active communities throughout Las Vegas, Henderson, and Summerlin with current inventory and new phases available.
              </p>
            </div>
          ))}
        </div>
        <div className="bg-cream rounded-xl p-6">
          <h3 className="text-xl font-bold text-primary mb-3 font-display">Why Work with an Agent for New Construction?</h3>
          <p className="text-slate text-sm mb-3">
            Many buyers wonder if they need an agent when buying new construction. The answer is yes—here's why:
          </p>
          <ul className="list-disc list-inside text-sm text-slate space-y-1">
            <li><strong>Builder Incentive Access:</strong> Agents often have access to additional incentives and can negotiate better terms than buyers going directly to builders.</li>
            <li><strong>Contract Protection:</strong> Builder contracts are written in the builder's favor. An experienced agent reviews contracts and ensures your interests are protected.</li>
            <li><strong>Construction Oversight:</strong> I attend inspections, monitor construction progress, and ensure quality throughout the build process.</li>
            <li><strong>Upgrade Negotiation:</strong> I help you understand upgrade costs, negotiate lot premiums, and ensure you're getting fair pricing on options.</li>
            <li><strong>No Cost to You:</strong> Builder pays agent commission, so you get expert representation at no additional cost.</li>
          </ul>
        </div>
      </Section>

      {/* Process */}
      <Section
        id="process"
        title="The New Construction Home Buying Process in Las Vegas"
        description="What to expect when buying a new construction home from start to finish"
      >
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-foreground-accent mb-6 text-lg">
            Buying a new construction home is different from purchasing a resale property. The process involves selecting a builder, choosing a lot and floor plan, customizing your home, monitoring construction, and closing. Understanding each step helps ensure a smooth experience and protects your investment.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display text-lg">1. Choose Your Community and Builder</h3>
            <p className="text-foreground-accent mb-3">
              We'll tour new construction communities throughout Las Vegas, Henderson, and Summerlin, helping you find the
              perfect location and builder for your needs, budget, and lifestyle. I'll explain each builder's reputation, quality standards, and typical timelines.
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Community location and amenities evaluation</li>
              <li>Builder reputation and quality assessment</li>
              <li>Price range and floor plan availability</li>
              <li>HOA fees and community rules review</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display text-lg">2. Select Your Home and Customize</h3>
            <p className="text-foreground-accent mb-3">
              Choose from available inventory homes (quick move-in) or select a lot and customize your
              home with builder options. I'll help you understand upgrade costs, lot premiums, and which options provide the best value.
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Floor plan selection and lot choice</li>
              <li>Structural and design option selection</li>
              <li>Upgrade cost analysis and value assessment</li>
              <li>Timeline and construction start date</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display text-lg">3. Negotiate Terms and Review Contract</h3>
            <p className="text-foreground-accent mb-3">
              I'll help you understand current incentives, negotiate terms, and ensure
              your contract protects your interests. Builder contracts are complex, and having an experienced agent review them is essential.
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Incentive negotiation (closing costs, rate buydowns, upgrades)</li>
              <li>Contract review and modification requests</li>
              <li>Deposit and payment schedule understanding</li>
              <li>Contingency and cancellation rights</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display text-lg">4. Construction Monitoring and Inspections</h3>
            <p className="text-foreground-accent mb-3">
              Monitor construction progress, attend inspections, and ensure
              quality throughout the build process. I'll coordinate with the builder and keep you informed of progress.
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Pre-drywall inspection coordination</li>
              <li>Construction progress updates</li>
              <li>Quality assurance throughout build</li>
              <li>Addressing any construction concerns</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display text-lg">5. Closing, Final Walkthrough, and Move-In</h3>
            <p className="text-foreground-accent mb-3">
              Final walkthrough, closing coordination, and help with any
              post-move-in warranty items. I'll ensure everything is complete and address any issues before you move in.
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Final walkthrough and punch list creation</li>
              <li>Closing coordination and document review</li>
              <li>Warranty item tracking and resolution</li>
              <li>Post-move-in support and warranty follow-up</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* RealScout Widget */}
      <Section
        id="search"
        title="Search New Construction"
        description="Browse new construction listings and communities"
        className="bg-warm-gray"
      >
        <RealScoutWidgetLazy
          className="min-h-[600px]"
        />
      </Section>

      <CTASection
        title="Ready to Explore New Construction?"
        description="Let's find your perfect new home. I'll help you navigate builder incentives and find the best value."
      />
    </>
  );
}
