import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactTitle from "../components/ContactTitle";
import ContactInformation from "../components/ContactInformation";
import CTA from "../components/cta";

function Contact() {
  return (
    <>
      <Header />
      <ContactTitle />
      <ContactInformation />
      <CTA />
      <Footer />
    </>
  );
}

export default Contact;