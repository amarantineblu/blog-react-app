import { render, screen } from '@testing-library/react';
import Greeting from '../src/test/Greeting';

test('renders the greeting message', () => {
  render(<Greeting name="Alice" />);
  expects(screen.getByText('Hello, Alice!')).toBeInTheDocument();
});