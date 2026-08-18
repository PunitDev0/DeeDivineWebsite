import React from "react";
import TermsConditionsContent from "@/components/terms/TermsConditionsContent";

export const metadata = {
  title: "Terms & Conditions | Dee Divine Propinfra",
  description:
    "Official Terms & Conditions governing access to and use of the Dee Divine Propinfra website, real estate listings, enquiries, and services.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms & Conditions | Dee Divine Propinfra",
    description:
      "Official website terms & conditions for Dee Divine Propinfra. Rules on property enquiries, services, intellectual property, prohibited activities, and governing law.",
  },
};

export default function TermsPage() {
  return <TermsConditionsContent />;
}
