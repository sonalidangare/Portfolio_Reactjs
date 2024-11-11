
import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src="SonaliPortfolioImage.jpeg" alt="Sonali" id="img1" />
          </div>
          <div className="about-col-2">
            <div className="header-text">
              <h2>
                <span className="greeting">Hi,</span>
                <span className="intro">I'm</span>
                <span
                  className="name"
                  style={{
                    backgroundImage: "linear-gradient(45deg, #ff4b5c, #ff6a00)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Sonali
                </span>
                👋<br />
                <span className="software-developer">
                  I'm a Full Stack Developer
                </span>
              </h2>
            </div>
            <div className="tab-titles">
              <p
                className={`tab-links ${activeTab === "skills" ? "active-link" : ""}`}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </p>
              <p
                className={`tab-links ${activeTab === "experience" ? "active-link" : ""}`}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </p>
              <p
                className={`tab-links ${activeTab === "education" ? "active-link" : ""}`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </p>
            </div>

            <div className="tab-contents">
              {activeTab === "skills" && (
                <ul>
                  <li>
                    <b>Frontend Technologies:</b> HTML, CSS, JavaScript, Angular, ReactJs
                  </li>
                  <li>
                    <b>Backend Technologies:</b> Java, SpringBoot, Core PHP (Basic), Node.js
                  </li>
                  <li>
                    <b>Database:</b> MySQL, MongoDB, Oracle
                  </li>
                  <li>
                    <b>Development Tools:</b> VS Code, STS, Sublime Text, Eclipse
                  </li>
                </ul>
              )}

              {activeTab === "experience" && (
                <div className="experience">
                  <div className="experience-category">
                    <h3>Internship Experience</h3><br></br>
                    <ul>
                      <li>
                        <strong>Feb 2024 - May 2024: </strong>
                        <span className="company-name">Ubeebo Infosoft PVT. LTD.</span>
                        <br />
                        <span className="role">Role: Web Developer Intern</span>
                        <p className="description">Dance Academy Website:
                          Led the development of a dynamic website for a dance academy, managing both frontend and backend aspects to deliver a fully functional live project.
                        </p>
                       
         <p> <b>Project Link:</b>
  <a 
    href="https://www.rkdance.com/" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ color: 'black', textDecoration: 'none' }}
  >
    View Project
  </a>
</p>

                      </li>
                      <li>
                        <strong>Feb 2022 - Jun 2022: </strong>
                        <span className="company-name">Capital Hi-Tech</span>
                        <br />
                        <span className="role">Role: Web Development</span><br/>
                        <span className="project1">Project-1: Porfolio Website
                       
                        </span><br/>
                        <span className="project2">Project-2: Ecommerce Website</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "education" && (
                <ul>
                  <li>
                    <strong>2019 - 2023:</strong> BE from Bapurao Deshmukh College Of Engineering - 72.70%
                  </li>
                  <li>
                    <strong>2019:</strong> Higher Secondary Certificate (HSC) - 74.46%
                  </li>
                  <li>
                    <strong>2017:</strong> Secondary School Certificate (SSC)  - 80.20%
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
