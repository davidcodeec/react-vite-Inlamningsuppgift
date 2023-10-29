import React from 'react'
import icon_1 from '../../../assets/images/icon1.svg'
import icon_2 from '../../../assets/images/icon2.svg'
import icon_3 from '../../../assets/images/icon3.svg'
import icon_4 from '../../../assets/images/icon4.svg'
import icon_5 from '../../../assets/images/icon5.svg'


const LogosSection = () => {
  return (
    <section className="logos">
      <div className="container">
        <div className="logo-content">
          <img src={icon_1} alt=''/>
          <img src={icon_2} alt=''/>
          <img src={icon_3} alt=''/>
          <img src={icon_4} alt=''/>
          <img src={icon_5} alt=''/>

        </div>
     </div>
    </section>
  )
}

export default LogosSection