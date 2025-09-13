import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="image"><img src="hero.png" alt="" /></div>
      <div>
        {" "}
        <h1 className="hero-name">Rishi Chouksey</h1>
        <p className="hero-title">
          Aspiring Software Engineer | Full-Stack Developer
        </p>
        <p className="hero-desc">
          Strong foundation in Data Structures and Algorithms using Java,
          <br /> with hands-on experience in full-stack web development using
          the MERN stack. <br />
          Solved 100+ LeetCode problems.
        </p>
        <div className="hero-buttons">
          <a
            href="https://github.com/RishiChouksey53"
            target="_blank"
            rel="noreferrer"
            className="btn github"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          <a
            href="https://linkedin.com/in/rishichouksey53"
            target="_blank"
            rel="noreferrer"
            className="btn linkedin"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/RishiChouksey_/"
            target="_blank"
            rel="noreferrer"
            className="btn leetcode"
          >
            <i className="fas fa-code"></i> LeetCode
          </a>
        </div>
      </div>
    </section>
  );
}
