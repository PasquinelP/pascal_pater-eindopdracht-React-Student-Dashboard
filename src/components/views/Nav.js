import React from "react";
import { NavLink } from "react-router-dom";
import StudentList from "../StudentList";

const Nav = () => {
  return (
    <nav className="panel panel--action app-nav">
      <ul className="app-nav__list">
        <NavLink to="/" exact activeClassName="selected">
          <li className="app-nav__item">Dashboard</li>
        </NavLink>
        <StudentList />
      </ul>
    </nav>
  );
};

export default Nav;
