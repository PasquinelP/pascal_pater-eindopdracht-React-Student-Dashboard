import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import { Link } from "react-router-dom";

const Dashboard = () => {

  const { students, studentNames } = useContext(AppContext);


 console.log("Students data is: ", students);
 console.log(studentNames)

 const studentsList = studentNames.map((student) => (
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
