import React from "react";
import HeroImage from "../Assets/heroimg.jpg";
import "../styles/HeroSection.css";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-section-background">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Welcome to Little Lemon - Your Mediterranean Escape! In our
            family-owned haven, we blend cherished traditional recipes with
            innovative, modern twists. Dive into a culinary journey that spans
            from the rustic coasts of Greece to the vibrant markets of Morocco,
            all in the comfort of our cozy, welcoming eatery. Experience the
            fusion of generations-old Mediterranean flavors and contemporary
            culinary artistry. Join us for a taste of tradition reimagined.
          </p>
          <NavLink to="/reservations">
            <button className="btn">Reserve a Table</button>
          </NavLink>
        </div>
        <div className="img-container">
          <img className="hero-img" src={HeroImage} alt="Little Lemon Dish" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
