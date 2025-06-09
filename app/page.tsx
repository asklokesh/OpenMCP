'use client';

import { useState, useMemo } from 'react';
import SearchBar from '@/components/SearchBar';
import ServerCard from '@/components/ServerCard';
import { mockServers } from '@/lib/data/servers';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'stars' | 'downloads' | 'recent'>('stars');

  const filteredAndSortedServers = useMemo(() => {
    let filtered = mockServers;

    if (searchQuery) {
      filtered = filtered.filter(server =>
        server.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        server.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        server.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'stars':
          return b.stars - a.stars;
        case 'downloads':
          return b.downloads - a.downloads;
        case 'recent':
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
        default:
          return 0;
      }
    });

    return sorted;
  }, [searchQuery, sortBy]);

  return (
    <>
      <SearchBar onSearch={setSearchQuery} onFilterChange={setSortBy} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Discover MCP Servers
          </h2>
          <p className="text-gray-600">
            Browse and install Model Context Protocol servers from the community
          </p>
        </div>

        {filteredAndSortedServers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No servers found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedServers.map(server => (
              <ServerCard key={server.id} server={server} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}