import React, {useContext} from "react";
import { AppContext } from "./AppContext";

const SelectAssignment = () => {

  const { assignmentTypes, setAssignmentTypes } = useContext(AppContext);


  const assignmentChecked = (event) => {
    const value = event.target.value;
    const assignmentTypesCopy = [...assignmentTypes];
    const assignmentTypesCheckedList = assignmentTypesCopy.map((type) => {
      if (type.assignmentType === value) {
        type.checked = !type.checked;
      }
      return type;
    });
    setAssignmentTypes(assignmentTypesCheckedList);
  };

  console.log("Assignment selected is", assignmentTypes)

  const assignments = assignmentTypes.map((type) => (
    <li key={type.id}>
      <input
        type="checkbox"
        id={type.id}
        value={type.assignmentType}
        checked={type.checked}
        onChange={(event) => assignmentChecked(event)}
      />
      {type.assignmentType}
    </li>
  ));

  return (
    <div className="select-assignment">
      <h3>Selecteer opdracht</h3>
      <ul>
        {assignments}
      </ul>
    </div>
  );
};

export default SelectAssignment;
