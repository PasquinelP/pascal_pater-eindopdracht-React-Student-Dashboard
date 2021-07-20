import React from "react";
import logo from "../assets/winc-logo.png";

const Header = () => {
  return (
    <header>
      <div className="app__header">
        <img src={logo} className="app__logo" alt="Winc Student Dashboard logo" />
        <h1 className="app__title">Winc Student Dashboard</h1>
      </div>
    </header>
  );
};

export default Header;
