import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>GWS Scanner Admin Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/example-graph">Example Graph Page</Link></li>
          <li><Link to="/example-table">Example Table Page</Link></li>
        </ul>
      </nav>
    </div>
  );
}