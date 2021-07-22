import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import Nav from "./Nav";
import Chart from './Chart';
import PanelSection from "./PanelSection";

const Dashboard = () => {

  const { students, studentNames } = useContext(AppContext);


 console.log("Students data is: ", students);
 console.log(studentNames)




  return (
    <>
      <Nav />
      <h1 className="page-title">Dashboard gemiddelde rating per opdracht</h1>
      <div className="grid-container">
        <Chart />
        <PanelSection />
      </div>
    </>
  );
};

export default Dashboard;
