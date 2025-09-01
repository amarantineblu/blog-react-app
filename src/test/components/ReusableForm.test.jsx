import React from 'react';
import {render,screen,fireEvent} from '@testing-library/react';
import ReusableFrom from '../../pages/dashboard/dashboard components/ReusableForm';

describe('ReusableForm component', () => {
  test('renders without crashing', () => {
    render(<ReusableFrom/>);
    expect(screen.getByText(/form/i)).toBeInTheDocument();
  });

  test('submits the form', () => {
    const handleSubmit = jest.fn();
    render(<ReusableFrom onSubmit={handleSubmit} />);
    fireEvent.click(screen.getByText(/submit/i));
    expect(handleSubmit).toHaveBeenCalled();
  });
});
