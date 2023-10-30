import React from 'react'
import { useEffect } from 'react';
import ContactSection from './ContactSection'
import ContactMenuSection from './ContactMenuSection'
import MessageSection from './MessageSection'
import MapSection from './MapSection'

const ContactMain = () => {

  
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
    <>
      <button onClick={gotoTop} id="goto-top" class="hidden"><i class="fa-solid fa-arrow-up"></i></button> 
       <ContactSection/> 
       <ContactMenuSection/>
       <MessageSection/>
       <MapSection/>
    </>
  )
}

export default ContactMain