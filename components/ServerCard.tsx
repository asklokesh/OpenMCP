'use client';

import Link from 'next/link';
import { MCPServer } from '@/lib/types';

interface ServerCardProps {
  server: MCPServer;
}

export default function ServerCard({ server }: ServerCardProps) {
  return (
    <Link href={`/server/${server.id}`} className="block">
      <div className="card hover:border-gray-300">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">{server.name}</h3>
            <p className="text-sm text-gray-600">by {server.author}</p>
          </div>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">v{server.version}</span>
        </div>
        
        <p className="text-gray-700 mb-4 line-clamp-2">{server.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {server.tags.map(tag => (
            <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>{server.stars}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
              <span>{server.downloads.toLocaleString()}</span>
            </div>
          </div>
          <span className="text-xs text-gray-500">
            Updated {new Date(server.lastUpdated).toLocaleDateString()}
          </span>
        </div>
      </div>
    </Link>
  );
}