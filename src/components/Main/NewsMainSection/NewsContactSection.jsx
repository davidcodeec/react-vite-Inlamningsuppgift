import React from 'react'
import { NavLink } from 'react-router-dom'

const NewsContactSection = () => {
  return (
    <>
          <section className="contact-section">

                    <div className="container">
                    <div className="content">
                        <nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/news">News</NavLink>
                        </nav>
                        <h2>News & Articles</h2>
                    </div>
            </div>
        </section>

    </>
  )
}

export default NewsContactSection