import { Component } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

class CcaChart extends Component {
  render() {
    const { chartData } = this.props;
    console.log(chartData);

    return (
      <>
        <BarChart width={700} height={350} data={chartData} className="mb-8">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="additions" fill="#02a6e3" />
          <Bar dataKey="deletions" fill="#dc3c30" />
          <Bar dataKey="commits" fill="#478e37" />
        </BarChart>
      </>
    );
  }
}

export default CcaChart;
