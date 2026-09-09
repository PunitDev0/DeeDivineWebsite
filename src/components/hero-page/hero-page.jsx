import React from 'react'
import Navbar from './navbar'
import HeroSection from './hero-section'
import DdjayResidentialProjects from './ddjay-residential-projects'
import StatsSection from './stats-section'
import FeatureSections from './featured-section'
import OngoingProject from './ongoing-project'

import TestimonialsSection from './testimonials'
import PrimeLocations from './PrimeLocations'
import OurServices from './our-services'
import FAQAccordion from './faq-accordion'
import AnimatedWave from './animated-wave-top'
import AnimatedWave2 from './animated-wave-bottom'
import HomeBlogSection from './home-blog-section'

function HeroPage() {
  return (
    <div className='overflow-x-hidden'>
       <div className='sm:px-5 px-2'>
       <HeroSection/>
       </div>
        <StatsSection/>
        <DdjayResidentialProjects />
        <FeatureSections/>
        {/* <OngoingProject/> */}
        <PrimeLocations/>
        <OurServices/>  
        {/* <AnimatedWave/> */}
        <TestimonialsSection/>
        <HomeBlogSection />
        <FAQAccordion />
        {/* <AnimatedWave2/> */}
    </div>
  )
}

export default HeroPage