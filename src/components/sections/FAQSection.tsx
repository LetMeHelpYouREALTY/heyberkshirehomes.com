import Section from '../Section';
import SchemaMarkup from '../SchemaMarkup';
import { generateFAQSchema } from '@/lib/schema';
import { siteDetails } from '@/data/siteDetails';

const phone = siteDetails.contact.primaryPhone;

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
      `The Las Vegas median single-family home price on this site is the GLVAR figure of $494,000 for June 2026. Luxury communities on this site start at $800,000. Call or text ${phone} for a range on a specific street.`,
  },
  {
    question: 'Do you help with home valuations?',
    answer:
      `Yes. A pricing opinion uses closed MLS sales for that street. This site states 35+ years and $127M+ in Las Vegas sales. Text ${phone} with the address.`,
  },
  {
    question: 'What makes Berkshire Hathaway HomeServices different from other brokerages?',
    answer:
      `The brokerage on this site is ${siteDetails.agent.brokerage}. The license is Nevada ${siteDetails.agent.license}.`,
  },
  {
    question: 'Can you help with investment properties in Las Vegas?',
    answer:
      `Yes. This site cites 3.3 months of inventory from GLVAR, June 2026. The worksheet uses the address, the rent, and the HOA. Text ${phone} with the property.`,
  },
  {
    question: 'Do you work with 55+ community buyers?',
    answer:
      'Yes. Sun City Summerlin, Del Webb, and Heritage at Stonebridge each have an age rule, an HOA, and a resale package. Compare those three facts before you tour.',
  },
  {
    question: 'What are your fees?',
    answer:
      `Buyer broker compensation is negotiable and is written into the buyer agreement before showings. Call or text ${phone} to start that conversation.`,
  },
  {
    question: 'How do I get started?',
    answer:
      `Call or text ${phone}, or use the contact form. The first conversation covers the community, the timing, and the price.`,
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
