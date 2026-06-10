import { siteDetails } from '@/data/siteDetails';

interface RealScoutAdvancedSearchProps {
  agentEncodedId?: string;
  className?: string;
}

/**
 * RealScout Advanced Search Widget
 * Displays advanced property search form on pages
 */
export default function RealScoutAdvancedSearch({
  agentEncodedId,
  className = '',
}: RealScoutAdvancedSearchProps) {
  const agentId = agentEncodedId || siteDetails.agent.realscoutAgentId;

  const attributesString = `agent-encoded-id="${agentId}"`;

  return (
    <div
      className={`realscout-advanced-search-widget ${className}`}
      dangerouslySetInnerHTML={{
        __html: `<realscout-advanced-search ${attributesString}></realscout-advanced-search>`,
      }}
    />
  );
}
