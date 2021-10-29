import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from "chartjs-plugin-datalabels";
const data = {
  labels: ['Refill', 'Order Status', 'Balance & Payment', 'Eligibility', 'Pricing', 'Retail pharmacy Locator','SOBA & EOB','Supplies'],
  datasets: [
    {
    //   label: '# of Votes',
      data: [1060, 440, 3060,764, 1282, 361, 1256,2432],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(155, 199, 132, 1)',
        'rgba(54, 182, 235, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: 'y',
  label:{
    display:true
},
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 2,
      height:25,
    },
  },
  responsive: true,
  
  plugins: {
    legend: {
      position: 'right',
      display:false
    },

  },
};

const Applevelcontainment = () => (
  <>
<div className="container border mt-4">
          <h5 className="p-2 graphs-fontsize">App Level Containment</h5>
        </div>

        <div className="container border text-left">
          <h6 className="textalign-left p-1 graphs-subtitle">
            Total: <span className="graph-subtitle-color">7,968</span>
          </h6>
        </div>
        <div className="chart-remaing-part border ">
    <Bar data={data} options={options} arcHeight={10} plugins={[ChartDataLabels]} className="charts-height-Applevel"  />
    </div>
  </>
);

export default Applevelcontainment;