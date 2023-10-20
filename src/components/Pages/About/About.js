import React from "react";
import Brands from "../../common/Brands/Brands";
import FooterThree from "../../common/Footer/FooterThree";
import Menu from "../../common/Menu/Menu";
import Testimonial from "../../common/Testimonial/Testimonial";
import Services from "../../HomeTwo/Services";
import AboutBanner from "./AboutBanner";
import AboutCompany from "./AboutCompany";
import AboutFeature from "./AboutFeature";
import ContactWithTeam from "../TeamDetails/ContactWithTeam";
import Contact from "../../common/Contact/Contact";

const About = () => {
  return (
    <>
      <Menu header_style_1={true} />
      <AboutBanner />
      <AboutCompany />
      <Services />
      <AboutFeature />
      <Testimonial />
      <Contact />
      <FooterThree />
    </>
  );
};

export default About;
