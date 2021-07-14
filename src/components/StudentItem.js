import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import { Link } from "react-router-dom";

const StudentItem = () => {
  
  const { students, setStudents, studentNames, setStudentNames } = useContext(AppContext);

  const studentChecked = (event) => {
    const value = event.target.value;
    const studentNamesCopy = [...studentNames];
    const studentNamesChecked = studentNamesCopy.map((student) => {
      if (student.name === value) {
        student.checked = !student.checked;
      }
      return student;
    });
    setStudentNames(studentNamesChecked);
    
    const studentsCopy = [...students];
    const studentsCheckedList = studentsCopy.map((student) => {
      if (student.name === value) {
        student.checked = !student.checked
      }
      return student
    })
    setStudents(studentsCheckedList);
  };

  console.log("Student selected is:", students)
  console.log("Student names selected is", studentNames)

  const itemsList = studentNames.map((student) => (
    <li key={student.id}>
      <input
        type="checkbox"
        id={student.id}
        value={student.name}
        checked={student.checked}
        onChange={(event) => studentChecked(event)}
      />
      <Link to={`/student/${student.name}`}>{student.name}</Link>
    </li>
  ));

  return (
    <>
      {itemsList}
    </>
  );
};

export default StudentItem;
