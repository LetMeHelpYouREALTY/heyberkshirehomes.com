import Link from 'next/link';
import Image from 'next/image';
import { siteDetails } from '@/data/siteDetails';
import Section from './Section';

export default function AboutSection() {
  return (
    <Section
      id="about-preview"
      title="Why Work with Dr. Jan Duffy?"
      description=""
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <p className="text-lg text-slate mb-6">
            With deep roots in Las Vegas real estate, I've helped over {siteDetails.agent.familiesServed} families 
            find their perfect homes — from first-time buyers in Centennial Hills to $5M+ estates in The Ridges. 
            My approach: listen first, then match you with the right opportunity.
          </p>
          <Link
            href="/about"
            className="inline-block bg-gold-dark hover:bg-primary text-white px-6 py-3 rounded-full font-semibold transition-colors"
          >
            Learn More About My Approach →
          </Link>
        </div>
        <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/images/dr-jan-duffy.jpg"
            alt="Dr. Jan Duffy"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Stats as Credentials */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        <div className="text-center bg-cream rounded-lg p-6">
          <div className="text-primary text-4xl font-bold mb-2">35+</div>
          <div className="text-slate font-semibold">Years Experience</div>
        </div>
        <div className="text-center bg-cream rounded-lg p-6">
          <div className="text-primary text-4xl font-bold mb-2">500+</div>
          <div className="text-slate font-semibold">Families Served</div>
        </div>
        <div className="text-center bg-cream rounded-lg p-6">
          <div className="text-primary text-4xl font-bold mb-2">$127M+</div>
          <div className="text-slate font-semibold">Sales Volume</div>
        </div>
        <div className="text-center bg-cream rounded-lg p-6">
          <div className="text-primary text-4xl font-bold mb-2">Ph.D.</div>
          <div className="text-slate font-semibold">Research-Driven</div>
        </div>
      </div>
    </Section>
  );
}
