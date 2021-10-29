import React from "react";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

const data = {
  labels: ["Agent Help","Agent Request", "Bot" ],
  datasets: [
    {
      // label: '# of Votes',
      data: [3217, 1597, 3154],
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
let Agenttransfer = () => {
  return (
    <React.Fragment>
      <div className="piechartMeaserments py-1">
        <div className="container border mt-4">
          <h5 className="p-2 graphs-fontsize">Caller Intent</h5>
        </div>

        <div className="container border text-left">
          <h6 className="textalign-left p-1 graphs-subtitle">
            Total: <span className="graph-subtitle-color">7,968</span>
          </h6>
        </div>
        <div className="chart-remaing-part border ">
          <Pie
            data={data}
            className="px-2 my-2 charts-height-pie"
            plugins={[ChartDataLabels]}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Agenttransfer;
