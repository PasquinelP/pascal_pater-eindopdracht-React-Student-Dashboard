import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const Dashboard = () => {

  const { students } = useContext(AppContext);

  const names = students.map((student) => student.name);
  const uniqueNames = [...new Set(names)];
  const studentsNames = uniqueNames.map((student, index) => ( {
    id: index,
    name: student,
  }
  ));

 console.log("Students data is: ", students);
 console.log(studentsNames)


  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
};

export default Dashboard;
