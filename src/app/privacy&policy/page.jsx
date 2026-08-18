import React from "react";
import PrivacyPolicyContent from "@/components/privacy/PrivacyPolicyContent";

export const metadata = {
  title: "Privacy Policy | Dee Divine Propinfra",
  description:
    "Official Privacy Policy of Dee Divine Propinfra. Learn how we collect, use, protect, and handle your information.",
  alternates: {
    canonical: "/privacy&policy",
  },
};

export default function PrivacyAndPolicyPage() {
  return <PrivacyPolicyContent />;
}