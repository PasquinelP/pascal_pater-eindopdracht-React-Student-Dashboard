import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const SelectChart = () => {

  const { selectedChart, setSelectedChart} = useContext(AppContext);

  console.log("Selected chart is", selectedChart);

  const setChart = (event) => {
    const value = event.target.value;
    if (value === "barchart") {
      setSelectedChart(value);
    } else if (value === "linechart") {
      setSelectedChart(value);
    }
  };

  console.log("chart is", selectedChart);
 

  return (
    <div className="select-chart">
      <h3>Selecteer bar chart of line chart</h3>
      <ul className="select-chart__buttons">
        <li>
          <input
            type="radio"
            id="barchart"
            name="selectchart"
            value="barchart"
            checked={selectedChart === "barchart"}
            onChange={(event) => setChart(event)}
          />
          <label htmlFor="barchart">Bar chart</label>
        </li>
        <li>
          <input
            type="radio"
            id="linechart"
            name="selectchart"
            value="linechart"
            checked={selectedChart === "linechart"}
            onChange={(event) => setChart(event)}
          />
          <label htmlFor="linechart">Line chart</label>
        </li>
      </ul>
    </div>
  );
};

export default SelectChart;
