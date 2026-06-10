import Script from 'next/script';
import { siteDetails } from '@/data/siteDetails';

const FUB_PIXEL_SCRIPT = `(function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function(){(w[g].q=w[g].q||[]).push(arguments);});(w[g].ds=1*new Date());e="script";t=d.createElement(e);t.async=1;t.src=i;e=d.getElementsByTagName(e)[0];e.parentNode.insertBefore(t,e);})(window,"https://widgetbe.com/agent",document,"widgetTracker");`;

/**
 * Follow Up Boss (Widget Tracker) pixel for lead activity tracking.
 * Loads once globally via next/script per FUB installation requirements.
 */
export default function FUBPixel() {
  const trackingId = siteDetails.tracking.fubPixelId;

  if (!trackingId) {
    return null;
  }

  return (
    <>
      <Script id="fub-pixel-loader" strategy="lazyOnload">
        {FUB_PIXEL_SCRIPT}
      </Script>
      <Script id="fub-pixel-init" strategy="lazyOnload">
        {`window.widgetTracker('create', '${trackingId}'); window.widgetTracker('send', 'pageview');`}
      </Script>
    </>
  );
}
