
import React from 'react'
import HeroSection from './HeroSection'
import WhyChooseUsSection from './WhyChoose'
import AboutInstitute from './AboutInstitute'
import TestimonialsSection from './Testimonial'
import CoursesCarousel from './Carousel'

const Home = () => {
  return (
    <div className=''>
        <HeroSection/>
        <CoursesCarousel/>
        
        {/* <AboutInstitute/> */}
        <WhyChooseUsSection/>
        <TestimonialsSection/>

     
    </div>
  )
}

export default Home

 
 
 
 
 
//  const Home = () => <div className="pt-20 text-center"><h1>Home Page</h1><p>Scroll down to see navbar color change!</p><div style={{ height: '1500px' }}></div></div>; // Added height for scrolling
