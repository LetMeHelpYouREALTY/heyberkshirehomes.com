import Section from '../Section';
import SchemaMarkup from '../SchemaMarkup';
import { generateFAQSchema } from '@/lib/schema';

const faqs = [
  {
    question: 'What areas do you serve?',
    answer:
      'We specialize in Las Vegas and Henderson, Nevada — including Summerlin, The Ridges, Skye Canyon, Sun City Summerlin, Del Webb, Heritage at Stonebridge, Green Valley, and surrounding communities. We cover residential, luxury, 55+, and investment properties throughout Southern Nevada.',
  },
  {
    question: 'How long does the home buying process take in Las Vegas?',
    answer:
      "Most Las Vegas purchases close in 30–45 days once you're under contract. The search phase depends on your timeline — with our RealScout alert system we can have targeted listings in your inbox the same day. Right now homes average 52 days on market, so serious buyers have a real window to negotiate.",
  },
  {
    question: 'What is the current Las Vegas median home price?',
    answer:
      'The Las Vegas median single-family home price hit a record $494,000 in June 2026 — up from $450K a year ago. Summerlin and Henderson luxury communities run $800K–$3M+. Call or text 702-222-1964 for a neighborhood-specific price range based on exactly where you\'re looking.',
  },
  {
    question: 'Do you help with home valuations?',
    answer:
      'Yes — and our valuations are based on closed MLS data, not algorithm estimates. With 35+ years and $127M+ in Las Vegas sales, we know what the market actually pays for specific streets, lot premiums, and upgrades. Text 702-222-1964 to schedule a no-obligation valuation.',
  },
  {
    question: 'What makes Berkshire Hathaway HomeServices different from other brokerages?',
    answer:
      "BHHS is backed by Warren Buffett's Berkshire Hathaway — the brand carries institutional trust that matters when a seller is choosing who to list with and when a buyer's offer hits a competing desk. Our 50,000+ agent network also means seamless referrals for clients relocating from any market.",
  },
  {
    question: 'Can you help with investment properties in Las Vegas?',
    answer:
      'Yes. Las Vegas currently sits at 3.3 months of inventory — a balanced market with cap rate opportunities in North Las Vegas and Henderson. We analyze price-to-rent ratios and cash-on-cash returns before recommending any investment property. Text 702-222-1964 to run the numbers on a specific address.',
  },
  {
    question: 'Do you work with 55+ community buyers?',
    answer:
      "Extensively. We're the go-to team for Sun City Summerlin, Del Webb North Ranch, Heritage at Stonebridge, and every active-adult community in the valley. These communities have HOA rules, age restrictions, and resale nuances that most agents miss. We've closed hundreds of 55+ transactions.",
  },
  {
    question: 'What are your fees?',
    answer:
      "Per NAR's August 2024 settlement rules, buyer broker compensation is fully negotiable and must be disclosed in your written buyer agreement before any showings. We discuss this transparently at the first consultation. There is no cost to start a conversation — call or text 702-222-1964.",
  },
  {
    question: 'How do I get started?',
    answer:
      'Call or text Dr. Jan directly at 702-222-1964 — she answers her own phone. Or use the contact form below. First step is a 15-minute conversation to understand your goals, timeline, and budget. No pressure, no scripts.',
  },
];

export default function FAQSection() {
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <SchemaMarkup schemas={[faqSchema]} />
      <Section
        id="faq"
        title="Frequently Asked Questions"
        description="Answers to common questions about buying, selling, and investing in Las Vegas"
        className="bg-cream"
      >
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white rounded-lg p-6 shadow-md group cursor-pointer"
            >
              <summary className="font-semibold text-primary cursor-pointer list-none flex justify-between items-center">
                <span>{faq.question}</span>
                <span className="text-gold group-open:rotate-180 transition-transform ml-4">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-slate leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
