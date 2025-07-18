import React from 'react'; // Import react so we can create components
import ReactDOM from 'react-dom/client'; // Import reactDOM so we can render the app in the browser
import './index.css'; // Import global CSS styles
import App from './App'; // Import the. top-level app component

// Create a root where the React app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  // StrictMode helps catch potential problems during development
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
