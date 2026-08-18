import Career from '@/components/career/career'
import React from 'react'

export const metadata = {
  title: "Careers | Dee Divine Propinfra",
  description: "Explore exciting career opportunities at Dee Divine Propinfra. Join our dynamic team of real estate experts in Gurgaon.",
  alternates: {
    canonical: "/career",
  },
};

function page() {
  return (
    <>
        <Career/>
    </>
  )
}

export default page