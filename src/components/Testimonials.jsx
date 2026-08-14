function Testimonials() { 
  return (
    <section className="testimonial-section">
      <div className="container">

        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-10 col-md-10">
            <div className="section-title">
              <span>Client Testimonials</span>

              <h2>Trusted by Businesses Across Industries</h2>

              <p>
                From UI/UX design to WordPress and Shopify development, I focus
                on creating digital experiences that deliver real value.
                Discover how businesses have benefited from my expertise,
                dedication, and commitment to excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="testimonial-slider">

              <div className="row">

                {/* Testimonial 1 */}
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="testimonial-card">

                    <div className="testimonial-round">
                      <span>CQ</span>
                    </div>

                    <div className="testimonial-text">
                      <p>
                        Working with Jayesh was a fantastic experience. He
                        understood our requirements quickly and delivered a
                        professional, high-performing website that exceeded our
                        expectations. His attention to detail, technical
                        expertise, and clear communication made the entire
                        process smooth and efficient. I highly recommend him
                        for any web design or development project.
                      </p>

                      <h3>Christopher Quinn</h3>

                      <span>Business Owner</span>
                    </div>

                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="testimonial-card">

                    <div className="testimonial-round">
                      <span>ML</span>
                    </div>

                    <div className="testimonial-text">
                      <p>
                        Jayesh demonstrated exceptional professionalism
                        throughout our project. From UI/UX design to development
                        and optimization, he consistently delivered high-quality
                        work on time. His ability to combine creative design
                        with strong technical skills resulted in a website that
                        not only looks great but also performs exceptionally
                        well. I would gladly work with him again on future
                        projects.
                      </p>

                      <h3>Minh Long</h3>

                      <span>Founder & Entrepreneur</span>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;