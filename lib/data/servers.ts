import { MCPServer } from '../types';

export const mockServers: MCPServer[] = [
  {
    id: 'filesystem-tools',
    name: 'Filesystem Tools',
    description: 'MCP server for file system operations - read, write, list directories, and search files',
    author: 'anthropic',
    githubUrl: 'https://github.com/anthropic/filesystem-tools-mcp',
    stars: 234,
    downloads: 15420,
    tags: ['filesystem', 'tools', 'utility'],
    version: '1.2.0',
    lastUpdated: '2024-01-15',
    features: ['File reading', 'Directory listing', 'File search', 'Safe write operations'],
    installation: 'npm install filesystem-tools-mcp'
  },
  {
    id: 'database-connector',
    name: 'Database Connector',
    description: 'Universal database MCP server supporting PostgreSQL, MySQL, and SQLite',
    author: 'community',
    githubUrl: 'https://github.com/mcp-community/database-connector',
    stars: 567,
    downloads: 23100,
    tags: ['database', 'sql', 'postgres', 'mysql', 'sqlite'],
    version: '2.0.1',
    lastUpdated: '2024-01-20',
    features: ['Multi-database support', 'Query execution', 'Schema inspection', 'Transaction support'],
    installation: 'pip install database-connector-mcp'
  },
  {
    id: 'web-scraper',
    name: 'Web Scraper MCP',
    description: 'Advanced web scraping MCP server with JavaScript rendering support',
    author: 'scraperdev',
    githubUrl: 'https://github.com/scraperdev/web-scraper-mcp',
    stars: 892,
    downloads: 34567,
    tags: ['web', 'scraping', 'automation'],
    version: '3.1.0',
    lastUpdated: '2024-01-18',
    features: ['JavaScript rendering', 'CSS selectors', 'XPath support', 'Rate limiting'],
    installation: 'npm install web-scraper-mcp'
  },
  {
    id: 'github-integration',
    name: 'GitHub Integration',
    description: 'Complete GitHub API integration for MCP - manage repos, issues, PRs, and more',
    author: 'devtools',
    githubUrl: 'https://github.com/devtools/github-mcp',
    stars: 445,
    downloads: 18900,
    tags: ['github', 'git', 'vcs', 'api'],
    version: '1.5.2',
    lastUpdated: '2024-01-22',
    features: ['Repository management', 'Issue tracking', 'Pull request automation', 'GitHub Actions integration'],
    installation: 'npm install github-integration-mcp'
  },
  {
    id: 'slack-bridge',
    name: 'Slack Bridge',
    description: 'Connect your MCP servers to Slack workspaces for messaging and automation',
    author: 'slacktools',
    githubUrl: 'https://github.com/slacktools/slack-bridge-mcp',
    stars: 312,
    downloads: 12450,
    tags: ['slack', 'messaging', 'communication'],
    version: '1.0.3',
    lastUpdated: '2024-01-10',
    features: ['Send messages', 'Read channels', 'User management', 'Webhook support'],
    installation: 'pip install slack-bridge-mcp'
  }
];