import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsSubmenuOpen, setProjectsSubmenuOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setProjectsSubmenuOpen(false);
  };

  const toggleProjectsSubmenu = (e) => {
    e.preventDefault();
    setProjectsSubmenuOpen(!isProjectsSubmenuOpen);
  };

  // Function to handle link clicks, closing the sidebar
  const handleLinkClick = () => {
    setIsOpen(false);
    setProjectsSubmenuOpen(false);
  };

  const handleHomeClick = () => {
    // If we are already on the homepage, scroll to the top smoothly.
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    handleLinkClick();
  };
  // Determine if we are on the homepage to show section links
  const isHomePage = location.pathname === "/";

  return (
    <>
      <button
        className={`hamburger-menu ${isOpen ? "open" : ""}`}
        onClick={toggleSidebar}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}

      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={handleHomeClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/#about" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="/#skills" onClick={handleLinkClick}>
              Skills
            </Link>
          </li>
          <li className="has-submenu">
            <a href="#" onClick={toggleProjectsSubmenu}>
              Projects{" "}
              <i
                className={`bi bi-chevron-down ${
                  isProjectsSubmenuOpen ? "open" : ""
                }`}
              ></i>
            </a>
            <ul className={`submenu ${isProjectsSubmenuOpen ? "open" : ""}`}>
              <li>
                <Link to="/#projects" onClick={handleLinkClick}>
                  Recent Projects
                </Link>
              </li>
              <li>
                <Link to="/projects" onClick={handleLinkClick}>
                  Project Archives
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/#contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="section-with-curve">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fill-opacity="1"
              d="M0,32L120,26.7C240,21,480,11,720,53.3C960,96,1200,192,1320,240L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="sidebar__socials">
          <a
            href="https://github.com/builtbymarielle"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/marielle-harrell/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
