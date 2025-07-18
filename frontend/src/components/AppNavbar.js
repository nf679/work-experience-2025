import React from 'react'; // Import React to create components
import './AppNavbar.css';  // Import the CSS file for styling the navbar
import Navbar from 'react-bootstrap/Navbar';  // Import the navbar component from the template library
import Logo from './fwtheme-react-jasmin/Logo';  // Import the custom logo component

// This defines the function for the navbar component
const AppNavbar = () => (
  // Create a navbar that expands on large (lg) screens
  // It uses a dark theme and a 'success' (green) background (bg) colour
  <Navbar expand="lg" variant="dark" bg="success">
    {/* Make the logo a link back to the homepage "/" */}
    <a href="/">
      {/* Display the lgo inside the brand area with a height of 30 pixels */}
      <Navbar.Brand><Logo height={30} /></Navbar.Brand>
      {/* Add a toggle button to collapse the navbar on small screens */}
      <Navbar.Toggle />
    </a>
  </Navbar>
);

// Export the component so it can be used in other parts of the app.
export default AppNavbar;