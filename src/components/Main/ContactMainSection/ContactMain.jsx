import React from 'react'
import ContactSection from './ContactSection'
import ContactMenuSection from './ContactMenuSection'
import MessageSection from './MessageSection'
import MapSection from './MapSection'
import ScrollToTop from '../../Generics/MainGenerics/ScrollToTop';

const ContactMain = () => {

  return (
    <>
       <ContactSection/> 
       <ContactMenuSection/>
       <MessageSection/>
       <MapSection/>
       <ScrollToTop/>
    </>
  )
}

export default ContactMain