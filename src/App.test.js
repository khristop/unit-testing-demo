import { render, screen } from '@testing-library/react';
import App from './App';


describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders App component successfuly', () => {
    const linkElement = screen.getByText(/GitHub Profile App/i);
    expect(linkElement).toBeInTheDocument();
  });
});
