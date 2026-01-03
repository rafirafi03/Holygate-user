import AboutHeroSection from '@/components/userComponents/about/AboutHeroSection'
import FAQSection from '@/components/userComponents/about/FAQSection'
import LeadershipTeamSection from '@/components/userComponents/about/LeadershipTeamSection'
import VisionMissionSection from '@/components/userComponents/about/VisionMissionSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <AboutHeroSection/>
      <VisionMissionSection/>
      <FAQSection/>
      <LeadershipTeamSection/>
    </div>
  )
}

export default page
