import React, {useContext} from "react";
import { AppContext } from "./AppContext";
import AssignmentItem from "./AssignmentItem";

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

  const selectAllAssignments = () => {
    const assignmentTypesCopy = [...assignmentTypes];
    const allAssignmentsChecked = assignmentTypesCopy.map((type) => {
      if(type.checked === false) {
        type.checked = true;
      }
      return type;
    })
    setAssignmentTypes(allAssignmentsChecked);
  }

  console.log("Assignment selected is", assignmentTypes)

  const assignments = assignmentTypes.map((type) => (
    <AssignmentItem key={type.id} type={type} click={assignmentChecked} />
  ));

  return (
    <div className="panel panel--action select-assignment">
      <h3 className="panel__title">Selecteer opdracht</h3>
      <ul>{assignments}</ul>
      <button onClick={() => selectAllAssignments()}>
        Selecteer alle opdrachten
      </button>
    </div>
  );
};

export default SelectAssignment;
