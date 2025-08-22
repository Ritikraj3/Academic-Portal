import React, { useContext } from "react";
import { DataContext } from "../context/DataContext"; 
import { useAssignmentFilter } from "../hooks/useAssignmentFilter";

const Assignments = () => {
  const { assignments, setAssignments } = useContext(DataContext);

  const {
    filterCourseId,
    setFilterCourseId,
    filterAssignmentId,
    setFilterAssignmentId,
    filteredAssignments,
  } = useAssignmentFilter(assignments);

  const handleStatusChange = (id, newStatus) => {
    setAssignments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
    );
  };

  const handleDateChange = (id, newDate) => {
    setAssignments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, dueDate: newDate } : a))
    );
  };

  return (
    <div>
      <h2>Assignments</h2>

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
                <td>
                  <select
                    value={a.status}
                    onChange={(e) => handleStatusChange(a.id, e.target.value)}
                  >
                    <option value="Completed">Completed</option>
                    <option value="Ongoing">Ongoing</option>
                  </select>
                </td>
                <td>
                  <input
                    type="date"
                    value={a.dueDate}
                    onChange={(e) => handleDateChange(a.id, e.target.value)}
                  />
                </td>
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
