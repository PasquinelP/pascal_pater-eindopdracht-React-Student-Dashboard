import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import { Link } from "react-router-dom";

const StudentItem = () => {
  
  const { studentNames } = useContext(AppContext);

  const itemsList = studentNames.map((student) => (
    <li key={student.id}>
      <Link to={`/student/${student.name}`}>{student.name}</Link>
    </li>
  ));

  return (
    <>
      {itemsList}
    </>
  );
};

export default StudentItem;
