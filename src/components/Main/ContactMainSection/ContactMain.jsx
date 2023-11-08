import React from "react";
import ContactSection from "./ContactSection";
import ContactMenuSection from "./ContactMenuSection";
import MessageSection from "./MessageSection";
import MapSection from "./MapSection";
import ScrollToTop from "../../Generics/MainGenerics/ScrollToTop";
import AutoScrollToTop from "../../Generics/MainGenerics/AutoScrollToTop";

const ContactMain = () => {
  return (
    <>
      <AutoScrollToTop />
      <ContactSection />
      <ContactMenuSection />
      <MessageSection />
      <MapSection />
      <ScrollToTop />
    </>
  );
};

export default ContactMain;
