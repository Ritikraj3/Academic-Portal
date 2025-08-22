import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { courses } from "../data/courses";
import { studentData } from "../data/student";

const DashboardWidget = () => {
  const { assignments } = useContext(DataContext);

  const totalCourses = courses.length;

  const completedAssignments = assignments.filter(
    (a) => a.status === "Completed"
  ).length;

  const ongoingAssignments = assignments.filter(
    (a) => a.status === "Ongoing"
  ).length;

  const totalCredits = courses.reduce((sum, c) => sum + c.credits, 0);
  const totalPoints = courses.reduce(
    (sum, c) => sum + c.credits * c.points,
    0
  );
  const cgpa = (totalPoints / totalCredits).toFixed(2);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">📊 Dashboard</h2>

      <div className="dashboard-widgets">
        <div className="card">
          <h3 className="font-semibold mb-2">👤 Personal Details</h3>
          <p><strong>Name:</strong> {studentData.personal.name}</p>
          <p><strong>Roll No:</strong> {studentData.personal.rollNo}</p>
          <p><strong>Email:</strong> {studentData.personal.email}</p>
          <p><strong>Contact:</strong> {studentData.personal.contact}</p>
        </div>

        <div className="card">
          <h3 className="font-semibold mb-2">🧑‍👩‍👦 Guardian</h3>
          <p><strong>Name:</strong> {studentData.guardian.name}</p>
          <p><strong>Relation:</strong> {studentData.guardian.relation}</p>
          <p><strong>Contact:</strong> {studentData.guardian.contact}</p>
        </div>
      </div>

      <div className="dashboard-widgets">
        <div className="card">
          <h3 className="font-semibold mb-2">🎓 Academic Details</h3>
          <p><strong>Program:</strong> {studentData.academic.program}</p>
          <p><strong>Degree:</strong> {studentData.academic.degree}</p>
          <p><strong>Discipline:</strong> {studentData.academic.discipline}</p>
          <p><strong>Semester:</strong> {studentData.academic.semester}</p>
          <p><strong>Joining Date:</strong> {studentData.academic.joiningDate}</p>
        </div>

        <div className="card">
          <h3 className="font-semibold mb-2">📢 Notifications</h3>
          <p><strong>Fee Due:</strong> {studentData.notifications.feeDue}</p>
          <p><strong>Last Date:</strong> {studentData.notifications.lastDate}</p>
          <p><strong>Status:</strong> {studentData.notifications.status}</p>
          <p><strong>Notice:</strong> {studentData.notifications.notice}</p>
        </div>
      </div>

      <div className="dashboard-widgets">
        <div className="card stat-card completed">
          <h3>Total Courses</h3>
          <p>{totalCourses}</p>
        </div>

        <div className="card stat-card">
          <h3>Completed Assignments</h3>
          <p className="text-green-600 font-bold">{completedAssignments}</p>
        </div>

        <div className="card stat-card">
          <h3>Ongoing Assignments</h3>
          <p className="text-yellow-600 font-bold">{ongoingAssignments}</p>
        </div>

        <div className="card stat-card">
          <h3>CGPA</h3>
          <p className="text-blue-600 font-bold">{cgpa}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardWidget;
