import React from 'react'
import ShowcaseSection from './MainSections/ShowcaseSection'
import './Main.css'
import LogosSection from './MainSections/LogosSection'
import FeaturesSection from './MainSections/FeaturesSection'
import AboutcompanySection from './MainSections/AboutcompanySection';
import ServicesSection from './MainSections/ServicesSection'
import ChooseUsSection from './MainSections/ChooseUsSection'
import ProjectCaseSection from './MainSections/ProjectCaseSection'
import MeetOurSection from './MainSections/MeetOurSection'
import ArticleNewsSection from './MainSections/ArticleNewsSection'
import NewsLetterSection from './MainSections/NewsLetterSection'


const Main = () => {
  return (
    <>
      <ShowcaseSection/>
      <LogosSection/>
      <FeaturesSection/>
      <AboutcompanySection/>
      <ServicesSection/>
      <ChooseUsSection/>
      <ProjectCaseSection/>
      <MeetOurSection/>
      <ArticleNewsSection/>
      <NewsLetterSection/>

    </>
    
  )
}

export default Main