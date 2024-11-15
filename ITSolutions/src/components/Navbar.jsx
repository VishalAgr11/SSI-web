import React, { useState, useEffect, useRef } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); 

  const navbarRef = useRef(null);  
  const dropdownRefs = useRef({});  

  // Toggle the hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll event to toggle navbar's fixed positioning
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Toggle a specific dropdown
  const toggleDropdown = (dropdownId) => {
    if (openDropdown === dropdownId) {
      setOpenDropdown(null); 
    } else {
      setOpenDropdown(dropdownId); 
    }
  };

  // Close dropdowns if clicked outside of the navbar
  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setOpenDropdown(null); 
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside); 
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside); 
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled && window.innerWidth < 576 ? "scrolled" : ""}`} ref={navbarRef}>
      <div className="navbar-logo">
        <h2>Logo</h2>
      </div>
      <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? "show" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li className="dropdown">
          <a href="#services" onClick={() => toggleDropdown('services')}>
            Services <span className="arrow">&#9662;</span>
          </a>
          {/* Show the dropdown only if it is the currently open one */}
          {openDropdown === 'services' && (
            <ul className="dropdown-content" ref={(el) => (dropdownRefs.current['services'] = el)}>
              <li><a href="#web">Web Development</a></li>
              <li><a href="#design">Design</a></li>
              <li><a href="#marketing">Marketing</a></li>
            </ul>
          )}
        </li>
        <li><a href="#shop">Shop</a></li>
        <li className="dropdown">
          <a href="#company" onClick={() => toggleDropdown('company')}>
            Company <span className="arrow">&#9662;</span>
          </a>
          {/* Show the dropdown only if it is the currently open one */}
          {openDropdown === 'company' && (
            <ul className="dropdown-content" ref={(el) => (dropdownRefs.current['company'] = el)}>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
