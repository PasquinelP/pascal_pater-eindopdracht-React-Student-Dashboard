import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import Nav from "./Nav";
import Chart from './Chart';
import SortRating from "./SortRating";

const Dashboard = () => {

  const { students, studentNames } = useContext(AppContext);


 console.log("Students data is: ", students);
 console.log(studentNames)




  return (
    <>
      <Nav />
      <h1>Dashboard gemiddelde rating per opdracht</h1>
      <Chart />
      <SortRating />
    </>
  );
};

export default Dashboard;
