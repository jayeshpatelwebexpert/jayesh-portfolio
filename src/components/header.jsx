import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {/* Custom Cursor */}
      <div className="cursor-example"></div>

      {/* Background Lines */}
      <div className="line-box">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <div className="mobile-menu-header">
          <Link to="/">
            <img
              src={`${import.meta.env.BASE_URL}assets/images/logo.svg`}
              alt="Jayesh Web Expert"
            />
          </Link>

          <span className="mobile-menu-close">X</span>
        </div>

        <div className="mobile-menu-body">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            {/* About */}
            {/* <li>
              <Link to="/about">About</Link>
            </li> */}

            <li>
              <Link to="/services">Services</Link>
            </li>

            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>

            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Header */}
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="main-header">

                {/* Logo */}
                <div className="logo">
                  <Link to="/">
                    <img
                      src={`${import.meta.env.BASE_URL}assets/images/logo.svg`}
                      alt="Jayesh Web Expert"
                    />
                  </Link>
                </div>

                {/* Desktop Menu */}
                <div className="menu">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>

                    {/* About */}
                    {/* <li>
                      <Link to="/about">About</Link>
                    </li> */}

                    <li>
                      <Link to="/services">Services</Link>
                    </li>

                    <li>
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="cta">
                  <span className="mobile-icon">
                    <img
                      src={`${import.meta.env.BASE_URL}assets/images/menu.png`}
                      alt="Open menu"
                    />
                  </span>

                  <Link to="/contact">Contact Us</Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;