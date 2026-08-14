import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import State from "../components/State";
import AboutSection from "../components/aboutsection";
import Industries from "../components/industries";
import ServicesSection from "../components/servicessection";
import Expertise from "../components/expertise";
import FeaturedWork from "../components/featuredwork";
import Experience from "../components/experience";
import WhyWork from "../components/whywork";
import Testimonials from "../components/testimonials";
import CTA from "../components/cta";
import Footer from "../components/footer";

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