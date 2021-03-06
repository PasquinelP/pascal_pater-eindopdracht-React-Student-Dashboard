import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import { useParams } from "react-router-dom";
import StudentItem from "./views/StudentItem";

const StudentList = () => {

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

  const studentsList = studentNames.map((student) => (
    <StudentItem key={student.id} student={student} name={name} click={studentChecked} />
  ));

  return (
    <>
      {studentsList}
    </>
  )
};

export default StudentList;
