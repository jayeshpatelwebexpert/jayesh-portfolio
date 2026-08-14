import Header from "../components/header";
import ServiceHero from "../components/servicehero";
import CTA from "../components/cta";
import ServicesSection from "../components/servicessection";
import Process from "../components/process";
import State from "../components/state";
import Footer from "../components/footer";

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