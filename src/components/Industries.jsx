function Industries() {
  return (
    <section className="industries-section">
      <div className="container">

        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-10 col-md-10">
            <div className="section-title">
              <span>Industries Worked</span>
              <h2>Industries Worked With</h2>
            </div>
          </div>
        </div>

        {/* Industries */}
        <div className="row justify-content-center">

          <div className="col-xl-2 col-lg-2 col-md-2">
            <div className="industries-card">
              <div className="industries-img">
                <img
                  src="/assets/images/transportation.png"
                  alt="Transportation"
                />
              </div>
              <h3>Transportation</h3>
            </div>
          </div>

          <div className="col-xl-2 col-lg-2 col-md-2">
            <div className="industries-card">
              <div className="industries-img">
                <img
                  src="/assets/images/finance.png"
                  alt="Finance"
                />
              </div>
              <h3>Finance</h3>
            </div>
          </div>

          <div className="col-xl-2 col-lg-2 col-md-2">
            <div className="industries-card">
              <div className="industries-img">
                <img
                  src="/assets/images/healthcare.png"
                  alt="Health Care"
                />
              </div>
              <h3>Health Care</h3>
            </div>
          </div>

          <div className="col-xl-2 col-lg-2 col-md-2">
            <div className="industries-card">
              <div className="industries-img">
                <img
                  src="/assets/images/interior-design.png"
                  alt="Interior Design"
                />
              </div>
              <h3>Interior Design</h3>
            </div>
          </div>

          <div className="col-xl-2 col-lg-2 col-md-2">
            <div className="industries-card">
              <div className="industries-img">
                <img
                  src="/assets/images/fitness.png"
                  alt="Fitness"
                />
              </div>
              <h3>Fitness</h3>
            </div>
          </div>

          <div className="col-xl-2 col-lg-2 col-md-2">
            <div className="industries-card">
              <div className="industries-img">
                <img
                  src="/assets/images/logistics.png"
                  alt="Logistics"
                />
              </div>
              <h3>Logistics</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Industries;