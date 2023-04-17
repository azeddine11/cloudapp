import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router for routing
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter from react-router

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Use useState hook to manage state for isOpen

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle isOpen state when button is clicked
  };

  return (
    <Router> {/* Wrap the Navbar component with BrowserRouter */}
      <nav className="navbar">
        <Link to="/" className="navbar-logo"> {/* Create a link to the home page */}
          Logo
        </Link>
        <div className={isOpen ? "navbar-menu open" : "navbar-menu"}> {/* Use isOpen state to conditionally apply CSS class for menu */}
          <ul className="navbar-menu-list">
            <li className="navbar-menu-item">
              <Link to="/home" className="navbar-menu-link"> {/* Create a link to the home page */}
                Home
              </Link>
            </li>
            <li className="navbar-menu-item">
              <Link to="/about" className="navbar-menu-link"> {/* Create a link to the about page */}
                About
              </Link>
            </li>
            <li className="navbar-menu-item">
              <Link to="/contact" className="navbar-menu-link"> {/* Create a link to the contact page */}
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <button className="navbar-toggle" onClick={toggleMenu}> {/* Create a button to toggle the menu */}
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
