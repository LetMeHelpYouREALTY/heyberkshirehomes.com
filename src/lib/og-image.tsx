import { ImageResponse } from 'next/og';


export const ogImageSize = {
  width: 1200,
  height: 630,
};

export const ogImageContentType = 'image/png';

export function createOgImageResponse() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #0f2544 0%, #1a365d 45%, #2c5282 100%)',
          color: '#ffffff',
          padding: '56px 64px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: '0.04em',
              color: '#b4975a',
            }}
          >
            HeyBerkshireHomes.com
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 22,
              fontWeight: 600,
              color: '#faf9f6',
              opacity: 0.92,
            }}
          >
            Berkshire Hathaway HomeServices Nevada
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              maxWidth: 980,
            }}
          >
            Ask Dr. Jan
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 40,
              fontWeight: 600,
              lineHeight: 1.15,
              color: '#faf9f6',
              maxWidth: 980,
            }}
          >
            Las Vegas Real Estate Expert
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 28,
              lineHeight: 1.35,
              color: '#d9e2ec',
              maxWidth: 920,
            }}
          >
            Luxury homes, 55+ communities, new construction, and investment properties
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', gap: 18 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '14px 22px',
                borderRadius: 999,
                background: 'rgba(180, 151, 90, 0.18)',
                border: '2px solid rgba(180, 151, 90, 0.55)',
                color: '#f7e8c8',
                fontSize: 24,
                fontWeight: 700,
              }}
            >
              35+ Years
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '14px 22px',
                borderRadius: 999,
                background: 'rgba(180, 151, 90, 0.18)',
                border: '2px solid rgba(180, 151, 90, 0.55)',
                color: '#f7e8c8',
                fontSize: 24,
                fontWeight: 700,
              }}
            >
              $127M+ Sold
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '14px 22px',
                borderRadius: 999,
                background: 'rgba(180, 151, 90, 0.18)',
                border: '2px solid rgba(180, 151, 90, 0.55)',
                color: '#f7e8c8',
                fontSize: 24,
                fontWeight: 700,
              }}
            >
              500+ Families
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 22,
              fontWeight: 600,
              color: '#b4975a',
            }}
          >
            License S.0197614.LLC
          </div>
        </div>
      </div>
    ),
    {
      ...ogImageSize,
    },
  );
}
