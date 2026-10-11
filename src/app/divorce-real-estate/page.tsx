import CTASection from '@/components/CTASection';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { siteDetails } from '@/data/siteDetails';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateBreadcrumbSchema } from '@/lib/schema';
import { PageAnswerBlock, PageFaq, PageSeo } from '@/components/seo/PageSeo';
import { getPageAnswer } from '@/data/page-answers';

const pageAnswer = getPageAnswer('/divorce-real-estate');

export const metadata = {
  title: pageAnswer.title,
  description: pageAnswer.description,
  alternates: { canonical: `${siteDetails.siteUrl}/divorce-real-estate` },
};

export default function DivorceRealEstatePage() {
  const breadcrumbs = [
    { name: 'Home', url: siteDetails.siteUrl },
    { name: 'Divorce Real Estate', url: `${siteDetails.siteUrl}/divorce-real-estate` },
  ];

  return (
    <PageSeo page={pageAnswer}>
      <SchemaMarkup schemas={[generateBreadcrumbSchema(breadcrumbs)]} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary-accent to-secondary text-white py-20">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Divorce Real Estate Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Sensitive, discreet guidance for real estate during divorce. Quick,
            clean sales with complete confidentiality.
          </p>
        </Container>
      </section>
      <PageAnswerBlock />

      {/* Overview */}
      <Section
        id="overview"
        title="Understanding Real Estate During Divorce in Las Vegas"
        description="Compassionate, professional guidance during a difficult time"
      >
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-foreground-accent mb-6 text-lg">
            Divorce is one of life's most challenging transitions, and real
            estate decisions add significant complexity to an already difficult situation. Whether you need to sell
            the marital home, buy a new property, or navigate property division,
            you need an agent who understands both the emotional and financial
            aspects of this process, as well as the legal requirements that must be met.
          </p>
          <p className="text-foreground-accent mb-6 text-lg">
            With {siteDetails.agent.experience} of experience in Las Vegas real
            estate, I've helped many families navigate property matters during
            divorce with sensitivity, discretion, and efficiency. My approach
            prioritizes quick, clean transactions that minimize stress and
            maximize outcomes for all parties. I understand that during divorce, time is often of the essence, and property matters need to be resolved efficiently.
          </p>
          <p className="text-foreground-accent mb-6 text-lg">
            You can trust that your situation will be handled with complete
            confidentiality and professionalism. My goal is to make the real
            estate aspect of your divorce as smooth as possible, so you can focus on moving forward with your life. I work closely with divorce attorneys, mediators, and other professionals to ensure all legal requirements are met while facilitating the best possible outcome.
          </p>
          <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-gold">
            <h3 className="text-xl font-bold text-primary mb-3 font-display">Common Real Estate Scenarios During Divorce</h3>
            <ul className="space-y-2 text-foreground-accent">
              <li className="flex items-start">
                <span className="text-gold mr-2 font-bold">✓</span>
                <span><strong>Selling the Marital Home:</strong> The most common scenario, where both parties agree to sell and divide proceeds. This requires fair market valuation, efficient marketing, and expedited closing when possible.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2 font-bold">✓</span>
                <span><strong>Buy-Out Situations:</strong> One party keeps the home and buys out the other's equity. This requires accurate property valuation and sometimes refinancing coordination.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2 font-bold">✓</span>
                <span><strong>Buying a New Home:</strong> After divorce, many people need to find a new home that fits their new financial situation and lifestyle. This requires understanding post-divorce finances and finding appropriate properties.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2 font-bold">✓</span>
                <span><strong>Investment Property Division:</strong> When couples own rental properties or investment real estate, these assets must be valued and divided, which may involve selling or transferring ownership.</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section
        id="services"
        title="How I Can Help"
        description="Comprehensive support for divorce-related real estate needs"
        className="bg-warm-gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">🏠</div>
            <h3 className="font-bold mb-2 font-display">Selling the Marital Home</h3>
            <p className="text-sm text-foreground-accent mb-3">
              Quick, efficient sales to facilitate property division:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Fast market analysis and pricing strategy</li>
              <li>Neutral, professional presentation</li>
              <li>Expedited closing coordination</li>
              <li>Fair market value determination</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">🔑</div>
            <h3 className="font-bold mb-2 font-display">Buying a New Home</h3>
            <p className="text-sm text-foreground-accent mb-3">
              Help finding your next home post-divorce:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Understanding your new financial situation</li>
              <li>Pre-approval guidance</li>
              <li>Finding the right property for your new life</li>
              <li>Supportive, judgment-free service</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-bold mb-2 font-display">Property Valuation</h3>
            <p className="text-sm text-foreground-accent mb-3">
              Accurate valuations for property division:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Comprehensive market analysis (CMA)</li>
              <li>Fair market value reports</li>
              <li>Documentation for legal proceedings</li>
              <li>Expert testimony if needed</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="font-bold mb-2 font-display">Cooperative Sales</h3>
            <p className="text-sm text-foreground-accent mb-3">
              Working with both parties when needed:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Neutral representation</li>
              <li>Clear communication with all parties</li>
              <li>Mediation support</li>
              <li>Fair, transparent process</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Why Choose Dr. Jan */}
      <Section
        id="why-choose"
        title="Why Choose Dr. Jan Duffy for Divorce Real Estate in Las Vegas"
        description="Sensitivity, discretion, expertise, and results during a difficult time"
      >
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-foreground-accent mb-6 text-lg">
            Divorce real estate requires a unique combination of sensitivity, legal understanding, and transaction expertise. With {siteDetails.agent.experience} of experience in Las Vegas real estate and a track record of helping families through divorce property matters, I bring the right combination of skills to ensure your real estate needs are handled professionally and efficiently.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="font-bold mb-2 font-display text-lg">Complete Discretion</h3>
            <p className="text-sm text-foreground-accent">
              Your situation is handled with the utmost confidentiality. No
              judgment, just professional service. I understand that divorce is a private matter, and I treat all information with complete discretion.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold mb-2 font-display text-lg">Quick, Clean Sales</h3>
            <p className="text-sm text-foreground-accent">
              Expedited processes to minimize stress and facilitate your
              transition. Fast closings when needed, efficient marketing, and streamlined transactions to resolve property matters quickly.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">💼</div>
            <h3 className="font-bold mb-2 font-display text-lg">Legal Coordination</h3>
            <p className="text-sm text-foreground-accent">
              Experience working with divorce attorneys and understanding legal
              requirements for property transactions. I coordinate with your legal team to ensure all requirements are met.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-cream rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-3 font-display">Fair Market Valuation</h3>
            <p className="text-slate text-sm mb-3">
              Accurate property valuations are essential for property division during divorce. I provide comprehensive market analysis (CMA) that can be used in legal proceedings, ensuring fair market value determination for both parties.
            </p>
            <ul className="list-disc list-inside text-sm text-slate space-y-1">
              <li>Comprehensive market analysis (CMA)</li>
              <li>Fair market value reports for court</li>
              <li>Documentation for legal proceedings</li>
              <li>Expert testimony if required</li>
            </ul>
          </div>
          <div className="bg-cream rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-3 font-display">Neutral, Professional Service</h3>
            <p className="text-slate text-sm mb-3">
              When working with both parties or in cooperative sales, I maintain complete neutrality and professionalism. My goal is to facilitate a fair transaction that serves everyone's interests while minimizing conflict.
            </p>
            <ul className="list-disc list-inside text-sm text-slate space-y-1">
              <li>Neutral representation when needed</li>
              <li>Clear communication with all parties</li>
              <li>Mediation support and coordination</li>
              <li>Fair, transparent process</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section
        id="process"
        title="The Process"
        description="What to expect when working with me"
        className="bg-warm-gray"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-bold mb-2 font-display">Initial Consultation</h3>
                <p className="text-foreground-accent">
                  We'll discuss your situation in complete confidence. I'll
                  understand your timeline, goals, and any legal requirements
                  that need to be considered.
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
                <h3 className="font-bold mb-2 font-display">Property Analysis</h3>
                <p className="text-foreground-accent">
                  If selling, I'll provide a comprehensive market analysis and
                  pricing strategy. If buying, we'll identify properties that
                  fit your new situation.
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
                <h3 className="font-bold mb-2 font-display">Coordination</h3>
                <p className="text-foreground-accent">
                  I'll coordinate with your attorney, mediator, or other
                  professionals as needed. Clear communication keeps everyone
                  informed.
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
                <h3 className="font-bold mb-2 font-display">Transaction Management</h3>
                <p className="text-foreground-accent">
                  I'll handle all aspects of the transaction with sensitivity
                  and efficiency, keeping stress to a minimum during this
                  challenging time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Confidentiality */}
      <Section
        id="confidentiality"
        title="Your Privacy Matters"
        description="Complete confidentiality and professional discretion"
      >
        <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-md">
          <p className="text-foreground-accent mb-4">
            I understand that divorce is a private matter, and real estate
            decisions during this time require extra sensitivity. You can trust
            that:
          </p>
          <ul className="list-disc list-inside text-foreground-accent space-y-2 mb-4">
            <li>All conversations are completely confidential</li>
            <li>Your situation is handled with discretion and respect</li>
            <li>No judgment—just professional, supportive guidance</li>
            <li>I work efficiently to minimize the time property matters take</li>
            <li>Coordination with legal professionals when needed</li>
          </ul>
          <p className="text-foreground-accent">
            My goal is to make the real estate aspect of your divorce as smooth
            and stress-free as possible, so you can focus on moving forward.
          </p>
        </div>
      </Section>

      <CTASection
        title="Need Help with Divorce Real Estate?"
        description="Let's discuss your situation in complete confidence. Sensitive, discreet, and efficient service."
      />
      <PageFaq />
    </PageSeo>
  );
}
