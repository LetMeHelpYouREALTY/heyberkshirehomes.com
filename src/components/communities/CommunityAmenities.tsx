import { Community } from '@/lib/communities';
import Section from '../Section';

interface CommunityAmenitiesProps {
  community: Community;
}

export default function CommunityAmenities({ community }: CommunityAmenitiesProps) {
  return (
    <Section
      id="amenities"
      title={`${community.name} Community Amenities - Resort-Style Living`}
      description={`Discover the comprehensive amenities that make ${community.name} a premier active adult community in Las Vegas`}
    >
      <div className="max-w-4xl mx-auto mb-8">
        <p className="text-slate text-center mb-6 text-lg">
          {community.name} publishes the amenities listed below. Use that list, not a generic 55+ brochure. {community.golf ? 'Golf is included in the community.' : 'Golf is not listed as a community amenity.'}
        </p>
        <p className="text-slate text-center text-lg">
          The amenities in {community.name} are maintained by the HOA and included in your monthly fees, ensuring they remain in excellent condition and are always available for your enjoyment. Whether you're an avid golfer, fitness enthusiast, social butterfly, or someone who simply enjoys having options, {community.name}'s amenities cater to a wide range of interests and activities.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {community.amenities.map((amenityGroup, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-gold">
            <h3 className="text-xl font-bold text-primary mb-4 font-display">
              {amenityGroup.category}
            </h3>
            <ul className="space-y-2">
              {amenityGroup.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start text-slate text-sm">
                  <span className="text-gold mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="bg-cream rounded-xl p-6 max-w-4xl mx-auto">
        <h3 className="text-xl font-bold text-primary mb-3 font-display">Making the Most of {community.name} Amenities</h3>
        <p className="text-slate text-sm mb-3">
          The amenities in {community.name} are designed to support an active, engaged lifestyle. Many residents find that participating in organized activities, joining clubs, and taking advantage of recreational facilities enhances their quality of life and helps them build meaningful connections with neighbors who share similar interests.
        </p>
        <ul className="list-disc list-inside text-sm text-slate space-y-1">
          <li>Most amenities are included in HOA fees, providing excellent value</li>
          <li>Organized activities and clubs make it easy to get involved</li>
          <li>Variety of amenities ensures there's something for everyone</li>
          <li>Well-maintained facilities enhance property values and lifestyle</li>
        </ul>
      </div>
    </Section>
  );
}
