import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '../../components/Login';

//mock firebase auth
jest.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: jest.fn(),
}));

import { signInWithEmailAndPassword } from 'firebase/auth';

describe('Login Component With Firebase', () => {
  beforeEach(() => {
    jest.clearAllMocks(); //Reset mocks before each test
  })
});

it('calls Firebase signInWithEmailAndPassword on form submit', async () => {
  //Mocks the resolved value (Successful Login)
  signInWithEmailAndPassword.mockResolvedValue({
    user: { uid: '123' },
  });

  render(<Login />);
  fireEvent.change(screen.getByPlaceholderText('Email'), {
    target: { value: 'test@example.com' },
  });
  fireEvent.change(screen.getAllByPlaceholderText('Password'), {
    target: { value: 'password123' },
  });

  fireEvent.click(screen.getByText('Login'));

  await waitFor(() => {
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
      expect.anything(), //the auth object
      'test@example.com',
      'password123',
    );
  });
});

it('display error on login failure', async () => {
  signInWithEmailAndPassword.mockRejectedValue(new Error('invalid Login'));
  render(<Login />);
  fireEvent.change(screen.getByPlaceholderText('Email'), {
    target: { value: 'bad@example.com' },
  });
  fireEvent.change(screen.getByPlaceholderText('Password'), {
    target: { value: 'wrongpassword' },
  });
  fireEvent.click(screen.getByText('Login'));
  await waitFor(() => {
    expect(screen.getByText('Login failed')).toBeInTheDocument();
  });
});
