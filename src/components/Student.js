import React from "react";
import { useParams } from "react-router-dom";
import Chart from './Chart';

const Student = () => {
  const { name } = useParams();

  return (
    <div>
      <h3>Page of {name}</h3>
      <Chart />
    </div>
  );
};

export default Student;
