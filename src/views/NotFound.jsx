import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
       404 Page Not Found
      <Link className="btn-yellow" to="/">Learn More<i className="fa-solid fa-arrow-up-right"></i>Back to Home Page</Link>
    </div>
  )
}

export default NotFound