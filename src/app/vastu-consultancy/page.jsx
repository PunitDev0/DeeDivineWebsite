import React from "react";
import VastuConsultancyContent from "@/components/services/VastuConsultancyContent";

export const metadata = {
  title: "Vastu Consultancy | Property Investment & Real Estate Advisory",
  description:
    "Get expert property investment guidance with Vastu Consultancy. Explore residential, commercial and land investment opportunities with informed advice.",
  alternates: {
    canonical: "/vastu-consultancy",
  },
  openGraph: {
    title: "Vastu Consultancy | Property Investment & Real Estate Advisory",
    description:
      "Get expert property investment guidance with Vastu Consultancy. Explore residential, commercial and land investment opportunities with informed advice.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Vastu Consultancy | Property Investment & Real Estate Advisory",
    description:
      "Get expert property investment guidance with Vastu Consultancy. Explore residential, commercial and land investment opportunities with informed advice.",
  },
};

export default function VastuConsultancyPage() {
  return <VastuConsultancyContent />;
}
