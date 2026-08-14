const industriesData = [
  {
    name: "Transportation",
    image: "transportation.png",
    alt: "Transportation",
  },
  {
    name: "Finance",
    image: "finance.png",
    alt: "Finance",
  },
  {
    name: "Health Care",
    image: "healthcare.png",
    alt: "Health Care",
  },
  {
    name: "Interior Design",
    image: "interior-design.png",
    alt: "Interior Design",
  },
  {
    name: "Fitness",
    image: "fitness.png",
    alt: "Fitness",
  },
  {
    name: "Logistics",
    image: "logistics.png",
    alt: "Logistics",
  },
];

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

          {industriesData.map((industry, index) => (
            <div
              className="col-xl-2 col-lg-2 col-md-2"
              key={index}
            >
              <div className="industries-card">

                <div className="industries-img">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/images/${industry.image}`}
                    alt={industry.alt}
                  />
                </div>

                <h3>{industry.name}</h3>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Industries;