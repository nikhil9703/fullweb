import React from "react";
import '../../styles/navbar.css';

const Navbar = ({ onNavClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyBlog</div>
      <ul className="navbar-links">
        <li onClick={() => onNavClick('introduction')}>Home</li>
        <li onClick={() => onNavClick('blogs')}>Blogs</li>
        <li onClick={() => onNavClick('about')}>About</li>
        {/* <li onClick={() => onNavClick('contact')}>Contact</li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
