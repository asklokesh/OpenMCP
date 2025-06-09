export interface MCPServer {
  id: string;
  name: string;
  description: string;
  author: string;
  githubUrl: string;
  stars: number;
  downloads: number;
  tags: string[];
  version: string;
  lastUpdated: string;
  features: string[];
  installation: string;
}

export interface SearchFilters {
  query: string;
  tags: string[];
  sortBy: 'stars' | 'downloads' | 'recent';
}