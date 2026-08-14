const expertise = [
  {
    name: "HTML5",
    image: "html5.svg",
    alt: "HTML5",
  },
  {
    name: "CSS3",
    image: "css3.svg",
    alt: "CSS3",
  },
  {
    name: "Bootstrap",
    image: "bootstrap5.svg",
    alt: "Bootstrap",
  },
  {
    name: "JavaScript",
    image: "js.svg",
    alt: "JavaScript",
  },
  {
    name: "jQuery",
    image: "jquery.svg",
    alt: "jQuery",
  },
  {
    name: "PHP",
    image: "php.svg",
    alt: "PHP",
  },
  {
    name: "WordPress",
    image: "wordpress.svg",
    alt: "WordPress",
  },
  {
    name: "WooCommerce",
    image: "woocommerce.svg",
    alt: "WooCommerce",
  },
  {
    name: "Shopify",
    image: "shopify-c.png",
    alt: "Shopify",
  },
  {
    name: "Figma",
    image: "figma.svg",
    alt: "Figma",
  },
  {
    name: "Adobe Photoshop",
    image: "photoshop.svg",
    alt: "Adobe Photoshop",
  },
  {
    name: "Adobe Illustrator",
    image: "adobeillustrator.svg",
    alt: "Adobe Illustrator",
  },
  {
    name: "Adobe XD",
    image: "xd.svg",
    alt: "Adobe XD",
  },
];

function Expertise() {
  return (
    <section className="expertise-section">
      <div className="container">

        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-10 col-md-10">
            <div className="section-title">
              <span>Technical Skills & Expertise</span>

              <h2>
                Building Digital Solutions with <br />
                Modern Technologies
              </h2>

              <p>
                Leveraging industry-leading tools and technologies to create
                scalable websites, seamless user experiences, and
                business-driven digital solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Expertise List */}
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8 col-md-8">
            <div className="expertise-list">

              {expertise.map((skill, index) => (
                <a href="#" key={index}>
                  <img
                    src={`${import.meta.env.BASE_URL}assets/images/${skill.image}`}
                    alt={skill.alt}
                  />
                  {skill.name}
                </a>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Expertise;