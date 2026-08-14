import React from "react";
import PrivacyPolicyContent from "@/components/privacy/PrivacyPolicyContent";

export const metadata = {
  title: "Privacy Policy | Dee Divine Propinfra",
  description:
    "Official Privacy Policy of Dee Divine Propinfra. Learn how we collect, use, protect, and handle your information when using our website and property services.",
  openGraph: {
    title: "Privacy Policy | Dee Divine Propinfra",
    description:
      "Official website privacy policy for Dee Divine Propinfra. Details on data collection, property enquiries, cookies, technical data, and user choices.",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
