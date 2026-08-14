import { Link } from "react-router-dom";

const aboutData = {
  label: "About Me",

  title: "Bridging Design and Development",

  description:
    "I help businesses create impactful digital experiences through UI/UX design and web development. With expertise in WordPress, Shopify, WooCommerce, and modern web technologies, I build responsive, high-performing websites that balance user needs, business goals, and technical excellence.",

  image: "about.png",

  imageAlt: "About Jayesh Patel",

  buttonText: "About Me",

  buttonLink: "/about",
};

function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">

        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-10 col-md-10">
            <div className="section-title">

              <span>{aboutData.label}</span>

              <h2>{aboutData.title}</h2>

              <p>{aboutData.description}</p>

            </div>
          </div>
        </div>

        {/* Image & Link */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-10 col-md-10">

            <div className="about-img">
              <img
                src={`${import.meta.env.BASE_URL}assets/images/${aboutData.image}`}
                alt={aboutData.imageAlt}
              />
            </div>

            <div className="about-link">
              <Link to={aboutData.buttonLink}>
                {aboutData.buttonText}
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;