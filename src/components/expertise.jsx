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

              {/* Row 1 */}
              <div className="expertise-line-1">
                <a href="#">
                  <img
                    src="/assets/images/html5.svg"
                    alt="HTML5"
                  />
                  HTML5
                </a>

                <a href="#">
                  <img
                    src="/assets/images/css3.svg"
                    alt="CSS3"
                  />
                  CSS3
                </a>

                <a href="#">
                  <img
                    src="/assets/images/bootstrap5.svg"
                    alt="Bootstrap"
                  />
                  Bootstrap
                </a>

                <a href="#">
                  <img
                    src="/assets/images/js.svg"
                    alt="JavaScript"
                  />
                  JavaScript
                </a>

                <a href="#">
                  <img
                    src="/assets/images/jquery.svg"
                    alt="jQuery"
                  />
                  jQuery
                </a>
              </div>

              {/* Row 2 */}
              <div className="expertise-line-1">
                <a href="#">
                  <img
                    src="/assets/images/php.svg"
                    alt="PHP"
                  />
                  PHP
                </a>

                <a href="#">
                  <img
                    src="/assets/images/wordpress.svg"
                    alt="WordPress"
                  />
                  WordPress
                </a>

                <a href="#">
                  <img
                    src="/assets/images/woocommerce.svg"
                    alt="WooCommerce"
                  />
                  WooCommerce
                </a>

                <a href="#">
                  <img
                    src="/assets/images/shopify-c.png"
                    alt="Shopify"
                  />
                  Shopify
                </a>
              </div>

              {/* Row 3 */}
              <div className="expertise-line-1">
                <a href="#">
                  <img
                    src="/assets/images/figma.svg"
                    alt="Figma"
                  />
                  Figma
                </a>

                <a href="#">
                  <img
                    src="/assets/images/photoshop.svg"
                    alt="Adobe Photoshop"
                  />
                  Adobe Photoshop
                </a>

                <a href="#">
                  <img
                    src="/assets/images/adobeillustrator.svg"
                    alt="Adobe Illustrator"
                  />
                  Adobe Illustrator
                </a>

                <a href="#">
                  <img
                    src="/assets/images/xd.svg"
                    alt="Adobe XD"
                  />
                  Adobe XD
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Expertise;