import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { searchUserProfiles } from './services/githubService';

jest.mock('./services/githubService');

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders App component successfuly', async () => {
    const mockData = {
      items: []
    };

    searchUserProfiles.mockResolvedValue(mockData);

    const linkElement = screen.getByText(/GitHub Profile App/i);
    expect(linkElement).toBeInTheDocument();

    const input = screen.getByPlaceholderText('Search for a user');
    
    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.submit(screen.getByTestId('search-form'));

    expect(searchUserProfiles).toBeCalledWith('test');

    await waitFor(() => {
      expect(screen.getByText(/Search/i)).toBeInTheDocument();
    });
  });
});
