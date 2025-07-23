import React from "react"; // Import React so we can define components
import { Link } from "react-router-dom"; // Import Link so we can navigate between pages

// Function defining a simple homepage component
export default function HomePage() {
  return (
    <div style={{ padding: '20px' }}>
      {/* Main heading for the page */}
      <h1>GWS Scanner Admin Dashboard</h1>
      {/* Navigation menu */}
      <nav>
        <ul>
          <li><Link to="/example-graph">Example Graph Page</Link></li>
          <li><Link to="/example-table">Example Table Page</Link></li>
          <li><Link to="/overview-table">Example Table Page</Link></li>
          <li><Link to="/heat-vs-size-graph">Heat vs Size Graph</Link></li>
        </ul>
      </nav>
    </div>
  );
}