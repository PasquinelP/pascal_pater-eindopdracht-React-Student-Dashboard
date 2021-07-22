import React from "react";

const AssignmentItem = ({type, click}) => {

  return (
    <li key={type.id}>
      <input
        type="checkbox"
        id={type.id}
        value={type.assignmentType}
        checked={type.checked}
        onChange={(event) => click(event)}
      />
      {type.assignmentType}
    </li>
  );
};

export default AssignmentItem;
