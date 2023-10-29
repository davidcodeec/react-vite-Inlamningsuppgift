import React from 'react'
import { Link } from 'react-router-dom'

const FooterTextBox = ({title, link_1,link_2,link_3,link_4}) => {
  return (
    <div className="footer-text-column">
    <h3>{title}</h3>
    <Link to="">{link_1}</Link>
    <Link to="">{link_2}</Link>
    <Link to="">{link_3}</Link>
    <Link to="">{link_4}</Link>
  </div>
  )
}

export default FooterTextBox
