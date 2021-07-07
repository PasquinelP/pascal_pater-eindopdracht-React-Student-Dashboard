import React, { useContext } from "react";
import { VictoryBar, VictoryChart, VictoryGroup, VictoryAxis, VictoryLabel, VictoryLine } from "victory";
import { AppContext } from "./AppContext";

const Chart = () => {
  const { students, assignmentTypes } = useContext(AppContext);

  console.log("Assignment types", assignmentTypes)

  // get the average rating for funFactor and difficulty per assignment
  // go through the assignment types, then for each student in data
  // check if the assignment matches the assignment type
  // then get the assignment name, difficulty and funFactor
  // finally get the sum of the difficulty and funfactor for each
  // divide by the length of funfactor and difficulty array to get average
  const averageRatingPerAssignment = assignmentTypes.map((type) => {
      let assignmentType = "";
      const funFactorArray = [];
      const difficultyArray = [];
      let funFactor = null;
      let difficulty = null;
      students.forEach((student) => {
        if (student.assignment === type.assignmentType) {
          assignmentType = student.assignment;
          difficultyArray.push(parseInt(student.difficulty));
          funFactorArray.push(parseInt(student.funFactor));
          difficulty = difficultyArray.reduce((a, b) => a + b) / difficultyArray.length;
          funFactor = funFactorArray.reduce((a, b) => a + b) / funFactorArray.length;
        }
      });
      return { assignmentType, funFactor, difficulty };
    }
  );

  console.log("Average rating per assignment", averageRatingPerAssignment);

  return (
    <div>
      <h1>Chart test</h1>
      <VictoryChart padding={{ top: 20, bottom: 60, left: 20, right: 20 }}>
        <VictoryLine
          y={() => 1}
          style={{
            data: {
              stroke: "#dcdbdb",
              strokeWidth: 0.2,
            },
          }}
        />
        <VictoryLine
          y={() => 2}
          style={{
            data: {
              stroke: "#dcdbdb",
              strokeWidth: 0.8,
            },
          }}
        />
        <VictoryLine
          y={() => 3}
          style={{
            data: {
              stroke: "#dcdbdb",
              strokeWidth: 0.8,
            },
          }}
        />
        <VictoryLine
          y={() => 4}
          style={{
            data: {
              stroke: "#dcdbdb",
              strokeWidth: 0.8,
            },
          }}
        />
        <VictoryLine
          y={() => 5}
          style={{
            data: {
              stroke: "#dcdbdb",
              strokeWidth: 0.8,
            },
          }}
        />
        <VictoryGroup offset={160 / averageRatingPerAssignment.length}>
          <VictoryBar
            data={averageRatingPerAssignment}
            x="assignmentType"
            y="difficulty"
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={averageRatingPerAssignment.map(
              (item) => item.assignmentType
            )}
            barWidth={130 / averageRatingPerAssignment.length}
            style={{ data: { fill: "#d35d4f" } }}
            animate={{
              duration: 1200,
              onLoad: { duration: 1000 },
            }}
          />
          <VictoryBar
            data={averageRatingPerAssignment}
            x="assignmentType"
            y="funFactor"
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={averageRatingPerAssignment.map(
              (item) => item.assignmentType
            )}
            barWidth={130 / averageRatingPerAssignment.length}
            style={{ data: { fill: "#96b97d" } }}
            animate={{
              duration: 1200,
              onLoad: { duration: 1000 },
            }}
          />
        </VictoryGroup>
        <VictoryAxis
          style={{
            ticks: {
              fill: "transparent",
              size: 2,
              stroke: "black",
              strokeWidth: 1,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
          }}
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={averageRatingPerAssignment.map(
            (item) => item.assignmentType
          )}
          tickLabelComponent={
            <VictoryLabel
              angle={-45}
              dx={5}
              dy={-8}
              style={{
                fontSize: 5,
                fill: "#1d334a",
              }}
              textAnchor={"end"}
            />
          }
        />
        <VictoryAxis
          dependentAxis
          domain={[0, 5]}
          style={{
            tickLabels: {
              fontSize: 5,
              fill: "#1d334a",
            },
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default Chart;
