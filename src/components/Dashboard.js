import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const Dashboard = () => {

  const { students, studentNames } = useContext(AppContext);


 console.log("Students data is: ", students);
 console.log(studentNames)




  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
};

export default Dashboard;
