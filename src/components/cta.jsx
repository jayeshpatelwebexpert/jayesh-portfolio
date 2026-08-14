function Contact() {
  return (
    <section className="contact-section">
      <div className="container">

        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-10 col-md-10">
            <div className="section-title">
              <span>Contacts</span>

              <h2>Ready to Launch Your Next Website?</h2>

              <p>
                Whether you're looking to launch a new website, redesign an
                existing platform, build an eCommerce store, or improve your
                website's performance, I'd love to hear about your project.
              </p>

              <p>
                Let's work together to create a digital solution that helps
                your business stand out and achieve its goals.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="contact-card">

              <h3>Available For</h3>

              <div className="expertise-list">
                <div className="expertise-line-1">

                  <a href="#contact">
                    Freelance Projects
                  </a>

                  <a href="#contact">
                    Agency Partnerships
                  </a>

                  <a href="#contact">
                    Long-Term Collaborations
                  </a>

                  <a href="#contact">
                    Remote Opportunities
                  </a>

                </div>
              </div>

              <div className="cta-btns">
                <h4>
                  Ready to get started?{" "}

                  <a
                    href="https://wa.me/918735889717?text=Hi%20Jayesh,%20I%20visited%20your%20portfolio%20and%20I'm%20interested%20in%20discussing%20a%20website%20project.%20I'd%20like%20to%20learn%20more%20about%20your%20UI/UX%20design%20and%20WordPress%20development%20services.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20connect.%20Thank%20you!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get a Free Consultation
                  </a>
                </h4>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;