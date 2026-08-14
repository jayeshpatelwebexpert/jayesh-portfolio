import Header from "../components/Header";
import ServiceHero from "../components/ServiceHero";
import CTA from "../components/cta";
import ServicesSection from "../components/ServicesSection";
import Process from "../components/Process";
import State from "../components/State";
import Footer from "../components/Footer";

function Services() {
  return (
    <>
      <Header />
      <ServiceHero />
      <ServicesSection />
      <Process />
      <State />
      <CTA />
      <Footer />
    </>
  );
}

export default Services;