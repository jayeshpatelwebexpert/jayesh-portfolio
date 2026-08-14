import { Link } from "react-router-dom";

const serviceHeroData = {
  title: "What I Do",

  description:
    "From UI/UX design to full-stack website development, I provide tailored digital solutions that help businesses establish a strong online presence, improve user experience, and achieve their goals through modern web technologies.",

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

function ServiceHero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-card">
          <div className="hero-box">

            <h1>{serviceHeroData.title}</h1>

            <p>{serviceHeroData.description}</p>

            {serviceHeroData.buttons.map((button, index) => (
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

export default ServiceHero;