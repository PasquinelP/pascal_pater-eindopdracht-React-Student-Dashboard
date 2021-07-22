import React, { useContext } from "react";
import { AppContext } from "../AppContext";

const SelectChart = () => {

  const { selectedChart, setSelectedChart} = useContext(AppContext);

  const setChart = (event) => {
    const value = event.target.value;
    if (value === "barchart") {
      setSelectedChart(value);
    } else if (value === "linechart") {
      setSelectedChart(value);
    }
  };

  return (
    <div className="select-chart">
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
