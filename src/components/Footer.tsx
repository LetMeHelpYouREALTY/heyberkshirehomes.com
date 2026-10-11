import Link from 'next/link';
import React from 'react';
import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import Container from './Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black-charcoal text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-gold text-xl font-bold mb-4 font-display">
              {siteDetails.siteName}
            </h3>
            <p className="text-gray-300 mb-4">
              {footerDetails.subheading}
            </p>
            <p className="text-sm text-gray-400">
              License: {footerDetails.legal.license}
            </p>
            <p className="text-sm text-gray-400">
              {footerDetails.legal.brokerage}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">Quick Links</h4>
            <ul className="space-y-2">
              {footerDetails.quickLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.url}
                    className="text-gray-300 hover:text-gold-light transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Communities */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">Communities</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/communities/summerlin-west"
                  className="text-gray-300 hover:text-gold-light transition-colors"
                >
                  Summerlin West
                </Link>
              </li>
              <li>
                <Link
                  href="/communities/the-ridges"
                  className="text-gray-300 hover:text-gold-light transition-colors"
                >
                  The Ridges
                </Link>
              </li>
              <li>
                <Link
                  href="/communities/skye-canyon"
                  className="text-gray-300 hover:text-gold-light transition-colors"
                >
                  Skye Canyon
                </Link>
              </li>
              <li>
                <Link
                  href="/55-plus-living"
                  className="text-gray-300 hover:text-gold-light transition-colors"
                >
                  55+ Communities
                </Link>
              </li>
              <li>
                <Link
                  href="/communities/sun-city-summerlin"
                  className="text-gray-300 hover:text-gold-light transition-colors"
                >
                  Sun City Summerlin
                </Link>
              </li>
              <li>
                <Link
                  href="/communities/sun-city-anthem"
                  className="text-gray-300 hover:text-gold-light transition-colors"
                >
                  Sun City Anthem
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href={`tel:${footerDetails.contact.primaryPhone}`}
                  className="hover:text-gold transition-colors"
                >
                  Call/Text: {footerDetails.contact.primaryPhone}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${footerDetails.contact.professionalPhone}`}
                  className="hover:text-gold transition-colors text-sm"
                >
                  Office: {footerDetails.contact.professionalPhone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${footerDetails.contact.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {footerDetails.contact.email}
                </a>
              </li>
              <li>Las Vegas, Nevada</li>
              <li className="text-sm text-gray-400">{siteDetails.agent.brokerage}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-gold text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-gold text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Equal Housing Opportunity</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
