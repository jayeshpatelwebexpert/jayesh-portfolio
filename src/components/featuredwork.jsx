function FeaturedWork() {
  return (
    <section className="featured-section">
      <div className="container">

        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-10 col-md-10">
            <div className="section-title">
              <span>Featured work</span>

              <h2>
                Delivering Digital Solutions
                <br />
                Across Industries
              </h2>

              <p>
                Over the years, I have worked on a diverse range of projects
                for businesses across events, transportation, manufacturing,
                art, education, finance, cybersecurity, and professional
                services.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="row justify-content-center">

          {/* Limo Bike */}
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="featured-card">
              <div className="featured-img">
                <img
                  src="/assets/images/f1.png"
                  alt="Limo Bike"
                />
              </div>

              <div className="featured-link">
                <a href="/limo-bike">Limo Bike</a>
              </div>
            </div>
          </div>

          {/* Brandler Galleries */}
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="featured-card">
              <div className="featured-img">
                <img
                  src="/assets/images/f6.png"
                  alt="Brandler Galleries"
                />
              </div>

              <div className="featured-link">
                <a href="/brandler-galleries">Brandler Galleries</a>
              </div>
            </div>
          </div>

          {/* Dyslexia Supports */}
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="featured-card">
              <div className="featured-img">
                <img
                  src="/assets/images/f5.png"
                  alt="Dyslexia Supports"
                />
              </div>

              <div className="featured-link">
                <a href="/dyslexia-support">
                  Dyslexia Supports
                </a>
              </div>
            </div>
          </div>

          {/* Jacobs Futura */}
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="featured-card">
              <div className="featured-img">
                <img
                  src="/assets/images/f4.png"
                  alt="Jacobs Futura"
                />
              </div>

              <div className="featured-link">
                <a href="/jacobs-futura">Jacobs Futura</a>
              </div>
            </div>
          </div>

        </div>

        {/* View Featured Work */}
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="featured-link">
              <a href="/portfolio">View Featured work</a>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-10 col-md-10">
            <div className="featured-text">
              <p>
                Each project was designed and developed with a strong focus on
                user experience, responsive design, performance optimization,
                and business objectives.
              </p>

              <span>
                Several projects in this portfolio were completed during my
                employment at Hello Slate Ltd. and are presented to showcase
                my design and development contributions. All project ownership
                and intellectual property rights remain with their respective
                owners.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FeaturedWork;