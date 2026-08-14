import React from "react";
import VasstaConsultancyContent from "@/components/services/VasstaConsultancyContent";

export const metadata = {
  title: "Vassta Consultancy | Property Investment & Real Estate Advisory",
  description:
    "Get expert property investment guidance with Vassta Consultancy. Explore residential, commercial and land investment opportunities with informed advice.",
  openGraph: {
    title: "Vassta Consultancy | Property Investment & Real Estate Advisory",
    description:
      "Get expert property investment guidance with Vassta Consultancy. Explore residential, commercial and land investment opportunities with informed advice.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Vassta Consultancy | Property Investment & Real Estate Advisory",
    description:
      "Get expert property investment guidance with Vassta Consultancy. Explore residential, commercial and land investment opportunities with informed advice.",
  },
};

export default function VasstaConsultancyPage() {
  return <VasstaConsultancyContent />;
}
