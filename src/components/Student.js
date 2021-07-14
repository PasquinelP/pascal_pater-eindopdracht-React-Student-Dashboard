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
      <h3>Page of {name}</h3>
      <Chart />
      <SortRating />
    </div>
  );
};

export default Student;
