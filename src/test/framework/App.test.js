import React from 'react';
import { render, screen } from '@testing-library/react';
import {MemoryRouter, Routes, Route } from "react-router-dom";
import App from '../../App';
import { AuthProvider } from '../../AuthContext';

test('renders the App component within AuthProvider and StrictMode', () => {
  render(
    <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </React.StrictMode>
  );
  expect(screen.getByText(/Make your store stand out from the others.../i)).toBeInTheDocument();
});