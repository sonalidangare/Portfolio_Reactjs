import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Projects</h1>
        <div className="work-list">
          <div className="work">
            <img src="Mobile.jpg" alt="Mobile App" />
            <div className="layer">
              <h3>MOBILE APPLICATION</h3>
              <p>
              Developed a model to detect fuel levels in the tank and display it on a mobile application</p>
              <a href="#"><i className="fa-solid fa-up-right-from-square"></i></a>
            </div>
          </div>
          <div className="work">
            <img src="OnlineStore.jpg" alt="Online Store" />
            <div className="layer">
              <h3>ONLINE STORE CREATION</h3>
              <p>Developed an Amazon-Style e-Commerce Website.</p>
              <a href="#"><i className="fa-solid fa-up-right-from-square"></i></a>
            </div>
          </div>
          <div className="work">
            <img src="dance.jpg" alt="Dance Image" />
            <div className="layer">
                <h3>DANCE ACADEMY WEBSITE</h3>
                <p>Built a website for Dance Academy using HTML, CSS, JavaScript, also Bootstrap & JQuery.</p>
                <a href="#"><i className="fa-solid fa-up-right-from-square"></i></a>
            </div>
          </div>
        </div>
        <a href="#" className="btn">See More</a>
      </div>
    </section>
  );
};

export default Portfolio;
