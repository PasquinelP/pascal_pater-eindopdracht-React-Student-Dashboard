import React, { useState, createContext } from 'react';
import studentsData from '../studentsData';

export const AppContext = createContext();

export const AppProvider = (props) => {
  
  // put students data set in state
  const [students, setStudents] = useState(studentsData);

  // extract student names from data set
  const names = students.map((student) => student.name);
  // remove duplicates with Set() so we only get one of each name
  // https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/
  const uniqueNames = [...new Set(names)];
  const studentsNamesList = uniqueNames.map((student, index) => ({
    id: index + 1,
    name: student,
    checked: true,
  }));

  // put student names in state
  const [studentNames, setStudentNames] = useState(studentsNamesList);

  // extract list of assignment types from data set
  const assignments = students.map((student) => student.assignment);
  const uniqueAssignments = [...new Set(assignments)];
  const assignmentTypeList = uniqueAssignments.map((assignment, index) => ({
    id: index + 1,
    assignmentType: assignment,
  }));

  // put assignment types in state
  const [assignmentTypes, setAssignmentTypes] = useState(assignmentTypeList);

  // put sort difficulty and funFactor in state
  const [sort, setSort] = useState({sortDifficulty: false, sortFunFactor: false});

  // put selectedSort in state to control which radio button is checked
  // because within React <input> is a React component, not an HTML element
  // so grouping radio buttons together using name HTML attribute will not work
  // to change the checked status like in HTML
  const [selectedSort, setSelectedSort] = useState("assignment");

  const [selectedChart, setSelectedChart] = useState("barchart");

  return (
    <AppContext.Provider value={{ students, setStudents, studentNames, setStudentNames, assignmentTypes, setAssignmentTypes, sort, setSort, selectedSort, setSelectedSort, selectedChart, setSelectedChart, }}>
      {props.children}
    </AppContext.Provider>
  );
};
