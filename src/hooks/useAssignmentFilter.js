import { useState, useMemo } from "react";

export const useAssignmentFilter = (assignments) => {
  const [filterCourseId, setFilterCourseId] = useState("");
  const [filterAssignmentId, setFilterAssignmentId] = useState("");

  const filteredAssignments = useMemo(() => {
    return assignments.filter((oneAssign) =>
      (filterCourseId ? oneAssign.courseId.toLowerCase().includes(filterCourseId.toLowerCase()) : true) &&
      (filterAssignmentId ? oneAssign.id.toLowerCase().includes(filterAssignmentId.toLowerCase()) : true)
    );
  }, [assignments, filterCourseId, filterAssignmentId]);

  return {
    filterCourseId,
    setFilterCourseId,
    filterAssignmentId,
    setFilterAssignmentId,
    filteredAssignments,
  };
};
