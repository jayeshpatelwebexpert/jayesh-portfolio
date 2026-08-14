import { Link } from "react-router-dom";

const heroData = {
  title:
    "UI/UX Designer & Web Developer Helping Businesses Grow Online",

  description:
    "I'm a UI/UX Designer and Web Developer specializing in creating user-centered digital experiences and high-performance websites that help businesses grow online. With expertise in Figma, WordPress, Shopify, WooCommerce, and modern front-end technologies, I transform ideas into scalable digital solutions that combine beautiful design, seamless functionality, and measurable results.",

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

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-card">
          <div className="hero-box">

            <h1>{heroData.title}</h1>

            <p>{heroData.description}</p>

            <div className="hero-buttons">
              {heroData.buttons.map((button, index) => (
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
                    rel="noreferrer"
                    key={index}
                  >
                    {button.text}
                  </a>
                )
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;