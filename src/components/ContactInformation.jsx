function ContactInformation() {
  return (
    <section className="contact-information"> 
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">

            <div className="row">

              {/* Contact Details */}
              <div className="col-md-4">
                <div className="contact-information-card">

                  <div className="row">

                    {/* Email */}
                    <div className="col-md-12">
                      <a
                        href="mailto:pateljayesh717@gmail.com"
                        className="contact-information-box"
                      >
                        <div className="contact-information-icon">
                          <img
                            src="/assets/images/email.png"
                            alt="Email"
                          />
                        </div>

                        <p>pateljayesh717@gmail.com</p>
                      </a>
                    </div>

                    {/* Phone */}
                    <div className="col-md-12">
                      <a
                        href="tel:8735889717"
                        className="contact-information-box"
                      >
                        <div className="contact-information-icon">
                          <img
                            src="/assets/images/old-typical-phone.png"
                            alt="Phone"
                          />
                        </div>

                        <p>+91 873 588 9717</p>
                      </a>
                    </div>

                    {/* WhatsApp */}
                    <div className="col-md-12">
                      <a
                        href="https://wa.me/918735889717?text=Hi%20Jayesh,%20I%20visited%20your%20portfolio%20and%20I'm%20interested%20in%20discussing%20a%20website%20project.%20I'd%20like%20to%20learn%20more%20about%20your%20UI/UX%20design%20and%20WordPress%20development%20services.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20connect.%20Thank%20you!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-information-box"
                      >
                        <div className="contact-information-icon">
                          <img
                            src="/assets/images/whatsapp.png"
                            alt="WhatsApp"
                          />
                        </div>

                        <p>WhatsApp</p>
                      </a>
                    </div>

                    {/* Instagram */}
                    <div className="col-md-12">
                      <a
                        href="https://www.instagram.com/ui_ux_design_studio_ahmedabad/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-information-box"
                      >
                        <div className="contact-information-icon">
                          <img
                            src="/assets/images/instagram.png"
                            alt="Instagram"
                          />
                        </div>

                        <p>@ui_ux_design_studio_ahmedabad</p>
                      </a>
                    </div>

                  </div>
                </div>
              </div>

              {/* Contact Image */}
              <div className="col-md-8">
                <div className="contact-information-card">
                  <div className="contact-information-img">
                    <img
                      src="/assets/images/contactus.png"
                      alt="Contact Us"
                    />
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

export default ContactInformation;