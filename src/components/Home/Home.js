import React from "react";
import Footer from "../common/Footer/Footer";
import Menu from "../common/Menu/Menu";
import Gallery from "./Gallery";
import Team from "../common/Team/Team";
import Feature from "./Feature";
import Testimonial from "../common/Testimonial/Testimonial";
import Brands from "../common/Brands/Brands";
import LastedBlog from "./LastedBlog";
import FullScreenBtn from "../common/FullScreenBtn";
import TopAbout from "./TopAbout";
import TopCtaArea from "./TopCtaArea";
import TopFooter from "../common/TopFooter/TopFooter";
import SliderHomeThree from "../HomeThree/SliderHomeThree";
import Services from "../HomeTwo/Services";
import FooterThree from "../common/Footer/FooterThree";

const Home = () => {
  return (
    <>
      <Menu />
      <SliderHomeThree />
      <TopAbout />
      <TopCtaArea />
      <Services />
      
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
