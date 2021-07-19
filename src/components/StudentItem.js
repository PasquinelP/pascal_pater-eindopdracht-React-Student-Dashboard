import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import { NavLink, useParams } from "react-router-dom";

const StudentItem = () => {

  const { name } = useParams();
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

  console.log("Name is", name)

  const itemsList = studentNames.map((student) => (
    <li key={student.id}>
      {/* // only show checkboxes when we are not on a specific student page */}
      {name === undefined && (
        <input
          type="checkbox"
          id={student.id}
          value={student.name}
          checked={student.checked}
          onChange={(event) => studentChecked(event)}
        />
      )}
      <NavLink to={`/student/${student.name}`} activeClassName="selected">
        {student.name}
      </NavLink>
    </li>
  ));

  return (
    <>
      {itemsList}
    </>
  )
};

export default StudentItem;
