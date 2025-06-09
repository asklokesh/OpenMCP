'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">OpenMCP</span>
              <span className="ml-2 text-sm text-gray-600">Marketplace for MCP Servers</span>
            </Link>
          </div>
          
          <nav className="flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              Browse
            </Link>
            <Link href="/submit" className="text-gray-700 hover:text-primary transition-colors">
              Submit
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">
              About
            </Link>
            <Link 
              href="https://github.com/sponsors/asklokesh" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Support
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}