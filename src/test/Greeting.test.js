import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders the greeting message', () => {
  // console.log('Hello World');
  render(<Greeting name="Alice" />);
  const textElement = screen.getByText(`Hello, Alice`);
  expect(textElement).toBeInTheDocument();
  // screen.debug();

});