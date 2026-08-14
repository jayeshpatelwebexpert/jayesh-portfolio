function Process() {
  const processSteps = [
    {
      number: "01",
      title: "Research",
      description: "Understand business goals and target audience.",
    },
    {
      number: "02",
      title: "UI/UX Design",
      description: "Create clean and user-friendly interfaces in Figma.",
    },
    {
      number: "03",
      title: "Development",
      description: "Build custom WordPress websites with clean code.",
    },
    {
      number: "04",
      title: "Testing",
      description:
        "Responsive testing, browser compatibility and optimization.",
    },
    {
      number: "05",
      title: "Launch",
      description: "Deploy and provide ongoing support.",
    },
  ];

  return (
    <div className="process-section">
      <div className="container">
        <div className="row">

          {/* Process Title */}
          <div className="col-md-4 col-xl-4 col-lg-4">
            <div className="process-title">
              <small>My Process</small>
              <h2>How I Work</h2>
            </div>
          </div>

          {/* Process Steps */}
          <div className="col-md-8 col-xl-8 col-lg-8">
            {processSteps.map((step) => (
              <div className="process-card" key={step.number}>

                <div className="process-number">
                  {step.number}
                </div>

                <div className="process-text">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Process;