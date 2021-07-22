import React from "react";
import SortRating from "./SortRating";
import SelectAssignment from "./SelectAssignment";

const PanelSection = () => {
  return (
    <section className="panel-section">
      <SortRating />
      <SelectAssignment />
    </section>
  );
};

export default PanelSection;
