import Image from 'next/image';
import { Community } from '@/lib/communities';
import Container from '../Container';

interface CommunityHeroProps {
  community: Community;
}

export default function CommunityHero({ community }: CommunityHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[500px]">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/20 to-gold/20">
        {community.heroImage ? (
          <Image
            src={community.heroImage}
            alt={`${community.name} community`}
            fill
            className="object-cover"
            priority
            quality={90}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🏘️</div>
              <div className="text-3xl font-bold font-display">{community.name}</div>
            </div>
          </div>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <Container className="relative h-full flex items-end">
        <div className="pb-12 w-full">
          <p className="text-gold font-medium mb-2">{community.location}</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2 font-display">
            {community.name}
          </h1>
          <p className="text-xl text-gray-200 mb-6">{community.tagline}</p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold">
              {/home|floor|plan/i.test(community.homeCount)
                ? community.homeCount
                : `${community.homeCount} homes`}
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold">
              {community.priceRange}
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold">
              {community.ageRestriction}
            </span>
            {community.gated && (
              <span className="bg-gold/80 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold">
                Gated
              </span>
            )}
            {community.golf && (
              <span className="bg-gold/80 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold">
                Golf
              </span>
            )}
            {community.builderStatus === 'active' && (
              <span className="bg-gold/80 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold">
                New Construction Available
              </span>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
