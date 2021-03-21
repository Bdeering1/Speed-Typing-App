import { render, screen } from '@testing-library/react';
import SpeedTyping from '../Components/Interface/Interface';

test('renders learn react link', () => {
  render(<SpeedTyping />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
