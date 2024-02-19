import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["M", 5],
  ["F", 5], // CSS-style declaration
];

export const options = {
  pieHole: 0.3,
};

const Pie = () => {
  return (
    <div className="pie">
      <h2>Students</h2>
      <Chart
        chartType="PieChart"
        width="250px"
        height="300px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default Pie;
