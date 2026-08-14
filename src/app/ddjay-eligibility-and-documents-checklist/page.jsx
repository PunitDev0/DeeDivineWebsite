import React from "react";
import DDJAYEligibilityContent from "@/components/ddjay/DDJAYEligibilityContent";

export const metadata = {
  title: "DDJAY Eligibility & Documents Required — Full Checklist",
  description:
    "Check DDJAY eligibility criteria, income limits for EWS/LIG/MIG, NRI rules, and the full list of documents required for plot registration.",
  openGraph: {
    title: "DDJAY Eligibility & Documents Required — Full Checklist",
    description:
      "Check DDJAY eligibility criteria, income limits for EWS/LIG/MIG, NRI rules, and the full list of documents required for plot registration.",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "DDJAY Eligibility & Documents Required — Full Checklist",
    description:
      "Check DDJAY eligibility criteria, income limits for EWS/LIG/MIG, NRI rules, and the full list of documents required for plot registration.",
  },
};

export default function DDJAYEligibilityPage() {
  return <DDJAYEligibilityContent />;
}
