import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Student Portal</h3>
      <nav>
        <ul>
          <li><Link to="/">Personal Info</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/assignment">Assignment</Link></li>
          <li><Link to="/cgpa">CGPA</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
