import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="container">
      {/* Header */}
      <header className="header sticky-header">
        <h1 className="logo">
          <a href="#hero">Rishi Chouksey</a>
        </h1>

        {/* Desktop Nav */}
        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>

        {/* Hamburger Button */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="hero">
        <h2>Hello, I'm Rishi 👋</h2>
        <p>
          Aspiring Software Engineer with strong problem-solving skills and
          hands-on experience in full-stack web development (MERN).
        </p>
        <a href="#projects" className="btn">
          View Projects
        </a>
      </section>

      {/* About */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I’m a B.Tech Computer Science (AI & ML) student with a passion for
          building scalable and user-friendly applications. I focus on writing
          clean code, improving performance, and solving challenging problems.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript (ES6+), Java</li>
          <li>React.js, Node.js, Express.js, MongoDB</li>
          <li>HTML, CSS, Tailwind</li>
          <li>Git & GitHub</li>
          <li>Data Structures & Algorithms</li>
        </ul>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Pro Connect</h3>
            <p>MERN LinkedIn-like app with authentication, posts & comments.</p>
            <a
              href="https://github.com/RishiChouksey53/linkedIn_frontend"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="project-card">
            <h3>PromptGPT</h3>
            <p>
              AI chat assistant using OpenAI API with authentication & history.
            </p>
            <a
              href="https://github.com/RishiChouksey53/PromptGPT_Frontend"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="project-card">
            <h3>Airbnb Clone</h3>
            <p>
              Booking platform with authentication, filters, and responsive UI.
            </p>
            <a
              href="https://github.com/RishiChouksey53/AirBnb"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="project-card">
            <h3>Zerodha Clone</h3>
            <p>Stock trading simulation with dashboard & portfolio tracking.</p>
            <a
              href="https://github.com/RishiChouksey53/zerodha_frontend"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:choukseyrishi89@gmail.com">
            choukseyrishi89@gmail.com
          </a>
        </p>
        <p>Phone: +91 8827940508</p>
        <p>
          <a
            href="https://github.com/RishiChouksey53"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          |
          <a
            href="https://linkedin.com/in/rishichouksey53"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            LinkedIn
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Rishi Chouksey</p>
      </footer>
    </div>
  );
}
