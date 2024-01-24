import React from "react";
import logo from "../Assets/logo.jpg";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="image-wrapper">
        <NavLink to="/">{<img src={logo} alt="Little Lemon Logo" />}</NavLink>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="#">About</NavLink>
          </li>
          <li>
            <NavLink to="#">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/reservations">Reservations</NavLink>
          </li>
          <li>
            <NavLink to="#">Order Online</NavLink>
          </li>
          <li>
            <NavLink to="#">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
