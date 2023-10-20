import React from "react";
import FooterThree from "../../common/Footer/FooterThree";
import Menu from "../../common/Menu/Menu";
import Testimonial from "../../common/Testimonial/Testimonial";
import AboutBanner from "./AboutBanner";
import AboutCompany from "./AboutCompany";
import AboutFeature from "./AboutFeature";
import Contact from "../../common/Contact/Contact";
import ServicesHome from "../../Home/Service";

const About = () => {
  return (
    <>
      <Menu header_style_1={true} />
      <AboutBanner />
      <AboutCompany />
      <ServicesHome />
      <AboutFeature />
      <Testimonial />
      <Contact />
      <FooterThree />
    </>
  );
};

export default About;
