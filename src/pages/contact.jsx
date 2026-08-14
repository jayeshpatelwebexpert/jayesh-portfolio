import Header from "../components/header";
import Footer from "../components/footer";
import ContactTitle from "../components/contacttitle";
import ContactInformation from "../components/contactInformation";
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