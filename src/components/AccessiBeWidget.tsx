"use client";

import Script from "next/script";

export function AccessiBeWidget() {
  return (
    <Script
      id="accessibe-widget"
      src="https://acsbapp.com/apps/app/dist/js/app.js"
      strategy="afterInteractive"
      onLoad={() => {
        // @ts-expect-error - acsbJS is loaded by the external script
        if (typeof acsbJS !== "undefined") {
          // @ts-expect-error - acsbJS is loaded by the external script
          acsbJS.init({
            statementLink: "",
            footerHtml: "",
            hideMobile: false,
            hideTrigger: false,
            disableBgProcess: false,
            language: "en",
            position: "right",
            leadColor: "#664e75",
            triggerColor: "#664e75",
            triggerRadius: "50%",
            triggerPositionX: "right",
            triggerPositionY: "bottom",
            triggerIcon: "people",
            triggerSize: "medium",
            triggerOffsetX: 20,
            triggerOffsetY: 20,
          });
        }
      }}
    />
  );
}
