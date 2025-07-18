// Import functions to render components and access the screen (DOM)
import { render, screen } from '@testing-library/react';
// Import the app component we are testing
import App from './App';

// This is a test case to check if the homepage shows the dashboard heading correctly
test('renders learn react link', () => {
  // Render the app component (like loading the website)
  render(<App />);

  // Look for text that says 'GWS Scanner Admin Dashboard'
  const linkElement = screen.getByText(/GWS Scanner Admin Dashboard/i);

  // Check that the element is in the page (i.e. it was rendered correctly)
  expect(linkElement).toBeInTheDocument();
});
