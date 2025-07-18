// src/GraphPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function ExampleGraphPage() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/full-GWS-data')
      .then(res => {
        const data = res.data;
        const labels = Object.values(data).map(entry => entry.path);
        const counts = Object.values(data).map(entry => entry.total_count);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Total Count by Path',
              data: counts,
              fill: false,
              borderColor: 'blue',
              tension: 0.3
            }
          ]
        });
      })
      .catch(console.error);
  }, []);

  if (!chartData) return <p>Loading graph…</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>GWS Path vs Total Count</h2>
      <Line data={chartData} />
    </div>
  );
}
