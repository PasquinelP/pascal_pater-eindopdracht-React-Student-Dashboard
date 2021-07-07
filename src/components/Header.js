import React from "react";
import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <div className="page-header">
        <h1>Winc Student Dashboard</h1>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
