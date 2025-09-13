import React from "react";
import "./Skills.css";
const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h1>Technical Skills</h1>
      <p>
        Here are the technologies and tools I work with to bring ideas to life
      </p>
      <div className="card-container">
        <div className="card">
          <div className="icon">
            <i className="fa-solid fa-code"></i>
          </div>
          <div className="skill">Programming Languages</div>
          <div className="tech">
            <span>JavaScript</span>
            <span>Java</span>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <i className="fas fa-laptop-code"></i>
          </div>
          <div className="skill">Full-Stack Development</div>
          <div className="tech">
            <span>React.js</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <i className="fas fa-paint-brush"></i>
          </div>
          <div className="skill">Frontend Styling</div>
          <div className="tech">
            <span>Tailwind CSS</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <i className="fas fa-database"></i>
          </div>
          <div className="skill">Database</div>
          <div className="tech">
            <span>MongoDB</span>
            <span>MySQL</span>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <i className="fas fa-code-branch"></i>
          </div>
          <div className="skill">Version Control</div>
          <div className="tech">
            <span>Git</span>
            <span>Github</span>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <i className="fas fa-puzzle-piece"></i>
          </div>
          <div className="skill">Problem Solving</div>
          <div className="tech">
            <span>Data Structure</span>
            <span>Java DSA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
