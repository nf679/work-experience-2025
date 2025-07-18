import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function GwsTable() {
  const [rawData, setRawData] = useState({});
  // sortBy can be 'index' or 'date'
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('descending'); // 'ascending' or 'descending'

  useEffect(() => {
    axios.get('http://localhost:8000/api/full-GWS-data')
      .then(res => setRawData(res.data))
      .catch(console.error);
  }, []);

  // Prepare data array
  const baseArr = Object.values(rawData).map((entry, idx) => ({
    originalIndex: idx + 1,
    label: entry.path,
    date: entry.last_scan_date,
  }));

  // Sort data depending on sortBy and sortOrder
  const sortedArr = [...baseArr].sort((a, b) => {
    if (sortBy === 'index') {
      return sortOrder === 'ascending' 
        ? a.originalIndex - b.originalIndex 
        : b.originalIndex - a.originalIndex;
    } else if (sortBy === 'date') {
      return sortOrder === 'ascending'
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date);
    }
    return 0;
  });

  // Helper to toggle sorting
  function toggleSort(column) {
    if (sortBy === column) {
      // toggle order
      setSortOrder(sortOrder === 'ascending' ? 'descending' : 'ascending');
    } else {
      // switch column and default to descending
      setSortBy(column);
      setSortOrder('descending');
    }
  }

  // Arrow indicator component
  const SortArrow = ({ column }) => {
    if (sortBy !== column) return null;
    return sortOrder === 'ascending' ? ' ▲' : ' ▼';
  };

  // Dropdown UI for sorting toggles (styled minimal for inline)
  const SortDropdown = ({ column, label }) => (
    <div style={{ display: 'inline-block', position: 'relative', cursor: 'pointer', userSelect: 'none' }} onClick={() => toggleSort(column)}>
      {label}
      <span>{sortBy === column ? (sortOrder === 'ascending' ? ' ▲' : ' ▼') : ' ▾'}</span>
    </div>
  );

  return (
    <div style={{ padding: '20px' }}>
      <h3>GWS Paths and Scan Dates</h3>

      <div className="card" style={{ backgroundColor: '#f8f9fa', borderRadius: '0' }}>
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th><SortDropdown column="index" label="#" /></th>
              <th>Path</th>
              <th><SortDropdown column="date" label="Last Scan Date" /></th>
            </tr>
          </thead>
          <tbody>
            {sortedArr.map((entry) => (
              <tr key={entry.label}>
                <td>{entry.originalIndex}</td>
                <td style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '300px' }}>
                  <code>{entry.label}</code>
                </td>
                <td>{entry.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

