function WhyWork() { 
  return (
    <section className="services-section">
      <div className="container">

        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-10 col-md-10">
            <div className="section-title">
              <span>Why work with me?</span>

              <h2>Results-Driven Approach</h2>

              <p>
                Every project begins with understanding your business goals and
                delivering solutions that generate measurable outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Why Work Cards */}
        <div className="row justify-content-center">

          {/* User-Centered Design */}
          <div className="col-md-4 col-xl-4 col-lg-4">
            <div
              className="services-card"
              style={{ minHeight: "inherit" }}
            >
              <div
                className="services-icon"
                style={{ display: "none" }}
              >
                <img src="" alt="" />
              </div>

              <div className="services-text">
                <h3>
                  User-Centered
                  <span>Design</span>
                </h3>

                <p>
                  Creating experiences that prioritize usability,
                  accessibility, and engagement.
                </p>
              </div>
            </div>
          </div>

          {/* Modern Development Standards */}
          <div className="col-md-4 col-xl-4 col-lg-4">
            <div
              className="services-card"
              style={{ minHeight: "inherit" }}
            >
              <div
                className="services-icon"
                style={{ display: "none" }}
              >
                <img src="" alt="" />
              </div>

              <div className="services-text">
                <h3>
                  Modern Development
                  <span>Standards</span>
                </h3>

                <p>
                  Building scalable, secure, and responsive websites using
                  industry best practices.
                </p>
              </div>
            </div>
          </div>

          {/* Performance-Focused Solutions */}
          <div className="col-md-4 col-xl-4 col-lg-4">
            <div
              className="services-card"
              style={{ minHeight: "inherit" }}
            >
              <div
                className="services-icon"
                style={{ display: "none" }}
              >
                <img src="" alt="" />
              </div>

              <div className="services-text">
                <h3>
                  Performance-Focused
                  <span>Solutions</span>
                </h3>

                <p>
                  Optimizing speed, user experience, and technical performance
                  for long-term success.
                </p>
              </div>
            </div>
          </div>

          {/* End-to-End Project Delivery */}
          <div className="col-md-4 col-xl-4 col-lg-4">
            <div
              className="services-card"
              style={{ minHeight: "inherit" }}
            >
              <div
                className="services-icon"
                style={{ display: "none" }}
              >
                <img src="" alt="" />
              </div>

              <div className="services-text">
                <h3>
                  End-to-End Project
                  <span>Delivery</span>
                </h3>

                <p>
                  Managing every stage of the process from design and
                  development to deployment and maintenance.
                </p>
              </div>
            </div>
          </div>

          {/* Long-Term Partnership */}
          <div className="col-md-4 col-xl-4 col-lg-4">
            <div
              className="services-card"
              style={{ minHeight: "inherit" }}
            >
              <div
                className="services-icon"
                style={{ display: "none" }}
              >
                <img src="" alt="" />
              </div>

              <div className="services-text">
                <h3>
                  Long-Term
                  <span>Partnership</span>
                </h3>

                <p>
                  Providing reliable support and technical guidance beyond
                  project completion.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyWork;