// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExampleGraphPage from './pages/ExampleGraphPage';
import ExampleTablePage from './pages/ExampleTablePage';
import AppNavbar from './components/AppNavbar';
import Footer from './components/fwtheme-react-jasmin/Footer';
import HomePage from './pages/HomePage';


function App() {
  return (
    <>
    <AppNavbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/example-graph" element={<ExampleGraphPage />} />
          <Route path="/example-table" element={<ExampleTablePage />} />
        </Routes>
      </Router>
    <Footer />
      </>
  );
}

export default App;
