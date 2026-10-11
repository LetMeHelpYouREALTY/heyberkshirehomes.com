import { Community } from '@/lib/communities';
import Section from '../Section';

interface CommunityOverviewProps {
  community: Community;
}

export default function CommunityOverview({ community }: CommunityOverviewProps) {
  return (
    <Section
      id="overview"
      title={`About ${community.name} - Las Vegas 55+ Active Adult Community`}
      description={`Discover what makes ${community.name} one of Las Vegas's premier 55+ active adult communities`}
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-slate leading-relaxed mb-6">
          {community.overview}
        </p>

        <p className="text-lg text-slate leading-relaxed mb-6">
          {community.name} represents the best of Las Vegas active adult living, combining resort-style amenities, vibrant social opportunities, and maintenance-free living in one of the most desirable locations in the Southwest. Whether you're planning your retirement move, seeking a second home for active living, or looking to downsize into a community designed for your lifestyle, {community.name} offers an exceptional opportunity to enjoy your next chapter.
        </p>

        <h3 className="text-2xl font-bold text-primary mb-4 font-display">
          Community Highlights and Key Features
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          {community.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start text-slate">
              <span className="text-gold mr-3 text-xl flex-shrink-0">✓</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-gold mb-8">
          <h3 className="text-xl font-bold text-primary mb-3 font-display">Why Choose {community.name}?</h3>
          <p className="text-slate mb-4">
            {community.name} is a {community.ageRestriction} community in {community.location}. {community.gated ? 'The neighborhood is gated.' : 'The neighborhood is not gated.'} {community.golf ? 'Golf is part of the community.' : 'Golf appears on this page only when the community includes it.'}
          </p>
          <ul className="space-y-2 text-slate">
            <li className="flex items-start">
              <span className="text-gold mr-2 font-bold">✓</span>
              <span><strong>Prime Location:</strong> {community.location} offers convenient access to shopping, dining, healthcare, entertainment, and major transportation routes.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-2 font-bold">✓</span>
              <span><strong>Resort-Style Amenities:</strong> From golf courses to fitness centers, pools to social clubs, {community.name} provides amenities that create a resort-like lifestyle without leaving your neighborhood.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-2 font-bold">✓</span>
              <span><strong>Active Social Scene:</strong> Organized activities, clubs, events, and interest groups help you stay active, build friendships, and enjoy a vibrant social life.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-2 font-bold">✓</span>
              <span><strong>Maintenance-Free Living:</strong> HOA services handle landscaping, exterior maintenance, and common area upkeep, giving you more time to enjoy life and pursue your interests.</span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 p-6 bg-cream rounded-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">{community.homeCount}</div>
            <div className="text-sm text-slate">Homes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">{community.yearEstablished}</div>
            <div className="text-sm text-slate">Established</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-primary mb-1 line-clamp-2">{community.builder.split('(')[0].trim()}</div>
            <div className="text-sm text-slate">Builder</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">{community.locationInfo.nearbyAttractions.length}+</div>
            <div className="text-sm text-slate">Nearby Attractions</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
