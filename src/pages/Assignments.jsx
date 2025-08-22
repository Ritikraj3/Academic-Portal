import React, { useState } from "react";

const Assignments = () => {
  // sample assignment data
  const assignments = [
    { id: "A1", courseId: "CSE101", title: "Intro to Programming - Lab 1", status: "Completed", dueDate: "2024-09-10" },
    { id: "A2", courseId: "CSE201", title: "Data Structures - Project", status: "Ongoing", dueDate: "2024-09-25" },
    { id: "A3", courseId: "MTH102", title: "Discrete Math - Worksheet", status: "Completed", dueDate: "2024-08-20" },
    { id: "A4", courseId: "PHY111", title: "Physics Lab Report", status: "Ongoing", dueDate: "2024-09-30" },
  ];

  // filters
  const [filterCourseId, setFilterCourseId] = useState("");
  const [filterAssignmentId, setFilterAssignmentId] = useState("");

  // apply filters
  const filteredAssignments = assignments.filter(a =>
    (filterCourseId ? a.courseId.toLowerCase().includes(filterCourseId.toLowerCase()) : true) &&
    (filterAssignmentId ? a.id.toLowerCase().includes(filterAssignmentId.toLowerCase()) : true)
  );

  return (
    <div>
      <h2>Assignments</h2>

      {/* Filters */}
      <div className="filters">
        <input
          type="text"
          placeholder="Filter by Course Id"
          value={filterCourseId}
          onChange={(e) => setFilterCourseId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by Assignment Id"
          value={filterAssignmentId}
          onChange={(e) => setFilterAssignmentId(e.target.value)}
        />
      </div>

      {/* Table */}
      <table className="assignment-table">
        <thead>
          <tr>
            <th>Assignment Id</th>
            <th>Course Id</th>
            <th>Title</th>
            <th>Status</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredAssignments.map((a) => (
            <tr key={a.id} className={a.status === "Completed" ? "completed" : "ongoing"}>
              <td>{a.id}</td>
              <td>{a.courseId}</td>
              <td>{a.title}</td>
              <td>{a.status}</td>
              <td>{a.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Assignments;
