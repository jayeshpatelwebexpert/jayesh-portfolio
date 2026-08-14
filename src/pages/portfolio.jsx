import Header from "../components/header";
import PortfolioHero from "../components/portfoliohero";
import PortfolioList from "../components/portfoliolist";
import Process from "../components/process";
import CTA from "../components/cta";
import Footer from "../components/footer";

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