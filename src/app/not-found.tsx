import Link from 'next/link';
import { siteDetails } from '@/data/siteDetails';
import Container from '@/components/Container';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <Container>
        <div className="text-center max-w-2xl mx-auto py-16">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4 font-display">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6 font-display">
            Page Not Found
          </h2>
          <p className="text-lg text-slate mb-8">
            Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="bg-gold-dark hover:bg-primary text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Go to Homepage
            </Link>
            <Link
              href="/communities"
              className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Browse Communities
            </Link>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4 text-primary font-display">
              Popular Pages
            </h3>
            <ul className="space-y-2 text-left">
              <li>
                <Link href="/" className="text-primary hover:text-primary-dark font-semibold">
                  Home →
                </Link>
              </li>
              <li>
                <Link href="/55-plus-living" className="text-primary hover:text-primary-dark font-semibold">
                  55+ Communities →
                </Link>
              </li>
              <li>
                <Link href="/luxury-homes" className="text-primary hover:text-primary-dark font-semibold">
                  Luxury Homes →
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary hover:text-primary-dark font-semibold">
                  About Dr. Jan →
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary hover:text-primary-dark font-semibold">
                  Contact →
                </Link>
              </li>
            </ul>
          </div>

          <p className="mt-8 text-slate">
            Need help? <a href={`tel:${siteDetails.contact.primaryPhone}`} className="text-primary hover:text-primary-dark font-semibold underline">Call/Text {siteDetails.contact.primaryPhone}</a>
          </p>
        </div>
      </Container>
    </div>
  );
}
