import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Sales() {
  const dataPoints = [];

  const options = {
    animationEnabled: true,
    title: {
      text: "Today",
      verticalAlign: "top",
      horizontalAlign: "left",
      padding: 10,
    },
    axisX: {
      interval: 3,
      minimum: 0,
      maximum: 24
    },
    axisY: {
      title: "Sales ($)",
      interval: 600,
      minimum: 0,
      maximum: 2400,
    },
    data: [
      {
        yValueFormatString: "$#,###",
        xValueFormatString: "HH:mm",
        type: "spline",
        dataPoints: [
					{ x: (0), y: 0 },
					{ x: (3), y: 300 },
					{ x: (6), y: 600 },
					{ x: (9), y: 650 },
					{ x: (12), y: 1200 },
					{ x: (15), y: 1800 },
					{ x: (18), y: 2350 },
					{ x: (21), y: 2350 },
					{ x: (24), y: "" },
				]
      },
    ],
  };

  return (
    <div className='chart-container'>
      <CanvasJSChart options={options} />
    </div>
  );
}

export default Sales;

