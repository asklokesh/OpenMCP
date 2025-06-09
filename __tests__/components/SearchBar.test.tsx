import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '@/components/SearchBar';

describe('SearchBar', () => {
  const mockOnSearch = jest.fn();
  const mockOnFilterChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders search input', () => {
    render(<SearchBar onSearch={mockOnSearch} onFilterChange={mockOnFilterChange} />);
    const searchInput = screen.getByPlaceholderText(/search mcp servers/i);
    expect(searchInput).toBeInTheDocument();
  });

  it('calls onSearch when typing', () => {
    render(<SearchBar onSearch={mockOnSearch} onFilterChange={mockOnFilterChange} />);
    const searchInput = screen.getByPlaceholderText(/search mcp servers/i);
    
    fireEvent.change(searchInput, { target: { value: 'database' } });
    expect(mockOnSearch).toHaveBeenCalledWith('database');
  });

  it('renders sort options', () => {
    render(<SearchBar onSearch={mockOnSearch} onFilterChange={mockOnFilterChange} />);
    expect(screen.getByText('Most Stars')).toBeInTheDocument();
    expect(screen.getByText('Most Downloads')).toBeInTheDocument();
    expect(screen.getByText('Recently Updated')).toBeInTheDocument();
  });

  it('calls onFilterChange when selecting sort option', () => {
    render(<SearchBar onSearch={mockOnSearch} onFilterChange={mockOnFilterChange} />);
    
    const downloadsOption = screen.getByText('Most Downloads');
    fireEvent.click(downloadsOption);
    
    expect(mockOnFilterChange).toHaveBeenCalledWith('downloads');
  });
});