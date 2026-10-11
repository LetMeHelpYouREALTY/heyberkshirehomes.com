export const dynamic = 'force-dynamic';

import { siteDetails } from '@/data/siteDetails';

export async function GET() {
  const baseUrl = siteDetails.siteUrl;
  const phone = siteDetails.contact.primaryPhone;
  const content = `# ${siteDetails.siteName}
> Las Vegas luxury real estate. Dr. Jan Duffy, ${siteDetails.agent.brokerage}.

## Entity
- Agent: Dr. Jan Duffy
- License: Nevada ${siteDetails.agent.license}
- Brokerage: ${siteDetails.agent.brokerage}
- Phone: ${phone}
- Email: ${siteDetails.contact.email}
- Service area: Las Vegas, Summerlin, Henderson, North Las Vegas
- Experience stated on this site: ${siteDetails.agent.experience}
- Career sales stated on this site: ${siteDetails.agent.salesVolume}
- Updated: 2026-10-11

## What this site answers
Luxury buyers and sellers use this site for Summerlin estates, guard-gated communities, 55+ neighborhoods, and new construction. Each page opens with a direct answer, a fact table, and a source when a number comes from outside the brokerage.

## Heritage at Stonebridge
- Guard-gated 55+ neighborhood by Lennar in Stonebridge, Summerlin
- Address: 930 Silverfir Ct, Las Vegas, NV 89138
- Source: https://www.heritageatstonebridge.org/
- Lennar floor plans: https://summerlin.com/heritage-by-lennar-is-newest-neighborhood-in-the-village-of-stonebridge-at-summerlin/
- HOA dues: not published on the community site. Confirm on the resale package.
- Page: ${baseUrl}/communities/heritage-stonebridge

## Key pages
- [Home](${baseUrl}/)
- [Luxury homes](${baseUrl}/luxury-homes)
- [55+ communities](${baseUrl}/55-plus-living)
- [Communities](${baseUrl}/communities)
- [Heritage at Stonebridge](${baseUrl}/communities/heritage-stonebridge)
- [New construction](${baseUrl}/new-construction)
- [Sell](${baseUrl}/sell-your-home)
- [About](${baseUrl}/about)
- [Contact](${baseUrl}/contact)

## Contact
Call or text ${phone}.
`;
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
