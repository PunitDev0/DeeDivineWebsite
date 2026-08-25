import HeroPage from '@/components/hero-page/hero-page'
import React from 'react'

export const metadata = {
  title: "Dee Divine Propinfra | Real Estate Company in Gurgaon",
  description:
    "Dee Divine Propinfra is a trusted real estate company in Gurgaon offering residential and commercial properties, plots, DDJAY plots and property investment solutions across Gurgaon and Delhi NCR.",
  alternates: {
    canonical: "/",
  },
};

const mainPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": "https://deedivinepropinfra.com/#realestateagent",
      "name": "Dee Divine Propinfra Pvt. Ltd.",
      "url": "https://deedivinepropinfra.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://deedivinepropinfra.com/assets/heroslide2.webp"
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://deedivinepropinfra.com/assets/heroslide2.webp"
      },
      "description": "Dee Divine Propinfra Pvt. Ltd. is a real estate consultancy serving Gurgaon and Delhi NCR, offering residential and commercial property, plots, DDJAY plots, property investment and real estate advisory services.",
      "telephone": "+91-9211496111",
      "email": "info@deedivinepropinfra.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "M3M Broadway, 22nd Floor, D Block, Sector 71, SPR Road",
        "addressLocality": "Gurugram",
        "addressRegion": "Haryana",
        "postalCode": "122001",
        "addressCountry": "IN"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Gurugram"
        },
        {
          "@type": "Place",
          "name": "Delhi NCR"
        },
        {
          "@type": "State",
          "name": "Haryana"
        }
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "10:00",
          "closes": "19:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "125"
      },
      "knowsAbout": [
        "Real Estate Investment in Gurgaon",
        "Property Investment in Gurgaon",
        "Residential Property in Gurgaon",
        "Commercial Property in Gurgaon",
        "DDJAY Plots in Gurgaon",
        "Deen Dayal Jan Awas Yojna",
        "Real Estate Consultancy",
        "Property Buying in Gurgaon",
        "Gurgaon Real Estate Market",
        "Plotted Development in Gurgaon",
        "HARERA Property Verification",
        "Dwarka Expressway Property",
        "New Gurgaon Property",
        "Sohna Road Property"
      ],
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61572325678798",
        "https://www.instagram.com/dee_divine_propinfra/",
        "https://www.linkedin.com/company/107218117/admin/dashboard"
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://deedivinepropinfra.com/#organization",
      "name": "Dee Divine Propinfra Pvt. Ltd.",
      "url": "https://deedivinepropinfra.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://deedivinepropinfra.com/assets/heroslide2.webp"
      },
      "telephone": "+91-9211496111",
      "email": "info@deedivinepropinfra.com",
      "parentOrganization": {
        "@id": "https://deedivinepropinfra.com/#realestateagent"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://deedivinepropinfra.com/#website",
      "url": "https://deedivinepropinfra.com/",
      "name": "Dee Divine Propinfra",
      "publisher": {
        "@id": "https://deedivinepropinfra.com/#realestateagent"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://deedivinepropinfra.com/#webpage",
      "url": "https://deedivinepropinfra.com/",
      "name": "Dee Divine Propinfra | Real Estate Company in Gurgaon",
      "description": "Dee Divine Propinfra is a trusted real estate company in Gurgaon offering residential and commercial properties, plots, DDJAY plots and property investment solutions across Gurgaon and Delhi NCR.",
      "isPartOf": {
        "@id": "https://deedivinepropinfra.com/#website"
      },
      "about": {
        "@id": "https://deedivinepropinfra.com/#realestateagent"
      },
      "publisher": {
        "@id": "https://deedivinepropinfra.com/#organization"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://deedivinepropinfra.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://deedivinepropinfra.com/"
        }
      ]
    }
  ]
};

function page() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mainPageSchema) }}
      />
      <HeroPage />
    </div>
  )
}

export default page