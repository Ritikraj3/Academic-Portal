import React, { useState, useRef, useEffect } from "react";
import Breadcrumb from "./Breadcrumb";

const Navbar = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <button className="hamburger" onClick={toggleSidebar}>
          ☰
        </button>
        <h2 className="logo">LOGO</h2>
      </div>

      <Breadcrumb />

      <div className="navbar-right" ref={dropdownRef}>
        <button className="user-btn" onClick={() => setIsOpen(!isOpen)}>
          Profile ⬇
        </button>

        {isOpen && (
          <div className="dropdown-menu">
            <button className="dropdown-item">Edit Profile</button>
            <button className="dropdown-item">Change Password</button>
            <button className="dropdown-item logout">Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
