export const dynamic = 'force-dynamic';

import { siteDetails } from '@/data/siteDetails';

export async function GET() {
  const baseUrl = siteDetails.siteUrl;
  const phone = siteDetails.contact.primaryPhone;
  const content = `# Berkshire Homes — Dr. Jan Duffy
> Berkshire Hathaway HomeServices Las Vegas properties
## About
Dr. Jan Duffy is a Nevada-licensed real estate professional (S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties. With 35+ years of experience serving the Las Vegas area and over $127M in career sales, Dr. Duffy specializes in this community and helps families find their perfect Nevada home.
- **Brokerage:** Berkshire Hathaway HomeServices Nevada Properties
- **License:** Nevada S.0197614.LLC
- **Phone:** ${phone}
- **Website:** ${baseUrl}
## Services
- Residential home buying and selling
- Community-specific property expertise
- Relocation services for moving to Nevada
- Home valuation and market analysis
- Investment property guidance
## Coverage Area
Las Vegas, Henderson, North Las Vegas, and surrounding Southern Nevada communities
## Key Pages
- [Home](${baseUrl}/)
- [Contact](${baseUrl}/contact)
- [About](${baseUrl}/about)
## Contact
- **Call/Text:** ${phone}
- **Website:** ${baseUrl}
`;
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
