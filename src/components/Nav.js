import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="app-nav">
      <ul className="app-nav__list">
        <NavLink to="/" exact activeClassName="selected">
          <li className="app-nav__item">Home Dashboard</li>
        </NavLink>
        <NavLink to="/about" activeClassName="selected">
          <li className="app-nav__item">About</li>
        </NavLink>
        <NavLink to="/test" activeClassName="selected">
          <li className="app-nav__item">Test</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
