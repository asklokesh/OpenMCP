import { render, screen } from '@testing-library/react';
import ServerCard from '@/components/ServerCard';
import { MCPServer } from '@/lib/types';

const mockServer: MCPServer = {
  id: 'test-server',
  name: 'Test Server',
  description: 'A test MCP server for unit testing',
  author: 'testauthor',
  githubUrl: 'https://github.com/test/test-server',
  stars: 100,
  downloads: 1000,
  tags: ['test', 'mock'],
  version: '1.0.0',
  lastUpdated: '2024-01-01',
  features: ['Feature 1', 'Feature 2'],
  installation: 'npm install test-server'
};

describe('ServerCard', () => {
  it('renders server name and description', () => {
    render(<ServerCard server={mockServer} />);
    expect(screen.getByText('Test Server')).toBeInTheDocument();
    expect(screen.getByText('A test MCP server for unit testing')).toBeInTheDocument();
  });

  it('displays author information', () => {
    render(<ServerCard server={mockServer} />);
    expect(screen.getByText(/testauthor/)).toBeInTheDocument();
  });

  it('shows star and download counts', () => {
    render(<ServerCard server={mockServer} />);
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('1,000')).toBeInTheDocument();
  });

  it('renders all tags', () => {
    render(<ServerCard server={mockServer} />);
    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByText('mock')).toBeInTheDocument();
  });

  it('displays version information', () => {
    render(<ServerCard server={mockServer} />);
    expect(screen.getByText('v1.0.0')).toBeInTheDocument();
  });
});