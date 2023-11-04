import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import NewsMainSection from '../components/Main/NewsMainSection/NewsMainSection'
import AutoScrollToTop from '../components/Generics/MainGenerics/AutoScrollToTop'
import ScrollToTop from '../components/Generics/MainGenerics/ScrollToTop'


const News = () => {
  return (
    <div>
      <AutoScrollToTop/>
      <Header/>
      <NewsMainSection/>
      <Footer/>
      <ScrollToTop/>
    </div>
  )
}

export default News