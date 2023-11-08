import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NewsDetailsMainSection from "../components/Main/NewsDetailsMainSection/NewsDetailsMainSection";
import AutoScrollToTop from "../components/Generics/MainGenerics/AutoScrollToTop";
import ScrollToTop from "../components/Generics/MainGenerics/ScrollToTop";

const NewsDetails = () => {
  return (
    <div>
      <AutoScrollToTop />
      <Header />
      <NewsDetailsMainSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default NewsDetails;
