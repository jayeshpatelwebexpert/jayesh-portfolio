const statsData = [
  {
    count: 20,
    suffix: "+",
    title: "Projects",
    subtitle: "Delivered",
  },
  {
    count: 6,
    suffix: "+",
    title: "Industries",
    subtitle: "Served",
  },
  {
    count: 8,
    suffix: "+",
    title: "Years of",
    subtitle: "Experience",
  },
  {
    count: 8,
    suffix: "%",
    title: "Responsive",
    subtitle: "Websites",
  },
];

function State() {
  return (
    <section className="state-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xl-12 col-lg-12">

            <div className="state-box">
              <div className="row">

                {statsData.map((stat, index) => (
                  <div
                    className="col-md-3 col-xl-3 col-lg-3"
                    key={index}
                  >
                    <div className="state-card">

                      <h2
                        className="counter"
                        data-count={stat.count}
                        data-suffix={stat.suffix}
                      >
                        0
                      </h2>

                      <span>
                        {stat.title}
                        <span>{stat.subtitle}</span>
                      </span>

                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default State;