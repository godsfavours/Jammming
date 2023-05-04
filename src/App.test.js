import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  render(<App />);
});

describe('app', () => {
  test('renders header section', () => {
    const headerText = screen.getByText(/jammming/i);
    expect(headerText).toBeInTheDocument();
  });

  test('renders search section', () => {
    const searchHeading = screen.getByText(/search results/i);
    expect(searchHeading).toBeInTheDocument();
  });

  test('renders playlist section', () => {
    const playlistHeading = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'h2' && content === 'Create a Playlist';
    })
    expect(playlistHeading).toBeInTheDocument();
  });
});