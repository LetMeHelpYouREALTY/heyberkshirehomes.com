import Link from 'next/link';
import { siteDetails } from '@/data/siteDetails';
import Container from './Container';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryAction?: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  variant?: 'default' | 'primary' | 'dark';
}

export default function CTASection({
  title = "Ready to Find Your Perfect Home?",
  description = `Let's talk about your Las Vegas real estate goals. ${siteDetails.agent.tagline}`,
  primaryAction = {
    text: `Call/Text ${siteDetails.contact.primaryPhone}`,
    href: `tel:${siteDetails.contact.primaryPhone}`,
  },
  secondaryAction = {
    text: 'Get Free Home Valuation',
    href: '/sell-your-home',
  },
  variant = 'default',
}: CTASectionProps) {
  const bgClass = {
    default: 'bg-cream',
    primary: 'bg-primary text-white',
    dark: 'bg-black-charcoal text-white',
  }[variant];

  const buttonPrimaryClass = {
    default: 'bg-gold-dark hover:bg-primary text-white',
    primary: 'bg-gold-light hover:bg-gold text-white',
    dark: 'bg-gold-light hover:bg-gold text-white',
  }[variant];

  const buttonSecondaryClass = {
    default: 'bg-transparent text-primary border-2 border-gold hover:bg-gold hover:text-white',
    primary: 'bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20',
    dark: 'bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20',
  }[variant];

  return (
    <section id="cta" className={`${bgClass} py-16`}>
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            {title}
          </h2>
          <p className="text-lg mb-8 opacity-90">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={primaryAction.href}
              className={`${buttonPrimaryClass} px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg hover:shadow-xl`}
            >
              {primaryAction.text}
            </a>
            {secondaryAction && (
              <Link
                href={secondaryAction.href}
                className={`${buttonSecondaryClass} px-8 py-4 rounded-full font-semibold text-lg transition-colors`}
              >
                {secondaryAction.text}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
