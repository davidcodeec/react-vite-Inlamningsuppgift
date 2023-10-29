import React from 'react'
import LogoImageText from './FooterSection/LogoImageText'
import FooterText from './FooterSection/FooterText'
import FooterSocialMedia from './FooterSection/FooterSocialMedia'
import './Footer.css';


const Footer = () => {
  return (
    <footer>
    <section className='footer-section'>
      <div className='container'>
          <div  className='logo-image-text'>
            <div>
               <LogoImageText/>
            </div>
            <div>
                <FooterText/>
                
            </div>
          </div>
          <FooterSocialMedia/>
       </div>
    </section>
  </footer>
  )
}

export default Footer