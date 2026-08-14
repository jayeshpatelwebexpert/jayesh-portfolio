const services = [
  {
    title: "Website Design & Development",
    description:
      "Designing and developing complete websites from concept to launch. From strategic UI/UX design and responsive interfaces to custom WordPress development, every project is crafted to deliver a polished, high-performing digital experience.",
    image: "WooCommerce.png",
    alt: "Website Design & Development",
    mobileView: true,
    desktopView: true,
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive, user-focused digital experiences that balance aesthetics with functionality. Every interface is designed to improve usability, engagement, and accessibility while delivering a seamless experience across all devices.",
    image: "ui.png",
    alt: "UI/UX Design",
    mobileView: false,
    desktopView: false,
  },
  {
    title: "WordPress Development",
    description:
      "Developing custom WordPress websites that are fast, responsive, and easy to manage. From pixel-perfect Figma conversions to dynamic functionality, every website is built with performance, scalability, and maintainability in mind.",
    image: "wordpress-dev.png",
    alt: "WordPress Development",
    mobileView: true,
    desktopView: true,
  },
  {
    title: "WooCommerce Solution",
    description:
      "Building secure and scalable WooCommerce stores with a focus on seamless shopping experiences. From product management and payment integration to optimized cart and checkout flows, every solution is tailored to support business growth.",
    image: "WooCommerce.png",
    alt: "WooCommerce Solutions",
    mobileView: false,
    desktopView: false,
  },
  {
    title: "WordPress Maintenance & Support",
    description:
      "Providing ongoing WordPress maintenance, performance optimization, and technical support to keep your website secure, fast, and reliable. Regular updates, monitoring, troubleshooting, and improvements help your website run smoothly.",
    image: "web-support.png",
    alt: "WordPress Maintenance & Support",
    mobileView: true,
    desktopView: true,
  },
];

function Services() {
  return (
    <section className="services-section">
      <div className="container">

        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-10 col-md-10">
            <div className="section-title">
              <span>What i Do</span>
              <h2>My Services</h2>
            </div>
          </div>
        </div>

        {/* Services */}
        {services.map((service, index) => (
          <div className="row justify-content-center" key={index}>

            {/* Mobile Image */}
            {service.mobileView && (
              <div className="col-md-6 col-lg-6 col-xl-6 mobile-view">
                <div className="services-box-card">
                  <div className="services-img-box">
                    <img
                      src={`${import.meta.env.BASE_URL}assets/images/${service.image}`}
                      alt={service.alt}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Text */}
            <div className="col-md-6 col-lg-6 col-xl-6">
              <div className="services-box-card">
                <div className="services-text-box">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>

            {/* Desktop Image */}
            {service.desktopView && (
              <div className="col-md-6 col-lg-6 col-xl-6 desktop-view">
                <div className="services-box-card">
                  <div className="services-img-box">
                    <img
                      src={`${import.meta.env.BASE_URL}assets/images/${service.image}`}
                      alt={service.alt}
                    />
                  </div>
                </div>
              </div>
            )}

          </div>
        ))}

      </div>
    </section>
  );
}

export default Services;