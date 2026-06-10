import { siteDetails } from '@/data/siteDetails';

interface RealScoutSimpleSearchProps {
  agentEncodedId?: string;
  className?: string;
}

/**
 * RealScout Simple Search Widget
 * Displays simple property search bar on pages
 */
export default function RealScoutSimpleSearch({
  agentEncodedId,
  className = '',
}: RealScoutSimpleSearchProps) {
  const agentId = agentEncodedId || siteDetails.agent.realscoutAgentId;

  const attributesString = `agent-encoded-id="${agentId}"`;

  return (
    <div
      className={`realscout-simple-search-widget ${className}`}
      dangerouslySetInnerHTML={{
        __html: `<realscout-simple-search ${attributesString}></realscout-simple-search>`,
      }}
    />
  );
}
