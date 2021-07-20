import React from "react";
import { NavLink } from "react-router-dom";

const StudentItem = ({student, name, click}) => {

  return (
    <li key={student.id}>
      {/* // only show checkboxes when we are not on a specific student page */}
      {name === undefined && (
        <input
          type="checkbox"
          id={student.id}
          value={student.name}
          checked={student.checked}
          onChange={(event) => click(event)}
        />
      )}
      <NavLink to={`/student/${student.name}`} activeClassName="selected">
        {student.name}
      </NavLink>
    </li>
  )
};

export default StudentItem;
