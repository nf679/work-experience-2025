// src/GraphPage.js

// Import necessary tools from React
import React, { useEffect, useState } from 'react';
// Axios is a library used to make HTTP requests (get data from back-end)
import axios from 'axios';
// Import the line chart component from the react-chartjs-2 library
import {  Chart, Scatter } from 'react-chartjs-2';
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

import annotationPlugin from "chartjs-plugin-annotation"
// Imports the plugin to draw lines on the graph

// Register all the imported chart components so chart.js knows how to use them
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, annotationPlugin );

let paths = ""; //Initializes the path variable


// A function for the main component shown on the graph page
export default function ExampleGraphPage() {
  const [chartData, setChartData] = useState(null); // This will hold the data for the chart
  const [xValue,setxValue] = useState(0) // Sets values for the X limit on the graph
  const [yValue,setyValue] = useState(0) // Sets values for the Y limit on the graph
  
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

  function updateLimits(){
    setxValue(document.getElementById("xValue").value); // Updates the x limit
    setyValue(document.getElementById("yValue").value); // Updates the y limit
  }
  // Contains all the options to modify the chart
    let chartOptions = {
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
                    // Set the title of tooltips to the path of the data
                    title: function(tooltipItems){
                        const index = tooltipItems[0].dataIndex;
                        return String(paths[index])
                    }
                }
                
            },
            annotation: {
              // Lists the different lines that are being drawn onto the graph
              annotations: [{
                // Settings for the horizontal line
                type: "line",
                mode: "horizontal",
                scaleID: "y",
                value: yValue,
                borderColor: "red",
                borderWidth: 2
              },
              {
                // Settings for the vertical line
                type: "line",
                mode: "vertical",
                scaleID: "x",
                value: xValue,
                borderColor: "blue",
                borderWidth: 2
              }
            ]
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
      <div>
        X:
        <input type="number" id="xValue" placeholder="X Boundary" style={{margin: "10px"}} />
      </div>
      <div>
        Y:
        <input type="number" id="yValue" placeholder="Y Boundary" style={{margin: "10px"}} />
        <button onClick={updateLimits} style={{backgroundColor: "#67bf4e", color: "white", borderColor: "#ffffff", borderRadius: "8px"}}>Update</button>
      </div>
    </div>
    
  );
}
