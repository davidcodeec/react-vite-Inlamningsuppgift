import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ContactMain from '../components/Main/ContactMainSection/ContactMain'
import AutoScrollToTop from '../components/Generics/MainGenerics/AutoScrollToTop'
import ScrollToTop from '../components/Generics/MainGenerics/ScrollToTop'


const Contacts = () => {

  return (
    <div>
      <AutoScrollToTop/>
      <Header/>
       <ContactMain/>
       <Footer/>
       <ScrollToTop/>
    </div>
  )
}

export default Contacts