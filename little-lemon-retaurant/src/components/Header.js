import React, { useState } from "react";
import logo from "../Assets/logo.jpg";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";
import { HiBars4, HiOutlineXMark } from "react-icons/hi2";

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  return (
    <header className="header">
      <div className="image-wrapper">
        <NavLink to="/">{<img src={logo} alt="Little Lemon Logo" />}</NavLink>
      </div>
      <button className="hamburger-menu" onClick={toggleNav}>
        {isNavVisible ? <HiOutlineXMark /> : <HiBars4 />}
      </button>
      <nav className={`navbar ${isNavVisible ? "show" : ""}`}>
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
