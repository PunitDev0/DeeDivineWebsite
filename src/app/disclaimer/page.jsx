import React from "react";
import DisclaimerContent from "@/components/disclaimer/DisclaimerContent";

export const metadata = {
  title: "Disclaimer | Dee Divine Propinfra",
  description:
    "Official Disclaimer and property information notice for Dee Divine Propinfra website. Read terms on property details, prices, investment disclaimers, RERA approvals, and user responsibilities.",
  openGraph: {
    title: "Disclaimer | Dee Divine Propinfra",
    description:
      "Official website disclaimer for Dee Divine Propinfra. Property details, pricing disclaimers, investment notices, and regulatory guidelines.",
  },
};

export default function DisclaimerPage() {
  return <DisclaimerContent />;
}
