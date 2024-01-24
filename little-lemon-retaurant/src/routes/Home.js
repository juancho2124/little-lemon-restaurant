import React from "react";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Specials />
      <Testimonials />
      <AboutSection />
      <Footer />
    </>
  );
};

export default Home;
