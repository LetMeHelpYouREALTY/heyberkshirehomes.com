import { siteDetails } from '@/data/siteDetails';

export interface RealScoutWidgetProps {
  widgetId?: string;
  filters?: Record<string, string | number | boolean>;
  className?: string;
  agentEncodedId?: string;
  priceMin?: number;
  priceMax?: number;
  community?: string;
}

/**
 * RealScout office listings widget using the official web component.
 * Script is loaded once globally in layout.tsx via next/script.
 */
export default function RealScoutWidget({
  widgetId,
  filters,
  className = '',
  agentEncodedId,
  priceMin,
  priceMax,
}: RealScoutWidgetProps) {
  const agentId = agentEncodedId || siteDetails.agent.realscoutAgentId;

  const widgetAttributes: Record<string, string> = {
    'agent-encoded-id': agentId,
  };

  if (priceMin !== undefined) {
    widgetAttributes['price-min'] = priceMin.toString();
  }
  if (priceMax !== undefined) {
    widgetAttributes['price-max'] = priceMax.toString();
  }

  if (filters) {
    if (filters.priceMin) widgetAttributes['price-min'] = String(filters.priceMin);
    if (filters.priceMax) widgetAttributes['price-max'] = String(filters.priceMax);
  }

  const attributesString = Object.entries(widgetAttributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  return (
    <div
      id={widgetId || 'realscout-widget'}
      className={`realscout-widget ${className}`}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: `<realscout-office-listings ${attributesString}></realscout-office-listings>`,
        }}
      />
    </div>
  );
}
