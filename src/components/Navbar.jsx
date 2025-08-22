import React from 'react'
import Breadcrumb from './Breadcrumb'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="breadcrumb-container">
        <Breadcrumb />
      </div>
      <div className="user-actions">
        <button className="user-btn">Profile</button>
      </div>
    </div>
  );
};

export default Navbar