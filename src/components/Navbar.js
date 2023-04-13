import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for routing
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router> {/* Wrap the Navbar component with BrowserRouter */}
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Logo
        </Link>
        <div className={isOpen ? "navbar-menu open" : "navbar-menu"}>
          <ul className="navbar-menu-list">
            <li className="navbar-menu-item">
              <Link to="/home" className="navbar-menu-link">
                Home
              </Link>
            </li>
            <li className="navbar-menu-item">
              <Link to="/about" className="navbar-menu-link">
                About
              </Link>
            </li>
            <li className="navbar-menu-item">
              <Link to="/contact" className="navbar-menu-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </nav>
    </Router>
  );
};

export default Navbar;
