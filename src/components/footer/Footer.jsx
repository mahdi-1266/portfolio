import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "About", href: "#about" },
    { id: 3, name: "Skills", href: "#skills" },
    { id: 4, name: "Projects", href: "#projects" },
    { id: 5, name: "Experience", href: "#experience" },
    { id: 6, name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { id: 1, icon: "fab fa-github", href: "#", name: "GitHub" },
    { id: 2, icon: "fab fa-linkedin-in", href: "#", name: "LinkedIn" },
    { id: 3, icon: "fab fa-twitter", href: "#", name: "Twitter" },
    { id: 4, icon: "fab fa-instagram", href: "#", name: "Instagram" },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="row g-4">
            {/* About Column */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-about">
                <h3 className="footer-logo">
                  <span className="logo-icon">&lt; &gt;</span>
                  Mahdi Alizada
                </h3>
                <p className="footer-description">
                  Frontend Developer passionate about creating beautiful,
                  responsive, and user-friendly web applications with modern
                  technologies.
                </p>
                <div className="footer-social">
                  {socialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.href}
                      className="social-icon"
                      aria-label={social.name}
                      title={social.name}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-links">
                <h4 className="footer-title">Quick Links</h4>
                <ul className="links-list">
                  {quickLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                      >
                        <i className="fas fa-chevron-right"></i>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info Column */}
            <div className="col-lg-4 col-md-12">
              <div className="footer-contact">
                <h4 className="footer-title">Get In Touch</h4>
                <div className="contact-items">
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:mahdi.alizada@example.com">
                      mahdi.alizada@example.com
                    </a>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <a href="tel:+12345678900">+1 (234) 567-8900</a>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Your City, Country</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {currentYear}{" "}
              <span className="highlight">Mahdi Alizada</span>. All rights
              reserved.
            </p>
            <p className="made-with">
              Made with <i className="fas fa-heart heart-icon"></i> by Mahdi
              Alizada
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        className="scroll-to-top"
        onClick={handleScrollToTop}
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </footer>
  );
};

export default Footer;
