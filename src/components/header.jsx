function Header() {
  return (
    <>
    <div class="cursor-example"></div>

<div class="line-box">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
      {/* Mobile Menu */}
      <div className="mobile-menu">
        <div className="mobile-menu-header">
          <a href="/">
            <img src={`${import.meta.env.BASE_URL}assets/images/logo.svg`} alt="Jayesh Web Expert" />
          </a>

          <span>X</span>
        </div>

        <div className="mobile-menu-body">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            {/* <li>
              <a href="/about">About</a>
            </li> */}
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
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
                  <a href="/">
                    <img
                      src={`${import.meta.env.BASE_URL}assets/images/logo.svg`}
                      alt="Jayesh Web Expert"
                    />
                  </a>
                </div>

                {/* Desktop Menu */}
                <div className="menu">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    {/* <li>
                      <a href="/about">About</a>
                    </li> */}
                    <li>
                      <a href="/services">Services</a>
                    </li>
                    <li>
                      <a href="/portfolio">Portfolio</a>
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

                  <a href="/contact">Contact Us</a>
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