import React from 'react'
import Navbar from './navbar'
import HeroSection from './hero-section'
import StatsSection from './stats-section'
import FeatureSections from './featured-section'
import OngoingProject from './ongoing-project'

import TestimonialsSection from './testimonials'
import PrimeLocations from './PrimeLocations'
import FeaturedEvents from './featured-events'
import OurServices from './our-services'
import BuyingRoadmap from './buying-roadmap'
import FAQAccordion from './faq-accordion'
import AnimatedWave from './animated-wave-top'
import AnimatedWave2 from './animated-wave-bottom'
import HomeBlogSection from './home-blog-section'

function HeroPage() {
  return (
    <div className=''>
       <div className='sm:px-5 px-2'>
       <HeroSection/>
       </div>
        <StatsSection/>
        <FeatureSections/>
        {/* <OngoingProject/> */}
        <PrimeLocations/>
        <OurServices/>  
        <BuyingRoadmap />
        {/* <AnimatedWave/> */}
        <FeaturedEvents/> 
        <HomeBlogSection />
        <FAQAccordion />
        {/* <AnimatedWave2/> */}
        <TestimonialsSection/>
    </div>
  )
}

export default HeroPage