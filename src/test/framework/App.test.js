import React from 'react';
import { render, screen } from '@testing-library/react';
import {MemoryRouter, Routes, Route } from "react-router-dom";
import App from '../../App';
import { AuthProvider } from '../../AuthContext';


test('renders guest layout and home page on "/" route', () => {
  render(
    <AuthProvider>
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    </AuthProvider>
  );
  expect(screen.findByText(/make your store stand out from the others.../i)).toBeInTheDocument();
});