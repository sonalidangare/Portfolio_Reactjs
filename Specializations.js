import React from "react";
import "./Specializations.css";

const Specializations = () => {
  return (
    <section id="Specializations">
      <div className="container">
        <h1 className="sub-title">Specializations</h1>
        <div className="Specializations-list">
          <div>
            <i className="fa-solid fa-crop-simple"></i>
            <h2>Frontend Developer</h2>
            <p>Specialize in creating responsive and interactive interfaces</p>
          </div>
          <div>
            <i className="fa-brands fa-app-store"></i>
            <h2>Backend Developer</h2>
            <p>Skilled in building robust and scalable backend systems</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specializations;
