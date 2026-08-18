import React from "react";
import DDJAYLoanContent from "@/components/ddjay/DDJAYLoanContent";

export const metadata = {
  title: "DDJAY Loan & Financing Guide: How to Fund Your Plot",
  description:
    "Is loan available for DDJAY plots? Learn about SBI, HDFC financing, payment plans, LTV ratio, and down payment for Deen Dayal Jan Awas Yojna.",
  alternates: {
    canonical: "/ddjay-loan-financing-guide",
  },
  openGraph: {
    title: "DDJAY Loan & Financing Guide: How to Fund Your Plot",
    description:
      "Is loan available for DDJAY plots? Learn about SBI, HDFC financing, payment plans, LTV ratio, and down payment for Deen Dayal Jan Awas Yojna.",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "DDJAY Loan & Financing Guide: How to Fund Your Plot",
    description:
      "Is loan available for DDJAY plots? Learn about SBI, HDFC financing, payment plans, LTV ratio, and down payment for Deen Dayal Jan Awas Yojna.",
  },
};

export default function DDJAYLoanPage() {
  return <DDJAYLoanContent />;
}
