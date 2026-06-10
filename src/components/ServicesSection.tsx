import Link from 'next/link';
import Section from './Section';

interface Service {
  title: string;
  href: string;
  description: string;
  benefits: string[];
  icon: string;
}

const services: Service[] = [
  {
    title: 'Buy a Home',
    href: '/communities',
    description: 'Find the right home at the right price. From first-time buyers to luxury estate seekers.',
    benefits: [
      'Access to off-market listings',
      'Negotiation expertise saves you money',
      'Guidance through inspections & closing',
    ],
    icon: '🏠',
  },
  {
    title: 'Sell Your Home',
    href: '/sell-your-home',
    description: 'Strategic pricing and marketing to maximize your sale price.',
    benefits: [
      'Free comparative market analysis',
      'Professional photography & staging advice',
      'Proven marketing that attracts qualified buyers',
    ],
    icon: '💰',
  },
  {
    title: '55+ Communities',
    href: '/55-plus-living',
    description: 'Active adult living with resort amenities and low-maintenance lifestyles.',
    benefits: [
      'Expertise in Sun City, Del Webb, Trilogy',
      'HOA and amenity comparisons',
      'Resale vs new construction guidance',
    ],
    icon: '🌴',
  },
  {
    title: 'New Construction',
    href: '/new-construction',
    description: 'Navigate builder negotiations and get the best incentives.',
    benefits: [
      'Current builder incentive tracking',
      'Lot premium and upgrade negotiations',
      'Construction timeline management',
    ],
    icon: '🏗️',
  },
  {
    title: 'Investment Properties',
    href: '/investors',
    description: 'ROI-focused analysis for rentals, flips, and portfolio growth.',
    benefits: [
      'Cash flow and cap rate analysis',
      'Market rent comparisons',
      '1031 exchange coordination',
    ],
    icon: '📊',
  },
  {
    title: 'Divorce & Probate Sales',
    href: '/divorce-real-estate',
    description: 'Sensitive situations handled with discretion and efficiency.',
    benefits: [
      'Court-compliant documentation',
      'Neutral third-party expertise',
      'Expedited sale timelines when needed',
    ],
    icon: '⚖️',
  },
];

export default function ServicesSection() {
  return (
    <Section
      id="services"
      title="How Can I Help You?"
      description="Expert real estate services tailored to your unique goals and situation"
      className="bg-cream"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="group block bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-gold"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-primary text-xl font-bold mb-2 font-display group-hover:text-primary-dark transition-colors">
              {service.title}
            </h3>
            <p className="text-slate mb-4">{service.description}</p>
            <ul className="space-y-2 mb-4">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start text-sm text-slate">
                  <span className="text-gold mr-2">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <span className="text-primary hover:text-primary-dark font-semibold group-hover:underline">
              Learn More →
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
