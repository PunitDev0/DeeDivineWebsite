import Contact from '@/components/contact/contact'
import React from 'react'

export const metadata = {
  title: "Contact Us | Dee Divine Propinfra",
  description: "Get in touch with Dee Divine Propinfra for expert real estate consulting, property enquiries, and investment advice in Delhi NCR.",
  alternates: {
    canonical: "/contact",
  },
};

function page() {
  return (
    <div>
        <Contact/>
    </div>
  )
}

export default page