import React from "react";
import "./Education.css";
const Education = () => {
  return (
    <section id="education" className="education">
      <h1>Education</h1>
      <p>My academic journey</p>
      <div className="education-card-container">
        <div className="education-card">
          <div className="left">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <div className="right">
            <div>
              <h2>B.Tech in Computer Science (AI&nbsp;&&nbsp;ML)</h2>
              <p>
                Baderia Global Institute of Engineering & Management, Jabalpur
              </p>
              <span>CGPA: 7.53</span>
            </div>
            <div>
              <i className="fa-solid fa-calendar"></i>&nbsp;Expected&nbsp;2026
            </div>
          </div>
        </div>
        <div className="education-card">
          <div className="left">
            <i className="fa-solid fa-award"></i>
          </div>
          <div className="right">
            <div>
              <h2>Class XII</h2>
              <p>Maharishi Vidya Mandir, Seoni</p>

              <span>77%</span>
            </div>
            <div>
              <i className="fa-solid fa-calendar"></i>&nbsp;2022
            </div>
          </div>
        </div>
        <div className="education-card">
          <div className="left">
            <i className="fa-solid fa-award"></i>
          </div>
          <div className="right">
            <div>
              <h2>Class X</h2>
              <p>Maharishi Vidya Mandir, Seoni</p>
              <span>81.6%</span>
            </div>
            <div>
              <i className="fa-solid fa-calendar"></i>&nbsp;2020
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
