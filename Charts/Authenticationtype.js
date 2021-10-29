import React from 'react';
import {Bar} from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const data = {
    labels: ['Failed Auth', 'Fully Auth', 'Partial Auth'],
    datasets: [
      {
        // label: '# of Votes',
        data: [2890, 2712, 2366],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
        
            
      },
    ],
  };
  
let Authenticationtype =()=>{
    return(
        <React.Fragment>
            <div className="piechartMeaserments py-1">
            <div className="container border mt-4">
          <h5 className="p-2 graphs-fontsize">Authentication Type</h5>
        </div>

        <div className="container border text-left">
          <h6 className="textalign-left p-1 graphs-subtitle">
            Total: <span className="graph-subtitle-color">7,968</span>
          </h6>
        </div>
                <div className="chart-remaing-part  border">
            <Bar data={data} className="p-2 charts-height" plugins={[ChartDataLabels]} options={{
          responsive: true,
          maintainAspectRatio: false,
        }}/>
            </div>
            </div>

        </React.Fragment>
    )

}
export default Authenticationtype;