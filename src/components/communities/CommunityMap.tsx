import { Community } from '@/lib/communities';
import Section from '../Section';

interface CommunityMapProps {
  community: Community;
}

export default function CommunityMap({ community }: CommunityMapProps) {
  const { lat, lng } = community.locationInfo.coordinates;
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY'}&q=${lat},${lng}&zoom=13`;

  return (
    <Section
      id="location"
      title="Location & Nearby Attractions"
      description={`Where ${community.name} is located and what's nearby`}
      className="bg-cream"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-primary mb-4 font-display">
            Address
          </h3>
          <p className="text-slate mb-6">{community.locationInfo.address}</p>

          <h3 className="text-xl font-bold text-primary mb-4 font-display">
            Nearby Attractions
          </h3>
          <ul className="space-y-3">
            {community.locationInfo.nearbyAttractions.map((attraction, index) => (
              <li key={index} className="flex items-start">
                <span className="text-gold mr-3 font-semibold">{attraction.distance}</span>
                <div>
                  <div className="font-semibold text-slate">{attraction.name}</div>
                  <div className="text-sm text-slate/70">{attraction.type}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
          {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? (
            <iframe
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={mapUrl}
              title={`${community.name} location map`}
            />
          ) : (
            <div className="bg-gray-200 h-[400px] flex items-center justify-center">
              <div className="text-center text-slate">
                <div className="text-4xl mb-4">📍</div>
                <p className="font-semibold">{community.locationInfo.address}</p>
                <p className="text-sm mt-2">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark underline"
                  >
                    View on Google Maps →
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
