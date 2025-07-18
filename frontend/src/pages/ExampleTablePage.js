// src/TablePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ExampleTablePage() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/full-GWS-data')
      .then(res => {
        const entries = Object.values(res.data).map(entry => ({
          path: entry.path,
          lastScanDate: entry.last_scan_date
        }));
        setRows(entries);
      })
      .catch(console.error);
  }, []);

  if (rows.length === 0) return <p>Loading table…</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>GWS Path Summary</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Path</th>
            <th>Last Scan Date</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td>{r.path}</td>
              <td>{r.lastScanDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
