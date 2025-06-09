'use client';

import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilterChange: (sortBy: 'stars' | 'downloads' | 'recent') => void;
}

export default function SearchBar({ onSearch, onFilterChange }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [activeSort, setActiveSort] = useState<'stars' | 'downloads' | 'recent'>('stars');

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  const handleSortChange = (sortBy: 'stars' | 'downloads' | 'recent') => {
    setActiveSort(sortBy);
    onFilterChange(sortBy);
  };

  return (
    <div className="bg-gray-50 border-b border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search MCP servers..."
              className="w-full px-4 py-3 pl-12 text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Sort by:</span>
          <div className="flex space-x-2">
            <button
              onClick={() => handleSortChange('stars')}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                activeSort === 'stars'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Most Stars
            </button>
            <button
              onClick={() => handleSortChange('downloads')}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                activeSort === 'downloads'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Most Downloads
            </button>
            <button
              onClick={() => handleSortChange('recent')}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                activeSort === 'recent'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Recently Updated
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}