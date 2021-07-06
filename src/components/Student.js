import React from "react";
import { useParams } from "react-router-dom";

const Student = () => {
  const { name } = useParams();

  return (
    <div>
      <h3>Page of {name}</h3>
    </div>
  );
};

export default Student;
