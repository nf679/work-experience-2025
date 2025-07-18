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

export default function GraphPage() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/data').then(res => {
      const data = res.data.children;
      const labels = Object.values(data).map((_, i) => `Child ${i}`);
      const counts = Object.values(data).map(c => c.count);
      setChartData({
        labels,
        datasets: [
          {
            label: 'Count by child path',
            data: counts,
            fill: false,
            borderColor: 'blue'
          }
        ]
      });
    }).catch(console.error);
  }, []);
  console.log(chartData);

  if (!chartData) return <p>Loading graph…</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Graph of child counts</h2>
      <Line data={chartData} />
    </div>
  );
}
