import React from 'react'; 
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/services">Services</Link> {/* ✅ Added Services link */}
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
