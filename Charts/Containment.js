import React from "react";
import GaugeChart from "react-gauge-chart";
import "chartjs-plugin-datalabels";
const options = { plugins: { datalabels: { display: false } } };
let dataTotal =Number(7968);
let containedtotal=Number(6347);
let remianingTotal = dataTotal - containedtotal;
let percentageCalculator =Math.round((containedtotal*100)/dataTotal);
console.log(percentageCalculator);
let Containment = () => {
  return (
    <React.Fragment>
      <div className="piechartMeaserments py-1">
        <div className="container border mt-4">
          <h5 className="p-2 graphs-fontsize">Containment</h5>
        </div>

        <div className="container border text-left">
          <h6 className="textalign-left p-1 graphs-subtitle">
            Total: <span className="graph-subtitle-color">7,968</span>
          </h6>
        </div>
        <div className="chart-remaing-part py-3 border">
          <div className="container text-left">
              <div className="row">
                  <div className="col-md-6">
                      <h6 className="textalign-left px-1 graphs-subtitle">
              Contained:{" "}
              <span className="graph-subtitle-color">{containedtotal}</span>
            </h6></div>
            
            <div className="col-md-6">
            <h6 className="textalign-left px-1 graphs-subtitle">
              Non Contained:{" "}
              <span className="graph-subtitle-color">{remianingTotal}</span>
            </h6>
            </div>
            </div>
          </div>
          <GaugeChart
            id="gauge-chart5"
            className="mx-auto my-auto charts-height-gauge"
            arcPadding={0}
            cornerRadius={0}
            nrOfLevels={2}
             colors={["rgba(0,128,0,1)", "rgba(255,177,64,1)"]}
            // colors={[
            // "rgba(255, 206, 86, 0.2)",
            // "rgba(255, 99, 132, 0.2)",
            // ]} 
            needleColor={"rgba(54, 162, 235, 1)"}
            needleBaseColor={"rgba(54, 162, 235, 1)"}
            percent={percentageCalculator*0.01}
            textColor={"#FF5F6D"}
            arcsLength={[containedtotal, remianingTotal]}
            options={options}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Containment;
