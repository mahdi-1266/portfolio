import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [line, setLine] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (sectionId, lineName) => {
    setLine(lineName);
    closeMenu();

    const element = document.getElementById(sectionId);
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar-header w-100 h-auto p-0 m-0 ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <nav className="navbar navbar-expand-lg p-0 m-0 py-3">
        <div className="navbar-container w-100">
          <div className="container menubar-container p-0">
            <div className="">
              <Link to="" className="brand fs-4 text-primary fw-bold">
                <span className="fs-4 me-2">&lt; &gt;</span>
                Mahdi Alizada
              </Link>
            </div>

            <button
              className={`navbar-toggler ${isMenuOpen ? "active" : ""}`}
              type="button"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className={`collapse navbar-collapse m-0 ${
                isMenuOpen ? "show" : ""
              }`}
              id="navbarNav"
            >
              <div className="navbar-overlay" onClick={closeMenu}></div>
              <div className="navbar-menu-content ms-auto">
                <ul className="navbar-nav">
                  <li className="nav-item home">
                    <a
                      href="#home"
                      className="nav-link text-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("home", "home");
                      }}
                    >
                      Home {line === "home" ? <hr className="mt-0" /> : <></>}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#about"
                      className="nav-link text-light"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("about", "about");
                      }}
                    >
                      About {line === "about" ? <hr className="mt-0" /> : <></>}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#skills"
                      className="nav-link text-light"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("skills", "skill");
                      }}
                    >
                      Skills{" "}
                      {line === "skill" ? <hr className="mt-0" /> : <></>}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#projects"
                      className="nav-link text-light"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("projects", "project");
                      }}
                    >
                      Projects{" "}
                      {line === "project" ? <hr className="mt-0" /> : <></>}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#experience"
                      className="nav-link text-light"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("experience", "exprience");
                      }}
                    >
                      Experience{" "}
                      {line === "exprience" ? <hr className="mt-0" /> : <></>}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#contact"
                      className="nav-link text-light"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("contact", "contact");
                      }}
                    >
                      Contact{" "}
                      {line === "contact" ? <hr className="mt-0" /> : <></>}
                    </a>
                  </li>
                  <button className="btn bg-primary text-white ms-2 fw-bold">
                    Hire Me
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
