import React from 'react';
import { render, screen } from '@testing-library/react';
import {MemoryRouter, Routes, Route } from "react-router-dom";
// import App from '../../App';
import { AuthProvider } from '../../AuthContext';
import Home from '../../pages/guest/Home';

    jest.setTimeout(10000); // ⏱ Set timeout to 10 seconds

test('renders guest layout and home page on "/" route', async() => {

  render(
    <MemoryRouter initialEntries={['/']}>
      <AuthProvider>
          <Home />
      </AuthProvider>
    </MemoryRouter>
  );
  const element = await screen.findByText(/from following/i);
  expect(element).toBeInTheDocument();
});