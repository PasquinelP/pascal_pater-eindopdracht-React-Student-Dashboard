import React from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import Chart from './Chart';
import SortRating from "./SortRating";

const Student = () => {
  const { name } = useParams();

  return (
    <div>
      <Nav />
      <h1 className="page-title">Rating per opdracht van {name}</h1>
      <Chart />
      <SortRating />
    </div>
  );
};

export default Student;
