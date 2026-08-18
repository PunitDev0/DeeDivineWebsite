import React from "react";
import DDJAYGuideContent from "@/components/ddjay/DDJAYGuideContent";

export const metadata = {
  title: "What is Deen Dayal Jan Awas Yojna? DDJAY Guide 2026-27",
  description:
    "Confused about DDJAY? Learn what Deen Dayal Jan Awas Yojna is, eligibility, registration process, documents, and how to verify plot authenticity.",
  alternates: {
    canonical: "/what-is-deen-dayal-jan-awas-yojna-ddjay-guide",
  },
  openGraph: {
    title: "What is Deen Dayal Jan Awas Yojna? DDJAY Guide 2026-27",
    description:
      "Confused about DDJAY? Learn what Deen Dayal Jan Awas Yojna is, eligibility, registration process, documents, and how to verify plot authenticity.",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "What is Deen Dayal Jan Awas Yojna? DDJAY Guide 2026-27",
    description:
      "Confused about DDJAY? Learn what Deen Dayal Jan Awas Yojna is, eligibility, registration process, documents, and how to verify plot authenticity.",
  },
};

export default function DDJAYGuidePage() {
  return <DDJAYGuideContent />;
}
