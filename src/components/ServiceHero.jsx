import { Link } from "react-router-dom";
 
function ServiceHero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-card">
          <div className="hero-box">

            <h1>What I Do</h1>

            <p>
              From UI/UX design to full-stack website development, I provide
              tailored digital solutions that help businesses establish a
              strong online presence, improve user experience, and achieve
              their goals through modern web technologies.
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

export default ServiceHero;