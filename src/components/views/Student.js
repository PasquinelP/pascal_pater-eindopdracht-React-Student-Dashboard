import React from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import Chart from '../Chart';
import PanelSection from "./PanelSection";

const Student = () => {
  const { name } = useParams();

  return (
    <>
      <Nav />
      <h1 className="page-title">Rating per opdracht van {name}</h1>
      <div className="grid-container">
        <Chart />
        <PanelSection />
      </div>
    </>
  );
};

export default Student;
