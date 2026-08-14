import { Link } from "react-router-dom";

function PortfolioList() {
  const projects = [
    {
      title: "Limo Bike",
      image: "/assets/images/f1.png",
      //link: "/portfolio/limo-bike",
    },
    {
      title: "Brandler Galleries",
      image: "/assets/images/f6.png",
    //   link: "/portfolio/brandler-galleries",
    },
    {
      title: "Dyslexia Supports",
      image: "/assets/images/f5.png",
    //   link: "/portfolio/dyslexia-support",
    },
    {
      title: "Jacobs Futura",
      image: "/assets/images/f4.png",
    //   link: "/portfolio/jacobs-futura",
    },
    {
      title: "Slate Web",
      image: "/assets/images/slate-1.png",
    //   link: "/portfolio/slate",
    },
    {
      title: "Twelve Securis",
      image: "/assets/images/f3.png",
    //   link: "/portfolio/twelve-securis",
    },
    {
      title: "1st Call 4 Mortgages",
      image: "/assets/images/1stcall4mortgages-1.png",
    //   link: "/portfolio/1stcall4mortgages",
    },
    {
      title: "WanderNest",
      image: "/assets/images/WanderNest-hero.png",
    //   link: "/portfolio/wandernest",
    },
    {
      title: "JusticePro Law Firm",
      image: "/assets/images/justice-hero.png",
    //   link: "/portfolio/justice-pro",
    },
    {
      title: "CoreFit Fitness",
      image: "/assets/images/CoreFit-Fitness-Hero.png",
    //   link: "/portfolio/corefit-fitness",
    },
    {
      title: "Aurelia Interiors",
      image: "/assets/images/Aurelia-hero.png",
    //   link: "/portfolio/aurelia-interiors",
    },
    {
      title: "FoodCraft",
      image: "/assets/images/FoodCraft-hero.png",
    //   link: "/portfolio/food-craft",
    },
    {
      title: "UP BIG FASHION",
      image: "/assets/images/up-big-fashion-hero.png",
    //   link: "/portfolio/up-big-fashion",
    },
    {
      title: "Visoge",
      image: "/assets/images/vs.png",
    //   link: "/portfolio/visoge",
    },
    {
      title: "Ai Fiori",
      image: "/assets/images/aifiorinyc-1.png",
      link: "/portfolio/ai-fiori",
    },
    {
      title: "Hanna Brothers",
      image: "/assets/images/hannabrothers-1.png",
    //   link: "/portfolio/hanna-brothers",
    },
    {
      title: "Mission Provisions",
      image: "/assets/images/missionprovisions-1.png",
    //   link: "/portfolio/mission-provisions",
    },
    {
      title: "Caribe Caterers",
      image: "/assets/images/caribecaterers-1.png",
    //   link: "/portfolio/caribe-caterers",
    },
  ];

  return (
    <section className="featured-section">
      <div className="container">

        <div className="row justify-content-center">

          {projects.map((project) => (
            <div
              className="col-xl-6 col-lg-6 col-md-6"
              key={project.title}
            >
              <div className="featured-card">

                <div className="featured-img">
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                </div>

                <div className="featured-link">
                  <Link to={project.link}>
                    {project.title}
                  </Link>
                </div>

              </div>
            </div>
          ))}

        </div>

        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-10 col-md-10">

            <div className="featured-text">
              <p>
                Each project was designed and developed with a strong focus
                on user experience, responsive design, performance
                optimization, and business objectives.
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

export default PortfolioList;