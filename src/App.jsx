import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Courses from "./pages/Courses";
import Assignment from "./pages/Assignments";
import CGPA from "./pages/CGPA";
import DashboardWidget from "./pages/DashboardWidget";

function App() {
  return (
    <Router>
      <Dashboard>
        <Routes>
          <Route path="/" element={<DashboardWidget/>} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/assignment" element={<Assignment />} />
          <Route path="/cgpa" element={<CGPA />} />
        </Routes>
      </Dashboard>
    </Router>
  );
}

export default App;
