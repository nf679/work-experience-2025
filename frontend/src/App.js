// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GraphPage from './GraphPage';
import TablePage from './TablePage';
import AppNavbar from './components/AppNavbar';
import Footer from './components/fwtheme-react-jasmin/Footer';

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>GWS Scanner admin dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/graph">View Graph</Link></li>
          <li><Link to="/table">View Table</Link></li>
        </ul>
      </nav>
    </div>
  );
}

function App() {
  return (
    <>
    <AppNavbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/graph" element={<GraphPage />} />
          <Route path="/table" element={<TablePage />} />
        </Routes>
      </Router>
    <Footer />
      </>
  );
}

export default App;
