import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const [hideSocial, setHideSocial] = useState(false);

  const [isModulesHovered, setIsModulesHovered] = useState(false);

  const [isNavFixed, setNavFixed] = useState(false);

  const handleModulesMouseEnter = () => {
    setIsModulesHovered(true);
  };
  const handleModulesMouseLeave = () => {
    setIsModulesHovered(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = 0.1 * window.innerHeight;
      if (window.scrollY > navHeight) {
        setNavFixed(true);
      } else {
        setNavFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
      <nav className={isNavFixed ? "fixed" : ""}>
        <div className="navbar-container" style={{ display: "flex" }}>
          {!hideSocial && (
            <div className="nav-socials">
              <ul className="nav-menu">
                <li className="nav-item">
                  <a
                    href="https://www.facebook.com/events/1257843534893554"
                    className="nav-links"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                  >
                    <FaFacebookF size={"1.5em"} className={"fbIcon"} />
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    href="https://www.instagram.com/iba.con"
                    className="nav-links"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                  >
                    <FaInstagram size={"1.5em"} className={"igIcon"} />
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    href="https://www.youtube.com/@AniPopIBA"
                    className="nav-links"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                  >
                    <FaYoutube size={"1.5em"} className={"ytIcon"} />
                  </a>
                </li>
              </ul>
            </div>
          )}

          <div className="nav-main">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item page-link">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>

              <li className="nav-item page-link">
                <Link
                  to="/about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item page-link">
                <Link
                  to="/contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
              <li
                className="nav-item page-link"
                onMouseEnter={handleModulesMouseEnter}
                onMouseLeave={handleModulesMouseLeave}
              >
                <Link
                  to="/modules"
                  className="nav-links"
                  onClick={handleModulesMouseLeave}
                >
                  Modules
                </Link>
                {isModulesHovered && (
                  <div className="dropdown-content">
                    <li className="nav-item page-link">
                      <Link to="/modules">Stage </Link>
                    </li>
                    <li className="nav-item page-link">
                      <Link to="/modules">Art </Link>
                    </li>
                    <li className="nav-item page-link">
                      <Link to="/modules">Gaming </Link>
                    </li>
                    <li className="nav-item page-link">
                      <Link to="/modules">Auditorium </Link>
                    </li>
                    <li className="nav-item page-link">
                      <Link to="/modules">VolleyBall </Link>
                    </li>
                  </div>
                )}
              </li>
            </ul>
          </div>

          <div className="nav-right">
            <ul className="nav-menu">
              <li className="nav-item page-link">
                <Link to="/passes">Get Passes</Link>
              </li>
              <li className="nav-item page-link">
                <Link to="/comp">Competition Sign ups</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
