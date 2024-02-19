import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 0,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 2,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 1,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 4,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "June",
    uv: 10,
    pv: 3800,
    amt: 2500,
  },
];

export default class GraphChart extends PureComponent {
  render() {
    return (
      <div style={{ width: "100%", height: 300 }}>
        <h3>Exam Graph</h3>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
