import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import Nav from "./Nav";
import Chart from './Chart';
import SortRating from "./SortRating";
import SelectAssignment from "./SelectAssignment";

const Dashboard = () => {

  const { students, studentNames } = useContext(AppContext);


 console.log("Students data is: ", students);
 console.log(studentNames)




  return (
    <>
      <Nav />
      <h1 className="page-title">Dashboard gemiddelde rating per opdracht</h1>
      <Chart />
      <SortRating />
      <SelectAssignment />
    </>
  );
};

export default Dashboard;
