import React from "react";
import "../styles/Footer.css";
import logo from "../Assets/logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer-background">
        <div className="footer-container">
          <img src={logo} alt="Little Lemon logo" />
          <p>
            Little Lemon offers a delightful bistro experience in the heart of
            the neighborhood, specializing in straightforward, delectable
            cuisine complemented by timeless cocktails. Our vibrant yet relaxed
            setting is the perfect backdrop for our menu, which proudly
            showcases locally-sourced ingredients and features enticing daily
            specials.
          </p>
          <div className="footer-content">
            <div className="links">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="#">About</NavLink>
                </li>
                <li>
                  <NavLink to="/comingsoon">Menu</NavLink>
                </li>
                <li>
                  <NavLink to="/reservations">Reservations</NavLink>
                </li>
                <li>
                  <NavLink to="/comingsoon">Order Online</NavLink>
                </li>
                <li>
                  <NavLink to="/comingsoon">Login</NavLink>
                </li>
              </ul>
            </div>
            <div className="opening-times">
              <h5>OPENING TIMES</h5>
              <ul>
                <li>Mon - Thur: 11:00 AM - 10:00 PM </li>
                <li>Fri - Sat: 11:00 AM - 11:00 PM</li>
                <li>Sunday: 12:00 PM - 9:00 PM</li>
              </ul>
            </div>
            <div className="contact">
              <h5>CONTACT US</h5>
              <ul>
                <li>123 Citrus Lane Chicago, IL 45678</li>
                <li>Tel: (555)-123-4567</li>
                <li>Email: contact@littlelemonrestaurant.com</li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>© 2024 Little Lemon Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
