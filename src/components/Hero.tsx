import Link from 'next/link';
import Image from 'next/image';
import { siteDetails } from '@/data/siteDetails';
import Container from './Container';

export default function Hero() {
  return (
    <section className="relative bg-primary text-white py-20 lg:py-28 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-las-vegas.jpg"
          alt="Las Vegas skyline"
          fill
          className="object-cover"
          priority
          quality={75}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sans leading-tight">
            Buying, Selling, or Investing in Las Vegas?
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200">
            Expert guidance for luxury homes, 55+ communities, new construction, and investments
          </p>

          {/* Service CTA Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Link
              href="/communities"
              className="group bg-white text-primary hover:bg-gold hover:text-white rounded-xl p-6 transition-all hover:-translate-y-1 shadow-lg"
            >
              <div className="text-4xl mb-3">🏠</div>
              <div className="font-semibold text-lg">Buy a Home</div>
            </Link>
            <Link
              href="/sell-your-home"
              className="group bg-white text-primary hover:bg-gold hover:text-white rounded-xl p-6 transition-all hover:-translate-y-1 shadow-lg"
            >
              <div className="text-4xl mb-3">💰</div>
              <div className="font-semibold text-lg">Sell Your Home</div>
            </Link>
            <Link
              href="/55-plus-living"
              className="group bg-white text-primary hover:bg-gold hover:text-white rounded-xl p-6 transition-all hover:-translate-y-1 shadow-lg"
            >
              <div className="text-4xl mb-3">🌴</div>
              <div className="font-semibold text-lg">55+ Communities</div>
            </Link>
            <Link
              href="/investors"
              className="group bg-white text-primary hover:bg-gold hover:text-white rounded-xl p-6 transition-all hover:-translate-y-1 shadow-lg"
            >
              <div className="text-4xl mb-3">📈</div>
              <div className="font-semibold text-lg">Invest</div>
            </Link>
          </div>

          <p className="text-lg text-gray-200">
            Questions? <a href={`tel:${siteDetails.contact.primaryPhone}`} className="text-gold-light hover:text-gold font-semibold underline">Call/Text {siteDetails.contact.primaryPhone}</a>
          </p>
        </div>
      </Container>
    </section>
  );
}
