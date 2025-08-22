import React from "react";
import { useAssignmentFilter } from "../hooks/useAssignmentFilter";

const Assignments = () => {
  // sample assignment data
  const assignments = [
    {
      id: "A1",
      courseId: "CSE101",
      title: "Intro to Programming - Lab 1",
      status: "Completed",
      dueDate: "2024-09-10",
    },
    {
      id: "A2",
      courseId: "CSE201",
      title: "Data Structures - Project",
      status: "Ongoing",
      dueDate: "2024-09-25",
    },
    {
      id: "A3",
      courseId: "MTH102",
      title: "Discrete Math - Worksheet",
      status: "Completed",
      dueDate: "2024-08-20",
    },
    {
      id: "A4",
      courseId: "PHY111",
      title: "Physics Lab Report",
      status: "Ongoing",
      dueDate: "2024-09-30",
    },
  ];

  // ✅ use custom hook
  const {
    filterCourseId,
    setFilterCourseId,
    filterAssignmentId,
    setFilterAssignmentId,
    filteredAssignments,
  } = useAssignmentFilter(assignments);

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
          {filteredAssignments.length > 0 ? (
            filteredAssignments.map((a) => (
              <tr
                key={a.id}
                className={a.status === "Completed" ? "completed" : "ongoing"}
              >
                <td>{a.id}</td>
                <td>{a.courseId}</td>
                <td>{a.title}</td>
                <td>{a.status}</td>
                <td>{a.dueDate}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No assignments found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Assignments;
