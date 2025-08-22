import React, { createContext, useState, useEffect } from "react";
import { assignments as initialAssignments } from "../data/assignments";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [assignments, setAssignments] = useState(() => {
    const saved = localStorage.getItem("assignments");
    return saved ? JSON.parse(saved) : initialAssignments;
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
