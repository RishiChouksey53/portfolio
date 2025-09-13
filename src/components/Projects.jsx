import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h1>Projects</h1>
      <p>
        Here are some of my recent projects that showcase my skills and
        experience
      </p>
      <div className="projects-container">
        <div className="project-card">
          <div className="img">
            <img src="pro-connect.avif" alt="" />
          </div>
          <div className="card-body">
            <h2>Pro Connect</h2>
            <p>
              A fully functional LinkedIn-inspired web application that supports
              user authentication, post creation, comment threads, and
              professional networking features. Developed with a modular
              architecture and responsive UI.
            </p>
            <div className="tech">
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
            </div>
            <div className="projects-bottom">
              <a
                href="https://linked-in-frontend-sigma.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                <span>View Demo</span>
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="img">
            <img src="feedback.png" alt="" />
          </div>
          <div className="card-body">
            <h2>Feedback Collector</h2>
            <p>
              A feedback management system with role-based access, secure login,
              and an intuitive dashboard UI. Supports feedback collection,
              tracking, and analysis, enabling admins and users to interact
              efficiently with structured review workflows.
            </p>
            <div className="tech">
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>OpenAI API</span>
            </div>
            <div className="projects-bottom">
              <a
                href="https://feedback-collector-frontend-swart.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                <span>View Demo</span>
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="img">
            <img src="prompt-gpt.avif" alt="" />
          </div>
          <div className="card-body">
            <h2>PromptGPT</h2>
            <p>
              A full-stack AI chat assistant powered by OpenAI's API, allowing
              users to create, manage, and continue chat threads with smart
              prompts. Integrated authentication, chat history, and real-time
              updates.
            </p>
            <div className="tech">
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>OpenAI API</span>
            </div>
            <div className="projects-bottom">
              <a
                href="https://prompt-gpt-frontend.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                <span>View Demo</span>
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="img">
            <img src="airbnb.avif" alt="" />
          </div>
          <div className="card-body">
            <h2>Airbnb Clone</h2>
            <p>
              A full-stack booking platform where users can browse, list, and
              book accommodations. Implements user authentication, listing
              filters, and responsive UI design.
            </p>
            <div className="tech">
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
            </div>
            <div className="projects-bottom">
              <a
                href="https://airbnb-9bzx.onrender.com/listings"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                <span>View Demo</span>
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="img">
            <img src="zerodha.avif" alt="" />
          </div>
          <div className="card-body">
            <h2>Zerodha Clone</h2>
            <p>
              Stock trading platform simulation with login, dashboard UI, and
              portfolio tracking. A comprehensive trading interface mimicking
              real-world stock trading platforms.
            </p>
            <div className="tech">
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
            </div>
            <div className="projects-bottom">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                <span>View Demo</span>
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
