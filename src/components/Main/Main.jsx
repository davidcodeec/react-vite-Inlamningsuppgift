import React from 'react'
import { useEffect } from 'react';
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


const Main = () => {

  // Function to scroll to the top
  function gotoTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    const toGoTop = document.querySelector('#goto-top');

    // Event listener for scrolling
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        toGoTop.classList.remove('hidden');
      } else {
        toGoTop.classList.add('hidden');
      }
    });

    // Used to clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []); // This is used as an empty dependency array to ensure the effect runs once after the component mounts

  return (
    <main>
      <button onClick={gotoTop} id="goto-top" class="hidden"><i class="fa-solid fa-arrow-up"></i></button>
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
    </main>
    
  )
}

export default Main
