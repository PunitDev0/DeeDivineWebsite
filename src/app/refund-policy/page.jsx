import React from "react";
import RefundPolicyContent from "@/components/refund/RefundPolicyContent";

export const metadata = {
  title: "Refund & Cancellation Policy | Dee Divine Propinfra",
  description:
    "Official Refund & Cancellation Policy of Dee Divine Propinfra Pvt. Ltd. detailing cancellation timelines, eligibility stages, and 5-7 business days refund process.",
  openGraph: {
    title: "Refund & Cancellation Policy | Dee Divine Propinfra",
    description:
      "Official website refund policy for Dee Divine Propinfra Pvt. Ltd. Details on EOI cancellation, booking refund timeline, and accounts support.",
  },
};

export default function RefundPolicyPage() {
  return <RefundPolicyContent />;
}
