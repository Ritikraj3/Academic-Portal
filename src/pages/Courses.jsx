import React from "react";
import { courses } from "../data/courses";

const Courses = () => {
  return (
    <div>
      <h2>My Courses</h2>
      <table className="course-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Course Id</th>
            <th>Credit Units</th>
            <th>Grade</th>
            <th>Grade Points</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.id}</td>
              <td>{course.credits}</td>
              <td>{course.grade}</td>
              <td>{course.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Courses;
