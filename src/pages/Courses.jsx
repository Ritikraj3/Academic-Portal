import React from "react";

const Courses = () => {
  // sample data (can be replaced with real data later)
  const courses = [
    { id: "CSE101", name: "Introduction to Programming", credits: 4, grade: "A", points: 10 },
    { id: "CSE201", name: "Data Structures", credits: 3, grade: "B+", points: 8 },
    { id: "MTH102", name: "Discrete Mathematics", credits: 3, grade: "A-", points: 9 },
    { id: "PHY111", name: "Engineering Physics", credits: 2, grade: "B", points: 7 },
  ];

  // calculate CGPA
  const totalCredits = courses.reduce((sum, c) => sum + c.credits, 0);
  const weightedPoints = courses.reduce((sum, c) => sum + c.points * c.credits, 0);
  const cgpa = (weightedPoints / totalCredits).toFixed(2);

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

      <div className="cgpa-box">
        <strong>Current CGPA:</strong> {cgpa}
      </div>
    </div>
  );
};

export default Courses;
