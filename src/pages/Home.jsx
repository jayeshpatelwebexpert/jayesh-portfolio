import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import State from "../components/State";
import AboutSection from "../components/AboutSection";
import Industries from "../components/Industries";
import ServicesSection from "../components/ServicesSection";
import Expertise from "../components/Expertise";
import FeaturedWork from "../components/FeaturedWork";
import Experience from "../components/Experience";
import WhyWork from "../components/WhyWork";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return ( 
    <>
      <Header />
      <Hero />
      <State />
      <AboutSection />   
      <Industries />  
      <ServicesSection />
      <Expertise />
      <FeaturedWork />
      <Experience />
      <WhyWork />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;