import { useState, useMemo } from "react";

export const useAssignmentFilter = (assignments) => {
  const [filterCourseId, setFilterCourseId] = useState("");
  const [filterAssignmentId, setFilterAssignmentId] = useState("");

  const filteredAssignments = useMemo(() => {
    return assignments.filter((a) =>
      (filterCourseId ? a.courseId.toLowerCase().includes(filterCourseId.toLowerCase()) : true) &&
      (filterAssignmentId ? a.id.toLowerCase().includes(filterAssignmentId.toLowerCase()) : true)
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
