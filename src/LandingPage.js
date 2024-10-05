import React from "react";
import webdevImage from './background/webdev.jpg';

const LandingPage = () => {
  return (
    <div className="landing-container">
      {}
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {}
      <section id="home">
        <h1>WEBDEV</h1>
        <p>
        Web development empowers individuals and businesses to establish a
        prominent online presence, enabling global connectivity and access
        to information. Websites serve as virtual storefronts, showcasing
        products and services to a worldwide audience. They facilitate
        e-commerce, allowing seamless transactions and opening new avenues
        for businesses to thrive.
        </p>
        <button>Learn More</button>
      </section>

      {}
      <section id="about">
        <div className="about-content">
          <div className="left">
            <h2>About</h2>
            <p>
              Web development refers to the tasks associated with creating, 
              building, and maintaining websites and web applications that run 
              on a browser. It may include web design, web programming, and 
              database management.
            </p>
          </div>
          <div className="right">
            {}
            <img src={webdevImage} alt="Web Development" />
          </div>
        </div>
      </section>

      {}
      <footer>
        <p>© 2024 Christian J. Orinday. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
