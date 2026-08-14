import Header from "../components/Header";
import PortfolioHero from "../components/PortfolioHero";
import PortfolioList from "../components/PortfolioList";
import Process from "../components/Process";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Portfolio() {
  return (
    <>
        <Header />
        <PortfolioHero />
        <PortfolioList />
        <Process />
        <CTA/>
        <Footer />
    </>
  );
}

export default Portfolio;