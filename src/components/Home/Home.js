import React from "react";
import Menu from "../common/Menu/Menu";
import Feature from "./Feature";
import Testimonial from "../common/Testimonial/Testimonial";
import Brands from "../common/Brands/Brands";
import LastedBlog from "./LastedBlog";
import FullScreenBtn from "../common/FullScreenBtn";
import TopAbout from "./TopAbout";
import TopCtaArea from "./TopCtaArea";
import SliderHome from "./HomeSlider";
import ServicesHome from "./Service";
import FooterThree from "../common/Footer/FooterThree";

const Home = () => {
  return (
    <>
      <Menu />
      <SliderHome />
      <TopAbout />
      <TopCtaArea />
      <ServicesHome />
      
      <Feature />
      <Testimonial />
      <Brands />
      <LastedBlog />
      <FullScreenBtn />
      <FooterThree />
    </>
  );
};

export default Home;
