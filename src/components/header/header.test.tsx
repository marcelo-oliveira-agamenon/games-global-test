import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './index';

test('renders app title link', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Header onOpenSidebar={() => {}} />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/Gamble's Den/i);
  expect(linkElement).toBeInTheDocument();
});

test('click on app tile redirects to home', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Header onOpenSidebar={() => {}} />
    </MemoryRouter>
  );
  const button = screen.getByText(/Gamble's Den/i);
  button.click();
  expect(window.location.pathname).toBe('/');
});
