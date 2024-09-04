import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store'; // Adjust the path to your actual store
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders home page correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <Router> 
        <App />
      </Router>
    </Provider>
  );

  // Use container to manually inspect the rendered output
  console.log(container.innerHTML); // Log HTML to console

  // Adjust this expectation based on the actual text in your App component
  expect(screen.getByText(/home/i)).toBeInTheDocument(); // Example text
});
