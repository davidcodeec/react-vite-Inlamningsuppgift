import React from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import AutoScrollToTop from "../components/Generics/MainGenerics/AutoScrollToTop";
import ScrollToTop from "../components/Generics/MainGenerics/ScrollToTop";
import "../../index.css";

const Home = () => {
  return (
    <>
      <AutoScrollToTop />
      <ScrollToTop />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
