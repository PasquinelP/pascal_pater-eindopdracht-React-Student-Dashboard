import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import { Link } from "react-router-dom";

const Dashboard = () => {

  const { students } = useContext(AppContext);

  const names = students.map((student) => student.name);
  const uniqueNames = [...new Set(names)];
  const studentsNames = uniqueNames.map((student, index) => ( {
    id: index + 1,
    name: student,
  }
  ));

 console.log("Students data is: ", students);
 console.log(studentsNames)

 const studentsList = studentsNames.map((student) => (
   <li key={student.id}>
     <Link to={`/student/${student.name}`}>{student.name}</Link>
   </li>
 ));


  return (
    <>
      <h1>Dashboard</h1>
      <ul>{studentsList}</ul>
    </>
  );
};

export default Dashboard;
