import React from "react";
import "../styles/ConfirmedBooking.css";
import { NavLink } from "react-router-dom";

const ConfirmedBooking = () => {
  return (
    <div className="confirmed-container">
      <div className="confirmed-content">
        <h1>Booking Confirmed</h1>
        <p>Thank you for choosing Little Lemon!</p>
        <NavLink to="/">
          <button className="btn">Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
