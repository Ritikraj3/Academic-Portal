import React, { createContext, useState, useEffect } from "react";
import { assignments as existingAssignment } from "../data/assignments";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [assignments, setAssignments] = useState(() => {
    const savedAssignment = localStorage.getItem("assignments");
    return savedAssignment ? JSON.parse(savedAssignment) : existingAssignment;
  });

  useEffect(() => {
    localStorage.setItem("assignments", JSON.stringify(assignments));
  }, [assignments]);

  return (
    <DataContext.Provider value={{ assignments, setAssignments }}>
      {children}
    </DataContext.Provider>
  );
};
