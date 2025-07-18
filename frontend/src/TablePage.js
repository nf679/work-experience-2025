// src/TablePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function TablePage() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/data').then(res => {
      const { last_scan_date, path, children } = res.data;
      const arr = Object.values(children).map(child => ({
        parentPath: path,
        lastScanDate: last_scan_date,
        ...child
      }));
      setRows(arr);
    }).catch(console.error);
  }, []);

  if (rows.length === 0) return <p>Loading table…</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Table of children</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Parent Path</th>
            <th>Last Scan Date</th>
            <th>Child Path</th>
            <th>Count</th>
            <th>Size</th>
            <th>Mean Heat</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td>{r.parentPath}</td>
              <td>{r.lastScanDate}</td>
              <td>{r.path}</td>
              <td>{r.count}</td>
              <td>{r.size}</td>
              <td>{r.mean_heat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
