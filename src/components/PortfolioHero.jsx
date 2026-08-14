import { Link } from "react-router-dom";

const portfolioHeroData = {
  title: "Featured Projects",

  description:
    "Explore a collection of projects that showcase my expertise in web design, development, and eCommerce solutions. Each project reflects my commitment to delivering high-quality, responsive, and performance-driven digital experiences.",

  buttons: [
    {
      text: "Let's build",
      type: "internal",
      link: "/contact",
    },
    {
      text: "Portfolio",
      type: "internal",
      link: "/portfolio",
    },
    {
      text: "Download CV",
      type: "external",
      link: "assets/jayeshchandra-developer.pdf",
    },
  ],
};

function PortfolioHero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-card">
          <div className="hero-box">

            <h1>{portfolioHeroData.title}</h1>

            <p>{portfolioHeroData.description}</p>

            {portfolioHeroData.buttons.map((button, index) => (
              button.type === "internal" ? (
                <Link
                  to={button.link}
                  key={index}
                >
                  {button.text}
                </Link>
              ) : (
                <a
                  href={`${import.meta.env.BASE_URL}${button.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  {button.text}
                </a>
              )
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioHero;