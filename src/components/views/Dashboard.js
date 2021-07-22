import React from "react";
import Nav from "./Nav";
import Chart from '../Chart';
import PanelSection from "./PanelSection";

const Dashboard = () => {

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
