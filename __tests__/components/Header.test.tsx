import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';

describe('Header', () => {
  it('renders the site title', () => {
    render(<Header />);
    const title = screen.getByText('OpenMCP');
    expect(title).toBeInTheDocument();
  });

  it('renders the tagline', () => {
    render(<Header />);
    const tagline = screen.getByText(/marketplace for MCP servers/i);
    expect(tagline).toBeInTheDocument();
  });

  it('renders the donate link', () => {
    render(<Header />);
    const donateLink = screen.getByText(/support/i);
    expect(donateLink).toBeInTheDocument();
    expect(donateLink).toHaveAttribute('href', 'https://github.com/sponsors/asklokesh');
  });

  it('renders navigation links', () => {
    render(<Header />);
    expect(screen.getByText('Browse')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});