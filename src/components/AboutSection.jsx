function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">

        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-10 col-md-10">
            <div className="section-title">
              <span>About Me</span>

              <h2>Bridging Design and Development</h2>

              <p>
                I help businesses create impactful digital experiences through
                UI/UX design and web development. With expertise in WordPress,
                Shopify, WooCommerce, and modern web technologies, I build
                responsive, high-performing websites that balance user needs,
                business goals, and technical excellence.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-10 col-md-10">

            <div className="about-img">
              <img
                src="/assets/images/about.png"
                alt="About Jayesh Patel"
              />
            </div>

            <div className="about-link">
              <a href="/about">About Me</a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;