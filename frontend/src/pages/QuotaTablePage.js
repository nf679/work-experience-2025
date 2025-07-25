import React, { useEffect, useState } from 'react'; // Import the React libraries we need
import axios from 'axios'; // Import axios for making HTTP requests (to get data from back-end)

// Function defining the main component for displaying the table of GWS data
export default function QuotaTablePage() {
  const [rawData, setRawData] = useState({}); // Holds raw data fetched straight from back-end

  // sortBy decides which column we're sorting by (index or date)
  const [sortBy, setSortBy] = useState('index');

  // sortOrder controls whether the data is sorted from smallest to largest or largest to smallest
  const [sortOrder, setSortOrder] = useState('descending');

  // This useEffect runs once when the component first loads
  useEffect(() => {
    // Fetch data from the FastAPI backend
    axios.get('http://localhost:8000/api/full-GWS-quota')
      .then(res => setRawData(res.data)) // Save the result in state
      .catch(console.error); // Show error in the console if the request fails
  }, []);
  // Turn the raw data into an array of entries we can display in a table
  const baseArr = Object.values(rawData).map((entry, idx) => ({
    originalIndex: idx + 1,      // The original position in the data 
    label: entry.path,           // The path name
    totalSize: entry.total_size,
    quotaValue: entry.quota_value
  }));

  // Sort data depending on sortBy and sortOrder
  const sortedArr = [...baseArr].sort((a, b) => {
    // If we are sorting by index:
    if (sortBy === 'index') {
      return sortOrder === 'ascending' 
        // If we are sorting in ascending order do this:
        ? a.originalIndex - b.originalIndex 
        // Otherwise do this:
        : b.originalIndex - a.originalIndex;
    // If we are sorting by date: 
    } else if (sortBy === 'date') {
      return sortOrder === 'ascending'
        // If we are sorting in ascending order do this: 
        ? new Date(a.date) - new Date(b.date)
        // Otherwise do this:
        : new Date(b.date) - new Date(a.date);
    } else if (sortBy === 'totalSize') {
      return sortOrder === 'ascending'
        //ascent
        ? a.totalSize - b.totalSize
        //descent
        : b.totalSize - a.totalSize
    } else if (sortBy === 'quotaValue') {
      return sortOrder === 'ascending'
      //ascent
      ? a.quotaValue - b.quotaValue
      //descent
      : b.quotaValue - a.quotaValue
    }
    return 0; // Fallback option - shouldn't be reached!
  });

  // When a column header is clicked, this function updates sortBy and sortOrder
  function toggleSort(column) {
    if (sortBy === column) {
      // If we're already sorting by this column, just flip the order
      setSortOrder(sortOrder === 'ascending' ? 'descending' : 'ascending');
    } else {
      // If switching to a new column, default to descending order
      setSortBy(column);
      setSortOrder('descending');
    }
  }

  // Small arrow icon to show current sort direction next to the column header
  const SortArrow = ({ column }) => {
    if (sortBy !== column) return null; // Only show the arrow if this column is being sorted
    return sortOrder === 'ascending' ? ' ▲' : ' ▼';
  };

  // Dropdown-like component for sorting when you click the column name
  const SortDropdown = ({ column, label }) => (
    <div style={{ display: 'inline-block', position: 'relative', cursor: 'pointer', userSelect: 'none' }} onClick={() => toggleSort(column)}>
      {label}
      <span>{sortBy === column ? (sortOrder === 'ascending' ? ' ▲' : ' ▼') : ' ▾'}</span>
    </div>
  );

  // This is what actually gets shown on the screen
  return (
    <div style={{ padding: '20px' }}>
      <h3>GWS Paths and Scan Dates</h3>

      <div className="card" style={{ backgroundColor: '#f8f4fa', borderRadius: '5', borderWidth: "10px", borderColor: "transparent" }}>
        <table className=" table-hover table-striped">
          <thead>
            <tr>
              <th><SortDropdown column="index" label="#" /></th>
              <th>Path</th>
              <th><SortDropdown column="totalSize" label="Size" /></th>
              <th><SortDropdown column="quotaValue" label="Quota" /></th>
            </tr>
          </thead>
          <tbody>
            {sortedArr.map((entry) => (
              <tr key={entry.label}>
                <td style={{ backgroundColor: entry.totalSize> entry.quotaValue ? "#B3C5F3":'transparent',borderColor:"transparent",borderWidth:"10px"}}>
                  <code>{entry.originalIndex}</code>
                </td>
                <td style={{whiteSpace: 'nowrap',textOverflow: 'ellipsis', maxWidth: '300px' ,backgroundColor: entry.totalSize> entry.quotaValue ? "#b3c5f3ff":'transparent' ,borderColor:"transparent",borderWidth:"10px"}}>
                  <code>{entry.label}</code> 
                </td>
                <td style={{ backgroundColor: entry.totalSize>entry.quotaValue ? "#B3C5F3":'transparent',borderColor:"transparent",borderWidth:"10px"}}>
                  <code>{entry.totalSize}</code>
                </td>
                <td style={{ backgroundColor: entry.totalSize> entry.quotaValue ? "#B3C5F3":'transparent' ,borderColor:"transparent",borderWidth:"10px"}}>
                  <code>{entry.quotaValue}</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

//, overflow: 'hidden'