import React from 'react'
import ShowcaseSection from './HomeMainSections/ShowcaseSection'
import LogosSection from './HomeMainSections/LogosSection'
import FeaturesSection from './HomeMainSections/FeaturesSection'
import AboutcompanySection from './HomeMainSections/AboutcompanySection';
import ServicesSection from './HomeMainSections/ServicesSection'
import ChooseUsSection from './HomeMainSections/ChooseUsSection'
import ProjectCaseSection from './HomeMainSections/ProjectCaseSection'
import MeetOurSection from './HomeMainSections/MeetOurSection'
import ArticleNewsSection from './HomeMainSections/ArticleNewsSection'
import NewsLetterSection from './HomeMainSections/NewsLetterSection'
import AutoScrollToTop from '../Generics/MainGenerics/AutoScrollToTop';
import ScrollToTop from '../Generics/MainGenerics/ScrollToTop';
import '../../../index.css'; 


const Main = () => {
 
  return (
    <main>
      <AutoScrollToTop/>
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
      <ScrollToTop/>
    </main>
    
  )
}

export default Main
