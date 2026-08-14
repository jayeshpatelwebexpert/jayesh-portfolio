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

        {/* Website Design & Development */}
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-6 col-xl-6 mobile-view">
            <div className="services-box-card">
              <div className="services-img-box">
                <img
                  src="/assets/images/WooCommerce.png"
                  alt="Website Design & Development"
                />
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-6">
            <div className="services-box-card">
              <div className="services-text-box">
                <h3>Website Design & Development</h3>
                <p>
                  Designing and developing complete websites from concept to
                  launch. From strategic UI/UX design and responsive interfaces
                  to custom WordPress development, every project is crafted to
                  deliver a polished, high-performing digital experience.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-6 desktop-view">
            <div className="services-box-card">
              <div className="services-img-box">
                <img
                  src="/assets/images/WooCommerce.png"
                  alt="Website Design & Development"
                />
              </div>
            </div>
          </div>
        </div>

        {/* UI/UX Design */}
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-6 col-xl-6">
            <div className="services-box-card">
              <div className="services-img-box">
                <img
                  src="/assets/images/ui.png"
                  alt="UI/UX Design"
                />
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-6">
            <div className="services-box-card">
              <div className="services-text-box">
                <h3>
                  UI/UX<span>Design</span>
                </h3>
                <p>
                  Creating intuitive, user-focused digital experiences that
                  balance aesthetics with functionality. Every interface is
                  designed to improve usability, engagement, and accessibility
                  while delivering a seamless experience across all devices.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* WordPress Development */}
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-6 col-xl-6 mobile-view">
            <div className="services-box-card">
              <div className="services-img-box">
                <img
                  src="/assets/images/wordpress-dev.png"
                  alt="WordPress Development"
                />
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-6">
            <div className="services-box-card">
              <div className="services-text-box">
                <h3>
                  WordPress<span>Development</span>
                </h3>
                <p>
                  Developing custom WordPress websites that are fast,
                  responsive, and easy to manage. From pixel-perfect Figma
                  conversions to dynamic functionality, every website is built
                  with performance, scalability, and maintainability in mind.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-6 desktop-view">
            <div className="services-box-card">
              <div className="services-img-box">
                <img
                  src="/assets/images/wordpress-dev.png"
                  alt="WordPress Development"
                />
              </div>
            </div>
          </div>
        </div>

        {/* WooCommerce */}
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-6 col-xl-6">
            <div className="services-box-card">
              <div className="services-img-box">
                <img
                  src="/assets/images/WooCommerce.png"
                  alt="WooCommerce Solutions"
                />
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-6">
            <div className="services-box-card">
              <div className="services-text-box">
                <h3>WooCommerce Solution</h3>
                <p>
                  Building secure and scalable WooCommerce stores with a focus
                  on seamless shopping experiences. From product management and
                  payment integration to optimized cart and checkout flows,
                  every solution is tailored to support business growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* WordPress Maintenance & Support */}
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-6 col-xl-6 mobile-view">
            <div className="services-box-card">
              <div className="services-img-box">
                <img
                  src="/assets/images/web-support.png"
                  alt="WordPress Maintenance & Support"
                />
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-6">
            <div className="services-box-card">
              <div className="services-text-box">
                <h3>WordPress Maintenance & Support</h3>
                <p>
                  Providing ongoing WordPress maintenance, performance
                  optimization, and technical support to keep your website
                  secure, fast, and reliable. Regular updates, monitoring,
                  troubleshooting, and improvements help your website run
                  smoothly.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-6 desktop-view">
            <div className="services-box-card">
              <div className="services-img-box">
                <img
                  src="/assets/images/web-support.png"
                  alt="WordPress Maintenance & Support"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;