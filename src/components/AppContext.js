import React, { useState, createContext } from 'react';
import studentsData from '../studentsData';

export const AppContext = createContext();

export const AppProvider = (props) => {
  
  // put students data set in state
  const [students, setStudents] = useState(studentsData);

  // extract list of assignment types from data set
  const assignments = students.map((student) => student.assignment);
  const uniqueAssignments = [...new Set(assignments)];
  const assignmentTypeList = uniqueAssignments.map((assignment, index) => ({
    id: index + 1,
    assignmentType: assignment,
  }));

  // put assignment types in state
  const [assignmentTypes, setAssignmentTypes] = useState(assignmentTypeList);


  return (
    <AppContext.Provider value={{ students, setStudents, assignmentTypes, setAssignmentTypes }}>
      {props.children}
    </AppContext.Provider>
  );
};
