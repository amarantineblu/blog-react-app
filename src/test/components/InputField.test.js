import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputField from '../../pages/dashboard/dashboard components/InputField';

describe('InputField component', () => {
  
  test('renders a text input with label', () => {
    render(<InputField label="Name" name="username" type="text" onChange={() => {}} />);

    const input = screen.getByLabelText(/name/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  test('renders a textarea when isTextArea is true', () => {
    render(<InputField label="Bio" name="bio" isTextArea={true} onChange={() => {}} />);
    const textarea = screen.getByLabelText(/bio/i);
    expect(textarea.tagName).toBe('TEXTAREA');
  });

  test('renders a select input when type is select', () => {
    render(<InputField label="State" name="state" type="select" isTextArea={false} />);
    const select = screen.getByRole('listbox'); // because it's multiple
    expect(select).toBeInTheDocument();
  });

  test('shows validation message when validator fails', () => {
    const validator = (value) => value.length > 5;
    render(<InputField label="Short Name" name="shortname" value="abc" validator={validator} onChange={() => {}} />);
    expect(screen.getByText(/invalid input/i)).toBeInTheDocument();
  });

  test('calls onChange when typing', () => {
    const handleChange = jest.fn();
    render(<InputField label="Email" name="email" type="email" onChange={handleChange} />);
    const input = screen.getByLabelText(/email/i);

    fireEvent.change(input, { target: { value: 'test@example.com' } });
    expect(handleChange).toHaveBeenCalled();
  });
});
