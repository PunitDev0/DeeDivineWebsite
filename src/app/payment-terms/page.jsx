import React from "react";
import PaymentTermsContent from "@/components/payment/PaymentTermsContent";

export const metadata = {
  title: "Payment & Booking Terms | Dee Divine Propinfra",
  description:
    "Transparent explanation of Expression of Interest (EOI), booking tokens, consultation charges, and transaction rules for Dee Divine Propinfra Pvt. Ltd.",
  openGraph: {
    title: "Payment & Booking Terms | Dee Divine Propinfra",
    description:
      "Official Payment and Booking terms for Dee Divine Propinfra Pvt. Ltd. Details on payment categories, currency, and transaction guidelines.",
  },
};

export default function PaymentTermsPage() {
  return <PaymentTermsContent />;
}
