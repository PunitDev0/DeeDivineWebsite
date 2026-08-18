import React from "react";
import TermsConditionsContent from "@/components/terms/TermsConditionsContent";

export const metadata = {
  title: "Terms & Conditions | Dee Divine Propinfra",
  description:
    "Official Terms & Conditions governing access to and use of the Dee Divine Propinfra website.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return <TermsConditionsContent />;
}
