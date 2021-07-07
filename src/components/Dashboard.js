import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import Chart from './Chart';

const Dashboard = () => {

  const { students, studentNames } = useContext(AppContext);


 console.log("Students data is: ", students);
 console.log(studentNames)




  return (
    <>
      <h1>Dashboard gemiddelde rating per opdracht</h1>
      <Chart />
    </>
  );
};

export default Dashboard;
