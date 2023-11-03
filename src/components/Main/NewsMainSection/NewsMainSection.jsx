import React from 'react'
import NewsContactSection from './NewsContactSection'
import ArticleNewsMainSection from './ArticleNewsMainSection'
import NewsNewsLetterSection from './NewsNewsLetterSection'
import AutoScrollToTop from '../../Generics/MainGenerics/AutoScrollToTop'
import ScrollToTop from '../../Generics/MainGenerics/ScrollToTop'

const NewsMainSection = () => {
  return (
    <>
        <AutoScrollToTop/>
        <NewsContactSection/>
       <ArticleNewsMainSection/>
      <NewsNewsLetterSection/>
      <ScrollToTop/>
    </>
  )
}

export default NewsMainSection