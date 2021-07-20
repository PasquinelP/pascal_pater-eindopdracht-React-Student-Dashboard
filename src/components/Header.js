import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/winc-logo.png";

const Header = () => {
  return (
    <header>
      <div className="app__header">
        <NavLink to="/" exact>
          <img src={logo} className="app__logo" alt="Winc Student Dashboard logo" />
        </NavLink>
        <h1 className="app__title">Winc Student Dashboard</h1>
      </div>
    </header>
  );
};

export default Header;
