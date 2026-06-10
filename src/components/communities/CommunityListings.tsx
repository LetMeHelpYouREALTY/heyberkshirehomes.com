import { Community } from '@/lib/communities';
import { siteDetails } from '@/data/siteDetails';
import RealScoutWidgetLazy from '../RealScoutWidgetLazy';
import Section from '../Section';

interface CommunityListingsProps {
  community: Community;
}

export default function CommunityListings({ community }: CommunityListingsProps) {
  return (
    <Section
      id="listings"
      title={`${community.name} Homes for Sale`}
      description="Browse current listings in this community. Updated daily from the MLS."
      className="bg-cream"
    >
      <div className="mb-8">
        <p className="text-slate text-center max-w-3xl mx-auto mb-4 text-lg">
          Search active listings in {community.name}. Prices typically range from {community.priceRange}, offering options for various budgets and preferences.
          {community.builderStatus === 'active' && ' Both new construction and resale homes are available, giving you flexibility in your home search.'}
        </p>
        <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-gold max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-primary mb-3 font-display">Search Features for {community.name}</h3>
          <ul className="space-y-2 text-slate text-sm">
            <li className="flex items-start">
              <span className="text-gold mr-2 font-bold">✓</span>
              <span><strong>Real-Time MLS Data:</strong> All listings are updated daily from the MLS, ensuring you see the most current inventory available in {community.name}.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-2 font-bold">✓</span>
              <span><strong>Community-Specific Results:</strong> Search results are automatically filtered to show only properties in {community.name}, saving you time and helping you focus on relevant listings.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-2 font-bold">✓</span>
              <span><strong>Price Range Filtering:</strong> The search is pre-filtered to show homes in the typical price range for {community.name} ({community.priceRange}), though you can adjust filters to see all available options.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-2 font-bold">✓</span>
              <span><strong>Off-Market Access:</strong> Call Dr. Jan at {siteDetails.contact.primaryPhone} for access to pocket listings, coming soon properties, and exclusive opportunities in {community.name} that aren't available on public MLS.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* RealScout Widget with Price Filters - Using iframe embed */}
      {/* Note: Community filtering is done within the RealScout widget interface */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <RealScoutWidgetLazy
          widgetId={`realscout-${community.slug}`}
          priceMin={community.priceMin}
          priceMax={community.priceMax}
          className="min-h-[600px]"
        />
        <p className="text-sm text-slate text-center mt-4 italic">
          Use the search filters within the widget to filter by {community.name} or other communities.
        </p>
      </div>

      <div className="mt-8 text-center">
        <a
          href={`tel:${siteDetails.contact.primaryPhone}`}
          className="inline-block bg-gold-dark hover:bg-primary text-white font-semibold px-8 py-4 rounded-full transition-colors"
        >
          Call Dr. Jan for Off-Market Listings: {siteDetails.contact.primaryPhone}
        </a>
        <p className="text-sm text-slate mt-4">
          Access to pocket listings, coming soon properties, and exclusive opportunities
        </p>
      </div>
    </Section>
  );
}
