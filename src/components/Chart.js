import React, { useContext } from "react";
import { VictoryBar, VictoryChart, VictoryGroup, VictoryAxis, VictoryLabel, VictoryLine, VictoryLegend, VictoryTooltip } from "victory";
import { AppContext } from "./AppContext";
import { useParams } from "react-router-dom";

const Chart = () => {
  const { name } = useParams();
  const { students, assignmentTypes, sort } = useContext(AppContext);

  console.log("Assignment types", assignmentTypes);

  // check which name is clicked and get all assignments with ratings
  const clickedName = name
    ? students.filter((student) => student.name === name)
    : students.filter((student) => student.checked);

  console.log("Clicked name is", clickedName);

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
    clickedName.forEach((student) => {
      if (student.assignment === type.assignmentType) {
        assignmentType = student.assignment;
        difficultyArray.push(parseInt(student.difficulty));
        funFactorArray.push(parseInt(student.funFactor));
        difficulty =
          difficultyArray.reduce((a, b) => a + b) / difficultyArray.length;
        funFactor =
          funFactorArray.reduce((a, b) => a + b) / funFactorArray.length;
      }
    });
    return { assignmentType, funFactor, difficulty };
  });

  console.log("Average rating per assignment", averageRatingPerAssignment);

  // check which sorting rating button is selected and sort accordingly
  const sortRating = () => {
    if (sort.sortDifficulty) {
      return averageRatingPerAssignment.sort((a, b) => b.difficulty - a.difficulty);
    } else if (sort.sortFunFactor) {
      return averageRatingPerAssignment.sort((a, b) => b.funFactor - a.funFactor);
    } else {
       return averageRatingPerAssignment ;
    }
  }

 sortRating();

  return (
    <div className="chart-container">
      <p>Clicked name is: {name}</p>
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
            labels={({ datum }) =>
              `${datum.assignmentType} \n Moeilijk: ${datum.difficulty}`
            }
            labelComponent={
              <VictoryTooltip
                flyoutWidth={60}
                flyoutHeight={16}
                cornerRadius={2}
                pointerLength={6}
                pointerWidth={4}
                flyoutStyle={{
                  stroke: "#d35d4f",
                  strokeWidth: 0.4,
                  fill: "#d6e2f0",
                }}
                style={{
                  fontSize: 6,
                  fill: "#1d334a",
                }}
              />
            }
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
            labels={({ datum }) =>
              `${datum.assignmentType} \n Leuk: ${datum.funFactor}`
            }
            labelComponent={
              <VictoryTooltip
                flyoutWidth={60}
                flyoutHeight={16}
                cornerRadius={2}
                pointerLength={6}
                pointerWidth={4}
                flyoutStyle={{
                  stroke: "#96b97d",
                  strokeWidth: 0.4,
                  fill: "#d6e2f0",
                }}
                style={{
                  fontSize: 6,
                  fill: "#1d334a",
                }}
              />
            }
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
        <VictoryLegend
          x={180}
          y={0}
          orientation="horizontal"
          data={[
            {
              name: "Moeilijk",
              symbol: { fill: "#d35d4f" },
            },
            {
              name: "Leuk",
              symbol: { fill: "#96b97d" },
            },
          ]}
          style={{
            labels: {
              fontSize: 6,
              fill: "#1d334a",
            },
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default Chart;
