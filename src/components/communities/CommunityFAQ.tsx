import { Community } from '@/lib/communities';
import Section from '../Section';

interface CommunityFAQProps {
  community: Community;
}

export default function CommunityFAQ({ community }: CommunityFAQProps) {
  if (!community.faqs || community.faqs.length === 0) {
    return null;
  }

  return (
    <>
      <Section
        id="faq"
        title={`Frequently Asked Questions About ${community.name}`}
        description="Common questions from buyers considering this community"
      >
        <div className="max-w-3xl mx-auto space-y-4">
          {community.faqs.map((faq, index) => (
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
