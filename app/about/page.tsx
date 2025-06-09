export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About OpenMCP</h1>
      
      <div className="prose prose-lg max-w-none">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is OpenMCP?</h2>
          <p className="text-gray-700 mb-4">
            OpenMCP is an open-source marketplace for Model Context Protocol (MCP) servers. Inspired by golf.dev, 
            we aim to create a community-driven platform where developers can discover, share, and contribute 
            MCP servers that extend the capabilities of AI assistants.
          </p>
          <p className="text-gray-700">
            Our platform is completely free and open-source. We believe in the power of community and 
            collaborative development to push the boundaries of what&apos;s possible with MCP.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is MCP?</h2>
          <p className="text-gray-700 mb-4">
            Model Context Protocol (MCP) is an open standard that enables AI assistants to interact with 
            external systems through a unified interface. MCP servers provide tools, resources, and prompts 
            that AI models can use to perform specific tasks or access particular data sources.
          </p>
          <p className="text-gray-700">
            By using MCP servers, developers can extend AI capabilities without modifying the core model, 
            making it easier to integrate AI into existing workflows and applications.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contributing</h2>
          <p className="text-gray-700 mb-4">
            OpenMCP is an open-source project, and we welcome contributions from the community. Whether you 
            want to submit a new MCP server, improve the platform, or help with documentation, there are 
            many ways to get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href="https://github.com/asklokesh/OpenMCP"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
            <a
              href="https://github.com/sponsors/asklokesh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              Support Development
            </a>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Support OpenMCP</h2>
          <p className="text-gray-700 mb-4">
            OpenMCP is free to use and always will be. If you find value in our platform and want to 
            support its development, consider sponsoring the project on GitHub. Your support helps us 
            maintain the platform, add new features, and keep it free for everyone.
          </p>
          <p className="text-gray-700">
            All donations go directly to supporting the development and infrastructure costs of OpenMCP.
          </p>
        </div>
      </div>
    </div>
  );
}