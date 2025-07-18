import React from 'react';
import './AppNavbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './fwtheme-react-jasmin/Logo';

const AppNavbar = () => (
  <Navbar expand="lg" variant="dark" bg="success">
    <a href="/">
      <Navbar.Brand><Logo height={30} /></Navbar.Brand>
      <Navbar.Toggle />
    </a>
  </Navbar>
);

export default AppNavbar;