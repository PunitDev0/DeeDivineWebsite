import React from 'react'
import Navbar from './navbar'
import HeroSection from './hero-section'
import StatsSection from './stats-section'
import FeaturedProperty from './featured-properties'
import FeatureSections from './featured-section'
import OngoingProject from './ongoing-project'

import TestimonialsSection from './testimonials'
import PrimeLocations from './PrimeLocations'
import FeaturedEvents from './featured-events'
import OurServices from './our-services'
import AnimatedWave from './animated-wave-top'
import AnimatedWave2 from './animated-wave-bottom'

function HeroPage() {
  return (
    <div className=''>
        <HeroSection/>
        <StatsSection/>
        <FeaturedProperty/>
        <FeatureSections/>
        {/* <OngoingProject/> */}
        <PrimeLocations/>
        <OurServices/>  
        <AnimatedWave/>
        <FeaturedEvents/> 
        <AnimatedWave2/>
        <TestimonialsSection/>
    </div>
  )
}

export default HeroPage