/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import BlogList from './components/blog';

test('renders blog list correctly', () => {
  const { getByText } = render(<BlogList />);
  
  // Add assertions to test that the blog list renders correctly
  expect(getByText('Blog 1')).toBeInTheDocument();
  expect(getByText('John Doe')).toBeInTheDocument();
  // Add more assertions as needed
  
});