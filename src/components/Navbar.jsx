import React from "react";
import Breadcrumb from "./Breadcrumb";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <button className="hamburger" onClick={toggleSidebar}>
          ☰
        </button>
        <h2 className="logo">LOGO</h2>
      </div>

      <Breadcrumb />

      <div className="navbar-right">
        <button className="user-btn">Profile</button>
      </div>
    </div>
  );
};

export default Navbar;
