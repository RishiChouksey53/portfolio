import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="logo" onClick={closeMenu}>
        <a href="#hero">My Portfolio</a>
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#hero" onClick={closeMenu}>
          Home
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>
        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>
        <a href="#education" onClick={closeMenu}>
          Education
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>

      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </div>
    </header>
  );
}
