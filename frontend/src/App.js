// src/App.js
import React from 'react'; // Import React to build components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing tools for navigation
// Import the individual page components
import ExampleGraphPage from './pages/ExampleGraphPage';
import ExampleTablePage from './pages/ExampleTablePage';
import OverviewPage from './pages/OverviewPage';
import HeatVsSizeGraph from './pages/HeatVsSizeGraphPage';
import AppNavbar from './components/AppNavbar';
import Footer from './components/fwtheme-react-jasmin/Footer';
import HomePage from './pages/HomePage';

// This is the main App component wraping everything in the website
function App() {
  return (
    <>
    {/* Show the nav bar at the top of every page */}
    <AppNavbar />
    {/* Define all the routes (pages) inside the app */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/example-graph" element={<ExampleGraphPage />} />
          <Route path="/example-table" element={<ExampleTablePage />} />
          <Route path="/overview-table" element={<OverviewPage />} />
          <Route path="/heat-vs-size-graph" element={<HeatVsSizeGraph />} />
          <Route path="/overview-page" element={<OverviewPage />} />
        </Routes>
      </Router>
    {/* Show the footer at the bottom of every page */}
    <Footer />
      </>
  );
}

// Export the app so it can be used by index.js to display the website
export default App;
