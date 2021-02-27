import React from "react";
import { Line } from "react-chartjs-2";

const chart = ({ info }) => {
  let lab = [];
  let points = [];
  info.map((val) => {
    lab.push(val.id);
  });
  info.map((val) => {
    points.push(val.points);
  });
  const data = {
    labels: lab,
    datasets: [
      {
        data: points,
        fill: false,
        borderColor: "#24669A",
        pointBackgroundColor: "#24669A",
      },
    ],
  };
  return (
    <div className="chart">
      <Line
        data={data}
        height={300}
        width={500}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            xAxes: [
              {
                gridLines: {
                  drawOnChartArea: false,
                },
                type: "category",
              },
            ],
          },
          legend: {
            display: false,
          },
        }}
      />
    </div>
  );
};

export default chart;
