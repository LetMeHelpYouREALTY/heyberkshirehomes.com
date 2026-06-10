import { siteDetails } from '@/data/siteDetails';

interface RealScoutHomeValueProps {
  agentEncodedId?: string;
  includeName?: boolean;
  includePhone?: boolean;
  className?: string;
}

/**
 * RealScout Home Value Widget
 * Displays home valuation tool on pages
 */
export default function RealScoutHomeValue({
  agentEncodedId,
  includeName = true,
  includePhone = true,
  className = '',
}: RealScoutHomeValueProps) {
  const agentId = agentEncodedId || siteDetails.agent.realscoutAgentId;
  const attributes: string[] = [`agent-encoded-id="${agentId}"`];

  if (includeName) {
    attributes.push('include-name');
  }

  if (includePhone) {
    attributes.push('include-phone');
  }

  const attributesString = attributes.join(' ');

  return (
    <div
      className={`realscout-home-value-widget ${className}`}
      dangerouslySetInnerHTML={{
        __html: `<realscout-home-value ${attributesString}></realscout-home-value>`,
      }}
    />
  );
}
