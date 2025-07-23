// src/GraphPage.js

// Import necessary tools from React
import React, { useEffect, useState } from 'react';
// Axios is a library used to make HTTP requests (get data from back-end)
import axios from 'axios';
// Import the line chart component from the react-chartjs-2 library
import {  Scatter } from 'react-chartjs-2';
// Import parts to build and customise the chart
import {
  Chart as ChartJS,
  CategoryScale, // x-axis labels (categories)
  LinearScale, // y-axis values
  PointElement, // points on the line
  LineElement, // the line itself
  Title, // chart title
  Tooltip, // hover tooltips
  Legend // legend for the chart
} from 'chart.js';

// Register all the imported chart components so chart.js knows how to use them
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

let paths = ""; //Initializes the path variable


// A function for the main component shown on the graph page
export default function ExampleGraphPage() {
  const [chartData, setChartData] = useState(null); // This will hold the data for the chart

  // useEffect runs once when the page loads
  useEffect(() => {
    // Make a GET request to the FastAPI backend to get JSON data
    axios.get('http://localhost:8000/api/heat-data')
      .then(res => {
        const data = res.data;
        // Extract the path and total_count values from each data item
        const labels = Object.values(data).map(entry => entry.total_size); // x-axis labels
        const counts = Object.values(data).map(entry => entry.total_heat); // y-axis data
        paths = Object.values(data).map(entry => entry.path) // Contains the path data

        // Create chart data in the format required by chart.js
        setChartData({
          labels, // x-axis
          datasets: [
            {
              label: 'Total Heat', // Name shown in the legend
              data: counts, // y-axis data
              fill: false, // Don't fill under the line
              borderColor: 'blue', // Line colour
              tension: 0.3 // Smoothness of the line (0=sharp angles, 1=super smooth)
            }
          ]
        });
      })
      .catch(console.error); // Log an error if something goes wrong
      
  }, []);  
  // Contains all the options to modify the chart
  const chartOptions = {
        plugins:{
            title:{
                // Settings for the chart title
                display: true,
                text: "Total Heat vs Total Size",
                font: {
                    size: 30,
                    weight: "bolder"
                }
            },
            tooltip: {
                enabled: true,
                callbacks: {
                    title: function(tooltipItems){
                        const index = tooltipItems[0].dataIndex;
                        return String(paths[index])
                    }
                }
                
            }
        },
        scales:{
                y:{
                    //Settings for the y axis
                    title:{
                        display:true,
                        text: "Total Heat"
                    }
                },
                x: {
                    //Settings for the x axis
                    title: {
                        display: true,
                        text: "Total Size"
                    }
                }
            }}

  // Show a loading message while the data is still being fetched
  // !chartData means chartData is null/empty
  if (!chartData) return <p>Loading graph…</p>;

  // Once data is loaded, display the chart
  return (
    <div style={{ padding: '20px' }}>
      <h2>Total Heat vs Total Size</h2>
      <Scatter data={chartData} options = {chartOptions}/>
    </div>
  );
}
