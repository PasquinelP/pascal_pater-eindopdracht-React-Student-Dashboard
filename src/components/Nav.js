import React from "react";
import { NavLink } from "react-router-dom";
import StudentList from "./StudentList";

const Nav = () => {
  return (
    <nav className="app-nav">
      <ul className="app-nav__list">
        <NavLink to="/" exact activeClassName="selected">
          <li className="app-nav__item">Dashboard</li>
        </NavLink>
        <NavLink to="/about" activeClassName="selected">
          <li className="app-nav__item">About</li>
        </NavLink>
        <StudentList />
      </ul>
    </nav>
  );
};

export default Nav;
