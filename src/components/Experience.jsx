const experienceItems = [
  "Business Websites",
  "Lead Generation Websites",
  "eCommerce Platforms",
  "Custom WordPress Solutions",
  "UI/UX Design",
  "WordPress Development",
  "Shopify Development",
  "WooCommerce Solutions",
  "Website Optimization & Support",
  "Server Management",
  "DNS Configuration",
  "Website Migration",
  "Performance Optimization",
  "Technical Support",
  "Website Maintenance",
];

function Experience() {
  return (
    <section className="experience-section">
      <div className="container">

        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-10 col-md-10">
            <div className="section-title">
              <span>Professional experience</span>

              <h2>Creating Value Through Design & Technology</h2>

              <p>
                My experience spans the complete website lifecycle—from
                discovery and planning to design, development, deployment,
                optimization, and long-term support.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Experience Marquee */}
      <div className="row justify-content-center m-0">
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="marquee">
            <h3>
              {experienceItems.map((item, index) => (
                <span key={index}>
                  {item} *{" "}
                </span>
              ))}
            </h3>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Experience;