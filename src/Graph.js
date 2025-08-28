import React from 'react';
import { Line } from 'react-chartjs-2'; // Import the Line chart component from react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components in Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = () => {
  // Data for the chart
  const data = {
    labels: ['Point 1', 'Point 2'], // X-axis labels for the data points
    datasets: [
      {
        label: 'My First Dataset',  // Dataset label
        data: [10, 20],  // Data points (y-values)
        fill: false,  // Whether to fill the area under the line (false for a line chart)
        borderColor: 'rgb(75, 192, 192)',  // Line color
        tension: 0.1,  // Line smoothness
      },
    ],
  };

  // Options for the chart (optional)
  const options = {
    responsive: true,  // Make the chart responsive
    plugins: {
      legend: {
        position: 'top',  // Legend position
      },
      tooltip: {
        enabled: true,  // Enable tooltips on hover
      },
    },
  };

  return (
    <div>
      <h2>Simple Line Chart with Two Data Points</h2>
      <Line data={data} options={options} />  {/* Render the Line chart */}
    </div>
  );
};

export default Graph;