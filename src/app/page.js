import HeroPage from '@/components/hero-page/hero-page'
import React from 'react'

export const metadata = {
  title: "Trusted Real Estate Consultants in Delhi NCR | Dee Divine Propinfra",
  description:
    "Dee Divine Propinfra offers trusted real estate consulting in Delhi NCR & Gurgaon- RERA approved plots, verified listings & expert guidance. Book a consultation today.",
  alternates: {
    canonical: "/",
  },
};

function page() {
  return (
    <div>
      <HeroPage />
    </div>
  )
}

export default page