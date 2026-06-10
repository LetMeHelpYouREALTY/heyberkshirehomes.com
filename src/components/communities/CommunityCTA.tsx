import Link from 'next/link';
import { Community } from '@/lib/communities';
import { siteDetails } from '@/data/siteDetails';
import Container from '../Container';

interface CommunityCTAProps {
  community: Community;
}

export default function CommunityCTA({ community }: CommunityCTAProps) {
  return (
    <section className="bg-primary text-white py-16">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Interested in {community.name}?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's discuss your goals and find the perfect home in {community.name}. 
            {siteDetails.agent.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteDetails.contact.primaryPhone}`}
              className="bg-gold-dark hover:bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg"
            >
              Call/Text {siteDetails.contact.primaryPhone}
            </a>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
          <p className="mt-6 text-gray-300 text-sm">
            Free market analysis • Off-market listings • Expert negotiation
          </p>
        </div>
      </Container>
    </section>
  );
}
