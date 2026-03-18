"use client";
import Script from "next/script";

// Change the Script ID to your own Google Analytics ID
const Analytics = () => (
  <>
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-SF0B0MG3DZ"
      strategy="afterInteractive"
    />
    <Script id="ga-init" strategy="afterInteractive">
      {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-SF0B0MG3DZ');
            `}
    </Script>
  </>
);

export default Analytics;
