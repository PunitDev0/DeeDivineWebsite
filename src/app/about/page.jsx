import AboutUs from '@/components/about/about'
import React from 'react'

export const metadata = {
  title: "About Us | Dee Divine Propinfra",
  description: "Learn about Dee Divine Propinfra, premier real estate consultants in Delhi NCR & Gurgaon providing trusted property solutions.",
  alternates: {
    canonical: "/about",
  },
};

function page() {
  return (
    <div>
        <AboutUs/>
    </div>
  )
}

export default page