'use client';

import { useState } from 'react';
import Link from 'next/link';
import { communities, Community } from '@/data/communities';
import CommunityCard from './CommunityCard';
import Section from './Section';

type FilterType = 'all' | 'luxury' | '55plus' | 'family' | 'new-construction';

export default function CommunitiesSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'luxury', label: 'Luxury ($800K+)' },
    { key: '55plus', label: '55+ Active Adult' },
    { key: 'family', label: 'Parks & Recreation' },
    { key: 'new-construction', label: 'New Construction' },
  ];

  const getFilteredCommunities = (): Community[] => {
    if (activeFilter === 'all') {
      return communities.slice(0, 6); // Show 6 featured communities
    }
    
    return communities.filter((community) => {
      switch (activeFilter) {
        case 'luxury':
          return community.category === 'luxury';
        case '55plus':
          return community.category === '55plus';
        case 'family':
          return community.category === 'family';
        case 'new-construction':
          // Filter communities with recent construction (2020 or later, or "Present")
          return community.yearBuilt.includes('Present') || 
                 community.yearBuilt.includes('2020') || 
                 community.yearBuilt.includes('2021') ||
                 community.yearBuilt.includes('2022') ||
                 community.yearBuilt.includes('2023') ||
                 community.yearBuilt.includes('2024') ||
                 community.yearBuilt.includes('2025');
        default:
          return true;
      }
    });
  };

  const filteredCommunities = getFilteredCommunities();

  return (
    <Section
      id="communities"
      title="Explore Las Vegas Neighborhoods"
      description="Find the community that fits your lifestyle and budget"
    >
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => setActiveFilter(filter.key)}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              activeFilter === filter.key
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-slate hover:bg-gray-300'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Community Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCommunities.map((community) => (
          <CommunityCard key={community.slug} community={community} />
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/communities"
          className="text-primary font-semibold hover:underline text-lg"
        >
          View All Communities →
        </Link>
      </div>
    </Section>
  );
}
