import { Link } from "react-router-dom";

function PortfolioHero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-card">
          <div className="hero-box">

            <h1>Featured Projects</h1> 

            <p>
              Explore a collection of projects that showcase my expertise in
              web design, development, and eCommerce solutions. Each project
              reflects my commitment to delivering high-quality, responsive,
              and performance-driven digital experiences.
            </p>

            <Link to="/contact">
              Let's build
            </Link>

            <Link to="/portfolio">
              Portfolio
            </Link>

            <a
              href="/assets/jayeshchandra-developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioHero;