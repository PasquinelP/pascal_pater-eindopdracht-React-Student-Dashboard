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
      console.log(typeof funFactor);
      return { assignmentType, funFactor, difficulty };
    }
  );

  console.log("Average rating per assignment", averageRatingPerAssignment);

  return (
    <div>
      <h1>Chart test</h1>
      <VictoryChart width={400} height={200} padding={20}>
        <VictoryLine
          y={() => 1}
          style={{
            data: {
              stroke: "#ccc",
              strokeWidth: 0.2,
            },
          }}
        />
        <VictoryLine
          y={() => 2}
          style={{
            data: {
              stroke: "#ccc",
              strokeWidth: 0.2,
            },
          }}
        />
        <VictoryLine
          y={() => 3}
          style={{
            data: {
              stroke: "red",
              strokeWidth: 0.2,
            },
          }}
        />
        <VictoryLine
          y={() => 4}
          style={{
            data: {
              stroke: "#cccccc",
              strokeWidth: 0.3,
            },
          }}
        />
        <VictoryLine
          y={() => 5}
          style={{
            data: {
              stroke: "#ccc",
              strokeWidth: 0.2,
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
                fontSize: 4,
                fill: "grey",
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
              fontSize: 4,
              fill: "#223243",
            },
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default Chart;
