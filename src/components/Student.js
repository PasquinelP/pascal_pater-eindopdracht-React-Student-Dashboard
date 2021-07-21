import React from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import Chart from './Chart';
import SortRating from "./SortRating";
import SelectAssignment from "./SelectAssignment";

const Student = () => {
  const { name } = useParams();

  return (
    <>
      <Nav />
      <h1 className="page-title">Rating per opdracht van {name}</h1>
      <Chart />
      <SortRating />
      <SelectAssignment />
    </>
  );
};

export default Student;
