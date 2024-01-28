import React from "react";
import image from "../Assets/restaurant.jpg";
import "../styles/ComingSoon.css";
import { NavLink } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="coming-container">
      <div className="coming-content">
        <div className="coming-text">
          <h1>Page is Coming Soon!</h1>
          <p>Sorry for the inconvenience</p>
          <NavLink to="/">
            <button className="btn">Home</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
