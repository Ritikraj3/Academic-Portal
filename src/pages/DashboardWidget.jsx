import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { courses } from "../data/courses";
import { studentData } from "../data/student";

function DashboardWidget() {

  const { assignments } = useContext(DataContext);


  const numberOfCourses = courses.length;


  const doneAssignments = assignments.filter(
    (oneAssignment) => oneAssignment.status === "Completed"
  ).length;

  const notDoneAssignments = assignments.filter(
    (oneAssignment) => oneAssignment.status === "Ongoing"
  ).length;


  const totalCredits = courses.reduce(
    (total, oneCourse) => total + oneCourse.credits,
    0
  );

  const totalPoints = courses.reduce(
    (total, oneCourse) => total + oneCourse.credits * oneCourse.points,
    0
  );

  const cgpa = (totalPoints / totalCredits).toFixed(2);


  const showDetails = (title, info, symbol) => (                                //helper function for showcasing info cards.
    <div className="card">
      <h3 className="font-semibold mb-2">
        {symbol} {title}
      </h3>
      {Object.entries(info).map(([thing, value]) => (
        <p key={thing}>
          <strong>{makeNiceName(thing)}:</strong> {value}
        </p>
      ))}
    </div>
  );


  const makeNiceName = (word) =>
    word
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (letter) => letter.toUpperCase());

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">📊 Student Dashboard</h2>

      <div className="dashboard-widgets">
        {showDetails("Personal Info", studentData.personal, "👤")}
        {showDetails("Guardian Info", studentData.guardian, "🧑‍👩‍👦")}
      </div>

      <div className="dashboard-widgets">
        {showDetails("Academic Info", studentData.academic, "🎓")}
        {showDetails("Notifications", studentData.notifications, "📢")}
      </div>

      <div className="dashboard-widgets">
        <div className="card stat-card completed">
          <h3>Total Courses</h3>
          <p>{numberOfCourses}</p>
        </div>

        <div className="card stat-card">
          <h3>Completed Assignments</h3>
          <p className="text-green-600 font-bold">{doneAssignments}</p>
        </div>

        <div className="card stat-card">
          <h3>Ongoing Assignments</h3>
          <p className="text-yellow-600 font-bold">{notDoneAssignments}</p>
        </div>

        <div className="card stat-card">
          <h3>CGPA</h3>
          <p className="text-blue-600 font-bold">{cgpa}</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardWidget;
